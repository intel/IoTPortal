<?php

namespace App\Actions\DeviceJobs;

use App\Actions\DataTables\CalculateDataTableFinalRowsAction;
use Illuminate\Support\Facades\Auth;

class FilterDataTableDeviceJobsAction
{
    private CalculateDataTableFinalRowsAction $calculateDataTableFinalRowsAction;

    public function __construct(CalculateDataTableFinalRowsAction $calculateDataTableFinalRowsAction)
    {
        $this->calculateDataTableFinalRowsAction = $calculateDataTableFinalRowsAction;
    }

    public function execute(array $data)
    {
        $query = Auth::user()->deviceJobs()->with(['deviceGroup', 'savedCommand']);

        if (isset($data['filters'])) {
            $filters = json_decode($data['filters']);

            foreach ($filters as $key => $value) {
                if ($key === 'unique_id') $query->uniqueIdLike($value->value);

                if ($key === 'name') $query->nameLike($value->value);

                if ($key === 'device_group_name') $query->deviceGroupNameLike($value->value);

                if ($key === 'saved_command_name') $query->savedCommandNameLike($value->value);

                if ($key === 'status') $query->status($value->value);

                if ($key === 'started_at') {
                    $dates = explode(" - ", $value->value);
                    $query->startedAtBetween($dates);
                }

                if ($key === 'completed_at') {
                    $dates = explode(" - ", $value->value);
                    $query->completedAtBetween($dates);
                }

                if ($key === 'globalFilter') {
                    $query->where(function ($query) use ($value) {
                        $query->uniqueIdLike($value->value)
                            ->orWhere->nameLike($value->value)
                            ->orWhere->deviceGroupNameLike($value->value)
                            ->orWhere->savedCommandNameLike($value->value);
                    });
                }
            }
        }

        if (isset($data['sortField'])) {
            if ($data['sortOrder'] === '1')
                $query->orderBy($data['sortField']);
            else
                $query->orderByDesc($data['sortField']);
        }

        $rows = $this->calculateDataTableFinalRowsAction->execute($data['rows'] ?? null);

        return $query->paginate($rows);
    }
}