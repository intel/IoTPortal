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
        'category_id',
        'status_id',
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
            $model->commands()->createMany([
                ['name' => 'OTA', 'method_name' => 'triggerota'],
                ['name' => 'AOTA', 'method_name' => 'triggeraota'],
                ['name' => 'FOTA', 'method_name' => 'triggerfota'],
                ['name' => 'SOTA', 'method_name' => 'triggersota'],
                ['name' => 'COTA', 'method_name' => 'triggerconfig'],
                ['name' => 'SHUTDOWN', 'method_name' => 'shutdown_device'],
                ['name' => 'REBOOT', 'method_name' => 'reboot_device'],
                ['name' => 'DECOMMISSION', 'method_name' => 'decommission_device'],
                ['name' => 'FILE_UPLOAD', 'method_name' => 'file_upload'],
            ]);

            $model->events()->createMany([
                ['name' => 'PROPERTY'],
                ['name' => 'TELEMETRY'],
            ]);
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
     * Get the category for the device.
     */
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    /**
     * Get the groups for the device.
     */
    public function groups()
    {
        return $this->belongsToMany(Group::class);
    }

    /**
     * Get the teams that can access the device.
     */
    public function teams()
    {
        return $this->belongsToMany(Team::class);
    }

    /**
     * Get the status for the device.
     */
    public function status()
    {
        return $this->belongsTo(Status::class);
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
     * Get the raw data for the device.
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

    public function getRegisteredAttribute()
    {
        return strtolower($this->status->name) === 'registered';
    }

    public function scopeUniqueIdLike($query, $value)
    {
        return $query->where('devices.unique_id', 'like', "%{$value}%");
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

    public function scopeCategoryId($query, $id)
    {
        return $query->where('category_id', $id);
    }

    public function scopeStatusId($query, $id)
    {
        return $query->where('status_id', $id);
    }

    public function scopeDeviceGroupUniqueId($query, $id)
    {
        return $query->whereHas('groups', function (Builder $query) use ($id) {
            $query->where('groups.unique_id', $id);
        });
    }
}
