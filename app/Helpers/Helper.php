<?php

namespace App\Helpers;

class Helper
{
    static function isJson(string $string): bool
    {
        json_decode($string);
        return (json_last_error() == JSON_ERROR_NONE);
    }

    static function sanitisePayload(string|array $payload): string|null
    {
        if (is_string($payload) && Helper::isJson($payload)) {
            $payload = json_decode($payload);
            if (is_string($payload)) {
                $payload = json_decode($payload);
            }
        } elseif (is_string($payload)) {
            return $payload;
        }
        // Encode back to string for payload
        return json_encode($payload);
    }

    static function mapArrayKeyByArray(array $array, array $arrayMap): array
    {
        foreach ($array as $k => $v) {
            if ($k !== $arrayMap[$k]) {
                unset ($array[$k]);
                $newKey = $arrayMap[$k];
                $array[$newKey] = $v;
            }
        }
        return $array;
    }
}
