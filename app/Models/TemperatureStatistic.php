<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TemperatureStatistic extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'temperature',
    ];

    /**
     * Get the device that owns the temperature statistic.
     */
    public function device()
    {
        return $this->belongsTo(Device::class);
    }
}
