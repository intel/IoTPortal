<?php

namespace App\Http\Controllers\Api;

use App\Actions\EventHistories\FilterDataTableEventHistoriesAction;
use App\Http\Controllers\Controller;
use App\Models\Device;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class EventHistoryController extends Controller
{
    public function __construct()
    {
        $this->middleware('can:view,device')->only('index');
    }

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @param FilterDataTableEventHistoriesAction $filterDataTableEventHistoriesAction
     * @param Device $device
     * @return JsonResponse
     */
    public function index(Request $request, FilterDataTableEventHistoriesAction $filterDataTableEventHistoriesAction, Device $device): JsonResponse
    {
        $deviceEventHistories = $filterDataTableEventHistoriesAction->execute($device, $request->all());

        return $this->apiOk(['deviceEventHistories' => $deviceEventHistories]);
    }
}
