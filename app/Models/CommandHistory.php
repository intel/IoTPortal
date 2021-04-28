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
        'type',
        'payload',
        'responded_at',
    ];

    /**
     * Get the command that owns the command history.
     */
    public function command()
    {
        return $this->belongsTo(Command::class);
    }

    /**
     * Get the job that owns the command history.
     */
    public function job()
    {
        return $this->belongsTo(Command::class);
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
