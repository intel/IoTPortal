<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;

class TriggerCommandRequest extends BaseFormRequest
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
        $deviceId = $this->route('device')->id;

        return [
            'command' => [
                'required',
                'string',
                Rule::exists('commands', 'name')->where(function ($query) use ($deviceId) {
                    return $query->where('device_id', $deviceId);
                }),
            ],
            'payload' => 'nullable',
        ];
    }
}
