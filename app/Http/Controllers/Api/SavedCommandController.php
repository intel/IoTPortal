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
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

/**
 * Class SavedCommandController
 * @package App\Http\Controllers\Api
 */
class SavedCommandController extends Controller
{
    /**
     * SavedCommandController constructor.
     */
    public function __construct()
    {
        $this->middleware('can:viewAny,App\Models\SavedCommand')->only(['index', 'options']);
        $this->middleware('can:create,App\Models\SavedCommand')->only('store');
        $this->middleware('can:deleteMany,App\Models\SavedCommand')->only('destroySelected');
    }

    /**
     * Return a listing of the saved commands.
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
     * Store a newly created saved command in storage.
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
     * Return the specified saved command.
     *
     * @param FindSavedCommandByIdOrUniqueIdAction $findSavedCommandByIdOrUniqueIdAction
     * @param string $id
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function show(FindSavedCommandByIdOrUniqueIdAction $findSavedCommandByIdOrUniqueIdAction, string $id): JsonResponse
    {
        $savedCommand = $findSavedCommandByIdOrUniqueIdAction->execute($id);

        $this->authorize('view', $savedCommand);

        return $this->apiOk(['savedCommand' => $savedCommand]);
    }

    /**
     * Remove the specified saved commands from storage.
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
     * Return the saved command options available for user.
     *
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
     * Validate the saved command form fields.
     *
     * @param ValidateSavedCommandFieldsRequest $request
     * @return JsonResponse
     */
    public function validateField(ValidateSavedCommandFieldsRequest $request): JsonResponse
    {
        return $this->apiOk();
    }
}
