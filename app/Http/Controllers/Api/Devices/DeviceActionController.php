<?php

namespace App\Http\Controllers\Api\Devices;

use App\Helpers\Helper;
use App\Http\Controllers\Controller;
use App\Models\Device;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;

class DeviceActionController extends Controller
{
    public function methods(Request $request, Device $device)
    {
        $mqttPassword = $request->bearerToken();

        if ($device->mqtt_password === $mqttPassword) {
            $methodName = $request->input('methodName');

            if (in_array($methodName, config('constants.mqtt_methods'))) {

                $validator = Validator::make($request->all(), [
                    'responseTimeoutInSeconds' => 'required|integer|min:5|max:60',
                ]);

                if ($validator->fails()) {
                    return response([
                        'success' => false,
                        'errors' => $validator->getMessageBag()->toArray()
                    ], Response::HTTP_BAD_REQUEST);
                }

                $payload = $request->input('payload');
                $payloadJson = json_encode($payload);

                $commandHistory = $device->commandHistories()->create([
                    'type' => config('constants.mqtt_methods_integer_types.' . $methodName),
                    'payload' => $payloadJson,
                ]);

                // Send to device specific MQTT method topic
                Helper::mqttPublish('iotportal/' . $device->unique_id . '/methods/' . $methodName . '/?$rid=' . $commandHistory->id, $payloadJson);

                $sentTime = Carbon::now();

                do {
                    $commandHistory->refresh();
                    if ($commandHistory->response_time) {
                        $response = ['success' => true, 'payload' => $payload];
                        return response($response, Response::HTTP_OK);
                    }
                } while (Carbon::now()->diffInSeconds($sentTime) < $request->input('responseTimeoutInSeconds'));

                return response([
                    'success' => false,
                    'errors' => 'Timeout while waiting for device response.'
                ], Response::HTTP_GATEWAY_TIMEOUT);
            }

            return response([
                'success' => false,
                'errors' => 'Invalid direct method on device.'
            ], Response::HTTP_BAD_REQUEST);
        }

        return response([
            'success' => false,
            'errors' => 'Invalid mqtt password provided in the Bearer token.'
        ], Response::HTTP_UNAUTHORIZED);
    }
}
