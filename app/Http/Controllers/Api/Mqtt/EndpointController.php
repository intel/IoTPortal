<?php

namespace App\Http\Controllers\Api\Mqtt;

use App\Helpers\Helper;
use App\Http\Controllers\Controller;
use App\Models\Device;
use App\Models\Status;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class EndpointController extends Controller
{
    public function mqttEndpoint(Request $request)
    {
        $verneMqHook = $request->header('vernemq-hook');
        Log::debug('Header vernemq-hook-> ' . $verneMqHook . ' ,MQTT request->' . json_encode($request->all()));

        if ($verneMqHook) {
            if ($verneMqHook === config('constants.vernemq_hook.auth_on_register')) {
                return $this->authOnRegister($request);
            } elseif ($verneMqHook === config('constants.vernemq_hook.auth_on_subscribe')) {
                return $this->authOnSubscribe($request);
            } elseif ($verneMqHook === config('constants.vernemq_hook.auth_on_publish')) {
                return $this->authOnPublish($request);
            }

            return Helper::mqttApiResponseHttpBadRequest(['error' => 'Header vernemq-hook is invalid.']);
        }

        return Helper::mqttApiResponseHttpBadRequest(['error' => 'Header vernemq-hook is empty.']);
    }

    protected function authOnRegister(Request $request)
    {
        $username = $request->input('username');
        $password = $request->input('password');
        $clientId = $request->input('client_id');

        $mqttConfig = config('mqttclient.connections.default');

        if ($username === $mqttConfig['username'] && $password === $mqttConfig['password'] && $clientId === $mqttConfig['client_id']) {
            return Helper::mqttApiResponseHttpOk('ok');
        }

        $validator = Validator::make($request->all(), [
            'username' => 'required|same:client_id',
            'password' => 'required',
            'client_id' => 'required',
        ]);

        if ($validator->fails()) {
            return Helper::mqttApiResponseHttpBadRequest(['error' => $validator->getMessageBag()->toArray()]);
        }

        if ($username === $clientId) {
            $device = Device::where('unique_id', $username)->first();

            return $device->validateMqttPassword($password)
                ? Helper::mqttApiResponseHttpOk('ok')
                : Helper::mqttApiResponseHttpUnauthorized(['error' => 'Invalid username or password.']);
        }

        return Helper::mqttApiResponseHttpBadRequest(['error' => 'username and client_id do not match.']);
    }

    protected function authOnSubscribe(Request $request)
    {
        $username = $request->input('username');
        $clientId = $request->input('client_id');

        $validator = Validator::make($request->all(), [
            'username' => 'required|same:client_id',
            'client_id' => 'required',
            'topics' => 'required',
        ]);

        if ($validator->fails()) {
            return Helper::mqttApiResponseHttpBadRequest(['error' => $validator->getMessageBag()->toArray()]);
        }

        if ($username === $clientId) {
            $device = Device::where('unique_id', $username)->first();

            if ($device) {
                $topics = $request->input('topics');

                $disallowedTopics = [];

                foreach ($topics as $topic) {
                    if (!preg_match('/iotportal\/' . $username . '\//', $topic['topic'])) {
                        $disallowedTopics[] = [
                            'topic' => $topic['topic'],
                            'qos' => 128
                        ];
                    }
                }

                return $disallowedTopics
                    ? Helper::mqttApiResponseHttpOkWithDisallowedTopics('ok', $disallowedTopics)
                    : Helper::mqttApiResponseHttpOk('ok');;
            }

            return Helper::mqttApiResponseHttpUnauthorized(['error' => 'Invalid username or password.']);
        }

        return Helper::mqttApiResponseHttpBadRequest(['error' => 'username and client_id do not match.']);
    }

    protected function authOnPublish(Request $request)
    {
        $username = $request->input('username');
        $clientId = $request->input('client_id');
        $topic = $request->input('topic');

        $mqttConfig = config('mqttclient.connections.default');

        if ($username === $mqttConfig['username'] && $clientId === $mqttConfig['client_id'] && preg_match('/iotportal\/([\w\-]+)\/methods\/POST\/([\w\-_]+)\/\?\$rid=([\d]+)/', $topic)) {
            return Helper::mqttApiResponseHttpOk('ok');
        }

        $validator = Validator::make($request->all(), [
            'username' => 'required|same:client_id',
            'client_id' => 'required',
            'topic' => 'required',
        ]);

        if ($validator->fails()) {
            return Helper::mqttApiResponseHttpBadRequest(['error' => $validator->getMessageBag()->toArray()]);
        }

        $payload = Helper::sanitisePayload(base64_decode($request->input('payload')));

        if (preg_match('/(devices|iotportal)\/([\w\-]+)\//', $topic, $deviceIdMatches)) {
            $extractedDeviceId = $deviceIdMatches[2];
            Log::debug('$username-> ' . $username . '$clientId-> ' . $clientId . '$extractedDeviceId-> ' . $extractedDeviceId);

            if ($username === $clientId && $clientId === $extractedDeviceId) {

                $device = Device::where('unique_id', $username)->first();

                if ($device) {
                    $this->updateDeviceStatus($device);
                    if (preg_match('/devices\/([\w\-]+)\/messages\/events/', $topic)) {
                        return $this->messagesEvents($device, $payload);
                    } elseif (preg_match('/devices\/([\w\-]+)\/properties\/reported/', $topic)) {
                        return $this->propertiesReported($device, $payload);
                    } elseif (preg_match('/iotportal\/([\w\-]+)\/methods\/res\/\?\$rid=([\d]+)/', $topic, $requestIdMatches)) {
                        Log::debug('preg_match updateResponse run-> ' . $topic . ' ,$requestIdMatches->' . $requestIdMatches[2]);
                        return $this->updateResponse($device, $requestIdMatches[2]);
                    }

                    return Helper::mqttApiResponseHttpBadRequest(['error' => 'Unsupported topic.']);
                }

                return Helper::mqttApiResponseHttpNotFound(['error' => 'device_unique_id not found.']);
            }

            return Helper::mqttApiResponseHttpBadRequest(['error' => 'username, client_id and device_unique_id in topic do not match']);
        }

        return Helper::mqttApiResponseHttpBadRequest(['error' => 'Invalid device_unique_id in topic.']);
    }

    protected function messagesEvents(Device $device, ?string $payload)
    {
        Log::debug('Upper $payload->' . $payload);
        $telemetryEvent = $device->events()->where('name', 'telemetry')->first();
        $eventHistory = $device->eventHistories()->create([
            'raw_data' => Helper::isJson($payload) ? $payload : json_encode($payload),
            'event_id' => $telemetryEvent->id,
        ]);

        $payload = json_decode($payload);

        if ($payload) {
            foreach ($payload as $key => $value) {
                switch ($key) {
                    case 'systemCpuPercent':
                        $device->cpuStatistics()->create([
                            'system_cpu_percentage' => $value,
                        ]);
                        break;
                    case 'containersCpuPercent':
                        $device->containerStatistics()->create([
                            'container_message' => $value,
                        ]);
                        break;
                    case 'availableMemory':
                        $device->memoryStatistics()->create([
                            'available_memory_in_bytes' => $value,
                        ]);
                        break;
                    case 'percentDiskUsed':
                        $device->diskStatistics()->create([
                            'disk_percentage_used' => $value,
                        ]);
                        break;
                    case 'coreTempCelsius':
                        if ($value && $value !== "Unknown") {
                            $device->temperatureStatistics()->create([
                                'temperature' => $value,
                            ]);
                        }
                        break;
                    case 'networkInformation':
                        $device->networkStatistics()->create([
                            'network_message' => $value,
                        ]);
                        break;
                    default:
                        // not handled
                }
            }
        }

        return $eventHistory->exists
            ? Helper::mqttApiResponseHttpOk('ok')
            : Helper::mqttApiResponseHttpInternalServerError(['error' => 'Error saving device events.']);
    }

    protected function propertiesReported(Device $device, ?string $payload)
    {
        Log::debug('Upper $payload->' . $payload);
        $propertyEvent = $device->events()->where('name', 'property')->first();
        $eventHistory = $device->eventHistories()->create([
            'raw_data' => Helper::isJson($payload) ? $payload : json_encode($payload),
            'event_id' => $propertyEvent->id,
        ]);

        $payload = json_decode($payload);

        Log::debug('propertiesReported if $payload outer->' . json_encode($payload));
        if ($payload) {
            Log::debug('propertiesReported if $payload run->' . json_encode($payload));
            foreach ($payload as $key => $value) {
                Log::debug('propertiesReported foreach run->' . json_encode($value));
                switch ($key) {
                    case 'totalPhysicalMemory':
                        Log::debug('propertiesReported totalPhysicalMemory run->' . json_encode($value));
                        $device->update(['total_memory' => $value]);
                        break;
                    case 'cpuId':
                        $device->update(['cpu' => $value]);
                        break;
                    case 'biosVendor':
                        $device->update(['bios_vendor' => $value]);
                        break;
                    case 'biosVersion':
                        $device->update(['bios_version' => $value]);
                        break;
                    case 'biosReleaseDate':
                        $device->update(['bios_release_date' => $value]);
                        break;
                    case 'systemManufacturer':
                        $device->update(['system_manufacturer' => $value]);
                        break;
                    case 'systemProductName':
                        $device->update(['system_product_name' => $value]);
                        break;
                    case 'osInformation':
                        $device->update(['os_information' => $value]);
                        break;
                    case 'diskInformation':
                        $device->update(['disk_information' => $value]);
                        break;
                    default:
                        // not handled
                }
            }
        }

        return $eventHistory->exists
            ? Helper::mqttApiResponseHttpOk('ok')
            : Helper::mqttApiResponseHttpInternalServerError(['error' => 'Error saving device properties.']);
    }

    protected function updateResponse(Device $device, int $requestId)
    {
        $updateSuccess = $device->commandHistories()->find($requestId)->update(['responded_at' => now()]);

        return $updateSuccess
            ? Helper::mqttApiResponseHttpOk('ok')
            : Helper::mqttApiResponseHttpInternalServerError(['error' => 'Error updating device response.']);
    }

    protected function updateDeviceStatus(Device $device)
    {
        if ($device->registered) {
            $provisionedStatus = Status::where('name', 'PROVISIONED')->first();
            $device->status()->associate($provisionedStatus)->save();
        }
    }
}
