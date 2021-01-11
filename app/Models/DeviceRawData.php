<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DeviceRawData extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'raw_data',
    ];

    /**
     * Get the device that owns the raw data.
     */
    public function device()
    {
        return $this->belongsTo('App\Models\Device');
    }
}
