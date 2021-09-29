<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Device;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * Class CommandController
 * @package App\Http\Controllers\Api
 */
class CommandController extends Controller
{
    /**
     * CommandController constructor.
     */
    public function __construct()
    {
        $this->middleware('can:view,device')->only('options');
    }

    /**
     * Return available command options for users.
     *
     * @param Request $request
     * @param Device $device
     * @return JsonResponse
     */
    public function options(Request $request, Device $device): JsonResponse
    {
        $query = $device->commands();

        if ($request->has('name')) {
            $query->nameLike($request->name);
        }

        return $this->apiOk(['deviceCommands' => $query->getOptions()]);
    }
}
