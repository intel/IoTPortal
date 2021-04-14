<?php

namespace App\Http\Controllers\Api\Devices;

use App\Http\Controllers\Controller;
use App\Models\Device;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class MetricController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function temperatures(Request $request, Device $device)
    {
        $timeRangeFilter = 1;
        if ($request->has('timeRangeFilter')) {
            $timeRangeFilter = (int) $request->input('timeRangeFilter');
        }
        $temperatures = $device->temperatureStatistics()
            ->whereBetween('created_at', [now()->subHours($timeRangeFilter), now()])
            ->orderBy('created_at')
            ->select(['id', 'temperature', 'created_at'])->get();

        $temperatures->transform(function ($item, $key) {
            return [
                $item->created_at->getPreciseTimestamp(3),
                $item->temperature,
            ];
        });

        return response(['result' => ['temperatures' => $temperatures->toArray()], 'success' => true, 'errors' => [], 'messages' => []], Response::HTTP_OK);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function cpuUsagePercentages(Request $request, Device $device)
    {
        $timeRangeFilter = 1;
        if ($request->has('timeRangeFilter')) {
            $timeRangeFilter = (int) $request->input('timeRangeFilter');
        }
        $cpuUsagePercentages = $device->cpuStatistics()
            ->whereBetween('created_at', [now()->subHours($timeRangeFilter), now()])
            ->orderBy('created_at')
            ->select(['id', 'system_cpu_percentage', 'created_at'])->get();

        $cpuUsagePercentages->transform(function ($item, $key) {
            return [
                $item->created_at->getPreciseTimestamp(3),
                $item->system_cpu_percentage,
            ];
        });

        return response(['result' => ['cpuUsagePercentages' => $cpuUsagePercentages->toArray()], 'success' => true, 'errors' => [], 'messages' => []], Response::HTTP_OK);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function diskUsagePercentages(Request $request, Device $device)
    {
        $timeRangeFilter = 1;
        if ($request->has('timeRangeFilter')) {
            $timeRangeFilter = (int) $request->input('timeRangeFilter');
        }
        $diskUsagePercentages = $device->diskStatistics()
            ->whereBetween('created_at', [now()->subHours($timeRangeFilter), now()])
            ->orderBy('created_at')
            ->select(['id', 'disk_percentage_used', 'created_at'])->get();

        $diskUsagePercentages->transform(function ($item, $key) {
            return [
                $item->created_at->getPreciseTimestamp(3),
                $item->disk_percentage_used,
            ];
        });

        return response(['result' => ['diskUsagePercentages' => $diskUsagePercentages->toArray()], 'success' => true, 'errors' => [], 'messages' => []], Response::HTTP_OK);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function availableMemoriesInBytes(Request $request, Device $device)
    {
        $timeRangeFilter = 1;
        if ($request->has('timeRangeFilter')) {
            $timeRangeFilter = (int) $request->input('timeRangeFilter');
        }
        $availableMemoriesInBytes = $device->memoryStatistics()
            ->whereBetween('created_at', [now()->subHours($timeRangeFilter), now()])
            ->orderBy('created_at')
            ->select(['id', 'available_memory_in_bytes', 'created_at'])->get();

        $availableMemoriesInBytes->transform(function ($item, $key) {
            return [
                $item->created_at->getPreciseTimestamp(3),
                $item->available_memory_in_bytes,
            ];
        });

        return response(['result' => ['availableMemoriesInBytes' => $availableMemoriesInBytes->toArray()], 'success' => true, 'errors' => [], 'messages' => []], Response::HTTP_OK);
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
