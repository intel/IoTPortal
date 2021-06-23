<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\DeviceStatus;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class DeviceStatusController extends Controller
{
    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function options(Request $request): JsonResponse
    {
        if ($request->has('name')) {
            $deviceStatuses = DeviceStatus::nameLike($request->name)->getOptions();
        } else {
            $deviceStatuses = DeviceStatus::getOptions();
        }

        return $this->apiOk(['deviceStatuses' => $deviceStatuses]);
    }
}