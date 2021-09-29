<?php
/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

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
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

/**
 * Class DeviceCategoryController
 * @package App\Http\Controllers\Api
 */
class DeviceCategoryController extends Controller
{
    /**
     * DeviceCategoryController constructor.
     */
    public function __construct()
    {
        $this->middleware('can:viewAny,App\Models\DeviceCategory')->only(['index', 'options']);
        $this->middleware('can:create,App\Models\DeviceCategory')->only('store');
        $this->middleware('can:update,deviceCategory')->only('update');
        $this->middleware('can:deleteMany,App\Models\DeviceCategory')->only('destroySelected');
    }

    /**
     * Return a listing of the device categories.
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
     * Store a newly created device category in storage.
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
     * Display the specified device category.
     *
     * @param FindDeviceCategoryByIdOrUniqueIdAction $findDeviceCategoryByIdOrUniqueIdAction
     * @param string $id
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function show(FindDeviceCategoryByIdOrUniqueIdAction $findDeviceCategoryByIdOrUniqueIdAction, string $id): JsonResponse
    {
        $deviceCategory = $findDeviceCategoryByIdOrUniqueIdAction->execute($id);

        $this->authorize('view', $deviceCategory);

        return $this->apiOk(['deviceCategory' => $deviceCategory]);
    }

    /**
     * Update the specified device category in storage.
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
     * Remove the specified device categories from storage.
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
     * Return device category options for user.
     *
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
     * Validate device category selection.
     *
     * @param ValidateDeviceCategoryFieldsRequest $request
     * @return JsonResponse
     */
    public function validateField(ValidateDeviceCategoryFieldsRequest $request): JsonResponse
    {
        return $this->apiOk();
    }
}
