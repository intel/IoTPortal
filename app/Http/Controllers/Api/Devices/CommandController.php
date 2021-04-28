<?php

namespace App\Http\Controllers\Api\Devices;

use App\Helpers\Helper;
use App\Http\Controllers\Controller;
use App\Models\Command;
use App\Models\Device;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CommandController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
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
     * @param Command $command
     * @return Response
     */
    public function show(Command $command)
    {
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Command $command
     * @return Response
     */
    public function update(Request $request, Command $command)
    {
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Command $command
     * @return Response
     */
    public function destroy(Command $command)
    {
    }

    /**
     * @param Request $request
     * @param Device $device
     * @return \Illuminate\Http\JsonResponse
     */
    public function options(Request $request, Device $device)
    {
        $query = $device->commands()->select(['id as value', 'name as label']);

        if ($request->has('name')) {
            $query->where('name', 'like', "%{$request->input('name')}%");
        }

        return Helper::apiResponseHttpOk(['deviceCommands' => $query->get()]);
    }
}
