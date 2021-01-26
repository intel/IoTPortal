<?php

namespace App\Http\Controllers\Api\Devices;

use App\Helpers\Helper;
use App\Http\Controllers\Controller;
use App\Models\Device;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use PhpMqtt\Client\MQTTClient;

class DevicePublisherController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function publish(Request $request)
    {
//        $mqtt = Helper::createClient();
//        $mqtt->connect();
//        $mqtt->publish('php-mqtt/d345y45yh457465h7654/test', 'Hello World!');
//        $mqtt->close();

//        Helper::mqttPublish('iotportal', 'Hello World!');

        dd(Auth::user());
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $mqttConfig = config('mqttclient.connections.default');
        $mqtt = new MQTTClient($mqttConfig['host'], $mqttConfig['port'], $mqttConfig['client_id']);
        $mqtt->connect();
        $mqtt->subscribe('$p', function (string $topic, string $message, bool $retained) use ($mqtt) {
            echo $topic . $message;
            $mqtt->interrupt();
        });
        $mqtt->loop(true);
        $mqtt->close();
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
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Device  $device
     * @return \Illuminate\Http\Response
     */
    public function destroy(Device $device)
    {
    }
}
