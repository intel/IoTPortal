<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DiskStatistic extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'disk_percentage_used',
    ];

    /**
     * Get the device that owns the disk statistic.
     */
    public function device()
    {
        return $this->belongsTo('App\Models\Device');
    }
}
