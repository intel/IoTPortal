<?php
/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

namespace App\Actions\Mqtt;

class CheckIfValidPortalMqttTopics
{
    public function execute(string $username, string $clientId, string $topic): bool
    {
        $mqttConfig = config('mqttclient.connections.default');

        if ($username === $mqttConfig['username'] && $clientId === $mqttConfig['client_id'] && preg_match('/iotportal\/([\w\-]+)\/methods\/POST\/([\w\-_]+)\/\?\$rid=([\d]+)/', $topic)) {
            return true;
        }

        return false;
    }
}