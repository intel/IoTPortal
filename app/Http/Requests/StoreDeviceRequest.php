<?php

namespace App\Http\Requests;

use App\Rules\ExistsDeviceCategoryId;
use App\Rules\UniqueDeviceName;

class StoreDeviceRequest extends BaseFormRequest
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
            'name' => [
                'required',
                'string',
                'max:255',
                new UniqueDeviceName,
            ],
            'device_category' => [
                'required',
                new ExistsDeviceCategoryId,
            ],
        ];
    }
}
