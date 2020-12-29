<?php

namespace App\Helpers;

use Illuminate\Support\Str;

class Helper {
    static function generateDeviceConnectionKey(): string
    {
        return Str::random(64);
    }

    static function generateMqttPassword(): string
    {
        return Str::random(64);
    }
}
