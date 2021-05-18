<?php

namespace App\Http\Controllers\Api;

use App\Helpers\Helper;
use App\Http\Controllers\Controller;
use App\Http\Requests\DestroySelectedDeviceGroupRequest;
use App\Http\Requests\StoreDeviceGroupRequest;
use App\Http\Requests\UpdateDeviceGroupRequest;
use App\Http\Requests\ValidateDeviceGroupFieldsRequest;
use App\Models\DeviceGroup;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;

class DeviceGroupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Request $request)
    {
        $query = Auth::user()->deviceGroups();

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
        $rows = (int)$request->input('rows', 10) > $maxRows ? $maxRows : (int)$request->input('rows', 10);

        $deviceGroups = $query->paginate($rows);

        return Helper::apiResponseHttpOk(['deviceGroups' => $deviceGroups]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StoreDeviceGroupRequest $request
     * @return JsonResponse
     */
    public function store(StoreDeviceGroupRequest $request)
    {
        $deviceGroup = Auth::user()->deviceGroups()->create($request->validated());

        $deviceGroup->devices()->attach($request->devices);

        return $deviceGroup->exists
            ? Helper::apiResponseHttpOk(['deviceGroup' => $deviceGroup])
            : Helper::apiResponseHttpInternalServerError(['Failed to create device group']);
    }

    /**
     * Display the specified resource.
     *
     * @param $id
     * @return JsonResponse
     */
    public function show($id)
    {
        $deviceGroup = DeviceGroup::id($id)
            ->orWhere->uniqueId($id)
            ->first();

        return Helper::apiResponseHttpOk(['deviceGroup' => $deviceGroup]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateDeviceGroupRequest $request
     * @param DeviceGroup $deviceGroup
     * @return JsonResponse
     */
    public function update(UpdateDeviceGroupRequest $request, DeviceGroup $deviceGroup)
    {
        $success = $deviceGroup->update($request->validated());

        $deviceGroup->devices()->sync($request->devices);

        return $success
            ? Helper::apiResponseHttpOk(['deviceGroup' => $deviceGroup])
            : Helper::apiResponseHttpInternalServerError('Failed to update device group');
    }

    /**
     * Remove the specified resources from storage.
     *
     * @param DestroySelectedDeviceGroupRequest $request
     * @return JsonResponse
     */
    public function destroySelected(DestroySelectedDeviceGroupRequest $request)
    {
        $success = Auth::user()->deviceGroups()->idIn($request->ids)->delete();

        return Helper::apiResponseHttpOk([], $success);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function options(Request $request)
    {
        $query = Auth::user()->deviceGroups();

        if ($request->has('name')) {
            $query->nameLike($request->name);
        }

        return Helper::apiResponseHttpOk(['deviceGroups' => $query->getOptions()]);
    }

    /**
     *
     * @param ValidateDeviceGroupFieldsRequest $request
     * @return JsonResponse
     */
    public function validateField(ValidateDeviceGroupFieldsRequest $request)
    {
        return Helper::apiResponseHttpOk();
    }
}
