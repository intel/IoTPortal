<?php

namespace App\Http\Controllers\Api;

use App\Actions\Statistics\FilterOnlineDeviceAvailableMemoriesChartAction;
use App\Actions\Statistics\FilterOnlineDeviceCpuTemperaturesChartAction;
use App\Actions\Statistics\FilterOnlineDeviceCpuUsagesChartAction;
use App\Actions\Statistics\FilterOnlineDeviceDiskUsagesChartAction;
use App\Actions\Statistics\GetLastSevenDaysNewDeviceCategoryCountAction;
use App\Actions\Statistics\GetLastSevenDaysNewDeviceCountAction;
use App\Actions\Statistics\GetLastSevenDaysNewDeviceGroupCountAction;
use App\Actions\Statistics\GetLastSevenDaysNewDeviceJobCountAction;
use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @param GetLastSevenDaysNewDeviceCountAction $getLastSevenDaysNewDeviceCountAction
     * @param GetLastSevenDaysNewDeviceGroupCountAction $getLastSevenDaysNewDeviceGroupCountAction
     * @param GetLastSevenDaysNewDeviceCategoryCountAction $getLastSevenDaysNewDeviceCategoryCountAction
     * @param GetLastSevenDaysNewDeviceJobCountAction $getLastSevenDaysNewDeviceJobCountAction
     * @return JsonResponse
     */
    public function showStatistics(GetLastSevenDaysNewDeviceCountAction $getLastSevenDaysNewDeviceCountAction,
                                   GetLastSevenDaysNewDeviceGroupCountAction $getLastSevenDaysNewDeviceGroupCountAction,
                                   GetLastSevenDaysNewDeviceCategoryCountAction $getLastSevenDaysNewDeviceCategoryCountAction,
                                   GetLastSevenDaysNewDeviceJobCountAction $getLastSevenDaysNewDeviceJobCountAction): JsonResponse
    {
        // Devices
        $totalDeviceCount = Auth::user()->devices()->count();
        $lastSevenDaysNewDeviceCount = $getLastSevenDaysNewDeviceCountAction->execute();

        // Device Groups
        $totalDeviceGroupCount = Auth::user()->deviceGroups()->count();
        $lastSevenDaysNewDeviceGroupCount = $getLastSevenDaysNewDeviceGroupCountAction->execute();


        // Device Categories
        $totalDeviceCategoryCount = Auth::user()->deviceCategories()->count();
        $lastSevenDaysNewDeviceCategoryCount = $getLastSevenDaysNewDeviceCategoryCountAction->execute();

        // Device Jobs
        $totalDeviceJobCount = Auth::user()->deviceJobs()->count();
        $lastSevenDaysNewDeviceJobCount = $getLastSevenDaysNewDeviceJobCountAction->execute();

        return $this->apiOk([
            'statistics' => [
                'totalDeviceCount' => $totalDeviceCount,
                'lastSevenDaysNewDeviceCount' => $lastSevenDaysNewDeviceCount,
                'totalDeviceGroupCount' => $totalDeviceGroupCount,
                'lastSevenDaysNewDeviceGroupCount' => $lastSevenDaysNewDeviceGroupCount,
                'totalDeviceCategoryCount' => $totalDeviceCategoryCount,
                'lastSevenDaysNewDeviceCategoryCount' => $lastSevenDaysNewDeviceCategoryCount,
                'totalDeviceJobCount' => $totalDeviceJobCount,
                'lastSevenDaysNewDeviceJobCount' => $lastSevenDaysNewDeviceJobCount,
            ]
        ]);

    }

    public function cpuTemperatures(Request $request, FilterOnlineDeviceCpuTemperaturesChartAction $filterOnlineDeviceCpuTemperaturesGraphAction): JsonResponse
    {
        $cpuTemperatures = $filterOnlineDeviceCpuTemperaturesGraphAction->execute($request->user(), $request->only('timeRangeFilter'));

        return $this->apiOk(['cpuTemperatures' => $cpuTemperatures]);
    }

    public function cpuUsages(Request $request, FilterOnlineDeviceCpuUsagesChartAction $filterOnlineDeviceCpuUsagesChartAction): JsonResponse
    {
        $cpuUsages = $filterOnlineDeviceCpuUsagesChartAction->execute($request->user(), $request->only('timeRangeFilter'));

        return $this->apiOk(['cpuUsages' => $cpuUsages]);
    }

    public function diskUsages(Request $request, FilterOnlineDeviceDiskUsagesChartAction $filterOnlineDeviceDiskUsagesChartAction): JsonResponse
    {
        $diskUsages = $filterOnlineDeviceDiskUsagesChartAction->execute($request->user(), $request->only('timeRangeFilter'));

        return $this->apiOk(['diskUsages' => $diskUsages]);
    }

    public function memoryAvailables(Request $request, FilterOnlineDeviceAvailableMemoriesChartAction $filterOnlineDeviceAvailableMemoriesChartAction): JsonResponse
    {
        $availableMemories = $filterOnlineDeviceAvailableMemoriesChartAction->execute($request->user(), $request->only('timeRangeFilter'));

        return $this->apiOk(['availableMemories' => $availableMemories]);
    }
}
