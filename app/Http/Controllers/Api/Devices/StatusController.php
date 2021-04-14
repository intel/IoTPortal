<?php

namespace App\Http\Controllers\Api\Devices;

use App\Http\Controllers\Controller;
use App\Models\Device;
use App\Models\Status;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class StatusController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $deviceStatuses = Status::select(['id', 'name'])->distinct()->get();
        return response(['result' => ['deviceStatuses' => $deviceStatuses], 'success' => true, 'errors' => [], 'messages' => []], Response::HTTP_OK);
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
