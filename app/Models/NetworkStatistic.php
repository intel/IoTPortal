<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NetworkStatistic extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'network_message',
    ];

    /**
     * Get the device that owns the network statistic.
     */
    public function device()
    {
        return $this->belongsTo(Device::class);
    }
}
