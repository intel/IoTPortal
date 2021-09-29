<?php
/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

namespace App\Traits;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

trait ApiResponses
{
    public function apiOk($result = [], bool $success = true, $errors = [], $message = [], $status = Response::HTTP_OK): JsonResponse
    {
        return response()->json([
            'result' => $result,
            'success' => $success,
            'errors' => $errors,
            'messages' => $message,
        ], $status);
    }

    public function apiBadRequest($result = [], bool $success = false, $errors = [], $message = [], $status = Response::HTTP_BAD_REQUEST): JsonResponse
    {
        return response()->json([
            'result' => $result,
            'success' => $success,
            'errors' => $errors,
            'messages' => $message,
        ], $status);
    }

    public function apiInternalServerError($result = [], bool $success = false, $errors = [], $message = [], $status = Response::HTTP_INTERNAL_SERVER_ERROR): JsonResponse
    {
        return response()->json([
            'result' => $result,
            'success' => $success,
            'errors' => $errors,
            'messages' => $message,
        ], $status);
    }

    public function apiUnauthorized($result = [], bool $success = false, $errors = [], $message = [], $status = Response::HTTP_UNAUTHORIZED): JsonResponse
    {
        return response()->json([
            'result' => $result,
            'success' => $success,
            'errors' => $errors,
            'messages' => $message,
        ], $status);
    }

    public function apiMqttOk($result = [], $status = Response::HTTP_OK): JsonResponse
    {
        return response()->json(['result' => $result], $status);
    }

    public function apiMqttOkWithDisallowedTopics($result = [], $topics = [], $status = Response::HTTP_OK): JsonResponse
    {
        return response()->json([
            'result' => $result,
            'topics' => $topics,
        ], $status);
    }

    public function apiMqttBadRequest($result = [], $status = Response::HTTP_BAD_REQUEST): JsonResponse
    {
        return response()->json(['result' => $result], $status);
    }

    public function apiMqttInternalServerError($result = [], $status = Response::HTTP_INTERNAL_SERVER_ERROR): JsonResponse
    {
        return response()->json(['result' => $result], $status);
    }

    public function apiMqttUnauthorized($result = [], $status = Response::HTTP_UNAUTHORIZED): JsonResponse
    {
        return response()->json(['result' => $result], $status);
    }

    public function apiMqttNotFound($result = [], $status = Response::HTTP_NOT_FOUND): JsonResponse
    {
        return response()->json(['result' => $result], $status);
    }
}