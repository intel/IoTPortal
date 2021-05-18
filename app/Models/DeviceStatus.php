<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DeviceStatus extends Model
{
    use HasFactory;

    const TYPE_REGISTERED = 'REGISTERED';
    const TYPE_PROVISIONED = 'PROVISIONED';

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
        return $this->name(self::TYPE_REGISTERED);
    }

    public function scopeProvisioned()
    {
        return $this->name(self::TYPE_PROVISIONED);
    }

    public function scopeGetRegistered()
    {
        return $this->registered()->first();
    }

    public function scopeGetProvisioned()
    {
        return $this->provisioned()->first();
    }

    public function scopeGetOptions($query)
    {
        return $query->get(['id as value', 'name as label']);
    }
}
