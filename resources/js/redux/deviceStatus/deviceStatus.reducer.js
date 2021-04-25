import deviceStatusActionTypes from './deviceStatus.types';


const INITIAL_STATE = {
  // Dropdown options
  deviceStatusOptions: null,
  isFetchingDeviceStatusOptions: false,
  fetchDeviceStatusOptionsErrorMessage: undefined,
};

const deviceStatusReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Dropdown options
    case deviceStatusActionTypes.FETCH_DEVICE_STATUS_OPTIONS_START:
      return {
        ...state,
        isFetchingDeviceStatusOptions: true
      };
    case deviceStatusActionTypes.FETCH_DEVICE_STATUS_OPTIONS_SUCCESS:
      return {
        ...state,
        deviceStatusOptions: action.payload,
        isFetchingDeviceStatusOptions: false
      };
    case deviceStatusActionTypes.FETCH_DEVICE_STATUS_OPTIONS_FAILURE:
      return {
        ...state,
        isFetchingDeviceStatusOptions: false,
        fetchDeviceStatusOptionsErrorMessage: action.payload
      };
    default:
      return state;
  }
};

export default deviceStatusReducer;
