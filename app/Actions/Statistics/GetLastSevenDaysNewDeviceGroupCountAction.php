<?php

namespace App\Actions\Statistics;

use App\Models\DeviceGroup;
use App\Traits\PadEmptyRecordsForStatistics;
use Carbon\Carbon;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class GetLastSevenDaysNewDeviceGroupCountAction
{
    use PadEmptyRecordsForStatistics;

    public function execute(): Collection
    {
        $newDeviceGroupCountByDate = Auth::user()->deviceGroups()
            ->where(DeviceGroup::getTableName() . '.created_at', '>=', Carbon::today()->subDays(7))
            ->groupBy('date')
            ->orderBy('date')
            ->get([
                DB::raw('DATE(' . DeviceGroup::getTableName() . '.created_at) as date'),
                DB::raw('COUNT(*) as count')
            ])->pluck('count', 'date');

        return $this->padEmptyRecordsWithZeroCount($newDeviceGroupCountByDate);
    }
}