<?php

namespace App\Helpers;

use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use PhpMqtt\Client\MQTTClient;

class Helper
{
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

    static function isJson(string $string)
    {
        json_decode($string);
        return (json_last_error() == JSON_ERROR_NONE);
    }

    static function sanitisePayload(string|array $payload): string|null
    {
        Log::debug('root sanitisePayload->'.$payload);
        if (is_string($payload) && Helper::isJson($payload)) {
            Log::debug('isstring and isjson sanitisePayload->'.$payload);
            $payload = json_decode($payload);
            if (is_string($payload)) {
                $payload = json_decode($payload);
            }
        } elseif (is_string($payload)) {
            Log::debug('isstring only sanitisePayload->'.$payload);
            return $payload;
        }
        // Encode back to string for payload
        return json_encode($payload);
    }

    static function sanitisePayloadBackup(string $payload)
    {
        if (is_array($payload)) {   // Encode array
            $payload = json_encode($payload);
        } elseif (is_string($payload) && Helper::isJson($payload)) {
            // Decode json string
            $payload = json_decode($payload);
            // Further decode json string with backslash
            if (is_string($payload)) {
                $payload = json_decode($payload);
            }
            // Encode back to string for payload
            $payload = json_encode($payload);
        }
        return $payload;
    }
}
