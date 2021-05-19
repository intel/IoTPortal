<?php

namespace App\Http\Controllers\Api;

use App\Helpers\Helper;
use App\Http\Controllers\Controller;
use App\Models\Device;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
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
            $filters = json_decode($request->filters);

            foreach ($filters as $key => $value) {
                if ($key === 'payload') $query->payloadLike($value->value);

                if ($key === 'command_id') $query->commandId($value->value);

                if ($key === 'responded_at') {
                    $dates = explode(" - ", $value->value);
                    $query->respondedAtBetween($dates);
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
            if ($request->sortOrder === '1')
                $query->orderBy($request->sortField);
            else
                $query->orderByDesc($request->sortField);
        }

        $maxRows = Config::get('constants.index_max_rows');
        $rows = (int)$request->input('rows', 10) > $maxRows ? $maxRows : (int)$request->input('rows', 10);

        $deviceCommandHistories = $query->paginate($rows);

        return Helper::apiResponseHttpOk(['deviceCommandHistories' => $deviceCommandHistories]);
    }
}
