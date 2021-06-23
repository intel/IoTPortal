<?php

namespace App\Models;

use App\Traits\EloquentGetTableName;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AotaConfiguration extends Model
{
    use HasFactory, EloquentGetTableName;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
    ];

    /**
     * Get the user that owns the AOTA configuration.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
