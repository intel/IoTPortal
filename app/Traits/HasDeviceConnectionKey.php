<?php


namespace App\Traits;


use Illuminate\Support\Facades\Crypt;

trait HasDeviceConnectionKey
{
    public static function deviceConnectionKeyExists($value)
    {
        return static::where('device_connection_key', $value)->exists();
    }

    public static function generateEncryptedDeviceConnectionKey()
    {
        $deviceConnectionKey = Crypt::encryptString(bin2hex(random_bytes(32)));

        if (static::deviceConnectionKeyExists($deviceConnectionKey)) {
            return static::generateEncryptedDeviceConnectionKey();
        }

        return $deviceConnectionKey;
    }

    public static function decryptDeviceConnectionKey($value)
    {
        return Crypt::decryptString($value);
    }

    public function validateDeviceConnectionKey($value)
    {
        return $this->device_connection_key === $value;
    }

    public function getDeviceConnectionKeyAttribute($value)
    {
        return static::decryptDeviceConnectionKey($value);
    }
}