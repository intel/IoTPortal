<?php

namespace App\Http\Requests;

use App\Rules\ExistsDeviceUniqueId;
use App\Rules\ExistsUserUniqueId;

class RegisterDeviceRequest extends BaseFormRequest
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
            'unique_id' => [
                'required',
                new ExistsUserUniqueId,
            ],
            'device_unique_id' => [
                'nullable',
                new ExistsDeviceUniqueId,
            ],
        ];
    }
}
