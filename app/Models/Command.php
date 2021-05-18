<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Command extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'method_name',
    ];

    /**
     * Get the device that owns the command.
     */
    public function device()
    {
        return $this->belongsTo(Device::class);
    }

    /**
     * Get the command histories for the command.
     */
    public function commandHistories()
    {
        return $this->hasMany(CommandHistory::class);
    }

    public function scopeId($query, $value)
    {
        return $query->where('id', $value);
    }

    public function scopeIdIn($query, $value)
    {
        return $query->whereIn('devices.id', $value);
    }

    public function scopeUniqueId($query, $value)
    {
        return $query->where('unique_id', $value);
    }

    public function scopeUniqueIdLike($query, $value)
    {
        return $query->where('devices.unique_id', 'like', "%{$value}%");
    }

    public function scopeName($query, $value)
    {
        return $query->where('name', $value);
    }

    public function scopeNameLike($query, $value)
    {
        return $query->where('name', 'like', "%{$value}%");
    }

    public function scopeGetOptions($query)
    {
        return $query->get(['id as value', 'name as label']);
    }
}
