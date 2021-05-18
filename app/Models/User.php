<?php

namespace App\Models;

use App\Traits\HasDeviceConnectionKey;
use App\Traits\HasUniqueId;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasUniqueId, HasDeviceConnectionKey;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public static function boot()
    {
        parent::boot();
        self::creating(function ($model) {
            $model->unique_id = self::generateUniqueId();
            $model->device_connection_key = self::generateEncryptedDeviceConnectionKey();
        });
    }

    /**
     * Get the managed teams for the user.
     */
    public function managedTeams()
    {
        return $this->belongsToMany(Team::class)->wherePivot('role', 0);
    }

    /**
     * The teams that the user joins.
     */
    public function teams()
    {
        return $this->belongsToMany(Team::class);
    }

    /**
     * Get all of the device jobs for the user.
     */
    public function deviceJobs()
    {
        return $this->hasMany(DeviceJob::class);
    }

    /**
     * Get all of the device categories for the user.
     */
    public function deviceCategories()
    {
        return $this->hasMany(DeviceCategory::class);
    }

    /**
     * Get all of the device groups for the user.
     */
    public function deviceGroups()
    {
        return $this->hasMany(DeviceGroup::class);
    }

    /**
     * Get all of the saved commands for the user.
     */
    public function savedCommands()
    {
        return $this->hasMany(SavedCommand::class);
    }

    /**
     * Get the owning devices for the user.
     */
    public function devices()
    {
        return $this->hasManyThrough(Device::class, DeviceCategory::class);
    }

    /**
     * Get the FOTA configurations for the user.
     */
    public function fotaConfigurations()
    {
        return $this->hasMany(FotaConfiguration::class);
    }

    /**
     * Get the AOTA configurations for the user.
     */
    public function aotaConfigurations()
    {
        return $this->hasMany(AotaConfiguration::class);
    }

    /**
     * Get the configuration files for the user.
     */
    public function configurationFiles()
    {
        return $this->hasMany(ConfigurationFile::class);
    }

    public function scopeId($query, $value)
    {
        return $query->where('id', $value);
    }

    public function scopeIdIn($query, $value)
    {
        return $query->whereIn('users.id', $value);
    }

    public function scopeUniqueId($query, $value)
    {
        return $query->where('unique_id', $value);
    }

    public function scopeUniqueIdLike($query, $value)
    {
        return $query->where('unique_id', 'like', "%{$value}%");
    }

    public function scopeNameLike($query, $value)
    {
        return $query->where('name', 'like', "%{$value}%");
    }
}
