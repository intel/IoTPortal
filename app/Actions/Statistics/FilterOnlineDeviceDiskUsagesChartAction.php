<?php
/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

namespace App\Actions\Statistics;

use App\Models\Device;
use App\Models\DeviceStatus;
use App\Models\User;
use Illuminate\Support\Collection;

class FilterOnlineDeviceDiskUsagesChartAction
{
    public function execute(User $user, array $data): Collection
    {
        $timeRangeFilter = (int)($data['timeRangeFilter'] ?? 1);

        $devices = $user->devices()
            ->with(['diskStatistics' => function ($query) use ($timeRangeFilter) {
                $query->whereBetween('created_at', [now()->subHours($timeRangeFilter), now()])
                    ->select('disk_percentage_used', 'device_id', 'created_at');
            }])
            ->whereHas('deviceStatus', function ($query) {
                $query->where('name', DeviceStatus::STATUS_ONLINE);
            })
            ->whereHas('diskStatistics', function ($query) use ($timeRangeFilter) {
                $query->whereBetween('created_at', [now()->subHours($timeRangeFilter), now()]);
            })
            ->get([Device::getTableName() . '.id', Device::getTableName() . '.name']);

        $devices->transform(function ($item, $key) {
            return [
                'name' => $item->name,
                'data' => $item->diskStatistics->transform(function ($item, $key) {
                    return [
                        $item->created_at->getPreciseTimestamp(3),
                        $item->disk_percentage_used,
                    ];
                }),
            ];
        });

        return $devices;
    }
}