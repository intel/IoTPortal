<?php
/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

namespace App\Http\Controllers\Api;

use App\Actions\DeviceGroups\CreateDeviceGroupAction;
use App\Actions\DeviceGroups\DeleteMultipleDeviceGroupsAction;
use App\Actions\DeviceGroups\FilterDataTableDeviceGroupAction;
use App\Actions\DeviceGroups\FindDeviceGroupByIdOrUniqueIdAction;
use App\Actions\DeviceGroups\UpdateDeviceGroupAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\DestroySelectedDeviceGroupRequest;
use App\Http\Requests\StoreDeviceGroupRequest;
use App\Http\Requests\UpdateDeviceGroupRequest;
use App\Http\Requests\ValidateDeviceGroupFieldsRequest;
use App\Models\DeviceGroup;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

/**
 * Class DeviceGroupController
 * @package App\Http\Controllers\Api
 */
class DeviceGroupController extends Controller
{
    /**
     * DeviceGroupController constructor.
     */
    public function __construct()
    {
        $this->middleware('can:viewAny,App\Models\DeviceGroup')->only(['index', 'options']);
        $this->middleware('can:create,App\Models\DeviceGroup')->only('store');
        $this->middleware('can:update,deviceGroup')->only('update');
        $this->middleware('can:deleteMany,App\Models\DeviceGroup')->only('destroySelected');
    }

    /**
     * Return a listing of the device group.
     *
     * @param Request $request
     * @param FilterDataTableDeviceGroupAction $filterDataTableDeviceGroupAction
     * @return JsonResponse
     */
    public function index(Request $request, FilterDataTableDeviceGroupAction $filterDataTableDeviceGroupAction): JsonResponse
    {
        $deviceGroups = $filterDataTableDeviceGroupAction->execute($request->all());

        return $this->apiOk(['deviceGroups' => $deviceGroups]);
    }

    /**
     * Store a newly created device group in storage.
     *
     * @param StoreDeviceGroupRequest $request
     * @param CreateDeviceGroupAction $createDeviceGroupAction
     * @return JsonResponse
     */
    public function store(StoreDeviceGroupRequest $request, CreateDeviceGroupAction $createDeviceGroupAction): JsonResponse
    {
        $deviceGroup = $createDeviceGroupAction->execute($request->user(), $request->validated());

        return $this->apiOk(['deviceGroup' => $deviceGroup]);
    }

    /**
     * Return the specified device group.
     *
     * @param FindDeviceGroupByIdOrUniqueIdAction $findDeviceGroupByIdOrUniqueIdAction
     * @param string $id
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function show(FindDeviceGroupByIdOrUniqueIdAction $findDeviceGroupByIdOrUniqueIdAction, string $id): JsonResponse
    {
        $deviceGroup = $findDeviceGroupByIdOrUniqueIdAction->execute($id);

        $this->authorize('view', $deviceGroup);

        return $this->apiOk(['deviceGroup' => $deviceGroup]);
    }

    /**
     * Update the specified device group in storage.
     *
     * @param UpdateDeviceGroupRequest $request
     * @param UpdateDeviceGroupAction $updateDeviceGroupAction
     * @param DeviceGroup $deviceGroup
     * @return JsonResponse
     */
    public function update(UpdateDeviceGroupRequest $request, UpdateDeviceGroupAction $updateDeviceGroupAction, DeviceGroup $deviceGroup): JsonResponse
    {
        $success = $updateDeviceGroupAction->execute($deviceGroup, $request->validated());

        return $success
            ? $this->apiOk(['deviceGroup' => $deviceGroup])
            : $this->apiInternalServerError('Failed to update device group');
    }

    /**
     * Remove the specified device groups from storage.
     *
     * @param DestroySelectedDeviceGroupRequest $request
     * @param DeleteMultipleDeviceGroupsAction $deleteMultipleDeviceGroupsAction
     * @return JsonResponse
     */
    public function destroySelected(DestroySelectedDeviceGroupRequest $request, DeleteMultipleDeviceGroupsAction $deleteMultipleDeviceGroupsAction): JsonResponse
    {
        $success = $deleteMultipleDeviceGroupsAction->execute($request->ids);

        return $this->apiOk([], $success);
    }

    /**
     * Return device group options for user.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function options(Request $request): JsonResponse
    {
        $query = Auth::user()->deviceGroups();

        if ($request->has('name')) {
            $query->nameLike($request->name);
        }

        return $this->apiOk(['deviceGroups' => $query->getOptions()]);
    }

    /**
     * Validate device group options for user.
     *
     * @param ValidateDeviceGroupFieldsRequest $request
     * @return JsonResponse
     */
    public function validateField(ValidateDeviceGroupFieldsRequest $request): JsonResponse
    {
        return $this->apiOk();
    }
}
