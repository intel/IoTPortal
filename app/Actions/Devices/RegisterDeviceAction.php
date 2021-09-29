<?php
/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

namespace App\Actions\Devices;

use App\Exceptions\InvalidDeviceConnectionKeyException;
use App\Models\User;

class RegisterDeviceAction
{
    /**
     * @var FindDeviceForUserByUniqueIdAction
     */
    private FindDeviceForUserByUniqueIdAction $findDeviceForUserByUniqueIdAction;

    /**
     * @var CreateDeviceAction
     */
    private CreateDeviceAction $createDeviceAction;

    public function __construct(FindDeviceForUserByUniqueIdAction $findDeviceForUserByUniqueIdAction, CreateDeviceAction $createDeviceAction)
    {
        $this->findDeviceForUserByUniqueIdAction = $findDeviceForUserByUniqueIdAction;
        $this->createDeviceAction = $createDeviceAction;
    }

    public function execute(array $data, string $bearerToken)
    {
        if (isset($data['unique_id']) && $bearerToken) {
            $user = User::uniqueId($data['unique_id'])->firstOrFail();

            if ($user->validateDeviceConnectionKey($bearerToken)) {
                if (isset($data['device_unique_id'])) {
                    return $this->findDeviceForUserByUniqueIdAction->execute($user, $data['device_unique_id']);
                } else {
                    return $this->createDeviceAction->execute($user);
                }
            } else {
                throw new InvalidDeviceConnectionKeyException('Invalid device connection key.');
            }
        }
    }
}