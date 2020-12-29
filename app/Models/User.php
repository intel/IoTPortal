<?php

namespace App\Models;

use App\Helpers\Helper;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Str;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use  HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public static function boot()
    {
        parent::boot();
        self::creating(function ($model) {
            $model->unique_id = Str::uuid()->toString();
            $model->device_connection_key = Helper::generateDeviceConnectionKey();
        });
    }

    /**
     * Get the managed teams for the user.
     */
    public function managedTeams()
    {
        return $this->belongsToMany('App\Models\Team')->wherePivot('role', 0);
    }

    /**
     * The teams that the user joins.
     */
    public function teams()
    {
        return $this->belongsToMany('App\Models\Team');
    }

    /**
     * Get the owning devices for the user.
     */
    public function devices()
    {
        return $this->hasMany('App\Models\Device');
    }


    /**
     * Get the FOTA configurations for the user.
     */
    public function fotaConfigurations()
    {
        return $this->hasMany('App\Models\FotaConfiguration');
    }

    /**
     * Get the AOTA configurations for the user.
     */
    public function aotaConfigurations()
    {
        return $this->hasMany('App\Models\AotaConfiguration');
    }

    /**
     * Get the configuration files for the user.
     */
    public function configurationFiles()
    {
        return $this->hasMany('App\Models\ConfigurationFile');
    }
}
