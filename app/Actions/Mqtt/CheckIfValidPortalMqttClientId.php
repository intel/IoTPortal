<?php

namespace App\Actions\Mqtt;

class CheckIfValidPortalMqttClientId
{
    public function execute(string $clientId): bool
    {
        $mqttConfig = config('mqttclient.connections.default');

        return $clientId === $mqttConfig['client_id'];
    }
}