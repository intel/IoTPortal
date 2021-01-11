<?php

namespace App\Http\Controllers\Api\Mqtt;

use App\Http\Controllers\Controller;
use App\Models\Device;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;

class MqttResponseController extends Controller
{
    public function authOnPublish(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required',
            'clientId' => 'required',
            'topic' => 'required',
        ]);

        // TODO: Return custom error message according to VerneMQ requirement (TBConfirmed)
        if ($validator->fails()) {
            return response([
                'result' => ['error' => $validator->getMessageBag()->toArray()]
            ], Response::HTTP_BAD_REQUEST);
        }

        // 'devices/33qzxxttu/messages/events'
        $username = $request->input('username');
        $clientId = $request->input('clientId');
        $topic = $request->input('topic');
        $payload = $request->input('payload');

        $payload = is_array($payload) ? json_encode($payload) : $payload;

        if (preg_match('/devices\/([\w-]+)\//', $topic, $deviceIdMatches)) {
            $extractedDeviceId = $deviceIdMatches[1];

            if ($username === $clientId && $clientId === $extractedDeviceId) {
                $device = Device::where('unique_id', $username)->first();
                if ($device) {
                    if (preg_match('/devices\/([\w-]+)\/properties\/reported/', $topic)) {
                        return $this->propertiesReported($device, $payload);
                    } elseif (preg_match('/devices\/([\w-]+)\/messages\/events/', $topic)) {
                        return $this->messagesEvents($device, $payload);
                    } elseif (preg_match('/iotportal\/([\w-]+)\/res\/\?\$rid=([\d]+)/', $topic, $requestIdMatches)) {
                        return $this->updateResponse($device, $requestIdMatches[2]);
                    }
                    return response(['result' => ['error' => 'Unsupported topic.']], Response::HTTP_BAD_REQUEST);
                }
            }
            return response(['result' => ['error' => 'username, clientId and deviceId in topic do not match']], Response::HTTP_BAD_REQUEST);
        }
        return response(['result' => ['error' => 'Invalid device id in topic.']], Response::HTTP_NOT_FOUND);
    }

    protected function messagesEvents(Device $device, ?string $payload)
    {
        $this->updateDeviceStatus($device);
        $device->refresh();
        $deviceRawData = $device->deviceRawData()->create([
            'raw_data' => json_encode(json_decode($payload)),
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
                        $device->temperatureStatistics()->create([
                            'temperature' => $value,
                        ]);
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

        return $deviceRawData->exists
            ? response(['result' => 'ok'], Response::HTTP_OK)
            : response(['result' => ['error' => 'Error saving device events.']], Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    protected function propertiesReported(Device $device, ?string $payload)
    {
        $this->updateDeviceStatus($device);
        $device->refresh();
        $deviceRawData = $device->deviceRawData()->create([
            'raw_data' => json_encode(json_decode($payload)),
        ]);

        $payload = json_decode($payload);
        if ($payload) {
            foreach ($payload as $key => $value) {
                switch ($key) {
                    case 'totalPhysicalMemory':
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
        $this->updateDeviceStatus($device);

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
