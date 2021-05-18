<?php

namespace App\Http\Requests;

use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class StoreSavedCommandRequest extends BaseFormRequest
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
                Rule::unique('saved_commands', 'name')->where(function ($query) {
                    return $query->where('user_id', Auth::user()->id);
                }),
            ],
            'command' => 'required|string|max:255',
            'payload' => 'nullable',
        ];
    }
}
