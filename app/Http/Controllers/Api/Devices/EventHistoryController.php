<?php

namespace App\Http\Controllers\Api\Devices;

use App\Helpers\Helper;
use App\Http\Controllers\Controller;
use App\Models\Device;
use App\Models\EventHistory;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Config;

class EventHistoryController extends Controller
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
        $query = $device->eventHistories()->with('event:id,name');

        if ($request->has('filters')) {
            $filters = json_decode($request->input('filters'));

            foreach ($filters as $key => $value) {
                if ($key === 'raw_data') $query->rawDataLike($value->value);
                if ($key === 'type') $query->eventId($value->value);
                if ($key === 'created_at') {
                    $dates = explode(" - ", $value->value);
                    $query->createdAtBetween($dates);
                }
                if ($key === 'globalFilter') {
                    $query->where(function ($query) use ($value) {
                        $query->rawDataLike($value->value);
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

        $deviceEventHistories = $query->paginate($rows);

        return Helper::apiResponseHttpOk(['deviceEventHistories' => $deviceEventHistories]);
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
     * @param EventHistory $eventHistory
     * @return Response
     */
    public function show(EventHistory $eventHistory)
    {
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param EventHistory $eventHistory
     * @return Response
     */
    public function update(Request $request, EventHistory $eventHistory)
    {
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param EventHistory $eventHistory
     * @return Response
     */
    public function destroy(EventHistory $eventHistory)
    {
    }
}
