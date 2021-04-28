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
//    Route::post('/register', 'App\Http\Controllers\Api\Auth\AuthController@register')->name('api.auth.register');
//    Route::post('/login', 'App\Http\Controllers\Api\Auth\AuthController@login')->name('api.auth.login');

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

    // Devices
    Route::post('/devices/validateField', 'App\Http\Controllers\Api\Devices\DeviceController@validateField');

    Route::delete('/devices', 'App\Http\Controllers\Api\Devices\DeviceController@destroySelected')->name('api.devices.destroySelected');

    Route::apiResource('/devices', 'App\Http\Controllers\Api\Devices\DeviceController');


    // Device Groups
    Route::get('/device/groups/options', 'App\Http\Controllers\Api\Devices\GroupController@options');

    Route::post('/device/groups/validateField', 'App\Http\Controllers\Api\Devices\GroupController@validateField');

    Route::delete('/device/groups', 'App\Http\Controllers\Api\Devices\GroupController@destroySelected')->name('api.device.groups.destroySelected');

    Route::apiResource('/device/groups', 'App\Http\Controllers\Api\Devices\GroupController');


    // Device Categories
    Route::get('/device/categories/options', 'App\Http\Controllers\Api\Devices\CategoryController@options');

    Route::post('/device/categories/validateField', 'App\Http\Controllers\Api\Devices\CategoryController@validateField');

    Route::delete('/device/categories', 'App\Http\Controllers\Api\Devices\CategoryController@destroySelected')->name('api.device.categories.destroySelected');

    Route::apiResource('/device/categories', 'App\Http\Controllers\Api\Devices\CategoryController');


    // Saved Commands
    Route::delete('/commands/saved', 'App\Http\Controllers\Api\SavedCommandController@destroySelected');

    Route::apiResource('/commands/saved', 'App\Http\Controllers\Api\SavedCommandController')->parameters(['saved' => 'savedCommand']);;


    // API Tokens
    Route::get('/tokens', 'App\Http\Controllers\Api\ApiTokenController@show');


    // Device OTA commands trigger endpoint
    Route::post('/devices/{device}/commands', 'App\Http\Controllers\Api\Devices\DeviceController@commands')->name('api.devices.commands');


    // Device Metrics aka. Charts
    Route::get('/devices/{device}/metrics/cpu/temperatures', 'App\Http\Controllers\Api\Devices\MetricController@cpuTemperatures')->name('api.devices.metrics.cpuTemperatures');

    Route::get('/devices/{device}/metrics/cpu/usages', 'App\Http\Controllers\Api\Devices\MetricController@cpuUsages')->name('api.devices.metrics.cpuUsages');

    Route::get('/devices/{device}/metrics/disk/usages', 'App\Http\Controllers\Api\Devices\MetricController@diskUsages')->name('api.devices.metrics.diskUsages');

    Route::get('/devices/{device}/metrics/memory/availables', 'App\Http\Controllers\Api\Devices\MetricController@memoryAvailables')->name('api.devices.metrics.memoryAvailables');


    // Device Command Histories and Event Histories
    Route::get('/devices/{device}/commands/histories', 'App\Http\Controllers\Api\Devices\CommandHistoryController@index')->name('api.devices.commandHistories.index');

    Route::get('/devices/{device}/events/histories', 'App\Http\Controllers\Api\Devices\EventHistoryController@index')->name('api.devices.eventHistories.index');


    // DataTable Dropdown Options
    Route::get('/device/statuses/options', 'App\Http\Controllers\Api\Devices\StatusController@options');

    Route::get('/devices/{device}/commands/options', 'App\Http\Controllers\Api\Devices\CommandController@options')->name('api.devices.commands.options');

    Route::get('/devices/{device}/events/options', 'App\Http\Controllers\Api\Devices\EventController@options')->name('api.devices.events.options');










    Route::get('/user', function (Request $request) {
        return $request->user();
    });


//    Route::post('/devices/{device}/methods', 'App\Http\Controllers\Api\Devices\DeviceController@methods')->name('api.devices.methods');

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
