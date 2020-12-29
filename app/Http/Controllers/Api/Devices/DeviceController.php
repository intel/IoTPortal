<?php

namespace App\Http\Controllers\Api\Devices;

use App\Http\Controllers\Controller;
use App\Http\Resources\DeviceResource;
use App\Models\Device;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class DeviceController extends Controller
{
    public function register(Request $request)
    {
        $deviceConnectionKey = $request->bearerToken();

        $user = User::where('device_connection_key', $deviceConnectionKey)->first();

        if ($user) {
            $device = null;

            if ($request->device_unique_id) {
                $device = $user->devices()->where('unique_id', $request->device_unique_id)->first();

                if (!$device) {
                    return response([
                        'success'=> false,
                        'error'=> 'device_unique_id provided not found.'
                    ], Response::HTTP_BAD_REQUEST);
                }
            } else {
                $device = $user->devices()->create([
                    'status' => 0,
                ]);
            }
            $response = ['success'=> true, 'device' => $device];
            return response($response, Response::HTTP_OK);
        }

        return response([
            'success'=> false,
            'errors'=>'Invalid device connection key.'
        ], Response::HTTP_BAD_REQUEST);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
        if ($user) {
            $devices = $user->devices()->get();
            $response = ['success'=> true, 'devices' => $devices];
            return response($response, Response::HTTP_OK);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  Device  $device
     * @return \Illuminate\Http\Response
     */
    public function show(Device $device)
    {
        $response = ['success'=> true, 'device' => $device];
        return response($response, Response::HTTP_OK);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Device  $device
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Device $device)
    {
        $device->update($request->all());

        $response = ['success'=> true, 'device' => $device];
        return response($response, Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Device  $device
     * @return \Illuminate\Http\Response
     */
    public function destroy(Device $device)
    {
        $device->delete();
        return response(['success'=> true], Response::HTTP_OK);
    }
}
