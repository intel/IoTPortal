<?php

namespace App\Http\Controllers\Api\Devices;

use App\Helpers\Helper;
use App\Http\Controllers\Controller;
use App\Models\Group;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class GroupController extends Controller
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
            $filters = json_decode($request->input('filters'));

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
            if ($request->input('sortOrder') === '1')
                $query->orderBy($request->input('sortField'));
            else
                $query->orderByDesc($request->input('sortField'));
        }

        $maxRows = Config::get('constants.index_max_rows');
        $rows = (int)$request->input('rows', 10) > $maxRows ? $maxRows : (int)$request->input('rows', 10);

        $deviceGroups = $query->paginate($rows);

        return Helper::apiResponse(['deviceGroups' => $deviceGroups]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255|unique:groups,name',
            'devices.*' => 'required|exists:devices,id',
        ]);

        if ($validator->fails()) {
            return Helper::apiResponse([], false, $validator->getMessageBag()->toArray(), [], Response::HTTP_BAD_REQUEST);
        }

        $deviceGroup = Auth::user()->deviceGroups()->create([
            'name' => $request->input('name'),
        ]);

        $deviceGroup->devices()->attach($request->input('devices'));

        if ($deviceGroup->exists) {
            return Helper::apiResponse(['deviceGroup' => $deviceGroup]);
        } else {
            return Helper::apiResponse([], false, 'Failed to create device group', [], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param Group $group
     * @return JsonResponse
     */
    public function show(Group $group)
    {
        return Helper::apiResponse(['deviceGroup' => $group]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Group $group
     * @return JsonResponse
     */
    public function update(Request $request, Group $group)
    {
        $validator = Validator::make($request->all(), [
            'name' => [
                'required',
                'string',
                'max:255',
                Rule::unique('groups')->ignore($group->id),
            ],
            'devices.*' => 'required|exists:devices,id',
        ]);

        if ($validator->fails()) {
            return Helper::apiResponse([], false, $validator->getMessageBag()->toArray(), [], Response::HTTP_BAD_REQUEST);
        }

        $success = $group->update([
            'name' => $request->input('name'),
        ]);

        $group->devices()->sync($request->input('devices'));

        if ($success) {
            return Helper::apiResponse(['deviceGroup' => $group]);
        }
        return Helper::apiResponse([], false, 'Failed to update device group', [], Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Group $group
     * @return JsonResponse
     */
    public function destroy(Group $group)
    {
    }

    /**
     * Remove the specified resources from storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function destroySelected(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'ids.*' => 'required|exists:groups,id',
        ]);

        if ($validator->fails()) {
            return Helper::apiResponse([], false, $validator->getMessageBag()->toArray(), [], Response::HTTP_BAD_REQUEST);
        }

        $success = Auth::user()->deviceGroups()->whereIn('groups.id', $request->input('ids'))->delete();

        return Helper::apiResponse([], $success);
    }

    /**
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function validateField(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255|unique:groups,name',
        ]);

        if ($validator->fails()) {
            return Helper::apiResponse([], false, $validator->getMessageBag()->toArray(), [], Response::HTTP_BAD_REQUEST);
        }
        return Helper::apiResponse();
    }
}
