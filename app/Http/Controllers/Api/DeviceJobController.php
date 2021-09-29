<?php
/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

namespace App\Http\Controllers\Api;

use App\Actions\DeviceJobs\CreateDeviceJobAction;
use App\Actions\DeviceJobs\DeleteMultipleDeviceJobsAction;
use App\Actions\DeviceJobs\FilterDataTableDeviceJobsAction;
use App\Actions\DeviceJobs\FindDeviceJobByIdOrUniqueIdAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\DestroySelectedDeviceJobRequest;
use App\Http\Requests\StoreDeviceJobRequest;
use App\Http\Requests\ValidateDeviceJobFieldsRequest;
use App\Jobs\ProcessDeviceJobJob;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * Class DeviceJobController
 * @package App\Http\Controllers\Api
 */
class DeviceJobController extends Controller
{
    /**
     * DeviceJobController constructor.
     */
    public function __construct()
    {
        $this->middleware('can:viewAny,App\Models\DeviceJob')->only('index');
        $this->middleware('can:create,App\Models\DeviceJob')->only('store');
        $this->middleware('can:deleteMany,App\Models\DeviceJob')->only('destroySelected');;
    }

    /**
     * Return a listing of the device job.
     *
     * @param Request $request
     * @param FilterDataTableDeviceJobsAction $filterDataTableDeviceJobsAction
     * @return JsonResponse
     */
    public function index(Request $request, FilterDataTableDeviceJobsAction $filterDataTableDeviceJobsAction): JsonResponse
    {
        $deviceJobs = $filterDataTableDeviceJobsAction->execute($request->all());

        return $this->apiOk(['deviceJobs' => $deviceJobs]);
    }

    /**
     * Store a newly created device job in storage.
     *
     * @param StoreDeviceJobRequest $request
     * @param CreateDeviceJobAction $createDeviceJobAction
     * @return JsonResponse
     */
    public function store(StoreDeviceJobRequest $request, CreateDeviceJobAction $createDeviceJobAction): JsonResponse
    {
        $deviceJob = $createDeviceJobAction->execute($request->user(), $request->validated());

        if ($deviceJob->exists) {
            ProcessDeviceJobJob::dispatch($deviceJob);
            return $this->apiOk(['deviceJob' => $deviceJob]);
        }

        return $this->apiInternalServerError('Failed to create device job.');
    }

    /**
     * Return the specified device job.
     *
     * @param FindDeviceJobByIdOrUniqueIdAction $findDeviceJobByIdOrUniqueIdAction
     * @param string $id
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function show(FindDeviceJobByIdOrUniqueIdAction $findDeviceJobByIdOrUniqueIdAction, string $id): JsonResponse
    {
        $deviceJob = $findDeviceJobByIdOrUniqueIdAction->execute($id);

        $this->authorize('view', $deviceJob);

        return $this->apiOk(['deviceJob' => $deviceJob]);
    }

    /**
     * Remove the specified device jobs from storage.
     *
     * @param DestroySelectedDeviceJobRequest $request
     * @param DeleteMultipleDeviceJobsAction $deleteMultipleDeviceJobsAction
     * @return JsonResponse
     */
    public function destroySelected(DestroySelectedDeviceJobRequest $request, DeleteMultipleDeviceJobsAction $deleteMultipleDeviceJobsAction): JsonResponse
    {
        $success = $deleteMultipleDeviceJobsAction->execute($request->ids);

        return $this->apiOk([], $success);
    }

    /**
     * Validate device jobs fields.
     *
     * @param ValidateDeviceJobFieldsRequest $request
     * @return JsonResponse
     */
    public function validateField(ValidateDeviceJobFieldsRequest $request): JsonResponse
    {
        return $this->apiOk();
    }
}
