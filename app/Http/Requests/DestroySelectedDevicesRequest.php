<?php

namespace App\Http\Requests;

use App\Rules\ExistsDeviceId;

class DestroySelectedDevicesRequest extends BaseFormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
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
                new ExistsDeviceId,
            ],
        ];
    }
}
