<?php

namespace App\Http\Controllers\Api;

use App\Helpers\Helper;
use App\Http\Controllers\Controller;
use App\Models\SavedCommand;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class SavedCommandController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255|unique:saved_commands,name',
            'command' => 'required|string|max:255',
            'payload' => 'nullable'
        ]);

        if ($validator->fails()) {
            return Helper::apiResponse([], false, $validator->getMessageBag()->toArray(), [], Response::HTTP_BAD_REQUEST);
        }

        $savedCommand = Auth::user()->savedCommands()->create([
            'name' => $request->input('name'),
            'command_name' => $request->input('command'),
            'payload' => is_null($request->input('payload')) ? null : json_encode($request->input('payload')),
        ]);

        if ($savedCommand->exists) {
            return Helper::apiResponse(['savedCommand' => $savedCommand]);
        }

        return Helper::apiResponse([], false, 'Failed to create saved command', [], Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\SavedCommand $savedCommand
     * @return \Illuminate\Http\Response
     */
    public function show(SavedCommand $savedCommand)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\SavedCommand $savedCommand
     * @return \Illuminate\Http\Response
     */
    public function edit(SavedCommand $savedCommand)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param \App\Models\SavedCommand $savedCommand
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SavedCommand $savedCommand)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\SavedCommand $savedCommand
     * @return \Illuminate\Http\Response
     */
    public function destroy(SavedCommand $savedCommand)
    {
        //
    }
}
