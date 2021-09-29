<?php
/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
//
//Route::get('/', function () {
//    return view('welcome');
//});
//
//Route::get('/home', function () {
//    return view('home');
//});



Auth::routes();

Route::get('/{path?}', [App\Http\Controllers\HomeController::class, 'index'])->where('path', '.*')->name('home');























//Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
//
//Route::view('/{path?}', 'app');

//Auth::routes();


