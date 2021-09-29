<?php

namespace App\Http\Controllers\Api;

use App\Actions\Commands\TriggerCommandAction;
use App\Actions\Devices\CreateDeviceAction;
use App\Actions\Devices\DeleteMultipleDevicesAction;
use App\Actions\Devices\FilterDataTableDevicesAction;
use App\Actions\Devices\FindDeviceByIdOrUniqueIdAction;
use App\Actions\Devices\RegisterDeviceAction;
use App\Actions\Devices\UpdateDeviceAction;
use App\Exceptions\InvalidDeviceConnectionKeyException;
use App\Http\Controllers\Controller;
use App\Http\Requests\DestroySelectedDevicesRequest;
use App\Http\Requests\RegisterDeviceRequest;
use App\Http\Requests\StoreDeviceRequest;
use App\Http\Requests\TriggerCommandRequest;
use App\Http\Requests\UpdateDeviceRequest;
use App\Http\Requests\ValidateDeviceFieldsRequest;
use App\Models\Device;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * Class DeviceController
 * @package App\Http\Controllers\Api
 */
class DeviceController extends Controller
{
    /**
     * DeviceController constructor.
     */
    public function __construct()
    {
        $this->middleware('can:viewAny,App\Models\Device')->only('index');
        $this->middleware('can:create,App\Models\Device')->only('store');
        $this->middleware('can:update,device')->only('update');
        $this->middleware('can:deleteMany,App\Models\Device')->only('destroySelected');
        $this->middleware('can:triggerCommand,device')->only('commands');
    }

    /**
     * Return a listing of the devices.
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
     * Store a newly created device in storage.
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
     * Return the specified device.
     *
     * @param FindDeviceByIdOrUniqueIdAction $findDeviceByIdOrUniqueIdAction
     * @param string $id
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function show(FindDeviceByIdOrUniqueIdAction $findDeviceByIdOrUniqueIdAction, string $id): JsonResponse
    {
        $device = $findDeviceByIdOrUniqueIdAction->execute($id);

        $this->authorize('view', $device);

        return $this->apiOk(['device' => $device]);
    }

    /**
     * Update the specified device in storage.
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
     * Remove the specified devices from storage.
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
     * Validate device selection.
     *
     * @param ValidateDeviceFieldsRequest $request
     * @return JsonResponse
     */
    public function validateField(ValidateDeviceFieldsRequest $request): JsonResponse
    {
        return $this->apiOk();
    }

    /**
     * Handle device command and trigger command.
     *
     * @param TriggerCommandRequest $request
     * @param TriggerCommandAction $triggerCommandAction
     * @param Device $device
     * @return JsonResponse
     */
    public function commands(TriggerCommandRequest $request, TriggerCommandAction $triggerCommandAction, Device $device): JsonResponse
    {
        $commandHistory = $triggerCommandAction->execute($device, $request->validated());

        return $this->apiOk(['commandHistory' => $commandHistory]);
    }

    /**
     * Handle device registration request from client devices.
     *
     * @param RegisterDeviceRequest $request
     * @param RegisterDeviceAction $registerDeviceAction
     * @return JsonResponse
     * @throws InvalidDeviceConnectionKeyException
     */
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
