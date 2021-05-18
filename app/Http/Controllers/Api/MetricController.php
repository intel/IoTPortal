<?php

namespace App\Http\Controllers\Api;

use App\Helpers\Helper;
use App\Http\Controllers\Controller;
use App\Models\Device;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

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
        $timeRangeFilter = (int)$request->input('timeRangeFilter', 1);

        $cpuTemperatures = $device->temperatureStatistics()
            ->whereBetween('created_at', [now()->subHours($timeRangeFilter), now()])
            ->orderBy('created_at')
            ->get(['id', 'temperature', 'created_at']);

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
        $timeRangeFilter = (int)$request->input('timeRangeFilter', 1);

        $cpuUsages = $device->cpuStatistics()
            ->whereBetween('created_at', [now()->subHours($timeRangeFilter), now()])
            ->orderBy('created_at')
            ->get(['id', 'system_cpu_percentage', 'created_at']);

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
        $timeRangeFilter = (int)$request->input('timeRangeFilter', 1);

        $diskUsages = $device->diskStatistics()
            ->whereBetween('created_at', [now()->subHours($timeRangeFilter), now()])
            ->orderBy('created_at')
            ->get(['id', 'disk_percentage_used', 'created_at']);

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
        $timeRangeFilter = (int)$request->input('timeRangeFilter', 1);

        $availableMemories = $device->memoryStatistics()
            ->whereBetween('created_at', [now()->subHours($timeRangeFilter), now()])
            ->orderBy('created_at')
            ->get(['id', 'available_memory_in_bytes', 'created_at']);

        $availableMemories->transform(function ($item, $key) {
            return [
                $item->created_at->getPreciseTimestamp(3),
                $item->available_memory_in_bytes,
            ];
        });

        return Helper::apiResponseHttpOk(['availableMemories' => $availableMemories->toArray()]);
    }
}
