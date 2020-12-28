<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DiskStatistic extends Model
{
    use HasFactory;

    /**
     * Get the device that owns the disk statistic.
     */
    public function device()
    {
        return $this->belongsTo('App\Models\Device');
    }
}
