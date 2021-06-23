<?php

namespace App\Actions\DeviceGroups;

use App\Models\DeviceGroup;

class FindDeviceGroupByIdOrUniqueIdAction
{
    public function execute(string $id): DeviceGroup
    {
        $query = is_numeric($id) ? DeviceGroup::id($id) : DeviceGroup::uniqueId($id);

        return $query->firstOrFail();
    }
}