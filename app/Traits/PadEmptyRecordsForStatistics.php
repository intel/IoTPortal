<?php

namespace App\Traits;

use Carbon\Carbon;
use Illuminate\Support\Collection;

trait PadEmptyRecordsForStatistics
{
    public function padEmptyRecordsWithZeroCount(Collection $statistics): Collection
    {
        $lastSevenDaysInitialCount = collect();
        for ($i = 6; $i >= 0; $i--) {
            $date = Carbon::now()->subDays($i)->format('Y-m-d');
            $lastSevenDaysInitialCount->put($date, 0);
        }

        return $lastSevenDaysInitialCount->merge($statistics);
    }
}