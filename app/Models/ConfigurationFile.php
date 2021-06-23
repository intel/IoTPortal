<?php

namespace App\Models;

use App\Traits\EloquentGetTableName;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ConfigurationFile extends Model
{
    use HasFactory, EloquentGetTableName;

    /**
     * Get the user that owns the configuration file.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
