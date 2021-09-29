<?php
/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\DeviceStatus;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * Class DeviceStatusController
 * @package App\Http\Controllers\Api
 */
class DeviceStatusController extends Controller
{
    /**
     * Return device status option based on name filter.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function options(Request $request): JsonResponse
    {
        if ($request->has('name')) {
            $deviceStatuses = DeviceStatus::nameLike($request->name)->getOptions();
        } else {
            $deviceStatuses = DeviceStatus::getOptions();
        }

        return $this->apiOk(['deviceStatuses' => $deviceStatuses]);
    }
}