<?php

namespace App\Helpers;

use Illuminate\Support\Str;
use PhpMqtt\Client\MQTTClient;

class Helper {
    static function generateDeviceConnectionKey(): string
    {
        return Str::random(64);
    }

    static function generateMqttPassword(): string
    {
        return Str::random(64);
    }

    static function createMqttClient(string $topic, string $payload, callable $callback): void
    {
        $mqttConfig = config('mqttclient.connections.default');
        $mqtt = new MQTTClient($mqttConfig['host'], $mqttConfig['port'], $mqttConfig['client_id']);
        $mqtt->connect();
        $mqtt->subscribe($topic, $callback);
        $mqtt->loop(true);
        $mqtt->close();
    }

    static function mqttPublish(string $topic, string $payload): void
    {
        $mqttConfig = config('mqttclient.connections.default');

        $mqtt = new MQTTClient($mqttConfig['host'], $mqttConfig['port'], $mqttConfig['client_id']);
        $mqtt->connect();
        $mqtt->publish($topic, $payload);
        $mqtt->close();
    }
}
