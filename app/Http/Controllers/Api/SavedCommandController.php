<?php

namespace App\Http\Controllers\Api;

use App\Helpers\Helper;
use App\Http\Controllers\Controller;
use App\Models\SavedCommand;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

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
            if ($request->input('sortOrder') === '1')
                $query->orderBy($request->input('sortField'));
            else
                $query->orderByDesc($request->input('sortField'));
        }

        $maxRows = Config::get('constants.index_max_rows');
        $rows = (int)$request->input('rows', 10) > $maxRows ? $maxRows : (int)$request->input('rows', 10);

        $savedCommands = $query->paginate($rows);

        return Helper::apiResponseHttpOk(['savedCommands' => $savedCommands]);
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
            return Helper::apiResponseHttpBadRequest($validator->getMessageBag()->toArray());
        }

        $savedCommand = Auth::user()->savedCommands()->create([
            'name' => $request->input('name'),
            'command_name' => $request->input('command'),
            'payload' => is_null($request->input('payload')) ? null : json_encode($request->input('payload')),
        ]);

        if ($savedCommand->exists) {
            return Helper::apiResponseHttpOk(['savedCommand' => $savedCommand]);
        }

        return Helper::apiResponseHttpInternalServerError('Failed to create saved command');
    }

    /**
     * Display the specified resource.
     *
     * @param SavedCommand $savedCommand
     * @return JsonResponse
     */
    public function show(SavedCommand $savedCommand)
    {
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
     * @param Request $request
     * @return JsonResponse
     */
    public function destroySelected(Request $request)
    {
        $user = Auth::user();

        $validator = Validator::make($request->all(), [
            'ids.*' => [
                'required',
                Rule::exists('saved_commands', 'id')->where(function ($query) use ($user) {
                    return $query->where('user_id', $user->id);
                }),
            ],
        ]);

        if ($validator->fails()) {
            return Helper::apiResponseHttpBadRequest($validator->getMessageBag()->toArray());
        }

        $success = $user->savedCommands()->whereIn('saved_commands.id', $request->input('ids'))->delete();

        return Helper::apiResponseHttpOk([], $success);
    }
}
