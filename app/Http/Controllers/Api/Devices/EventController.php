<?php

namespace App\Http\Controllers\Api\Devices;

use App\Http\Controllers\Controller;
use App\Models\Device;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class EventController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Device $device)
    {
        $deviceEvents = $device->events()->select(['id', 'name'])->distinct()->get();

        return response(['result' => ['deviceEvents' => $deviceEvents], 'success' => true, 'errors' => [], 'messages' => []], Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
    }

    /**
     * Display the specified resource.
     *
     * @param Device $device
     * @return \Illuminate\Http\Response
     */
    public function show(Device $device)
    {
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
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Device $device
     * @return \Illuminate\Http\Response
     */
    public function destroy(Device $device)
    {
    }
}
