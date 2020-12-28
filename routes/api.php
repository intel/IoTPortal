<?php

use Illuminate\Http\Request;
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

});

Route::middleware(['json.response', 'auth:api'])->group(function () {
    Route::post('/logout', 'App\Http\Controllers\Api\Auth\AuthController@logout')->name('api.auth.logout');


//    Route::get('/user', function (Request $request) {
//    return $request->user();
//        echo 'sad';
//    });
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
