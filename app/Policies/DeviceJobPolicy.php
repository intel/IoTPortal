<?php

namespace App\Policies;

use App\Models\DeviceJob;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class DeviceJobPolicy
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
     * @param DeviceJob $deviceJob
     * @return mixed
     */
    public function view(User $user, DeviceJob $deviceJob): mixed
    {
        return $user->id === $deviceJob->user_id;
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
     * Determine whether the user can delete the model.
     *
     * @param User $user
     * @return mixed
     */
    public function deleteMany(User $user): mixed
    {
        $ids = request()->ids;
        return $user->deviceJobs->whereIn('id', $ids)->count() === count($ids);
    }
}
