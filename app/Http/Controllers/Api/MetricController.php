<?php

namespace App\Http\Controllers\Api;

use App\Actions\Metrics\FilterDeviceCpuTemperaturesAction;
use App\Actions\Metrics\FilterDeviceCpuUsagesAction;
use App\Actions\Metrics\FilterDeviceDiskUsagesAction;
use App\Actions\Metrics\FilterDeviceMemoryAvailablesAction;
use App\Http\Controllers\Controller;
use App\Models\Device;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * Class MetricController
 * @package App\Http\Controllers\Api
 */
class MetricController extends Controller
{
    /**
     * MetricController constructor.
     */
    public function __construct()
    {
        $this->middleware('can:view,device')->only(['cpuTemperatures', 'cpuUsages', 'diskUsages', 'memoryAvailables']);
    }

    /**
     * Return CPU temperature data for the specified device.
     *
     * @param Request $request
     * @param FilterDeviceCpuTemperaturesAction $filterDeviceCpuTemperaturesAction
     * @param Device $device
     * @return JsonResponse
     */
    public function cpuTemperatures(Request $request, FilterDeviceCpuTemperaturesAction $filterDeviceCpuTemperaturesAction, Device $device): JsonResponse
    {
        $cpuTemperatures = $filterDeviceCpuTemperaturesAction->execute($device, $request->only('timeRangeFilter'));

        return $this->apiOk(['cpuTemperatures' => $cpuTemperatures->toArray()]);
    }

    /**
     * Return CPU usage data for the specified device.
     *
     * @param Request $request
     * @param FilterDeviceCpuUsagesAction $filterDeviceCpuUsagesAction
     * @param Device $device
     * @return JsonResponse
     */
    public function cpuUsages(Request $request, FilterDeviceCpuUsagesAction $filterDeviceCpuUsagesAction, Device $device): JsonResponse
    {
        $cpuUsages = $filterDeviceCpuUsagesAction->execute($device, $request->only('timeRangeFilter'));

        return $this->apiOk(['cpuUsages' => $cpuUsages->toArray()]);
    }

    /**
     * Return disk usage data for the specified device.
     *
     * @param Request $request
     * @param FilterDeviceDiskUsagesAction $filterDeviceDiskUsagesAction
     * @param Device $device
     * @return JsonResponse
     */
    public function diskUsages(Request $request, FilterDeviceDiskUsagesAction $filterDeviceDiskUsagesAction, Device $device): JsonResponse
    {
        $diskUsages = $filterDeviceDiskUsagesAction->execute($device, $request->only('timeRangeFilter'));

        return $this->apiOk(['diskUsages' => $diskUsages->toArray()]);
    }

    /**
     * Return memory usage data for the specified device.
     *
     * @param Request $request
     * @param FilterDeviceMemoryAvailablesAction $filterDeviceMemoryAvailablesAction
     * @param Device $device
     * @return JsonResponse
     */
    public function memoryAvailables(Request $request, FilterDeviceMemoryAvailablesAction $filterDeviceMemoryAvailablesAction, Device $device): JsonResponse
    {
        $availableMemories = $filterDeviceMemoryAvailablesAction->execute($device, $request->only('timeRangeFilter'));

        return $this->apiOk(['availableMemories' => $availableMemories->toArray()]);
    }
}
