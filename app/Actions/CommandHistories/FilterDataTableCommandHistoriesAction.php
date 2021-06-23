<?php

namespace App\Actions\CommandHistories;

use App\Actions\DataTables\CalculateDataTableFinalRowsAction;
use App\Models\Device;

class FilterDataTableCommandHistoriesAction
{
    private CalculateDataTableFinalRowsAction $calculateDataTableFinalRowsAction;

    public function __construct(CalculateDataTableFinalRowsAction $calculateDataTableFinalRowsAction)
    {
        $this->calculateDataTableFinalRowsAction = $calculateDataTableFinalRowsAction;
    }

    public function execute(Device $device, array $data)
    {
        $query = $device->commandHistories()->with('command:id,name');

        if (isset($data['filters'])) {
            $filters = json_decode($data['filters']);

            foreach ($filters as $key => $value) {
                if ($key === 'payload') $query->payloadLike($value->value);

                if ($key === 'command_id') $query->commandId($value->value);

                if ($key === 'responded_at') {
                    $dates = explode(" - ", $value->value);
                    $query->respondedAtBetween($dates);
                }

                if ($key === 'created_at') {
                    $dates = explode(" - ", $value->value);
                    $query->createdAtBetween($dates);
                }

                if ($key === 'globalFilter') {
                    $query->where(function ($query) use ($value) {
                        $query->payloadLike($value->value);
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