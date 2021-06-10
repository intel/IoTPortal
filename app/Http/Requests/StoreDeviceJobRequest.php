<?php

namespace App\Http\Requests;

use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class StoreDeviceJobRequest extends BaseFormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => [
                'required',
                'string',
                'max:255',
                Rule::unique('device_jobs', 'name')->where(function ($query) {
                    return $query->where('user_id', Auth::user()->id);
                }),
            ],
            'device_group' => [
                'required',
                Rule::exists('device_groups', 'id')->where(function ($query) {
                    return $query->where('user_id', Auth::user()->id);
                }),
            ],
            'saved_command' => [
                'required',
                Rule::exists('saved_commands', 'id')->where(function ($query) {
                    return $query->where('user_id', Auth::user()->id);
                }),
            ],
        ];
    }
}
