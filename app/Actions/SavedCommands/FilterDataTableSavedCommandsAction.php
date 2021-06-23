<?php

namespace App\Actions\SavedCommands;

use App\Actions\DataTables\CalculateDataTableFinalRowsAction;
use Illuminate\Support\Facades\Auth;

class FilterDataTableSavedCommandsAction
{
    private CalculateDataTableFinalRowsAction $calculateDataTableFinalRowsAction;

    public function __construct(CalculateDataTableFinalRowsAction $calculateDataTableFinalRowsAction)
    {
        $this->calculateDataTableFinalRowsAction = $calculateDataTableFinalRowsAction;
    }

    public function execute(array $data)
    {
        $query = Auth::user()->savedCommands();

        if (isset($data['filters'])) {
            $filters = json_decode($data['filters']);

            foreach ($filters as $key => $value) {
                if ($key === 'unique_id') $query->uniqueIdLike($value->value);

                if ($key === 'name') $query->nameLike($value->value);

                if ($key === 'command_name') $query->commandNameLike($value->value);

                if ($key === 'globalFilter') {
                    $query->where(function ($query) use ($value) {
                        $query->uniqueIdLike($value->value)
                            ->orWhere->nameLike($value->value)
                            ->orWhere->commandNameLike($value->value);
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