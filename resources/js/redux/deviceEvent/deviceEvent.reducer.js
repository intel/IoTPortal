import deviceEventActionTypes from './deviceEvent.types';


const INITIAL_STATE = {
  // Dropdown options
  deviceEventOptions: null,
  isFetchingDeviceEventOptions: false,
  fetchDeviceEventOptionsErrorMessage: undefined,
};

const deviceEventReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Dropdown options
    case deviceEventActionTypes.FETCH_DEVICE_EVENT_OPTIONS_START:
      return {
        ...state,
        isFetchingDeviceEventOptions: true,
      };
    case deviceEventActionTypes.FETCH_DEVICE_EVENT_OPTIONS_SUCCESS:
      return {
        ...state,
        deviceEventOptions: action.payload,
        isFetchingDeviceEventOptions: false,
      };
    case deviceEventActionTypes.FETCH_DEVICE_EVENT_OPTIONS_FAILURE:
      return {
        ...state,
        isFetchingDeviceEventOptions: false,
        fetchDeviceEventOptionsErrorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default deviceEventReducer;
