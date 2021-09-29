<?php
/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

namespace App\Actions\Metrics;

use App\Models\Device;
use Illuminate\Database\Eloquent\Collection;

class FilterDeviceCpuUsagesAction
{
    public function execute(Device $device, array $data): Collection
    {
        $timeRangeFilter = (int)($data['timeRangeFilter'] ?? 1);

        $cpuUsages = $device->cpuStatistics()
            ->whereBetween('created_at', [now()->subHours($timeRangeFilter), now()])
            ->orderBy('created_at')
            ->get(['id', 'system_cpu_percentage', 'created_at']);

        return $this->transform($cpuUsages);
    }

    private function transform(Collection $cpuUsages): Collection
    {
        $cpuUsages->transform(function ($item, $key) {
            return [
                $item->created_at->getPreciseTimestamp(3),
                $item->system_cpu_percentage,
            ];
        });

        return $cpuUsages;
    }
}