<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Device;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class EventController extends Controller
{
    public function __construct()
    {
        $this->middleware('can:view,device')->only('options');
    }

    /**
     * @param Request $request
     * @param Device $device
     * @return JsonResponse
     */
    public function options(Request $request, Device $device): JsonResponse
    {
        $query = $device->events();

        if ($request->has('name')) {
            $query->nameLike($request->name);
        }

        return $this->apiOk(['deviceEvents' => $query->getOptions()]);
    }
}
