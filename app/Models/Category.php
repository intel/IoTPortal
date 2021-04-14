<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'laravel_through_key',
    ];

    /**
     * Get the user that owns the device category.
     */
    public function user()
    {
        return $this->belongsTo(Category::class);
    }

    /**
     * Get the devices for the device category.
     */
    public function devices()
    {
        return $this->hasMany(Device::class);
    }
}
