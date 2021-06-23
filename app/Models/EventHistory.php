<?php

namespace App\Models;

use App\Traits\EloquentGetTableName;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EventHistory extends Model
{
    use HasFactory, EloquentGetTableName;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'raw_data',
        'event_id',
    ];

    /**
     * Get the event that owns the event history.
     */
    public function event()
    {
        return $this->belongsTo(Event::class);
    }

    public function scopeRawDataLike($query, $value)
    {
        return $query->where('raw_data', 'like', "%{$value}%");
    }

    public function scopeEventId($query, $value)
    {
        return $query->where('event_id', $value);
    }

    public function scopeCreatedAtBetween($query, $dates)
    {
        return $query->whereBetween('event_histories.created_at', $dates);
    }


}
