<?php

namespace App\Http\Controllers\Api\Devices;

use App\Http\Controllers\Controller;
use App\Models\Device;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CommandHistoryController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @param Device $device
     * @return \Illuminate\Http\Response
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

        return response(['result' => ['deviceCommandHistories' => $query->paginate((int)$request->input('rows', 10))], 'success' => true, 'errors' => [], 'messages' => []], Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
    }

    /**
     * Display the specified resource.
     *
     * @param Device $device
     * @return \Illuminate\Http\Response
     */
    public function show(Device $device)
    {
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param Device $device
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Device $device)
    {
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Device $device
     * @return \Illuminate\Http\Response
     */
    public function destroy(Device $device)
    {
    }
}
