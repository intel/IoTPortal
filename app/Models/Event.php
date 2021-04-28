<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

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
}
