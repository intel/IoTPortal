<?php

namespace App\Helpers;

use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;


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

    static function mqttPublish(string $topic, string $payload): void
    {
        $mqttConfig = config('mqttclient.connections.default');

        $mqtt = new \PhpMqtt\Client\MqttClient($mqttConfig['host'], $mqttConfig['port'], $mqttConfig['client_id']);
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

    static function mapArrayKeyByArray(array $array, array $arrayMap)
    {
        foreach ($array as $k => $v) {
            if ($k !== $arrayMap[$k]) {
                unset ($array[$k]);
                $newKey = $arrayMap[$k];
                $array[$newKey] = $v;
            }
        }
    }

}
