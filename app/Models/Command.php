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
        'method_name'
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
}
