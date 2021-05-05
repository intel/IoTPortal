import deviceEventHistoryActionTypes from './deviceEventHistory.types';


const INITIAL_STATE = {
  // Index
  deviceEventHistories: null,
  deviceEventHistoriesTotalRecords: 0,
  isFetchingDeviceEventHistories: false,
  fetchDeviceEventHistoriesErrorMessage: undefined,
  fetchDeviceEventHistoriesLazyParams: {
    first: 0,
    rows: 10,
    page: 1,
    sortField: 'created_at',
    sortOrder: -1,
  },
};

const deviceEventHistoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Index
    case deviceEventHistoryActionTypes.FETCH_DEVICE_EVENT_HISTORIES_START:
      return {
        ...state,
        isFetchingDeviceEventHistories: action.payload,
        fetchDeviceEventHistoriesErrorMessage: undefined,
      };
    case deviceEventHistoryActionTypes.FETCH_DEVICE_EVENT_HISTORIES_SUCCESS:
      return {
        ...state,
        deviceEventHistories: action.payload.data,
        deviceEventHistoriesTotalRecords: action.payload.total,
        isFetchingDeviceEventHistories: false,
      };
    case deviceEventHistoryActionTypes.FETCH_DEVICE_EVENT_HISTORIES_FAILURE:
      return {
        ...state,
        isFetchingDeviceEventHistories: false,
        fetchDeviceEventHistoriesErrorMessage: action.payload,
      };
    case deviceEventHistoryActionTypes.SET_FETCH_DEVICE_EVENT_HISTORIES_LAZY_PARAMS:
      return {
        ...state,
        fetchDeviceEventHistoriesLazyParams: action.payload,
      };
    case deviceEventHistoryActionTypes.RESET_FETCH_DEVICE_EVENT_HISTORIES_LAZY_PARAMS:
      return {
        ...state,
        fetchDeviceEventHistoriesLazyParams: INITIAL_STATE.fetchDeviceEventHistoriesLazyParams,
      };
    default:
      return state;
  }
};

export default deviceEventHistoryReducer;
