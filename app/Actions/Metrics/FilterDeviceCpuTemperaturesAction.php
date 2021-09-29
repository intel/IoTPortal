<?php
/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

namespace App\Actions\Metrics;

use App\Models\Device;
use Illuminate\Database\Eloquent\Collection;

class FilterDeviceCpuTemperaturesAction
{
    public function execute(Device $device, array $data): Collection
    {
        $timeRangeFilter = (int)($data['timeRangeFilter'] ?? 1);

        $cpuTemperatures = $device->temperatureStatistics()
            ->whereBetween('created_at', [now()->subHours($timeRangeFilter), now()])
            ->orderBy('created_at')
            ->get(['id', 'temperature', 'created_at']);

        return $this->transform($cpuTemperatures);
    }

    private function transform(Collection $cpuTemperatures): Collection
    {
        $cpuTemperatures->transform(function ($item, $key) {
            return [
                $item->created_at->getPreciseTimestamp(3),
                $item->temperature,
            ];
        });

        return $cpuTemperatures;
    }
}