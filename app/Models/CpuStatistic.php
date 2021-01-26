<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CpuStatistic extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'system_cpu_percentage',
    ];

    /**
     * Get the device that owns the container statistic.
     */
    public function device()
    {
        return $this->belongsTo('App\Models\Device');
    }
}
