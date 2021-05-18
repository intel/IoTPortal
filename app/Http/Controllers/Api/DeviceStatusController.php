<?php

namespace App\Http\Controllers\Api;

use App\Helpers\Helper;
use App\Http\Controllers\Controller;
use App\Models\Device;
use App\Models\DeviceStatus;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class DeviceStatusController extends Controller
{
    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function options(Request $request)
    {
        if ($request->has('name')) {
            $deviceStatuses = DeviceStatus::nameLike($request->name)->options();
        } else {
            $deviceStatuses = DeviceStatus::getOptions();
        }

        return Helper::apiResponseHttpOk(['deviceStatuses' =>$deviceStatuses]);
    }
}
