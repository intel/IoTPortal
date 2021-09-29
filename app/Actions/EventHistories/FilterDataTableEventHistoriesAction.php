<?php
/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

namespace App\Actions\EventHistories;

use App\Actions\DataTables\CalculateDataTableFinalRowsAction;
use App\Models\Device;

class FilterDataTableEventHistoriesAction
{
    private CalculateDataTableFinalRowsAction $calculateDataTableFinalRowsAction;

    public function __construct(CalculateDataTableFinalRowsAction $calculateDataTableFinalRowsAction)
    {
        $this->calculateDataTableFinalRowsAction = $calculateDataTableFinalRowsAction;
    }

    public function execute(Device $device, array $data)
    {
        $query = $device->eventHistories()->with('event:id,name');

        if (isset($data['filters'])) {
            $filters = json_decode($data['filters']);

            foreach ($filters as $key => $value) {
                if ($key === 'raw_data') $query->rawDataLike($value->value);

                if ($key === 'event_id') $query->eventId($value->value);

                if ($key === 'created_at') {
                    $dates = explode(" - ", $value->value);
                    $query->createdAtBetween($dates);
                }

                if ($key === 'globalFilter') {
                    $query->where(function ($query) use ($value) {
                        $query->rawDataLike($value->value);
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