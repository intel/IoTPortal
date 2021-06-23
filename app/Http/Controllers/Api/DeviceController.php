<?php

namespace App\Http\Controllers\Api;

use App\Actions\Commands\TriggerCommandAction;
use App\Actions\Devices\CreateDeviceAction;
use App\Actions\Devices\DeleteMultipleDevicesAction;
use App\Actions\Devices\FilterDataTableDevicesAction;
use App\Actions\Devices\FindDeviceByIdOrUniqueIdAction;
use App\Actions\Devices\RegisterDeviceAction;
use App\Actions\Devices\UpdateDeviceAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\DestroySelectedDevicesRequest;
use App\Http\Requests\RegisterDeviceRequest;
use App\Http\Requests\StoreDeviceRequest;
use App\Http\Requests\TriggerCommandRequest;
use App\Http\Requests\UpdateDeviceRequest;
use App\Http\Requests\ValidateDeviceFieldsRequest;
use App\Models\Device;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class DeviceController extends Controller
{
    public function __construct()
    {
        $this->middleware('can:viewAny,App\Models\Device')->only('index');
        $this->middleware('can:create,App\Models\Device')->only('store');
        $this->middleware('can:update,device')->only('update');
        $this->middleware('can:deleteMany,App\Models\Device')->only('destroySelected');
        $this->middleware('can:triggerCommand,device')->only('commands');
    }

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @param FilterDataTableDevicesAction $filterDataTableDevicesAction
     * @return JsonResponse
     */
    public function index(Request $request, FilterDataTableDevicesAction $filterDataTableDevicesAction): JsonResponse
    {
        $devices = $filterDataTableDevicesAction->execute($request->all());

        return $this->apiOk(['devices' => $devices]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StoreDeviceRequest $request
     * @param CreateDeviceAction $createDeviceAction
     * @return JsonResponse
     */
    public function store(StoreDeviceRequest $request, CreateDeviceAction $createDeviceAction): JsonResponse
    {
        $device = $createDeviceAction->execute($request->user(), $request->validated());

        return $this->apiOk(['device' => $device]);
    }

    /**
     * Display the specified resource.
     *
     * @param FindDeviceByIdOrUniqueIdAction $findDeviceByIdOrUniqueIdAction
     * @param string $id
     * @return JsonResponse
     */
    public function show(FindDeviceByIdOrUniqueIdAction $findDeviceByIdOrUniqueIdAction, string $id): JsonResponse
    {
        $device = $findDeviceByIdOrUniqueIdAction->execute($id);

        $this->authorize('view', $device);

        return $this->apiOk(['device' => $device]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateDeviceRequest $request
     * @param UpdateDeviceAction $updateDeviceAction
     * @param Device $device
     * @return JsonResponse
     */
    public function update(UpdateDeviceRequest $request, UpdateDeviceAction $updateDeviceAction, Device $device): JsonResponse
    {
        $success = $updateDeviceAction->execute($device, $request->validated());

        return $success
            ? $this->apiOk(['device' => $device->load('deviceCategory:id,name', 'deviceStatus:id,name')])
            : $this->apiInternalServerError('Failed to update device.');
    }

    /**
     * Remove the specified resources from storage.
     *
     * @param DestroySelectedDevicesRequest $request
     * @param DeleteMultipleDevicesAction $deleteMultipleDevicesAction
     * @return JsonResponse
     */
    public function destroySelected(DestroySelectedDevicesRequest $request, DeleteMultipleDevicesAction $deleteMultipleDevicesAction): JsonResponse
    {
        $success = $deleteMultipleDevicesAction->execute($request->ids);

        return $this->apiOk([], $success);
    }

    /**
     *
     * @param ValidateDeviceFieldsRequest $request
     * @return JsonResponse
     */
    public function validateField(ValidateDeviceFieldsRequest $request): JsonResponse
    {
        return $this->apiOk();
    }

    public function commands(TriggerCommandRequest $request, TriggerCommandAction $triggerCommandAction, Device $device): JsonResponse
    {
        $commandHistory = $triggerCommandAction->execute($device, $request->validated());

        return $this->apiOk(['commandHistory' => $commandHistory]);
    }

    public function register(RegisterDeviceRequest $request, RegisterDeviceAction $registerDeviceAction): JsonResponse
    {
        $device = $registerDeviceAction->execute($request->validated(), $request->bearerToken());

//        TODO: Possible refactoring, remove if statement since it is not necessary.
        if ($device) {
            return $this->apiOk([
                'mqttEndpoint' => config('mqttclient.connections.default.external_endpoint'),
                'device' => $device
            ]);
        }

        return $this->apiBadRequest('Invalid device_connection_key.');
    }
}
