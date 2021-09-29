<?php
/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

namespace App\Actions\Statistics;

use App\Models\Device;
use App\Traits\PadEmptyRecordsForStatistics;
use Carbon\Carbon;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class GetLastSevenDaysNewDeviceCountAction
{
    use PadEmptyRecordsForStatistics;

    public function execute(): Collection
    {
        $newDeviceCountByDate = Auth::user()->devices()
            ->where(Device::getTableName() . '.created_at', '>=', Carbon::today()->subDays(7))
            ->groupBy('date')
            ->groupBy('user_id')
            ->orderBy('date')
            ->get([
                DB::raw('DATE(' . Device::getTableName() . '.created_at) as date'),
                DB::raw('COUNT(*) as count')
            ])->pluck('count', 'date');

        return $this->padEmptyRecordsWithZeroCount($newDeviceCountByDate);
    }
}