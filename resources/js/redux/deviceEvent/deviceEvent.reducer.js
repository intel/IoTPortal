import deviceEventActionTypes from './deviceEvent.types';

const INITIAL_STATE = {
  deviceEvents: null,
  isFetchingDeviceEvents: false,
  fetchDeviceEventsErrorMessage: undefined,
};

const deviceEventReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case deviceEventActionTypes.FETCH_DEVICE_EVENTS_START:
      return {
        ...state,
        isFetchingDeviceEvents: true
      };
    case deviceEventActionTypes.FETCH_DEVICE_EVENTS_SUCCESS:
      return {
        ...state,
        deviceEvents: action.payload,
        isFetchingDeviceEvents: false
      };
    case deviceEventActionTypes.FETCH_DEVICE_EVENTS_FAILURE:
      return {
        ...state,
        isFetchingDeviceEvents: false,
        fetchDeviceEventsErrorMessage: action.payload
      };
    default:
      return state;
  }
};

export default deviceEventReducer;
