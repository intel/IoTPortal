<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * Class ProfileController
 * @package App\Http\Controllers\Api
 */
class ProfileController extends Controller
{
    /**
     * Return the current logged in user data.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function show(Request $request): JsonResponse
    {
        return $this->apiOk(['profile' => $request->user()]);
    }
}