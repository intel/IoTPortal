<?php

namespace App\Traits;

use Illuminate\Support\Facades\Crypt;

trait HasMqttCredentials
{
    public static function generateEncryptedMqttPassword(): string
    {
        return Crypt::encryptString(bin2hex(random_bytes(32)));
    }

    public static function encryptMqttPassword($value): string
    {
        return Crypt::encryptString($value);
    }

    public static function decryptMqttPassword($value): string
    {
        return Crypt::decryptString($value);
    }

    public function validateMqttPassword($value): bool
    {
        return $this->mqtt_password === $value;
    }

    public function getMqttPasswordAttribute($value): string
    {
        return static::decryptMqttPassword($value);
    }
}