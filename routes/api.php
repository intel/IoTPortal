<?php

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

    // Device registration endpoint
    Route::post('/devices/register', 'App\Http\Controllers\Api\DeviceController@register')->name('api.devices.register');

    // VerneMQ webhooks endpoint
    Route::post('/mqtt/endpoint', 'App\Http\Controllers\Api\Mqtt\EndpointController@mqttEndpoint')->name('api.mqtt.endpoint');
});

Route::middleware(['json.response', 'auth'])->group(function () {

    // Profile
    Route::get('/profile', 'App\Http\Controllers\Api\ProfileController@show');

    // Dashboard Charts
    Route::get('/dashboard/statistics', 'App\Http\Controllers\Api\DashboardController@showStatistics');

    Route::get('/dashboard/cpu/temperatures', 'App\Http\Controllers\Api\DashboardController@cpuTemperatures');

    Route::get('/dashboard/cpu/usages', 'App\Http\Controllers\Api\DashboardController@cpuUsages');

    Route::get('/dashboard/disk/usages', 'App\Http\Controllers\Api\DashboardController@diskUsages');

    Route::get('/dashboard/memory/availables', 'App\Http\Controllers\Api\DashboardController@memoryAvailables');


    // Devices
    Route::post('/devices/validateField', 'App\Http\Controllers\Api\DeviceController@validateField');

    Route::delete('/devices', 'App\Http\Controllers\Api\DeviceController@destroySelected');

    Route::get('/devices/{id}', 'App\Http\Controllers\Api\DeviceController@show');

    Route::apiResource('/devices', 'App\Http\Controllers\Api\DeviceController');


    // Device Groups
    Route::get('/device/groups/options', 'App\Http\Controllers\Api\DeviceGroupController@options');

    Route::post('/device/groups/validateField', 'App\Http\Controllers\Api\DeviceGroupController@validateField');

    Route::delete('/device/groups', 'App\Http\Controllers\Api\DeviceGroupController@destroySelected');

    Route::get('/device/groups/{id}', 'App\Http\Controllers\Api\DeviceGroupController@show');

    Route::apiResource('/device/groups', 'App\Http\Controllers\Api\DeviceGroupController')->parameters(['groups' => 'deviceGroup']);


    // Device Categories
    Route::get('/device/categories/options', 'App\Http\Controllers\Api\DeviceCategoryController@options');

    Route::post('/device/categories/validateField', 'App\Http\Controllers\Api\DeviceCategoryController@validateField');

    Route::delete('/device/categories', 'App\Http\Controllers\Api\DeviceCategoryController@destroySelected');

    Route::get('/device/categories/{id}', 'App\Http\Controllers\Api\DeviceCategoryController@show');

    Route::apiResource('/device/categories', 'App\Http\Controllers\Api\DeviceCategoryController')->parameters(['categories' => 'deviceCategory']);


    // Device jobs
    Route::get('/device/jobs/options', 'App\Http\Controllers\Api\DeviceJobController@options');

    Route::post('/device/jobs/validateField', 'App\Http\Controllers\Api\DeviceJobController@validateField');

    Route::delete('/device/jobs', 'App\Http\Controllers\Api\DeviceJobController@destroySelected');

    Route::get('/device/jobs/{id}', 'App\Http\Controllers\Api\DeviceJobController@show');

    Route::apiResource('/device/jobs', 'App\Http\Controllers\Api\DeviceJobController');


    // Saved Commands
    Route::get('/commands/saved/options', 'App\Http\Controllers\Api\SavedCommandController@options');

    Route::delete('/commands/saved', 'App\Http\Controllers\Api\SavedCommandController@destroySelected');

    Route::get('/commands/saved/{id}', 'App\Http\Controllers\Api\SavedCommandController@show');

    Route::apiResource('/commands/saved', 'App\Http\Controllers\Api\SavedCommandController')->parameters(['saved' => 'savedCommand']);


    // API Tokens
    Route::get('/tokens', 'App\Http\Controllers\Api\ApiTokenController@show');


    // Device OTA commands trigger endpoint
    Route::post('/devices/{device}/commands', 'App\Http\Controllers\Api\DeviceController@commands')->name('api.devices.commands');


    // Device Metrics aka. Charts
    Route::get('/devices/{device}/metrics/cpu/temperatures', 'App\Http\Controllers\Api\MetricController@cpuTemperatures')->name('api.devices.metrics.cpuTemperatures');

    Route::get('/devices/{device}/metrics/cpu/usages', 'App\Http\Controllers\Api\MetricController@cpuUsages')->name('api.devices.metrics.cpuUsages');

    Route::get('/devices/{device}/metrics/disk/usages', 'App\Http\Controllers\Api\MetricController@diskUsages')->name('api.devices.metrics.diskUsages');

    Route::get('/devices/{device}/metrics/memory/availables', 'App\Http\Controllers\Api\MetricController@memoryAvailables')->name('api.devices.metrics.memoryAvailables');


    // Device Command Histories and Event Histories
    Route::get('/devices/{device}/commands/histories', 'App\Http\Controllers\Api\CommandHistoryController@index')->name('api.devices.commandHistories.index');

    Route::get('/devices/{device}/events/histories', 'App\Http\Controllers\Api\EventHistoryController@index')->name('api.devices.eventHistories.index');


    // DataTable Dropdown Options
    Route::get('/device/statuses/options', 'App\Http\Controllers\Api\DeviceStatusController@options');

    Route::get('/devices/{device}/commands/options', 'App\Http\Controllers\Api\CommandController@options')->name('api.devices.commands.options');

    Route::get('/devices/{device}/events/options', 'App\Http\Controllers\Api\EventController@options')->name('api.devices.events.options');

});
