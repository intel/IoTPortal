<?php

namespace App\Actions\DeviceGroups;

use App\Models\DeviceGroup;

class DeleteMultipleDeviceGroupsAction
{
    public function execute(array $ids): bool
    {
        return DeviceGroup::idIn($ids)->delete();
    }
}