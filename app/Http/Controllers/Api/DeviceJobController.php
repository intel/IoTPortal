<?php

namespace App\Http\Controllers\Api;

use App\Helpers\Helper;
use App\Http\Controllers\Controller;
use App\Http\Requests\DestroySelectedDeviceJobRequest;
use App\Http\Requests\StoreDeviceJobRequest;
use App\Http\Requests\ValidateDeviceJobFieldsRequest;
use App\Jobs\ProcessDeviceJob;
use App\Models\DeviceJob;
use App\Models\SavedCommand;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;

class DeviceJobController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Request $request)
    {
        $query = Auth::user()->deviceJobs()->with(['deviceGroup', 'savedCommand']);

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

        $deviceJobs = $query->paginate($rows);

        return Helper::apiResponseHttpOk(['deviceJobs' => $deviceJobs]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StoreDeviceJobRequest $request
     * @return JsonResponse
     */
    public function store(StoreDeviceJobRequest $request)
    {
        $deviceJob = Auth::user()->deviceJobs()->create([
            'name' => $request->device_job_name,
            'device_group_id' => $request->device_group,
            'saved_command_id' => $request->saved_command,
        ]);

        if ($deviceJob->exists) {
            ProcessDeviceJob::dispatch($deviceJob);
            return Helper::apiResponseHttpOk(['deviceJob' => $deviceJob]);
        }

        return Helper::apiResponseHttpInternalServerError('Failed to create device job.');
    }

    /**
     * Display the specified resource.
     *
     * @param $id
     * @return JsonResponse
     */
    public function show($id)
    {
        if (is_numeric($id)) {
            $deviceJob = DeviceJob::id($id);
        } else {
            $deviceJob = DeviceJob::uniqueId($id);
        }

        return Helper::apiResponseHttpOk(['deviceJob' => $deviceJob->with(['deviceGroup', 'savedCommand', 'deviceGroup.devices.deviceCategory', 'deviceGroup.devices.deviceStatus', 'commandHistories.command:id,device_id'])->first()]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param SavedCommand $savedCommand
     * @return Response
     */
    public function update(Request $request, SavedCommand $savedCommand)
    {
        //
    }

    /**
     * Remove the specified resources from storage.
     *
     * @param DestroySelectedDeviceJobRequest $request
     * @return JsonResponse
     */
    public function destroySelected(DestroySelectedDeviceJobRequest $request)
    {
//        $success = Auth::user()->savedCommands()->whereIn('saved_commands.id', $request->ids)->delete();
//
//        return Helper::apiResponseHttpOk([], $success);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function options(Request $request)
    {
        //
    }

    /**
     *
     * @param ValidateDeviceJobFieldsRequest $request
     * @return JsonResponse
     */
    public function validateField(ValidateDeviceJobFieldsRequest $request)
    {
        return Helper::apiResponseHttpOk();
    }
}
