<?php

namespace App\Http\Requests;

use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class DestroySelectedDeviceJobRequest extends BaseFormRequest
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
            'ids' => [
                'required',
                'array',
                Rule::exists('device_jobs', 'id')->where(function ($query) {
                    return $query->where('user_id', Auth::user()->id);
                }),
            ],
        ];
    }
}
