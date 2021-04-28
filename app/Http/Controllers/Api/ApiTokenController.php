<?php

namespace App\Http\Controllers\Api;

use App\Helpers\Helper;
use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class ApiTokenController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @return JsonResponse
     */
    public function show()
    {
        $user = Auth::user();
        return Helper::apiResponseHttpOk(['uniqueId' => $user->unique_id, 'deviceConnectionKey' => $user->device_connection_key]);
    }
}
