<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Api Routes
|--------------------------------------------------------------------------
|
| Here is where you can register Api routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your Api!
|
*/

Route::middleware(['json.response'])->group(function () {
    Route::post('/register', 'App\Http\Controllers\Api\Auth\AuthController@register')->name('api.auth.register');
    Route::post('/login', 'App\Http\Controllers\Api\Auth\AuthController@login')->name('api.auth.login');

    Route::get('/devices/register', 'App\Http\Controllers\Api\Devices\DeviceController@register')->name('api.devices.register');

    // direct method invocation from cloud
//    Route::post('/devices/{device}/methods', 'App\Http\Controllers\Api\Devices\DeviceActionController@methods')->name('api.devices.methods');

    Route::post('/mqtt/endpoint', 'App\Http\Controllers\Api\Mqtt\EndpointController@mqttEndpoint')->name('api.mqtt.endpoint');

    // TODO: remove, not using anymore
//    Route::post('/publish', 'App\Http\Controllers\Api\Mqtt\EndpointController@authOnPublish')->name('api.devices.publish');

    // TODO: remove, not using anymore
//    Route::get('/devices/publish', 'App\Http\Controllers\Api\Devices\DevicePublisherController@publish')->name('api.devices.publish');
//    Route::get('/devices/listen', 'App\Http\Controllers\Api\Devices\DevicePublisherController@index')->name('api.devices.listen');

});

Route::middleware(['json.response', 'auth'])->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

//    Devices
    Route::apiResource('/device/categories', 'App\Http\Controllers\Api\Devices\CategoryController');

    Route::apiResource('/device/statuses', 'App\Http\Controllers\Api\Devices\StatusController');

    Route::apiResource('/devices', 'App\Http\Controllers\Api\Devices\DeviceController');


    Route::get('/devices/{device}/metrics/cpu/temperatures', 'App\Http\Controllers\Api\Devices\MetricController@cpuTemperatures')->name('api.devices.metrics.cpuTemperatures');

    Route::get('/devices/{device}/metrics/cpu/usages', 'App\Http\Controllers\Api\Devices\MetricController@cpuUsages')->name('api.devices.metrics.cpuUsages');

    Route::get('/devices/{device}/metrics/disk/usages', 'App\Http\Controllers\Api\Devices\MetricController@diskUsages')->name('api.devices.metrics.diskUsages');

    Route::get('/devices/{device}/metrics/memory/availables', 'App\Http\Controllers\Api\Devices\MetricController@memoryAvailables')->name('api.devices.metrics.memoryAvailables');


    Route::get('/devices/{device}/commands', 'App\Http\Controllers\Api\Devices\CommandController@index')->name('api.devices.commands.index');

    Route::get('/devices/{device}/events', 'App\Http\Controllers\Api\Devices\EventController@index')->name('api.devices.events.index');

    Route::get('/devices/{device}/commands/histories', 'App\Http\Controllers\Api\Devices\CommandHistoryController@index')->name('api.devices.commandHistories.index');

    Route::get('/devices/{device}/events/histories', 'App\Http\Controllers\Api\Devices\EventHistoryController@index')->name('api.devices.eventHistories.index');


    Route::post('/devices/{device}/methods', 'App\Http\Controllers\Api\Devices\DeviceController@methods')->name('api.devices.methods');

});

// TODO: remove, not using anymore
Route::middleware(['json.response', 'auth:api'])->group(function () {
    Route::post('/logout', 'App\Http\Controllers\Api\Auth\AuthController@logout')->name('api.auth.logout');

    Route::get('/administrations/devices/connectionKey', 'App\Http\Controllers\Api\Administrations\DeviceConnectionController@getDeviceConnectionKey')->name('api.administrations.getDeviceConnectionKey');
});




//
//Route::middleware(['json.response', 'auth:api'])->get('/user', function (Request $request) {
////    return $request->user();
//    echo 'sad';
//});

//Route::get('/register', 'App\Http\Controllers\Api\Auth\AuthController@register')->name('api.auth.register');
//Route::post('/login', 'App\Http\Controllers\Api\Auth\AuthController@login')->name('api.auth.login');
//
//
//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});
