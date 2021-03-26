<?php

namespace App\Http\Controllers\Api\Mqtt;

use App\Helpers\Helper;
use App\Http\Controllers\Controller;
use App\Models\Device;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class EndpointController extends Controller
{
    public function mqttEndpoint(Request $request)
    {
        $verneMqHook = $request->header('vernemq-hook');
        Log::debug('Header vernemq-hook-> '.$verneMqHook.' ,MQTT request->' . json_encode($request->all()));

        if ($verneMqHook) {
            if ($verneMqHook === config('constants.vernemq_hook.auth_on_register')) {
                return $this->authOnRegister($request);
            } elseif ($verneMqHook === config('constants.vernemq_hook.auth_on_subscribe')) {
                return $this->authOnSubscribe($request);
            } elseif ($verneMqHook === config('constants.vernemq_hook.auth_on_publish')) {
                return $this->authOnPublish($request);
            }
            return response(['result' => ['error' => 'Header vernemq-hook is invalid.']], Response::HTTP_BAD_REQUEST);
        }
        return response(['result' => ['error' => 'Header vernemq-hook is empty.']], Response::HTTP_BAD_REQUEST);
    }

    protected function authOnRegister(Request $request)
    {
        $username = $request->input('username');
        $password = $request->input('password');
        $clientId = $request->input('client_id');

        $mqttConfig = config('mqttclient.connections.default');

        if ($username === $mqttConfig['username'] && $password === $mqttConfig['password'] && $clientId === $mqttConfig['client_id']) {
            return response(['result' => 'ok'], Response::HTTP_OK);
        }

        $validator = Validator::make($request->all(), [
            'username' => 'required|same:client_id',
            'password' => 'required',
            'client_id' => 'required',
        ]);

        if ($validator->fails()) {
            return response([
                'result' => ['error' => $validator->getMessageBag()->toArray()]
            ], Response::HTTP_BAD_REQUEST);
        }

        if ($username === $clientId) {
            $device = Device::where('unique_id', $username)->where('mqtt_password', $password)->first();

            return $device
                ? response(['result' => 'ok'], Response::HTTP_OK)
                : response(['result' => ['error' => 'Invalid username or password.']], Response::HTTP_UNAUTHORIZED);
        }
        return response(['result' => ['error' => 'username and client_id do not match.']], Response::HTTP_BAD_REQUEST);
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
            return response([
                'result' => ['error' => $validator->getMessageBag()->toArray()]
            ], Response::HTTP_BAD_REQUEST);
        }

        if ($username === $clientId) {
            $device = Device::where('unique_id', $username)->first();

            if ($device) {
                $topics = $request->input('topics');

                $disallowTopics = [];
                foreach ($topics as $topic) {
                    if (!preg_match('/iotportal\/' . $username . '\//', $topic['topic'])) {
                        $disallowTopics[] = [
                            'topic' => $topic['topic'],
                            'qos' => 128
                        ];
                    }
                }
                return $disallowTopics
                    ? response(['result' => 'ok', 'topics' => $disallowTopics], Response::HTTP_OK)
                    : response(['result' => 'ok'], Response::HTTP_OK);
            }
            return response(['result' => ['error' => 'Invalid username or password.']], Response::HTTP_UNAUTHORIZED);
        }
        return response(['result' => ['error' => 'username and client_id do not match.']], Response::HTTP_BAD_REQUEST);
    }

    protected function authOnPublish(Request $request)
    {
        $username = $request->input('username');
        $clientId = $request->input('client_id');
        $topic = $request->input('topic');

        $mqttConfig = config('mqttclient.connections.default');

        if ($username === $mqttConfig['username'] && $clientId === $mqttConfig['client_id'] && preg_match('/iotportal\/([\w\-]+)\/methods\/POST\/([\w\-_]+)\/\?\$rid=([\d]+)/', $topic)) {
            return response(['result' => 'ok'], Response::HTTP_OK);
        }

        $validator = Validator::make($request->all(), [
            'username' => 'required|same:client_id',
            'client_id' => 'required',
            'topic' => 'required',
        ]);

        if ($validator->fails()) {
            return response([
                'result' => ['error' => $validator->getMessageBag()->toArray()]
            ], Response::HTTP_BAD_REQUEST);
        }

        $payload = Helper::sanitisePayload(base64_decode($request->input('payload')));

        if (preg_match('/(devices|iotportal)\/([\w\-]+)\//', $topic, $deviceIdMatches)) {
            $extractedDeviceId = $deviceIdMatches[2];
            Log::debug('$username-> '.$username.'$clientId-> '.$clientId.'$extractedDeviceId-> '. $extractedDeviceId);

            if ($username === $clientId && $clientId === $extractedDeviceId) {
                $device = Device::where('unique_id', $username)->first();
                if ($device) {
                    $this->updateDeviceStatus($device);
                    if (preg_match('/devices\/([\w\-]+)\/messages\/events/', $topic)) {
                        return $this->messagesEvents($device, $payload);
                    } elseif (preg_match('/devices\/([\w\-]+)\/properties\/reported/', $topic)) {
                        return $this->propertiesReported($device, $payload);
                    } elseif (preg_match('/iotportal\/([\w\-]+)\/methods\/res\/\?\$rid=([\d]+)/', $topic, $requestIdMatches)) {
                        Log::debug('preg_match updateResponse run-> '.$topic.' ,$requestIdMatches->' . $requestIdMatches[2]);
                        return $this->updateResponse($device, $requestIdMatches[2]);
                    }
                    return response(['result' => ['error' => 'Unsupported topic.']], Response::HTTP_BAD_REQUEST);
                }
                return response(['result' => ['error' => 'device_unique_id not found.']], Response::HTTP_NOT_FOUND);
            }
            return response(['result' => ['error' => 'username, client_id and device_unique_id in topic do not match']], Response::HTTP_BAD_REQUEST);
        }
        return response(['result' => ['error' => 'Invalid device_unique_id in topic.']], Response::HTTP_BAD_REQUEST);
    }

    protected function messagesEvents(Device $device, ?string $payload)
    {
        Log::debug('Upper $payload->' . $payload);
        $deviceRawData = $device->deviceRawData()->create([
            'raw_data' => Helper::isJson($payload) ? $payload : json_encode($payload),
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

        return $deviceRawData->exists
            ? response(['result' => 'ok'], Response::HTTP_OK)
            : response(['result' => ['error' => 'Error saving device events.']], Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    protected function propertiesReported(Device $device, ?string $payload)
    {
        Log::debug('Upper $payload->' . $payload);
        $deviceRawData = $device->deviceRawData()->create([
            'raw_data' => Helper::isJson($payload) ? $payload : json_encode($payload),
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

        return $deviceRawData->exists
            ? response(['result' => 'ok'], Response::HTTP_OK)
            : response(['result' => ['error' => 'Error saving device properties.']], Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    protected function updateResponse(Device $device, int $requestId)
    {
        $updateSuccess = $device->commandHistories()->find($requestId)->update(['response_time' => now()]);

        return $updateSuccess
            ? response(['result' => 'ok'], Response::HTTP_OK)
            : response(['result' => ['error' => 'Error updating device response.']], Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    protected function updateDeviceStatus(Device $device)
    {
        if ($device->status === config('constants.device_statuses.registered'))
            $device->update(['status' => config('constants.device_statuses.provisioned')]);
    }
}
