<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Job extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'payload',
        'started_at',
        'completed_at',
    ];

    public static function boot()
    {
        parent::boot();
        self::creating(function ($model) {
            $uniqueId = Str::uuid()->toString();
            $model->unique_id = $uniqueId;
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
     * Get the command histories for the job.
     */
    public function commandHistories()
    {
        return $this->hasMany(CommandHistory::class);
    }
}
