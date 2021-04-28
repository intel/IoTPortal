<?php


namespace App\Traits;


use Illuminate\Support\Facades\Crypt;

trait HasMqttCredentials
{
    public static function generateEncryptedMqttPassword()
    {
        return Crypt::encryptString(bin2hex(random_bytes(32)));
    }

    public static function encryptMqttPassword($value)
    {
        return Crypt::encryptString($value);
    }

    public static function decryptMqttPassword($value)
    {
        return Crypt::decryptString($value);
    }

    public function validateMqttPassword($value)
    {
        return $this->mqtt_password === $value;
    }

    public function getMqttPasswordAttribute($value)
    {
        return static::decryptMqttPassword($value);
    }
}