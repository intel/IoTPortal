<?php

namespace App\Http\Controllers\Api;

use App\Actions\CommandHistories\FilterDataTableCommandHistoriesAction;
use App\Http\Controllers\Controller;
use App\Models\Device;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * Class CommandHistoryController
 * @package App\Http\Controllers\Api
 */
class CommandHistoryController extends Controller
{
    /**
     * CommandHistoryController constructor.
     */
    public function __construct()
    {
        $this->middleware('can:view,device')->only('index');
    }

    /**
     * Return a listing of the command histories.
     *
     * @param Request $request
     * @param FilterDataTableCommandHistoriesAction $filterDataTableCommandHistoriesAction
     * @param Device $device
     * @return JsonResponse
     */
    public function index(Request $request, FilterDataTableCommandHistoriesAction $filterDataTableCommandHistoriesAction, Device $device): JsonResponse
    {
        $deviceCommandHistories = $filterDataTableCommandHistoriesAction->execute($device, $request->all());

        return $this->apiOk(['deviceCommandHistories' => $deviceCommandHistories]);
    }
}
