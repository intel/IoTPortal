<?php
/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

namespace App\Actions\Mqtt;

class CheckIfValidPortalMqttCredentials
{
    public function execute(string $username, string $password, string $clientId): bool
    {
        $mqttConfig = config('mqttclient.connections.default');

        if ($username === $mqttConfig['username'] && $password === $mqttConfig['password'] && $clientId === $mqttConfig['client_id']) {
            return true;
        }

        return false;
    }
}