<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CommandHistory extends Model
{
    use HasFactory;

    /**
     * Get the device that owns the command history.
     */
    public function device()
    {
        return $this->belongsTo('App\Models\Device');
    }
}
