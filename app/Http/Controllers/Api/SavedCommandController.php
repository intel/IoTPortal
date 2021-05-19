<?php

namespace App\Http\Controllers\Api;

use App\Helpers\Helper;
use App\Http\Controllers\Controller;
use App\Http\Requests\DestroySelectedSavedCommandRequest;
use App\Http\Requests\StoreSavedCommandRequest;
use App\Http\Requests\ValidateSavedCommandFieldsRequest;
use App\Models\SavedCommand;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;

class SavedCommandController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Request $request)
    {
        $query = Auth::user()->savedCommands();

        if ($request->has('filters')) {
            $filters = json_decode($request->input('filters'));

            foreach ($filters as $key => $value) {
                if ($key === 'unique_id') $query->uniqueIdLike($value->value);

                if ($key === 'name') $query->nameLike($value->value);

                if ($key === 'command_name') $query->commandNameLike($value->value);

                if ($key === 'globalFilter') {
                    $query->where(function ($query) use ($value) {
                        $query->uniqueIdLike($value->value)
                            ->orWhere->nameLike($value->value)
                            ->orWhere->commandNameLike($value->value);
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
        $rows = min((int) $request->input('rows', 10), $maxRows);

        $savedCommands = $query->paginate($rows);

        return Helper::apiResponseHttpOk(['savedCommands' => $savedCommands]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StoreSavedCommandRequest $request
     * @return JsonResponse
     */
    public function store(StoreSavedCommandRequest $request)
    {
        $savedCommand = Auth::user()->savedCommands()->create([
            'name' => $request->name,
            'command_name' => $request->command,
            'payload' => is_null($request->payload) ? null : json_encode($request->input('payload')),
        ]);

        return $savedCommand->exists
            ? Helper::apiResponseHttpOk(['savedCommand' => $savedCommand])
            : Helper::apiResponseHttpInternalServerError('Failed to create saved command.');
    }

    /**
     * Display the specified resource.
     *
     * @param $id
     * @return JsonResponse
     */
    public function show($id)
    {
        $savedCommand = SavedCommand::id($id)
            ->orWhere->uniqueId($id)
            ->first();

        return Helper::apiResponseHttpOk(['savedCommand' => $savedCommand]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param SavedCommand $savedCommand
     * @return Response
     */
    public function update(Request $request, SavedCommand $savedCommand)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param SavedCommand $savedCommand
     * @return Response
     */
    public function destroy(SavedCommand $savedCommand)
    {
        //
    }

    /**
     * Remove the specified resources from storage.
     *
     * @param DestroySelectedSavedCommandRequest $request
     * @return JsonResponse
     */
    public function destroySelected(DestroySelectedSavedCommandRequest $request)
    {
        $success = Auth::user()->savedCommands()->idIn($request->ids)->delete();

        return Helper::apiResponseHttpOk([], $success);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function options(Request $request)
    {
        $query = Auth::user()->savedCommands();

        if ($request->has('name')) {
            $query->nameLike($request->name);
        }

        return Helper::apiResponseHttpOk(['savedCommands' => $query->getOptions()]);
    }

    /**
     *
     * @param ValidateSavedCommandFieldsRequest $request
     * @return JsonResponse
     */
    public function validateField(ValidateSavedCommandFieldsRequest $request)
    {
        return Helper::apiResponseHttpOk();
    }
}
