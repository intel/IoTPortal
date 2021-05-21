<?php

namespace App\Http\Requests;

use App\Rules\ExistsDeviceCategoryId;
use App\Rules\UniqueDeviceNameExcludeOld;

class UpdateDeviceRequest extends BaseFormRequest
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
                'nullable',
                'string',
                'max:255',
                new UniqueDeviceNameExcludeOld($this->route('device')->id),
            ],
            'device_category' => [
                'nullable',
                new ExistsDeviceCategoryId,
            ],
        ];
    }
}
