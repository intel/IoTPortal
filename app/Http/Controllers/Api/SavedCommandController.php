<?php

namespace App\Http\Controllers\Api;

use App\Actions\SavedCommands\CreateSavedCommandAction;
use App\Actions\SavedCommands\DeleteMultipleSavedCommandsAction;
use App\Actions\SavedCommands\FilterDataTableSavedCommandsAction;
use App\Actions\SavedCommands\FindSavedCommandByIdOrUniqueIdAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\DestroySelectedSavedCommandRequest;
use App\Http\Requests\StoreSavedCommandRequest;
use App\Http\Requests\ValidateSavedCommandFieldsRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SavedCommandController extends Controller
{
    public function __construct()
    {
        $this->middleware('can:viewAny,App\Models\SavedCommand')->only(['index', 'options']);
        $this->middleware('can:create,App\Models\SavedCommand')->only('store');
        $this->middleware('can:deleteMany,App\Models\SavedCommand')->only('destroySelected');
    }

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @param FilterDataTableSavedCommandsAction $filterDataTableSavedCommandsAction
     * @return JsonResponse
     */
    public function index(Request $request, FilterDataTableSavedCommandsAction $filterDataTableSavedCommandsAction): JsonResponse
    {
        $savedCommands = $filterDataTableSavedCommandsAction->execute($request->all());

        return $this->apiOk(['savedCommands' => $savedCommands]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StoreSavedCommandRequest $request
     * @param CreateSavedCommandAction $createSavedCommandAction
     * @return JsonResponse
     */
    public function store(StoreSavedCommandRequest $request, CreateSavedCommandAction $createSavedCommandAction): JsonResponse
    {
        $savedCommand = $createSavedCommandAction->execute($request->user(), $request->validated());

        return $this->apiOk(['savedCommand' => $savedCommand]);
    }

    /**
     * Display the specified resource.
     *
     * @param FindSavedCommandByIdOrUniqueIdAction $findSavedCommandByIdOrUniqueIdAction
     * @param string $id
     * @return JsonResponse
     */
    public function show(FindSavedCommandByIdOrUniqueIdAction $findSavedCommandByIdOrUniqueIdAction, string $id): JsonResponse
    {
        $savedCommand = $findSavedCommandByIdOrUniqueIdAction->execute($id);

        $this->authorize('view', $savedCommand);

        return $this->apiOk(['savedCommand' => $savedCommand]);
    }

    /**
     * Remove the specified resources from storage.
     *
     * @param DestroySelectedSavedCommandRequest $request
     * @param DeleteMultipleSavedCommandsAction $deleteMultipleSavedCommandsAction
     * @return JsonResponse
     */
    public function destroySelected(DestroySelectedSavedCommandRequest $request, DeleteMultipleSavedCommandsAction $deleteMultipleSavedCommandsAction): JsonResponse
    {
        $success = $deleteMultipleSavedCommandsAction->execute($request->ids);

        return $this->apiOk([], $success);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function options(Request $request): JsonResponse
    {
        $query = Auth::user()->savedCommands();

        if ($request->has('name')) {
            $query->nameLike($request->name);
        }

        return $this->apiOk(['savedCommands' => $query->getOptions()]);
    }

    /**
     *
     * @param ValidateSavedCommandFieldsRequest $request
     * @return JsonResponse
     */
    public function validateField(ValidateSavedCommandFieldsRequest $request): JsonResponse
    {
        return $this->apiOk();
    }
}
