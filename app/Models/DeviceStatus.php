<?php

namespace App\Models;

use App\Traits\EloquentGetTableName;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DeviceStatus extends Model
{
    use HasFactory, EloquentGetTableName;

    const STATUS_REGISTERED = 'REGISTERED';
    const STATUS_ONLINE = 'ONLINE';
    const STATUS_OFFLINE = 'OFFLINE';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
    ];

    /**
     * Get the devices for the device status.
     */
    public function devices()
    {
        return $this->hasMany(Device::class);
    }

    public function scopeId($query, $value)
    {
        return $query->where('id', $value);
    }

    public function scopeIdIn($query, $value)
    {
        return $query->whereIn('device_statuses.id', $value);
    }

    public function scopeUniqueId($query, $value)
    {
        return $query->where('unique_id', $value);
    }

    public function scopeUniqueIdLike($query, $value)
    {
        return $query->where('unique_id', 'like', "%{$value}%");
    }

    public function scopeName($query, $value)
    {
        return $query->where('name', $value);
    }

    public function scopeNameLike($query, $value)
    {
        return $query->where('name', 'like', "%{$value}%");
    }

    public function scopeRegistered()
    {
        return $this->name(self::STATUS_REGISTERED);
    }

    public function scopeOnline()
    {
        return $this->name(self::STATUS_ONLINE);
    }

    public function scopeOffline()
    {
        return $this->name(self::STATUS_OFFLINE);
    }

    public function scopeGetRegistered()
    {
        return $this->registered()->firstOrFail();
    }

    public function scopeGetOnline()
    {
        return $this->online()->firstOrFail();
    }

    public function scopeGetOffline()
    {
        return $this->offline()->firstOrFail();
    }

    public function scopeGetOptions($query)
    {
        return $query->get(['id as value', 'name as label']);
    }
}
