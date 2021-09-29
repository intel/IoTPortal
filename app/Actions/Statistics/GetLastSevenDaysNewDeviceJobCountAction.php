<?php
/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

namespace App\Actions\Statistics;

use App\Models\DeviceJob;
use App\Traits\PadEmptyRecordsForStatistics;
use Carbon\Carbon;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class GetLastSevenDaysNewDeviceJobCountAction
{
    use PadEmptyRecordsForStatistics;

    public function execute(): Collection
    {
        $newDeviceJobCountByDate = Auth::user()->deviceJobs()
            ->where(DeviceJob::getTableName() . '.created_at', '>=', Carbon::today()->subDays(7))
            ->groupBy('date')
            ->orderBy('date')
            ->get([
                DB::raw('DATE(' . DeviceJob::getTableName() . '.created_at) as date'),
                DB::raw('COUNT(*) as count')
            ])->pluck('count', 'date');

        return $this->padEmptyRecordsWithZeroCount($newDeviceJobCountByDate);
    }
}