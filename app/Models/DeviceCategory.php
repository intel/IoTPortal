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

class DeviceCategory extends Model
{
    use HasFactory, EloquentGetTableName, HasUniqueId;

    const CATEGORY_UNCATEGORIZED = 'UNCATEGORIZED';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'user_id',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'laravel_through_key',
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

    public function notFoundMessage()
    {
        return 'Device category not found.';
    }

    /**
     * Get the user that owns the device category.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the devices for the device category.
     */
    public function devices()
    {
        return $this->hasMany(Device::class);
    }

    public function scopeId($query, $value)
    {
        return $query->where('id', $value);
    }

    public function scopeIdIn($query, $value)
    {
        return $query->whereIn('device_categories.id', $value);
    }

    public function scopeUniqueId($query, $value)
    {
        return $query->where('unique_id', $value);
    }

    public function scopeUniqueIdLike($query, $value)
    {
        return $query->where('unique_id', 'like', "%{$value}%");
    }

    public function scopeName($query, $value)
    {
        return $query->where('name', $value);
    }

    public function scopeNameLike($query, $value)
    {
        return $query->where('name', 'like', "%{$value}%");
    }

    public function scopeUserId($query, $value)
    {
        return $query->where('user_id', $value);
    }

    public function scopeUncategorized()
    {
        return $this->name(self::CATEGORY_UNCATEGORIZED);
    }

    public function scopeGetUncategorized()
    {
        return $this->uncategorized()->firstOrFail();
    }

    public function scopeGetOptions($query)
    {
        return $query->get(['id as value', 'name as label']);
    }
}
