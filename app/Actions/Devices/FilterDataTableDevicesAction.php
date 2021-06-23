<?php

namespace App\Actions\Devices;

use App\Actions\DataTables\CalculateDataTableFinalRowsAction;
use Illuminate\Support\Facades\Auth;

class FilterDataTableDevicesAction
{
    private CalculateDataTableFinalRowsAction $calculateDataTableFinalRowsAction;

    public function __construct(CalculateDataTableFinalRowsAction $calculateDataTableFinalRowsAction)
    {
        $this->calculateDataTableFinalRowsAction = $calculateDataTableFinalRowsAction;
    }

    public function execute(array $data)
    {
        $query = Auth::user()->devices()->with('deviceCategory:id,name', 'deviceStatus:id,name');

        if (isset($data['deviceGroupId'])) $query->deviceGroupId($data['deviceGroupId']);

        if (isset($data['deviceGroupUniqueId'])) $query->deviceGroupUniqueId($data['deviceGroupUniqueId']);

        if (isset($data['filters'])) {
            $filters = json_decode($data['filters']);

            foreach ($filters as $key => $value) {
                if ($key === 'unique_id') $query->uniqueIdLike($value->value);

                if ($key === 'name') $query->nameLike($value->value);

                if ($key === 'bios_vendor') $query->biosVendorLike($value->value);

                if ($key === 'bios_version') $query->biosVersionLike($value->value);

                if ($key === 'device_category_id') $query->deviceCategoryId($value->value);

                if ($key === 'device_status_id') $query->deviceStatusId($value->value);

                if ($key === 'globalFilter') {
                    $query->where(function ($query) use ($value) {
                        $query->uniqueIdLike($value->value)
                            ->orWhere->nameLike($value->value)
                            ->orWhere->biosVendorLike($value->value)
                            ->orWhere->biosVersionLike($value->value);
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

        if (isset($data['fetchAll']) && $data['fetchAll'] === 'true') {
            return $query->paginate($query->count());
        }

        $rows = $this->calculateDataTableFinalRowsAction->execute($data['rows'] ?? null);

        return $query->paginate($rows);
    }
}