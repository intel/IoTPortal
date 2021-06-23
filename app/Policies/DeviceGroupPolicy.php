<?php

namespace App\Policies;

use App\Models\DeviceGroup;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class DeviceGroupPolicy
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
     * @param DeviceGroup $deviceGroup
     * @return mixed
     */
    public function view(User $user, DeviceGroup $deviceGroup): mixed
    {
        return $user->id === $deviceGroup->user_id;
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
     * @param DeviceGroup $deviceGroup
     * @return mixed
     */
    public function update(User $user, DeviceGroup $deviceGroup): mixed
    {
        return $user->id === $deviceGroup->user_id;
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
        return $user->deviceGroups->whereIn('id', $ids)->count() === count($ids);
    }
}
