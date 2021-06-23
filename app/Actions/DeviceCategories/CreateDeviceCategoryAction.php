<?php

namespace App\Actions\DeviceCategories;

use App\Models\DeviceCategory;
use App\Models\User;

class CreateDeviceCategoryAction
{
    public function execute(User $user, array $data): DeviceCategory
    {
        return DeviceCategory::create([
            'name' => $data['name'],
            'user_id' => $user->id,
        ]);
    }
}