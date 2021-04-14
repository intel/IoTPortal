<?php

namespace App\Http\Controllers\Api\Devices;

use App\Http\Controllers\Controller;
use App\Models\Device;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class MetricController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function cpuTemperatures(Request $request, Device $device)
    {
        $timeRangeFilter = 1;
        if ($request->has('timeRangeFilter')) {
            $timeRangeFilter = (int)$request->input('timeRangeFilter');
        }

        $cpuTemperatures = $device->temperatureStatistics()
            ->whereBetween('created_at', [now()->subHours($timeRangeFilter), now()])
            ->orderBy('created_at')
            ->select(['id', 'temperature', 'created_at'])->get();

        $cpuTemperatures->transform(function ($item, $key) {
            return [
                $item->created_at->getPreciseTimestamp(3),
                $item->temperature,
            ];
        });

        return response(['result' => ['cpuTemperatures' => $cpuTemperatures->toArray()], 'success' => true, 'errors' => [], 'messages' => []], Response::HTTP_OK);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function cpuUsages(Request $request, Device $device)
    {
        $timeRangeFilter = 1;
        if ($request->has('timeRangeFilter')) {
            $timeRangeFilter = (int)$request->input('timeRangeFilter');
        }

        $cpuUsages = $device->cpuStatistics()
            ->whereBetween('created_at', [now()->subHours($timeRangeFilter), now()])
            ->orderBy('created_at')
            ->select(['id', 'system_cpu_percentage', 'created_at'])->get();

        $cpuUsages->transform(function ($item, $key) {
            return [
                $item->created_at->getPreciseTimestamp(3),
                $item->system_cpu_percentage,
            ];
        });

        return response(['result' => ['cpuUsages' => $cpuUsages->toArray()], 'success' => true, 'errors' => [], 'messages' => []], Response::HTTP_OK);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function diskUsages(Request $request, Device $device)
    {
        $timeRangeFilter = 1;
        if ($request->has('timeRangeFilter')) {
            $timeRangeFilter = (int)$request->input('timeRangeFilter');
        }

        $diskUsages = $device->diskStatistics()
            ->whereBetween('created_at', [now()->subHours($timeRangeFilter), now()])
            ->orderBy('created_at')
            ->select(['id', 'disk_percentage_used', 'created_at'])->get();

        $diskUsages->transform(function ($item, $key) {
            return [
                $item->created_at->getPreciseTimestamp(3),
                $item->disk_percentage_used,
            ];
        });

        return response(['result' => ['diskUsages' => $diskUsages->toArray()], 'success' => true, 'errors' => [], 'messages' => []], Response::HTTP_OK);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function memoryAvailables(Request $request, Device $device)
    {
        $timeRangeFilter = 1;
        if ($request->has('timeRangeFilter')) {
            $timeRangeFilter = (int)$request->input('timeRangeFilter');
        }

        $availableMemories = $device->memoryStatistics()
            ->whereBetween('created_at', [now()->subHours($timeRangeFilter), now()])
            ->orderBy('created_at')
            ->select(['id', 'available_memory_in_bytes', 'created_at'])->get();

        $availableMemories->transform(function ($item, $key) {
            return [
                $item->created_at->getPreciseTimestamp(3),
                $item->available_memory_in_bytes,
            ];
        });

        return response(['result' => ['availableMemories' => $availableMemories->toArray()], 'success' => true, 'errors' => [], 'messages' => []], Response::HTTP_OK);
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
