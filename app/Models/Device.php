<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Device extends Model
{
    use HasFactory;

    /**
     * Get the team that owns the device.
     */
    public function team()
    {
        return $this->belongsTo('App\Models\Team');
    }

    /**
     * Get the raw data for the device.
     */
    public function deviceRawData()
    {
        return $this->hasMany('App\Models\DeviceRawData');
    }

    /**
     * Get the temperature statistics for the device.
     */
    public function temperatureStatistics()
    {
        return $this->hasMany('App\Models\TemperatureStatistic');
    }

    /**
     * Get the memory statistics for the device.
     */
    public function memoryStatistics()
    {
        return $this->hasMany('App\Models\MemoryStatistic');
    }

    /**
     * Get the disk statistics for the device.
     */
    public function diskStatistics()
    {
        return $this->hasMany('App\Models\DiskStatistic');
    }

    /**
     * Get the network statistics for the device.
     */
    public function networkStatistics()
    {
        return $this->hasMany('App\Models\NetworkStatistic');
    }

    /**
     * Get the container statistics for the device.
     */
    public function containerStatistics()
    {
        return $this->hasMany('App\Models\ContainerStatistic');
    }

    /**
     * Get the command histories for the device.
     */
    public function commandHistories()
    {
        return $this->hasMany('App\Models\CommandHistory');
    }
}
