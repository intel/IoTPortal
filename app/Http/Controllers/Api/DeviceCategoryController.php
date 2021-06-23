<?php

namespace App\Http\Controllers\Api;

use App\Actions\DeviceCategories\CreateDeviceCategoryAction;
use App\Actions\DeviceCategories\DeleteMultipleDeviceCategoriesAction;
use App\Actions\DeviceCategories\FilterDataTableDeviceCategoriesAction;
use App\Actions\DeviceCategories\FindDeviceCategoryByIdOrUniqueIdAction;
use App\Actions\DeviceCategories\UpdateDeviceCategoryAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\DestroySelectedDeviceCategoryRequest;
use App\Http\Requests\StoreDeviceCategoryRequest;
use App\Http\Requests\UpdateDeviceCategoryRequest;
use App\Http\Requests\ValidateDeviceCategoryFieldsRequest;
use App\Models\DeviceCategory;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DeviceCategoryController extends Controller
{
    public function __construct()
    {
        $this->middleware('can:viewAny,App\Models\DeviceCategory')->only(['index', 'options']);
        $this->middleware('can:create,App\Models\DeviceCategory')->only('store');
        $this->middleware('can:update,deviceCategory')->only('update');
        $this->middleware('can:deleteMany,App\Models\DeviceCategory')->only('destroySelected');
    }

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @param FilterDataTableDeviceCategoriesAction $filterDataTableDeviceCategoriesAction
     * @return JsonResponse
     */
    public function index(Request $request, FilterDataTableDeviceCategoriesAction $filterDataTableDeviceCategoriesAction): JsonResponse
    {
        $deviceCategories = $filterDataTableDeviceCategoriesAction->execute($request->all());

        return $this->apiOk(['deviceCategories' => $deviceCategories]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StoreDeviceCategoryRequest $request
     * @param CreateDeviceCategoryAction $createDeviceCategoryAction
     * @return JsonResponse
     */
    public function store(StoreDeviceCategoryRequest $request, CreateDeviceCategoryAction $createDeviceCategoryAction): JsonResponse
    {
        $deviceCategory = $createDeviceCategoryAction->execute($request->user(), $request->validated());

        return $this->apiOk(['deviceCategory' => $deviceCategory]);
    }

    /**
     * Display the specified resource.
     *
     * @param FindDeviceCategoryByIdOrUniqueIdAction $findDeviceCategoryByIdOrUniqueIdAction
     * @param string $id
     * @return JsonResponse
     */
    public function show(FindDeviceCategoryByIdOrUniqueIdAction $findDeviceCategoryByIdOrUniqueIdAction, string $id): JsonResponse
    {
        $deviceCategory = $findDeviceCategoryByIdOrUniqueIdAction->execute($id);

        $this->authorize('view', $deviceCategory);

        return $this->apiOk(['deviceCategory' => $deviceCategory]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateDeviceCategoryRequest $request
     * @param UpdateDeviceCategoryAction $updateDeviceCategoryAction
     * @param DeviceCategory $deviceCategory
     * @return JsonResponse
     */
    public function update(UpdateDeviceCategoryRequest $request, UpdateDeviceCategoryAction $updateDeviceCategoryAction, DeviceCategory $deviceCategory): JsonResponse
    {
        $success = $updateDeviceCategoryAction->execute($deviceCategory, $request->validated());

        return $success
            ? $this->apiOk(['deviceCategory' => $deviceCategory])
            : $this->apiInternalServerError('Failed to update device category.');
    }

    /**
     * Remove the specified resources from storage.
     *
     * @param DestroySelectedDeviceCategoryRequest $request
     * @param DeleteMultipleDeviceCategoriesAction $deleteMultipleDeviceCategoriesAction
     * @return JsonResponse
     */
    public function destroySelected(DestroySelectedDeviceCategoryRequest $request, DeleteMultipleDeviceCategoriesAction $deleteMultipleDeviceCategoriesAction): JsonResponse
    {
        $success = $deleteMultipleDeviceCategoriesAction->execute($request->ids);

        return $this->apiOk([], $success);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function options(Request $request): JsonResponse
    {
        $query = Auth::user()->deviceCategories();

        if ($request->has('name')) {
            $query->nameLike($request->name);
        }

        return $this->apiOk(['deviceCategories' => $query->getOptions()]);
    }

    /**
     *
     * @param ValidateDeviceCategoryFieldsRequest $request
     * @return JsonResponse
     */
    public function validateField(ValidateDeviceCategoryFieldsRequest $request): JsonResponse
    {
        return $this->apiOk();
    }
}
