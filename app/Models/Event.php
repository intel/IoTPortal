<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

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
}
