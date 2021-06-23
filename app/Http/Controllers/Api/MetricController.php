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

class MetricController extends Controller
{
    public function __construct()
    {
        $this->middleware('can:view,device')->only(['cpuTemperatures', 'cpuUsages', 'diskUsages', 'memoryAvailables']);
    }

    /**
     * Display a listing of the resource.
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
     * Display a listing of the resource.
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
     * Display a listing of the resource.
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
     * Display a listing of the resource.
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
