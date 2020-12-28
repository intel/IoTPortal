<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AotaConfiguration extends Model
{
    use HasFactory;

    /**
     * Get the user that owns the AOTA configuration.
     */
    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }
}
