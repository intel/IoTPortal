import deviceStatusActionTypes from './deviceStatus.types';

const INITIAL_STATE = {
  deviceStatuses: null,
  isFetchingDeviceStatuses: false,
  fetchDeviceStatusesErrorMessage: undefined,
};

const deviceStatusReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case deviceStatusActionTypes.FETCH_DEVICE_STATUSES_START:
      return {
        ...state,
        isFetchingDeviceStatuses: true
      };
    case deviceStatusActionTypes.FETCH_DEVICE_STATUSES_SUCCESS:
      return {
        ...state,
        deviceStatuses: action.payload,
        isFetchingDeviceStatuses: false
      };
    case deviceStatusActionTypes.FETCH_DEVICE_STATUSES_FAILURE:
      return {
        ...state,
        isFetchingDeviceStatuses: false,
        fetchDeviceStatusesErrorMessage: action.payload
      };
    default:
      return state;
  }
};

export default deviceStatusReducer;
