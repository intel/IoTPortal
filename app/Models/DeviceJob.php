<?php

namespace App\Models;

use App\Traits\HasUniqueId;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DeviceJob extends Model
{
    use HasFactory, HasUniqueId;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'error',
        'job_batch_id',
        'started_at',
        'completed_at',
        'user_id',
        'device_group_id',
        'saved_command_id',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'started_at' => 'datetime',
        'completed_at' => 'datetime',
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
     * Get the user that owns the job.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the device group that owns the job.
     */
    public function deviceGroup()
    {
        return $this->belongsTo(DeviceGroup::class);
    }

    /**
     * Get the saved command for the job.
     */
    public function savedCommand()
    {
        return $this->belongsTo(SavedCommand::class);
    }

    /**
     * Get the command histories for the job.
     */
    public function commandHistories()
    {
        return $this->hasMany(CommandHistory::class);
    }

    public function scopeId($query, $value)
    {
        return $query->where('id', $value);
    }

    public function scopeIdIn($query, $value)
    {
        return $query->whereIn('device_jobs.id', $value);
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
}
