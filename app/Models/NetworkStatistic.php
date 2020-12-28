<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NetworkStatistic extends Model
{
    use HasFactory;

    /**
     * Get the device that owns the network statistic.
     */
    public function device()
    {
        return $this->belongsTo('App\Models\Device');
    }
}
