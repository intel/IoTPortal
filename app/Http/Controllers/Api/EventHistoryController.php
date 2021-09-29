<?php
/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

namespace App\Http\Controllers\Api;

use App\Actions\EventHistories\FilterDataTableEventHistoriesAction;
use App\Http\Controllers\Controller;
use App\Models\Device;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * Class EventHistoryController
 * @package App\Http\Controllers\Api
 */
class EventHistoryController extends Controller
{
    /**
     * EventHistoryController constructor.
     */
    public function __construct()
    {
        $this->middleware('can:view,device')->only('index');
    }

    /**
     * Return a listing of the event histories.
     *
     * @param Request $request
     * @param FilterDataTableEventHistoriesAction $filterDataTableEventHistoriesAction
     * @param Device $device
     * @return JsonResponse
     */
    public function index(Request $request, FilterDataTableEventHistoriesAction $filterDataTableEventHistoriesAction, Device $device): JsonResponse
    {
        $deviceEventHistories = $filterDataTableEventHistoriesAction->execute($device, $request->all());

        return $this->apiOk(['deviceEventHistories' => $deviceEventHistories]);
    }
}
