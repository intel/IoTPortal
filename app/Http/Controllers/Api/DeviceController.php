<?php

namespace App\Http\Controllers\Api;

use App\Helpers\Helper;
use App\Http\Controllers\Controller;
use App\Http\Requests\DestroySelectedDeviceRequest;
use App\Http\Requests\StoreDeviceRequest;
use App\Http\Requests\TriggerCommandRequest;
use App\Http\Requests\UpdateDeviceRequest;
use App\Http\Requests\ValidateDeviceFieldsRequest;
use App\Models\Device;
use App\Models\DeviceStatus;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;

class DeviceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Request $request)
    {
        $query = Auth::user()->devices()->with('deviceCategory:id,name', 'deviceStatus:id,name');

        if ($request->has('deviceGroupId')) $query->deviceGroupId($request->deviceGroupId);

        if ($request->has('deviceGroupUniqueId')) $query->deviceGroupUniqueId($request->deviceGroupUniqueId);

        if ($request->has('filters')) {
            $filters = json_decode($request->filters);

            foreach ($filters as $key => $value) {
                if ($key === 'unique_id') $query->uniqueIdLike($value->value);

                if ($key === 'name') $query->nameLike($value->value);

                if ($key === 'bios_vendor') $query->biosVendorLike($value->value);

                if ($key === 'bios_version') $query->biosVersionLike($value->value);

                if ($key === 'device_category_id') $query->deviceCategoryId($value->value);

                if ($key === 'device_status_id') $query->deviceStatusId($value->value);

                if ($key === 'globalFilter') {
                    $query->where(function ($query) use ($value) {
                        $query->uniqueIdLike($value->value)
                            ->orWhere->nameLike($value->value)
                            ->orWhere->biosVendorLike($value->value)
                            ->orWhere->biosVersionLike($value->value);
                    });
                }
            }
        }

        if ($request->has('sortField')) {
            if ($request->sortOrder === '1')
                $query->orderBy($request->sortField);
            else
                $query->orderByDesc($request->sortField);
        }

        if ($request->boolean('fetchAll') === true) {
            $devices = $query->paginate($query->count());
        } else {
            $maxRows = Config::get('constants.index_max_rows');
            $rows = min((int) $request->input('rows', 10), $maxRows);

            $devices = $query->paginate($rows);
        }

        return Helper::apiResponseHttpOk(['devices' => $devices]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StoreDeviceRequest $request
     * @return JsonResponse
     */
    public function store(StoreDeviceRequest $request)
    {
        $device = Auth::user()->devices()->create([
            'name' => $request->name,
            'device_category_id' => $request->device_category,
            'device_status_id' => DeviceStatus::getRegistered()->id,
        ]);

        if ($device->exists) {
            return Helper::apiResponseHttpOk(['device' => $device]);
        }

        return Helper::apiResponseHttpInternalServerError('Failed to create device.');
    }

    /**
     * Display the specified resource.
     *
     * @param $id
     * @return JsonResponse
     */
    public function show($id)
    {
        $device = Device::id($id)
            ->orWhere->uniqueId($id)
            ->with('deviceCategory:id,name', 'deviceStatus:id,name')->first();

        return Helper::apiResponseHttpOk(['device' => $device]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateDeviceRequest $request
     * @param Device $device
     * @return JsonResponse
     */
    public function update(UpdateDeviceRequest $request, Device $device)
    {
        $success = $device->update([
            'name' => $request->input('name', $device->name),
            'device_category_id' => $request->input('device_category', $device->device_category_id),
        ]);

        if ($success) {
            return Helper::apiResponseHttpOk(['device' => $device->load('deviceCategory:id,name', 'deviceStatus:id,name')]);
        }

        return Helper::apiResponseHttpInternalServerError('Failed to update device.');
    }

    /**
     * Remove the specified resources from storage.
     *
     * @param DestroySelectedDeviceRequest $request
     * @return JsonResponse
     */
    public function destroySelected(DestroySelectedDeviceRequest $request)
    {
        $success = Auth::user()->devices()->idIn($request->ids)->delete();

        return Helper::apiResponseHttpOk([], $success);
    }

    /**
     *
     * @param ValidateDeviceFieldsRequest $request
     * @return JsonResponse
     */
    public function validateField(ValidateDeviceFieldsRequest $request)
    {
        return Helper::apiResponseHttpOk();
    }

    public function commands(TriggerCommandRequest $request, Device $device)
    {
        $command = $device->commands()->name($request->command)->first();

        if ($command) {
            $payloadJson = 'null';

            if ($request->has('payload')) {
                $payloadJson = json_encode(Helper::mapArrayKeyByArray($request->payload, config('constants.commands.' . $command->name . '.configuration_map')));
            }

            $commandHistory = $command->commandHistories()->create([
                'payload' => $payloadJson === 'null' ? null : $payloadJson,
            ]);

            Helper::mqttPublish('iotportal/' . $device->unique_id . '/methods/POST/' . $command->method_name . '/?$rid=' . $commandHistory->id, $payloadJson);
            return Helper::apiResponseHttpOk();
        }

        return Helper::apiResponseHttpBadRequest('Command not found for device.');
    }

    public function register(Request $request)
    {
        if ($request->has('unique_id') && $request->bearerToken()) {
            $user = User::uniqueId($request->unique_id)->first();

            if ($user && $user->validateDeviceConnectionKey($request->bearerToken())) {
                if ($request->has('device_unique_id')) {
                    $device = $user->devices()->uniqueId($request->device_unique_id)->first();

                    if ($device) {
                        return Helper::apiResponseHttpOk(['mqttEndpoint' => config('mqttclient.connections.default.host'), 'device' => $device]);
                    }

                    return Helper::apiResponseHttpBadRequest('device_unique_id provided not found.');
                } else {
                    $device = $user->devices()->create([
                        'status_id' => DeviceStatus::getRegistered()->id,
                    ]);

                    return Helper::apiResponseHttpOk(['mqttEndpoint' => config('mqttclient.connections.default.host'), 'device' => $device]);
                }
            }
        }

        return Helper::apiResponseHttpBadRequest('Invalid device_connection_key.');
    }

























//    public function methods(Request $request, Device $device)
//    {
//        $methodName = $request->input('method_name');
//
//        switch ($methodName) {
//            case config('constants.mqtt_methods.aota'):
//                return $this->ota($device, $methodName, $request->input('payload'), config('constants.aota_configurations_map'));
//            case config('constants.mqtt_methods.fota'):
//                return $this->ota($device, $methodName, $request->input('payload'), config('constants.fota_configurations_map'));
//            case config('constants.mqtt_methods.sota'):
//                return $this->ota($device, $methodName, $request->input('payload'), config('constants.sota_configurations_map'));
//            case config('constants.mqtt_methods.cota'):
//                return $this->ota($device, $methodName, $request->input('payload'), config('constants.cota_configurations_map'));
//            case config('constants.mqtt_methods.shutdown_device'):
//            case config('constants.mqtt_methods.reboot_device'):
//            case config('constants.mqtt_methods.decommission_device'):
//                return $this->powerControls($methodName, $device);
//            default:
//                return response(['result' => [], 'success' => false, 'errors' => 'Invalid methodName.', 'messages' => []], Response::HTTP_BAD_REQUEST);
//        }
//    }

//    protected function ota(Device $device, string $methodName, array $payload, array $configurationsMap)
//    {
//        $payloadJson = json_encode(Helper::mapArrayKeyByArray($payload, $configurationsMap));
//
//        $commandHistory = $device->commandHistories()->create([
//            'type' => config('constants.mqtt_methods_integer_types.' . $methodName),
//            'payload' => $payloadJson,
//        ]);
//
//        Helper::mqttPublish('iotportal/' . $device->unique_id . '/methods/POST/' . $methodName . '/?$rid=' . $commandHistory->id, $payloadJson);
//
//        return response(['result' => ['payload' => $payload], 'success' => true, 'errors' => [], 'messages' => []], Response::HTTP_OK);
//    }
//
//    protected function powerControls(string $methodName, Device $device)
//    {
//        $commandHistory = $device->commandHistories()->create([
//            'type' => config('constants.mqtt_methods_integer_types.' . $methodName),
//        ]);
//
//        Helper::mqttPublish('iotportal/' . $device->unique_id . '/methods/POST/' . $methodName . '/?$rid=' . $commandHistory->id, null);
//
//        return response(['result' => ['payload' => null], 'success' => true, 'errors' => [], 'messages' => []], Response::HTTP_OK);
//    }
}
