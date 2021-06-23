<?php

namespace App\Actions\DeviceGroups;

use App\Models\DeviceGroup;
use App\Models\User;

class CreateDeviceGroupAction
{
    public function execute(User $user, array $data)
    {
        $deviceGroup = DeviceGroup::create([
            'name' => $data['name'],
            'user_id' => $user->id,
        ]);

        $deviceGroup->devices()->attach($data['devices']);

        return $deviceGroup;
    }
}