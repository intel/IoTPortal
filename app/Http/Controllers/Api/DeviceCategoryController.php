<?php

namespace App\Http\Controllers\Api;

use App\Helpers\Helper;
use App\Http\Controllers\Controller;
use App\Http\Requests\DestroySelectedDeviceCategoryRequest;
use App\Http\Requests\StoreDeviceCategoryRequest;
use App\Http\Requests\UpdateDeviceCategoryRequest;
use App\Http\Requests\ValidateDeviceCategoryFieldsRequest;
use App\Models\DeviceCategory;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;

class DeviceCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Request $request)
    {
        $query = Auth::user()->deviceCategories();

        if ($request->has('filters')) {
            $filters = json_decode($request->filters);

            foreach ($filters as $key => $value) {
                if ($key === 'unique_id') $query->uniqueIdLike($value->value);

                if ($key === 'name') $query->nameLike($value->value);

                if ($key === 'globalFilter') {
                    $query->where(function ($query) use ($value) {
                        $query->uniqueIdLike($value->value)
                            ->orWhere->nameLike($value->value);
                    });
                }
            }
        }

        if ($request->has('sortField')) {
            if ($request->sortOrder === '1')
                $query->orderBy($request->sortField);
            else
                $query->orderByDesc($request->sortField);
        }

        $maxRows = Config::get('constants.index_max_rows');
        $rows = min((int) $request->input('rows', 10), $maxRows);

        $deviceCategories = $query->paginate($rows, ['id', 'unique_id', 'name']);

        return Helper::apiResponseHttpOk(['deviceCategories' => $deviceCategories]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StoreDeviceCategoryRequest $request
     * @return JsonResponse
     */
    public function store(StoreDeviceCategoryRequest $request)
    {
        $deviceCategory = Auth::user()->deviceCategories()->create($request->validated());

        return $deviceCategory->exists
            ? Helper::apiResponseHttpOk(['deviceCategory' => $deviceCategory])
            : Helper::apiResponseHttpInternalServerError('Failed to create device category.');
    }

    /**
     * Display the specified resource.
     *
     * @param $id
     * @return JsonResponse
     */
    public function show($id)
    {
        $deviceCategory = DeviceCategory::id($id)
            ->orWhere->uniqueId($id)
            ->first();

        return Helper::apiResponseHttpOk(['deviceCategory' => $deviceCategory]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateDeviceCategoryRequest $request
     * @param DeviceCategory $deviceCategory
     * @return JsonResponse
     */
    public function update(UpdateDeviceCategoryRequest $request, DeviceCategory $deviceCategory)
    {
        $success = $deviceCategory->update($request->validated());

        return $success
            ? Helper::apiResponseHttpOk(['deviceCategory' => $deviceCategory])
            : Helper::apiResponseHttpInternalServerError('Failed to update device category.');
    }

    /**
     * Remove the specified resources from storage.
     *
     * @param DestroySelectedDeviceCategoryRequest $request
     * @return JsonResponse
     */
    public function destroySelected(DestroySelectedDeviceCategoryRequest $request)
    {
        $success = Auth::user()->deviceCategories()->idIn($request->ids)->delete();

        return Helper::apiResponseHttpOk([], $success);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function options(Request $request)
    {
        $query = Auth::user()->deviceCategories();

        if ($request->has('name')) {
            $query->nameLike($request->name);
        }

        return Helper::apiResponseHttpOk(['deviceCategories' => $query->getOptions()]);
    }

    /**
     *
     * @param ValidateDeviceCategoryFieldsRequest $request
     * @return JsonResponse
     */
    public function validateField(ValidateDeviceCategoryFieldsRequest $request)
    {
        return Helper::apiResponseHttpOk();
    }
}
