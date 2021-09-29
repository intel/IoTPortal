<?php
/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

namespace App\Models;

use App\Traits\EloquentGetTableName;
use App\Traits\HasUniqueId;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DeviceGroup extends Model
{
    use HasFactory, EloquentGetTableName, HasUniqueId;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'user_id',
    ];

    public static function boot()
    {
        parent::boot();
        self::creating(function ($model) {
            $model->unique_id = self::generateUniqueId();
        });
    }

    /**
     * Get the route key for the model.
     *
     * @return string
     */
    public function getRouteKeyName()
    {
        return 'unique_id';
    }

    /**
     * Get the user that owns the device group.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the devices for the device group.
     */
    public function devices()
    {
        return $this->belongsToMany(Device::class);
    }

    /**
     * Get the device jobs for the device group.
     */
    public function deviceJobs()
    {
        return $this->hasMany(DeviceJob::class);
    }

    public function scopeId($query, $value)
    {
        return $query->where('id', $value);
    }

    public function scopeIdIn($query, $value)
    {
        return $query->whereIn('device_groups.id', $value);
    }

    public function scopeUniqueId($query, $value)
    {
        return $query->where('unique_id', $value);
    }

    public function scopeUniqueIdLike($query, $value)
    {
        return $query->where('unique_id', 'like', "%{$value}%");
    }

    public function scopeNameLike($query, $value)
    {
        return $query->where('name', 'like', "%{$value}%");
    }

    public function scopeUserId($query, $value)
    {
        return $query->where('user_id', $value);
    }

    public function scopeGetOptions($query)
    {
        return $query->get(['id as value', 'name as label']);
    }
}
