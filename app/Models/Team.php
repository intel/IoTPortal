<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    use HasFactory;

    /**
     * Get the admins that owns the team.
     */
    public function admins()
    {
        return $this->belongsToMany('App\Models\User')->wherePivot('role', 0);
    }

    /**
     * The users that joined the team.
     */
    public function users()
    {
        return $this->belongsToMany('App\Models\User');
    }

    /**
     * Get the devices for the team.
     */
    public function devices()
    {
        return $this->hasMany('App\Models\Device');
    }
}
