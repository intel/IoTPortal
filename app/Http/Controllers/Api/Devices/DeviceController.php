<?php

namespace App\Http\Controllers\Api\Devices;

use App\Helpers\Helper;
use App\Http\Controllers\Controller;
use App\Models\Device;
use App\Models\Status;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

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
        $query = Auth::user()->devices()->with('category:id,name', 'status:id,name');

        if ($request->has('deviceGroupId')) $query->deviceGroupUniqueId($request->input('deviceGroupId'));

        if ($request->has('filters')) {
            $filters = json_decode($request->input('filters'));

            foreach ($filters as $key => $value) {
                if ($key === 'unique_id') $query->uniqueIdLike($value->value);
                if ($key === 'name') $query->nameLike($value->value);
                if ($key === 'bios_vendor') $query->biosVendorLike($value->value);
                if ($key === 'bios_version') $query->biosVersionLike($value->value);
                if ($key === 'category') $query->categoryId($value->value);
                if ($key === 'status') $query->statusId($value->value);
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
            if ($request->input('sortOrder') === '1')
                $query->orderBy($request->input('sortField'));
            else
                $query->orderByDesc($request->input('sortField'));
        }

        if ($request->boolean('fetchAll') === true) {
            $devices = $query->paginate($query->count());
        } else {
            $maxRows = Config::get('constants.index_max_rows');
            $rows = (int)$request->input('rows', 10) > $maxRows ? $maxRows : (int)$request->input('rows', 10);

            $devices = $query->paginate($rows);
        }

        return Helper::apiResponse(['devices' => $devices]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255|unique:devices,name',
            'category' => 'required|exists:categories,id',
        ]);

        if ($validator->fails()) {
            return Helper::apiResponse([], false, $validator->getMessageBag()->toArray(), [], Response::HTTP_BAD_REQUEST);
        }

        $registeredStatus = Status::where('name', 'registered')->first();

        $device = Auth::user()->devices()->create([
            'name' => $request->input('name'),
            'category_id' => $request->input('category'),
            'status_id' => $registeredStatus->id,
        ]);

        if ($device->exists) {
            return Helper::apiResponse(['device' => $device]);
        }

        return Helper::apiResponse([], false, 'Failed to create device', [], Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * Display the specified resource.
     *
     * @param Device $device
     * @return JsonResponse
     */
    public function show(Device $device)
    {
        return Helper::apiResponse(['device' => $device->load('category:id,name', 'status:id,name')]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Device $device
     * @return JsonResponse
     */
    public function update(Request $request, Device $device)
    {
        $validator = Validator::make($request->all(), [
            'name' => [
                'required',
                'string',
                'max:255',
                Rule::unique('devices', 'name')->ignore($device->id),
            ],
            'category' => 'exists:categories,id',
        ]);

        if ($validator->fails()) {
            return Helper::apiResponse([], false, $validator->getMessageBag()->toArray(), [], Response::HTTP_BAD_REQUEST);
        }

        $success = $device->update([
            'name' => $request->input('name'),
            'category_id' => $request->has('category') ? $request->input('category') : $device->category_id,
        ]);

        if ($success) {
            return Helper::apiResponse(['device' => $device->load('category:id,name', 'status:id,name')]);
        }

        return Helper::apiResponse([], false, 'Failed to update device', [], Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Device $device
     * @return JsonResponse
     */
    public function destroy(Device $device)
    {
    }

    /**
     * Remove the specified resources from storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function destroySelected(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'ids.*' => 'required|exists:devices,id',
        ]);

        if ($validator->fails()) {
            return Helper::apiResponse([], false, $validator->getMessageBag()->toArray(), [], Response::HTTP_BAD_REQUEST);
        }

        $success = Auth::user()->devices()->whereIn('devices.id', $request->input('ids'))->delete();

        return Helper::apiResponse([], $success);
    }

    /**
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function validateField(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255|unique:devices,name',
        ]);

        if ($validator->fails()) {
            return Helper::apiResponse([], false, $validator->getMessageBag()->toArray(), [], Response::HTTP_BAD_REQUEST);
        }

        return Helper::apiResponse();
    }

    public function commands(Request $request, Device $device)
    {
        $validator = Validator::make($request->all(), [
            'command' => 'required|string|exists:commands,name',
            'payload' => 'nullable',
        ]);

        if ($validator->fails()) {
            return Helper::apiResponse([], false, $validator->getMessageBag()->toArray(), [], Response::HTTP_BAD_REQUEST);
        }

        $commandName = $request->input('command');

        $command = $device->commands()->where('name', $commandName)->first();

        if ($command) {
            $payloadJson = '';

            if ($request->has('payload')) {
                $payloadJson = json_encode(Helper::mapArrayKeyByArray($request->input('payload'), config('constants.commands.' . strtolower($command->name) . '.configuration_map')));
            }

            $commandHistory = $command->commandHistories()->create([
                'payload' => $payloadJson === '' ? null : $payloadJson,
            ]);

            Helper::mqttPublish('iotportal/' . $device->unique_id . '/methods/POST/' . $command->method_name . '/?$rid=' . $commandHistory->id, $payloadJson);
            return Helper::apiResponse();
        }

        return Helper::apiResponse([], false, 'Command not found for device.', [], Response::HTTP_BAD_REQUEST);
    }

    public function register(Request $request)
    {
        if ($request->bearerToken()) {
            $user = User::where('device_connection_key', $request->bearerToken())->first();

            if ($user) {
                if ($request->has('device_unique_id')) {
                    $device = $user->devices()->where('unique_id', $request->input('device_unique_id'))->first();

                    if ($device) {
                        return Helper::apiResponse(['mqttEndpoint' => config('mqttclient.connections.default.host'), 'device' => $device]);
                    }

                    return Helper::apiResponse([], false, 'device_unique_id provided not found.', [], Response::HTTP_BAD_REQUEST);
                } else {
                    $registeredStatus = Status::where('name', 'registered')->first();

                    $device = $user->devices()->create([
                        'status_id' => $registeredStatus->id,
                    ]);

                    return Helper::apiResponse(['mqttEndpoint' => config('mqttclient.connections.default.host'), 'device' => $device]);
                }
            }
        }

        return Helper::apiResponse([], false, 'Invalid device_connection_key.', [], Response::HTTP_BAD_REQUEST);
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
