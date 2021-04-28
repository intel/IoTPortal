import loginActionTypes from './login.types';


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

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Index
    case loginActionTypes.FETCH_DEVICES_START:
      return {
        ...state,
        isFetchingDevices: true,
      };
    case loginActionTypes.FETCH_DEVICES_SUCCESS:
      return {
        ...state,
        devices: action.payload.data,
        devicesTotalRecords: action.payload.total,
        isFetchingDevices: false,
      };
    case loginActionTypes.FETCH_DEVICES_FAILURE:
      return {
        ...state,
        isFetchingDevices: false,
        fetchDevicesErrorMessage: action.payload,
      };
    case loginActionTypes.SET_FETCH_DEVICES_LAZY_PARAMS:
      return {
        ...state,
        fetchDevicesLazyParams: action.payload,
      };

    // Create
    case loginActionTypes.CREATE_DEVICE_START:
      return {
        ...state,
        isCreatingDevice: true,
      };
    case loginActionTypes.CREATE_DEVICE_SUCCESS:
      return {
        ...state,
        isCreatingDevice: false,
      };
    case loginActionTypes.CREATE_DEVICE_FAILURE:
      return {
        ...state,
        isCreatingDevice: false,
        createDeviceErrorMessage: action.payload,
      };

    // Read
    case loginActionTypes.FETCH_DEVICE_START:
      return {
        ...state,
        isFetchingDevice: true,
      };
    case loginActionTypes.FETCH_DEVICE_SUCCESS:
      return {
        ...state,
        device: action.payload,
        isFetchingDevice: false,
      };
    case loginActionTypes.FETCH_DEVICE_FAILURE:
      return {
        ...state,
        isFetchingDevice: false,
        fetchDeviceErrorMessage: action.payload,
      };

    // Update
    case loginActionTypes.UPDATE_DEVICE_START:
      return {
        ...state,
        isUpdatingDevice: true,
      };
    case loginActionTypes.UPDATE_DEVICE_SUCCESS:
      return {
        ...state,
        device: action.payload,
        isUpdatingDevice: false,
      };
    case loginActionTypes.UPDATE_DEVICE_FAILURE:
      return {
        ...state,
        isUpdatingDevice: false,
        updateDeviceErrorMessage: action.payload,
      };

    // Delete Mass
    case loginActionTypes.DELETE_DEVICES_START:
      return {
        ...state,
        isDeletingDevices: true,
      };
    case loginActionTypes.DELETE_DEVICES_SUCCESS:
      return {
        ...state,
        isDeletingDevices: false,
      };
    case loginActionTypes.DELETE_DEVICES_FAILURE:
      return {
        ...state,
        isDeletingDevices: false,
        deleteDevicesErrorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
