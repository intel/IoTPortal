<?php

namespace App\Http\Controllers\Api;

use App\Helpers\Helper;
use App\Http\Controllers\Controller;
use App\Models\Device;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class EventController extends Controller
{
    /**
     * @param Request $request
     * @param Device $device
     * @return JsonResponse
     */
    public function options(Request $request, Device $device)
    {
        $query = $device->events();

        if ($request->has('name')) {
            $query->nameLike($request->name);
        }

        return Helper::apiResponseHttpOk(['deviceEvents' => $query->getOptions()]);
    }
}
