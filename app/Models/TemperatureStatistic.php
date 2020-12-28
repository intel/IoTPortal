<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TemperatureStatistic extends Model
{
    use HasFactory;

    /**
     * Get the device that owns the temperature statistic.
     */
    public function device()
    {
        return $this->belongsTo('App\Models\Device');
    }
}
