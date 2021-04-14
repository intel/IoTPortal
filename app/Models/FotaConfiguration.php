<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FotaConfiguration extends Model
{
    use HasFactory;

    /**
     * Get the user that owns the FOTA configuration.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
