import deviceActionTypes from './device.types';

const INITIAL_STATE = {
  device: null,
  isFetchingDevice: true,
  fetchDeviceErrorMessage: undefined
}

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
    default:
      return state;
  }
}

export default deviceReducer;
