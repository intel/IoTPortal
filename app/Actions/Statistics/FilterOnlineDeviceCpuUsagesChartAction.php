<?php

namespace App\Actions\Statistics;

use App\Models\Device;
use App\Models\DeviceStatus;
use App\Models\User;
use Illuminate\Support\Collection;

class FilterOnlineDeviceCpuUsagesChartAction
{
    public function execute(User $user, array $data): Collection
    {
        $timeRangeFilter = (int)($data['timeRangeFilter'] ?? 1);

        $devices = $user->devices()
            ->with(['cpuStatistics' => function ($query) use ($timeRangeFilter) {
                $query->whereBetween('created_at', [now()->subHours($timeRangeFilter), now()])
                    ->select('system_cpu_percentage', 'device_id', 'created_at');
            }])
            ->whereHas('deviceStatus', function ($query) {
                $query->where('name', DeviceStatus::STATUS_ONLINE);
            })
            ->whereHas('cpuStatistics', function ($query) use ($timeRangeFilter) {
                $query->whereBetween('created_at', [now()->subHours($timeRangeFilter), now()]);
            })
            ->get([Device::getTableName() . '.id', Device::getTableName() . '.name']);

        $devices->transform(function ($item, $key) {
            return [
                'name' => $item->name,
                'data' => $item->cpuStatistics->transform(function ($item, $key) {
                    return [
                        $item->created_at->getPreciseTimestamp(3),
                        $item->system_cpu_percentage,
                    ];
                }),
            ];
        });

        return $devices;
    }
}