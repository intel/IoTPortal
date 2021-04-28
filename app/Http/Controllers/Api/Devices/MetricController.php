<?php

namespace App\Http\Controllers\Api\Devices;

use App\Helpers\Helper;
use App\Http\Controllers\Controller;
use App\Models\Device;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class MetricController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @param Device $device
     * @return JsonResponse
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

        return Helper::apiResponseHttpOk(['cpuTemperatures' => $cpuTemperatures->toArray()]);
    }

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @param Device $device
     * @return JsonResponse
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

        return Helper::apiResponseHttpOk(['cpuUsages' => $cpuUsages->toArray()]);
    }

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @param Device $device
     * @return JsonResponse
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

        return Helper::apiResponseHttpOk(['diskUsages' => $diskUsages->toArray()]);
    }

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @param Device $device
     * @return JsonResponse
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

        return Helper::apiResponseHttpOk(['availableMemories' => $availableMemories->toArray()]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return Response
     */
    public function store(Request $request)
    {
    }

    /**
     * Display the specified resource.
     *
     * @param Device $device
     * @return Response
     */
    public function show(Device $device)
    {
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Device $device
     * @return Response
     */
    public function update(Request $request, Device $device)
    {
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Device $device
     * @return Response
     */
    public function destroy(Device $device)
    {
    }
}
