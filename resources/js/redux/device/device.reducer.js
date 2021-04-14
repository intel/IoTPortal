import deviceActionTypes from './device.types';

const INITIAL_STATE = {
  device: null,
  isFetchingDevice: true,
  fetchDeviceErrorMessage: undefined,
  isUpdatingDevice: false,
  updateDeviceErrorMessage: undefined,
  devices: null,
  totalRecords: 0,
  isFetchingDevices: true,
  fetchDevicesErrorMessage: undefined,
};

const deviceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case deviceActionTypes.FETCH_DEVICE_START:
      return {
        ...state,
        isFetchingDevice: true
      };
    case deviceActionTypes.FETCH_DEVICE_SUCCESS:
      return {
        ...state,
        device: action.payload,
        isFetchingDevice: false
      };
    case deviceActionTypes.FETCH_DEVICE_FAILURE:
      return {
        ...state,
        isFetchingDevice: false,
        fetchDeviceErrorMessage: action.payload
      };
    case deviceActionTypes.UPDATE_DEVICE_START:
      return {
        ...state,
        isUpdatingDevice: true
      };
    case deviceActionTypes.UPDATE_DEVICE_SUCCESS:
      return {
        ...state,
        device: action.payload,
        isUpdatingDevice: false
      };
    case deviceActionTypes.UPDATE_DEVICE_FAILURE:
      return {
        ...state,
        isUpdatingDevice: false,
        updateDeviceErrorMessage: action.payload
      };
    case deviceActionTypes.FETCH_DEVICES_START:
      return {
        ...state,
        isFetchingDevices: true
      };
    case deviceActionTypes.FETCH_DEVICES_SUCCESS:
      return {
        ...state,
        devices: action.payload.data,
        totalRecords: action.payload.total,
        isFetchingDevices: false
      };
    case deviceActionTypes.FETCH_DEVICES_FAILURE:
      return {
        ...state,
        isFetchingDevices: false,
        fetchDevicesErrorMessage: action.payload
      };
    default:
      return state;
  }
};

export default deviceReducer;
