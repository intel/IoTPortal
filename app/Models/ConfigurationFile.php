<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ConfigurationFile extends Model
{
    use HasFactory;

    /**
     * Get the user that owns the configuration file.
     */
    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }
}
