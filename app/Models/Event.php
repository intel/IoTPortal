<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    const TYPE_PROPERTY = 'PROPERTY';
    const TYPE_TELEMETRY = 'TELEMETRY';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
    ];

    /**
     * Get the device that owns the event.
     */
    public function device()
    {
        return $this->belongsTo(Device::class);
    }

    /**
     * Get the event histories for the event.
     */
    public function eventHistories()
    {
        return $this->hasMany(EventHistory::class);
    }

    public function scopeName($query, $value)
    {
        return $query->where('name', $value);
    }

    public function scopeNameLike($query, $value)
    {
        return $query->where('name', 'like', "%{$value}%");
    }

    public function scopeProperty($query)
    {
        return $query->name(self::TYPE_PROPERTY);
    }

    public function scopeTelemetry($query)
    {
        return $query->name(self::TYPE_TELEMETRY);
    }

    public function scopeGetProperty($query)
    {
        return $query->property()->first();
    }

    public function scopeGetTelemetry($query)
    {
        return $query->telemetry()->first();
    }

    public function scopeGetOptions($query)
    {
        return $query->get(['id as value', 'name as label']);
    }
}
