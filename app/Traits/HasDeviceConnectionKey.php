<?php
/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

namespace App\Traits;

use Illuminate\Support\Facades\Crypt;

trait HasDeviceConnectionKey
{
    public static function deviceConnectionKeyExists($value)
    {
        return static::where('device_connection_key', $value)->exists();
    }

    public static function generateEncryptedDeviceConnectionKey(): string
    {
        $deviceConnectionKey = Crypt::encryptString(bin2hex(random_bytes(32)));

        if (static::deviceConnectionKeyExists($deviceConnectionKey)) {
            return static::generateEncryptedDeviceConnectionKey();
        }

        return $deviceConnectionKey;
    }

    public static function decryptDeviceConnectionKey($value): string
    {
        return Crypt::decryptString($value);
    }

    public function validateDeviceConnectionKey($value): bool
    {
        return $this->device_connection_key === $value;
    }

    public function getDeviceConnectionKeyAttribute($value): string
    {
        return static::decryptDeviceConnectionKey($value);
    }
}