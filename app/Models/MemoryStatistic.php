<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MemoryStatistic extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'available_memory_in_bytes',
    ];

    /**
     * Get the device that owns the memory statistic.
     */
    public function device()
    {
        return $this->belongsTo('App\Models\Device');
    }
}
