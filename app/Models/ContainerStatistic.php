<?php

namespace App\Models;

use App\Traits\EloquentGetTableName;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContainerStatistic extends Model
{
    use HasFactory, EloquentGetTableName;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'container_message',
    ];

    /**
     * Get the device that owns the container statistic.
     */
    public function device()
    {
        return $this->belongsTo(Device::class);
    }
}
