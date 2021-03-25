<?php

namespace App\Http\Controllers\Api\Devices;

use App\Helpers\Helper;
use App\Http\Controllers\Controller;
use App\Http\Resources\DeviceResource;
use App\Models\Device;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class DeviceController extends Controller
{
    public function register(Request $request)
    {
        $deviceConnectionKey = $request->bearerToken();

        $user = User::where('device_connection_key', $deviceConnectionKey)->first();

        if ($user) {
            if ($request->input('device_unique_id')) {
                $device = $user->devices()->where('unique_id', $request->input('device_unique_id'))->first();

                if ($device) {
                    return response(['result' => ['mqttEndpoint' => config('mqttclient.connections.default.host'), 'device' => $device], 'success' => true, 'errors' => [], 'messages' => []], Response::HTTP_BAD_REQUEST);
                } else {
                    return response(['result' => [], 'success' => false, 'errors' => 'device_unique_id provided not found.', 'messages' => []], Response::HTTP_BAD_REQUEST);
                }
            } else {
                $device = $user->devices()->create([
                    'status' => config('constants.device_statuses.registered'),
                ]);
                return response(['result' => ['mqttEndpoint' => config('mqttclient.connections.default.host'), 'device' => $device], 'success' => true, 'errors' => [], 'messages' => []], Response::HTTP_OK);
            }
        }
        return response(['result' => [], 'success' => false, 'errors' => 'Invalid device_connection_key.', 'messages' => []], Response::HTTP_BAD_REQUEST);
    }

    public function methods(Request $request, Device $device)
    {
        $methodName = $request->input('method_name');

        switch ($methodName) {
            case config('constants.mqtt_methods.aota'):
                return $this->ota($device, $methodName, $request->input('payload'), config('constants.aota_configurations_map'));
            case config('constants.mqtt_methods.fota'):
                return $this->ota($device, $methodName, $request->input('payload'), config('constants.fota_configurations_map'));
            case config('constants.mqtt_methods.sota'):
                return $this->ota($device, $methodName, $request->input('payload'), config('constants.sota_configurations_map'));
            case config('constants.mqtt_methods.cota'):
                return $this->ota($device, $methodName, $request->input('payload'), config('constants.cota_configurations_map'));
            case config('constants.mqtt_methods.shutdown_device'):
            case config('constants.mqtt_methods.reboot_device'):
            case config('constants.mqtt_methods.decommission_device'):
                return $this->powerControls($methodName, $device);
            default:
                return response(['result' => [], 'success' => false, 'errors' => 'Invalid methodName.', 'messages' => []], Response::HTTP_BAD_REQUEST);
        }
    }

    protected function ota(Device $device, string $methodName, array $payload, array $configurationsMap)
    {
        $payloadJson = json_encode(Helper::mapArrayKeyByArray($payload, $configurationsMap));

        $commandHistory = $device->commandHistories()->create([
            'type' => config('constants.mqtt_methods_integer_types.' . $methodName),
            'payload' => $payloadJson,
        ]);

        Helper::mqttPublish('iotportal/' . $device->unique_id . '/methods/' . $methodName . '/?$rid=' . $commandHistory->id, $payloadJson);

        return response(['result' => ['payload' => $payload], 'success' => true, 'errors' => [], 'messages' => []], Response::HTTP_OK);
    }

    protected function powerControls(string $methodName, Device $device)
    {
        $commandHistory = $device->commandHistories()->create([
            'type' => config('constants.mqtt_methods_integer_types.' . $methodName),
            'payload' => null,
        ]);

        Helper::mqttPublish('iotportal/' . $device->unique_id . '/methods/' . $methodName . '/?$rid=' . $commandHistory->id, null);

        return response(['result' => ['payload' => null], 'success' => true, 'errors' => [], 'messages' => []], Response::HTTP_OK);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
        $devices = $user->devices()->get();
        return response(['result' => ['devices' => $devices], 'success' => true, 'errors' => [], 'messages' => []], Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return response($request->all(), Response::HTTP_OK);
    }

    /**
     * Display the specified resource.
     *
     * @param Device $device
     * @return \Illuminate\Http\Response
     */
    public function show(Device $device)
    {
        $response = ['result' => ['device' => $device], 'success' => true, 'errors' => [], 'messages' => []];
        return response($response, Response::HTTP_OK);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param Device $device
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Device $device)
    {
        $device->update($request->all());

        $response = ['success' => true, 'device' => $device];
        return response($response, Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Device $device
     * @return \Illuminate\Http\Response
     */
    public function destroy(Device $device)
    {
        $device->delete();
        return response(['success' => true], Response::HTTP_OK);
    }
}
