<?php

namespace App\Models;

use App\Traits\EloquentGetTableName;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory, EloquentGetTableName;

    const EVENT_PROPERTY = 'PROPERTY';
    const EVENT_TELEMETRY = 'TELEMETRY';

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
        return $query->name(self::EVENT_PROPERTY);
    }

    public function scopeTelemetry($query)
    {
        return $query->name(self::EVENT_TELEMETRY);
    }

    public function scopeGetProperty($query)
    {
        return $query->property()->firstOrFail();
    }

    public function scopeGetTelemetry($query)
    {
        return $query->telemetry()->firstOrFail();
    }

    public function scopeGetOptions($query)
    {
        return $query->get(['id as value', 'name as label']);
    }
}
