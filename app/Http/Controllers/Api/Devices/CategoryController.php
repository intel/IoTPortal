<?php

namespace App\Http\Controllers\Api\Devices;

use App\Helpers\Helper;
use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Device;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class CategoryController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Request $request)
    {
        $query = Auth::user()->deviceCategories()->select(['id', 'unique_id', 'name']);

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

        $deviceCategories = $query->paginate($rows);

        return Helper::apiResponse(['deviceCategories' => $deviceCategories]);
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
            'name' => 'required|string|max:255|unique:categories,name',
        ]);

        if ($validator->fails()) {
            return Helper::apiResponse([], false, $validator->getMessageBag()->toArray(), [], Response::HTTP_BAD_REQUEST);
        }

        $deviceCategory = Auth::user()->deviceCategories()->create([
            'name' => $request->input('name'),
        ]);

        if ($deviceCategory->exists) {
            return Helper::apiResponse(['deviceCategory' => $deviceCategory]);
        }

        return Helper::apiResponse([], false, 'Failed to create device category', [], Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * Display the specified resource.
     *
     * @param Category $category
     * @return JsonResponse
     */
    public function show(Category $category)
    {
        return Helper::apiResponse(['deviceCategory' => $category]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Category $category
     * @return JsonResponse
     */
    public function update(Request $request, Category $category)
    {
        $validator = Validator::make($request->all(), [
            'name' => [
                'required',
                'string',
                'max:255',
                Rule::unique('categories', 'name')->ignore($category->id),
            ],
        ]);

        if ($validator->fails()) {
            return Helper::apiResponse([], false, $validator->getMessageBag()->toArray(), [], Response::HTTP_BAD_REQUEST);
        }

        $success = $category->update([
            'name' => $request->input('name'),
        ]);

        if ($success) {
            return Helper::apiResponse(['deviceCategory' => $category]);
        }

        return Helper::apiResponse([], false, 'Failed to update device category', [], Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Category $category
     * @return Response
     */
    public function destroy(Category $category)
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
            'ids.*' => 'required|exists:categories,id',
        ]);

        if ($validator->fails()) {
            return Helper::apiResponse([], false, $validator->getMessageBag()->toArray(), [], Response::HTTP_BAD_REQUEST);
        }

        $success = Auth::user()->deviceCategories()->whereIn('categories.id', $request->input('ids'))->delete();

        return Helper::apiResponse([], $success);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function options(Request $request)
    {
        $query = Auth::user()->deviceCategories()->select(['id as value', 'name as label']);

        if ($request->has('name')) {
            $query->where('name', 'like', "%{$request->input('name')}%");
        }

        return Helper::apiResponse(['deviceCategories' => $query->get()]);
    }

    /**
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function validateField(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255|unique:categories,name',
        ]);

        if ($validator->fails()) {
            return Helper::apiResponse([], false, $validator->getMessageBag()->toArray(), [], Response::HTTP_BAD_REQUEST);
        }
        return Helper::apiResponse();
    }
}
