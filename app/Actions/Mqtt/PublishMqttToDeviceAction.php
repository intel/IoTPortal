<?php

namespace App\Actions\Mqtt;

class PublishMqttToDeviceAction
{
    private PublishMqttAction $publishMqttAction;

    public function __construct(PublishMqttAction $publishMqttAction)
    {
        $this->publishMqttAction = $publishMqttAction;
    }

    public function execute(string $deviceUniqueId, string $methodName, string $requestId, string $payload)
    {
        $this->publishMqttAction->execute('iotportal/' . $deviceUniqueId . '/methods/POST/' . $methodName . '/?$rid=' . $requestId, $payload);
    }
}