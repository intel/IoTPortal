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

class FilterOnlineDeviceAvailableMemoriesChartAction
{
    public function execute(User $user, array $data): Collection
    {
        $timeRangeFilter = (int)($data['timeRangeFilter'] ?? 1);

        $devices = $user->devices()
            ->with(['memoryStatistics' => function ($query) use ($timeRangeFilter) {
                $query->whereBetween('created_at', [now()->subHours($timeRangeFilter), now()])
                    ->select('available_memory_in_bytes', 'device_id', 'created_at');
            }])
            ->whereHas('deviceStatus', function ($query) {
                $query->where('name', DeviceStatus::STATUS_ONLINE);
            })
            ->whereHas('memoryStatistics', function ($query) use ($timeRangeFilter) {
                $query->whereBetween('created_at', [now()->subHours($timeRangeFilter), now()]);
            })
            ->get([Device::getTableName() . '.id', Device::getTableName() . '.name']);

        $devices->transform(function ($item, $key) {
            return [
                'name' => $item->name,
                'data' => $item->memoryStatistics->transform(function ($item, $key) {
                    return [
                        $item->created_at->getPreciseTimestamp(3),
                        $item->available_memory_in_bytes,
                    ];
                }),
            ];
        });

        return $devices;
    }
}