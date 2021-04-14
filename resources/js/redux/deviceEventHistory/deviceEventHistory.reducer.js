import deviceEventHistoryActionTypes from './deviceEventHistory.types';

const INITIAL_STATE = {
  deviceEventHistories: null,
  totalRecords: 0,
  isFetchingDeviceEventHistories: false,
  fetchDeviceEventHistoriesErrorMessage: undefined,
};

const deviceEventHistoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case deviceEventHistoryActionTypes.FETCH_DEVICE_EVENT_HISTORIES_START:
      return {
        ...state,
        isFetchingDeviceEventHistories: true,
      };
    case deviceEventHistoryActionTypes.FETCH_DEVICE_EVENT_HISTORIES_SUCCESS:
      return {
        ...state,
        deviceEventHistories: action.payload.data,
        totalRecords: action.payload.total,
        isFetchingDeviceEventHistories: false,
      };
    case deviceEventHistoryActionTypes.FETCH_DEVICE_EVENT_HISTORIES_FAILURE:
      return {
        ...state,
        isFetchingDeviceEventHistories: false,
        fetchDeviceEventHistoriesErrorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default deviceEventHistoryReducer;
