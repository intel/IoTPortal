<?php

namespace App\Http\Controllers\Api\Mqtt;

use App\Actions\Devices\UpdateDeviceLastSeenToNowAction;
use App\Actions\Devices\UpdateDeviceStatusToOfflineAction;
use App\Actions\Devices\UpdateDeviceStatusToOnlineAction;
use App\Actions\Mqtt\CheckIfValidPortalMqttClientId;
use App\Actions\Mqtt\CheckIfValidPortalMqttCredentials;
use App\Actions\Mqtt\CheckIfValidPortalMqttTopics;
use App\Helpers\Helper;
use App\Http\Controllers\Controller;
use App\Models\Device;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class EndpointController extends Controller
{
    public function mqttEndpoint(Request $request): JsonResponse
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
            } elseif ($verneMqHook === config('constants.vernemq_hook.on_client_offline')) {
                return $this->onClientOffline($request);
            } elseif ($verneMqHook === config('constants.vernemq_hook.on_client_gone')) {
                return $this->onClientGone($request);
            }

            return $this->apiMqttBadRequest(['error' => 'Header vernemq-hook is invalid.']);
        }

        return $this->apiMqttBadRequest(['error' => 'Header vernemq-hook is empty.']);
    }

    protected function authOnRegister(Request $request): JsonResponse
    {
        $username = $request->username;
        $password = $request->password;
        $clientId = $request->client_id;

        if ((new CheckIfValidPortalMqttCredentials)->execute($username, $password, $clientId)) {
            return $this->apiMqttOk('ok');
        }

        $validator = Validator::make($request->all(), [
            'username' => 'required|same:client_id',
            'password' => 'required',
            'client_id' => 'required',
        ]);

        if ($validator->fails()) {
            return $this->apiMqttBadRequest(['error' => $validator->getMessageBag()->toArray()]);
        }

        $device = Device::where('unique_id', $username)->firstOrFail();

        if ($device->validateMqttPassword($password)) {
            (new UpdateDeviceStatusToOnlineAction(new UpdateDeviceLastSeenToNowAction))->execute($device);
            return $this->apiMqttOk('ok');
        } else {
            return $this->apiMqttUnauthorized(['error' => 'Invalid username or password.']);
        }
    }

    protected function authOnSubscribe(Request $request): JsonResponse
    {
        $username = $request->username;

        $validator = Validator::make($request->all(), [
            'username' => 'required|same:client_id',
            'client_id' => 'required',
            'topics' => 'required',
        ]);

        if ($validator->fails()) {
            return $this->apiMqttBadRequest(['error' => $validator->getMessageBag()->toArray()]);
        }

        $device = Device::where('unique_id', $username)->firstOrFail();

        $topics = $request->topics;

        $disallowedTopics = [];

        foreach ($topics as $topic) {
            if (!preg_match('/iotportal\/' . $username . '\//', $topic['topic'])) {
                $disallowedTopics[] = [
                    'topic' => $topic['topic'],
                    'qos' => 128
                ];
            }
        }

        (new UpdateDeviceStatusToOnlineAction(new UpdateDeviceLastSeenToNowAction))->execute($device);

        return $disallowedTopics
            ? $this->apiMqttOkWithDisallowedTopics('ok', $disallowedTopics)
            : $this->apiMqttOk('ok');
    }

    protected function authOnPublish(Request $request): JsonResponse
    {
        $username = $request->username;
        $clientId = $request->client_id;
        $topic = $request->topic;

        if ((new CheckIfValidPortalMqttTopics)->execute($username, $clientId, $topic)) {
            return $this->apiMqttOk('ok');
        }

        $validator = Validator::make($request->all(), [
            'username' => 'required|same:client_id',
            'client_id' => 'required',
            'topic' => 'required',
        ]);

        if ($validator->fails()) {
            return $this->apiMqttBadRequest(['error' => $validator->getMessageBag()->toArray()]);
        }

        $payload = Helper::sanitisePayload(base64_decode($request->input('payload')));

        if (preg_match('/(devices|iotportal)\/([\w\-]+)\//', $topic, $deviceIdMatches)) {
            $extractedDeviceId = $deviceIdMatches[2];
            Log::debug('$username-> ' . $username . '$clientId-> ' . $clientId . '$extractedDeviceId-> ' . $extractedDeviceId);

            if ($username === $clientId && $clientId === $extractedDeviceId) {

                $device = Device::where('unique_id', $username)->firstOrFail();

                (new UpdateDeviceStatusToOnlineAction(new UpdateDeviceLastSeenToNowAction()))->execute($device);

                if (preg_match('/devices\/([\w\-]+)\/messages\/events/', $topic)) {
                    return $this->messagesEvents($device, $payload);
                } elseif (preg_match('/devices\/([\w\-]+)\/properties\/reported/', $topic)) {
                    return $this->propertiesReported($device, $payload);
                } elseif (preg_match('/iotportal\/([\w\-]+)\/methods\/res\/\?\$rid=([\d]+)/', $topic, $requestIdMatches)) {
                    Log::debug('preg_match updateResponse run-> ' . $topic . ' ,$requestIdMatches->' . $requestIdMatches[2]);
                    return $this->updateResponse($device, $requestIdMatches[2]);
                }

                return $this->apiMqttBadRequest(['error' => 'Unsupported topic.']);
            }

            return $this->apiMqttBadRequest(['error' => 'username, client_id and device_unique_id in topic do not match']);
        }

        return $this->apiMqttBadRequest(['error' => 'Invalid device_unique_id in topic.']);
    }

    protected function onClientOffline(Request $request): JsonResponse
    {
        if ((new CheckIfValidPortalMqttClientId)->execute($request->client_id)) {
            return $this->apiMqttOk('ok');
        }

        $device = Device::where('unique_id', $request->client_id)->firstOrFail();

        $success = (new UpdateDeviceStatusToOfflineAction(new UpdateDeviceLastSeenToNowAction))->execute($device);

        return $success
            ? $this->apiMqttOk('ok')
            : $this->apiMqttInternalServerError(['error' => 'Error updating device.']);
    }

    protected function onClientGone(Request $request): JsonResponse
    {
        if ((new CheckIfValidPortalMqttClientId)->execute($request->client_id)) {
            return $this->apiMqttOk('ok');
        }

        $device = Device::where('unique_id', $request->client_id)->firstOrFail();

        $success = (new UpdateDeviceStatusToOfflineAction(new UpdateDeviceLastSeenToNowAction))->execute($device);

        return $success
            ? $this->apiMqttOk('ok')
            : $this->apiMqttInternalServerError(['error' => 'Error updating device.']);
    }

    protected function messagesEvents(Device $device, ?string $payload): JsonResponse
    {
        Log::debug('Upper $payload->' . $payload);

        $eventHistory = $device->eventHistories()->create([
            'raw_data' => Helper::isJson($payload) ? $payload : json_encode($payload),
            'event_id' => $device->events()->getTelemetry()->id,
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
                            'container_message' => json_encode($value),
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
                            'network_message' => json_encode($value),
                        ]);
                        break;
                    default:
                        // not handled
                }
            }
        }

        return $eventHistory->exists
            ? $this->apiMqttOk('ok')
            : $this->apiMqttInternalServerError(['error' => 'Error saving device events.']);
    }

    protected function propertiesReported(Device $device, ?string $payload): JsonResponse
    {
        Log::debug('Upper $payload->' . $payload);

        $eventHistory = $device->eventHistories()->create([
            'raw_data' => Helper::isJson($payload) ? $payload : json_encode($payload),
            'event_id' => $device->events()->getProperty()->id,
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
            ? $this->apiMqttOk('ok')
            : $this->apiMqttInternalServerError(['error' => 'Error saving device properties.']);
    }

    protected function updateResponse(Device $device, int $requestId): JsonResponse
    {
        $updateSuccess = $device->commandHistories()->find($requestId)->update(['responded_at' => now()]);

        return $updateSuccess
            ? $this->apiMqttOk('ok')
            : $this->apiMqttInternalServerError(['error' => 'Error updating device response.']);
    }
}
