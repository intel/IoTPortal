<?php

namespace App\Rules;

use App\Models\Device;
use Illuminate\Contracts\Validation\Rule;
use Illuminate\Support\Facades\Auth;

class UniqueDeviceNameExcludeOld implements Rule
{
    private $oldDeviceId;

    /**
     * Create a new rule instance.
     *
     * @param $oldDeviceId
     */
    public function __construct($oldDeviceId)
    {
        $this->oldDeviceId = $oldDeviceId;

    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        return Device::name($value)
                ->excludeId($this->oldDeviceId)
                ->userId(Auth::user()->id)
                ->count() <= 0;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The :attribute has already been taken.';
    }
}
