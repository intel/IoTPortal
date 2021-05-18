<?php

namespace App\Models;

use App\Traits\HasMqttCredentials;
use App\Traits\HasUniqueId;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Device extends Model
{
    use HasFactory, HasUniqueId, HasMqttCredentials;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'bios_release_date',
        'bios_vendor',
        'bios_version',
        'cpu',
        'disk_information',
        'os_information',
        'system_manufacturer',
        'system_product_name',
        'total_memory',
        'device_category_id',
        'device_status_id',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'laravel_through_key',
    ];

    public static function boot()
    {
        parent::boot();
        static::creating(function ($model) {
            $uniqueId = self::generateUniqueId();
            $model->unique_id = $uniqueId;
            $model->name = $model->name ? $model->name : $uniqueId;
            $model->mqtt_password = self::generateEncryptedMqttPassword();
        });

        static::created(function ($model) {
            $commandRecords = config('constants.command_records');
            $eventRecords = config('constants.event_records');

            $model->commands()->createMany($commandRecords);
            $model->events()->createMany($eventRecords);
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
     * Get the device category for the device.
     */
    public function deviceCategory()
    {
        return $this->belongsTo(DeviceCategory::class);
    }

    /**
     * Get the device groups for the device.
     */
    public function deviceGroups()
    {
        return $this->belongsToMany(DeviceGroup::class);
    }

    /**
     * Get the teams that can access the device.
     */
    public function teams()
    {
        return $this->belongsToMany(Team::class);
    }

    /**
     * Get the device status for the device.
     */
    public function deviceStatus()
    {
        return $this->belongsTo(DeviceStatus::class);
    }

    /**
     * Get the commands for the device.
     */
    public function commands()
    {
        return $this->hasMany(Command::class);
    }

    /**
     * Get all of the command histories for the device.
     */
    public function commandHistories()
    {
        return $this->hasManyThrough(CommandHistory::class, Command::class);
    }

    /**
     * Get the events for the device.
     */
    public function events()
    {
        return $this->hasMany(Event::class);
    }

    /**
     * Get the event histories for the device.
     */
    public function eventHistories()
    {
        return $this->hasManyThrough(EventHistory::class, Event::class);
    }

    /**
     * Get the temperature statistics for the device.
     */
    public function temperatureStatistics()
    {
        return $this->hasMany(TemperatureStatistic::class);
    }

    /**
     * Get the memory statistics for the device.
     */
    public function memoryStatistics()
    {
        return $this->hasMany(MemoryStatistic::class);
    }

    /**
     * Get the disk statistics for the device.
     */
    public function diskStatistics()
    {
        return $this->hasMany(DiskStatistic::class);
    }

    /**
     * Get the network statistics for the device.
     */
    public function networkStatistics()
    {
        return $this->hasMany(NetworkStatistic::class);
    }

    /**
     * Get the container statistics for the device.
     */
    public function containerStatistics()
    {
        return $this->hasMany(ContainerStatistic::class);
    }

    /**
     * Get the cpu statistics for the device.
     */
    public function cpuStatistics()
    {
        return $this->hasMany(CpuStatistic::class);
    }

    public function scopeId($query, $value)
    {
        return $query->where('id', $value);
    }

    public function scopeIdIn($query, $value)
    {
        return $query->whereIn('devices.id', $value);
    }

    public function scopeUniqueId($query, $value)
    {
        return $query->where('unique_id', $value);
    }

    public function scopeUniqueIdLike($query, $value)
    {
        return $query->where('devices.unique_id', 'like', "%{$value}%");
    }

    public function scopeName($query, $value)
    {
        return $query->where('devices.name', $value);
    }

    public function scopeNameLike($query, $value)
    {
        return $query->where('devices.name', 'like', "%{$value}%");
    }

    public function scopeBiosVendorLike($query, $value)
    {
        return $query->where('bios_vendor', 'like', "%{$value}%");
    }

    public function scopeBiosVersionLike($query, $value)
    {
        return $query->where('bios_version', 'like', "%{$value}%");
    }

    public function scopeDeviceCategoryId($query, $value)
    {
        return $query->where('device_category_id', $value);
    }

    public function scopeDeviceStatusId($query, $value)
    {
        return $query->where('device_status_id', $value);
    }

    public function scopeDeviceGroupId($query, $value)
    {
        return $query->whereHas('deviceGroups', function (Builder $query) use ($value) {
            $query->where('device_groups.id', $value);
        });
    }

    public function scopeDeviceGroupUniqueId($query, $value)
    {
        return $query->whereHas('deviceGroups', function (Builder $query) use ($value) {
            $query->where('device_groups.unique_id', $value);
        });
    }

    public function scopeExcludeId($query, $value)
    {
        return $query->where('devices.id', '!=', $value);
    }

    public function scopeUserId($query, $value)
    {
        return $query->whereHas('deviceCategory', function (Builder $query) use ($value) {
            $query->userId($value);
        });
    }

    public function isRegistered()
    {
        return $this->deviceStatus->name === DeviceStatus::TYPE_REGISTERED;
    }

    public function isProvisioned()
    {
        return $this->deviceStatus->name === DeviceStatus::TYPE_PROVISIONED;
    }
}
