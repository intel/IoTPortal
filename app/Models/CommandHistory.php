<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CommandHistory extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'payload',
        'error',
        'started_at',
        'completed_at',
        'responded_at',
        'command_id',
        'device_job_id',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'responded_at' => 'datetime',
    ];

    /**
     * Get the command that owns the command history.
     */
    public function command()
    {
        return $this->belongsTo(Command::class);
    }

    /**
     * Get the device job that owns the command history.
     */
    public function deviceJob()
    {
        return $this->belongsTo(DeviceJob::class);
    }

    public function scopePayloadLike($query, $value)
    {
        return $query->where('payload', 'like', "%{$value}%");
    }

    public function scopeCommandId($query, $value)
    {
        return $query->where('command_id', $value);
    }

    public function scopeRespondedAtBetween($query, $dates)
    {
        return $query->whereBetween('responded_at', $dates);
    }

    public function scopeCreatedAtBetween($query, $dates)
    {
        return $query->whereBetween('command_histories.created_at', $dates);
    }
}
