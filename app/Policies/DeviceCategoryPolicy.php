<?php
/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

namespace App\Policies;

use App\Models\DeviceCategory;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class DeviceCategoryPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param User $user
     * @return mixed
     */
    public function viewAny(User $user): mixed
    {
        return true;
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param User $user
     * @param DeviceCategory $deviceCategory
     * @return mixed
     */
    public function view(User $user, DeviceCategory $deviceCategory): mixed
    {
        return $user->id === $deviceCategory->user_id;
    }

    /**
     * Determine whether the user can create models.
     *
     * @param User $user
     * @return mixed
     */
    public function create(User $user): mixed
    {
        return true;
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param User $user
     * @param DeviceCategory $deviceCategory
     * @return mixed
     */
    public function update(User $user, DeviceCategory $deviceCategory): mixed
    {
        return $user->id === $deviceCategory->user_id;
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param User $user
     * @return mixed
     */
    public function deleteMany(User $user): mixed
    {
        $ids = request()->ids;
        return $user->deviceCategories->whereIn('id', $ids)->count() === count($ids);
    }
}
