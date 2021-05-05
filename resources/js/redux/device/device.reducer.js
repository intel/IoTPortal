import deviceActionTypes from './device.types';


const INITIAL_STATE = {
  // Index
  devices: null,
  devicesTotalRecords: 0,
  isFetchingDevices: false,
  fetchDevicesErrorMessage: undefined,
  fetchDevicesLazyParams: {
    first: 0,
    rows: 10,
    page: 1,
  },

  // Create
  isCreatingDevice: false,
  createDeviceErrorMessage: undefined,

  // Read
  device: null,
  isFetchingDevice: true,
  fetchDeviceErrorMessage: undefined,

  // Update
  isUpdatingDevice: false,
  updateDeviceErrorMessage: undefined,

  // Delete Mass
  isDeletingDevices: false,
  deleteDevicesErrorMessage: undefined,
};

const deviceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Index
    case deviceActionTypes.FETCH_DEVICES_START:
      return {
        ...state,
        isFetchingDevices: true,
        fetchDevicesErrorMessage: undefined,
      };
    case deviceActionTypes.FETCH_DEVICES_SUCCESS:
      return {
        ...state,
        devices: action.payload.data,
        devicesTotalRecords: action.payload.total,
        isFetchingDevices: false,
      };
    case deviceActionTypes.FETCH_DEVICES_FAILURE:
      return {
        ...state,
        isFetchingDevices: false,
        fetchDevicesErrorMessage: action.payload,
      };
    case deviceActionTypes.SET_FETCH_DEVICES_LAZY_PARAMS:
      return {
        ...state,
        fetchDevicesLazyParams: action.payload,
      };
    case deviceActionTypes.RESET_FETCH_DEVICES_LAZY_PARAMS:
      return {
        ...state,
        fetchDevicesLazyParams: INITIAL_STATE.fetchDevicesLazyParams,
      };

    // Create
    case deviceActionTypes.CREATE_DEVICE_START:
      return {
        ...state,
        isCreatingDevice: true,
        createDeviceErrorMessage: undefined,
      };
    case deviceActionTypes.CREATE_DEVICE_SUCCESS:
      return {
        ...state,
        isCreatingDevice: false,
      };
    case deviceActionTypes.CREATE_DEVICE_FAILURE:
      return {
        ...state,
        isCreatingDevice: false,
        createDeviceErrorMessage: action.payload,
      };

    // Read
    case deviceActionTypes.FETCH_DEVICE_START:
      return {
        ...state,
        isFetchingDevice: true,
        fetchDeviceErrorMessage: undefined,
      };
    case deviceActionTypes.FETCH_DEVICE_SUCCESS:
      return {
        ...state,
        device: action.payload,
        isFetchingDevice: false,
      };
    case deviceActionTypes.FETCH_DEVICE_FAILURE:
      return {
        ...state,
        isFetchingDevice: false,
        fetchDeviceErrorMessage: action.payload,
      };

    // Update
    case deviceActionTypes.UPDATE_DEVICE_START:
      return {
        ...state,
        isUpdatingDevice: true,
        updateDeviceErrorMessage: undefined,
      };
    case deviceActionTypes.UPDATE_DEVICE_SUCCESS:
      return {
        ...state,
        device: action.payload,
        isUpdatingDevice: false,
      };
    case deviceActionTypes.UPDATE_DEVICE_FAILURE:
      return {
        ...state,
        isUpdatingDevice: false,
        updateDeviceErrorMessage: action.payload,
      };

    // Delete Mass
    case deviceActionTypes.DELETE_DEVICES_START:
      return {
        ...state,
        isDeletingDevices: true,
        deleteDevicesErrorMessage: undefined,
      };
    case deviceActionTypes.DELETE_DEVICES_SUCCESS:
      return {
        ...state,
        isDeletingDevices: false,
      };
    case deviceActionTypes.DELETE_DEVICES_FAILURE:
      return {
        ...state,
        isDeletingDevices: false,
        deleteDevicesErrorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default deviceReducer;
