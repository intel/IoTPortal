<?php

namespace App\Http\Controllers\Api\Devices;

use App\Helpers\Helper;
use App\Http\Controllers\Controller;
use App\Models\CommandHistory;
use App\Models\Device;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Config;

class CommandHistoryController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @param Device $device
     * @return JsonResponse
     */
    public function index(Request $request, Device $device)
    {
        $query = $device->commandHistories()->with('command:id,name');

        if ($request->has('filters')) {
            $filters = json_decode($request->input('filters'));

            foreach ($filters as $key => $value) {
                if ($key === 'payload') $query->payloadLike($value->value);
                if ($key === 'type') $query->commandId($value->value);
                if ($key === 'response_time') {
                    $dates = explode(" - ", $value->value);
                    $query->responseTimeBetween($dates);
                }
                if ($key === 'created_at') {
                    $dates = explode(" - ", $value->value);
                    $query->createdAtBetween($dates);
                }
                if ($key === 'globalFilter') {
                    $query->where(function ($query) use ($value) {
                        $query->payloadLike($value->value);
                    });
                }
            }
        }

        if ($request->has('sortField')) {
            if ($request->input('sortOrder') === '1')
                $query->orderBy($request->input('sortField'));
            else
                $query->orderByDesc($request->input('sortField'));
        }

        $maxRows = Config::get('constants.index_max_rows');
        $rows = (int)$request->input('rows', 10) > $maxRows ? $maxRows : (int)$request->input('rows', 10);

        $deviceCommandHistories = $query->paginate($rows);

        return Helper::apiResponse(['deviceCommandHistories' => $deviceCommandHistories]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return Response
     */
    public function store(Request $request)
    {
    }

    /**
     * Display the specified resource.
     *
     * @param CommandHistory $commandHistory
     * @return Response
     */
    public function show(CommandHistory $commandHistory)
    {
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param CommandHistory $commandHistory
     * @return Response
     */
    public function update(Request $request, CommandHistory $commandHistory)
    {
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param CommandHistory $commandHistory
     * @return Response
     */
    public function destroy(CommandHistory $commandHistory)
    {
    }
}
