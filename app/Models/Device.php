<?php

namespace App\Models;

use App\Helpers\Helper;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Device extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'status',
    ];

    public static function boot()
    {
        parent::boot();
        self::creating(function ($model) {
            $uniqueId = Str::uuid()->toString();

            $model->unique_id = $uniqueId;
            $model->name = $uniqueId;
            $model->status = 0; //registered
            $model->mqtt_password = Helper::generateMqttPassword();
        });
    }

    /**
     * Get the route key for the model.
     *
     * @return string
     */
    public function getRouteKeyName()
    {
        return 'unique_id';
    }

    public function notFoundMessage()
    {
        return 'Device id not found.';
    }

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
     * Get the cpu statistics for the device.
     */
    public function cpuStatistics()
    {
        return $this->hasMany('App\Models\CpuStatistic');
    }

    /**
     * Get the command histories for the device.
     */
    public function commandHistories()
    {
        return $this->hasMany('App\Models\CommandHistory');
    }
}
