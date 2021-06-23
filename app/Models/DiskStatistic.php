<?php

namespace App\Models;

use App\Traits\EloquentGetTableName;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DiskStatistic extends Model
{
    use HasFactory, EloquentGetTableName;

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
        return $this->belongsTo(Device::class);
    }
}
