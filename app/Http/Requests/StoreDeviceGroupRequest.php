<?php
/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

namespace App\Http\Requests;

use App\Rules\ExistsDeviceId;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class StoreDeviceGroupRequest extends BaseFormRequest
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
                Rule::unique('device_groups', 'name')->where(function ($query) {
                    return $query->where('user_id', Auth::user()->id);
                }),
            ],
            'devices' => [
                'required',
                'array',
                new ExistsDeviceId,
            ],
        ];
    }
}
