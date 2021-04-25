import deviceCommandHistoryActionTypes from './deviceCommandHistory.types';


const INITIAL_STATE = {
  // Index
  deviceCommandHistories: null,
  deviceCommandHistoriesTotalRecords: 0,
  isFetchingDeviceCommandHistories: false,
  fetchDeviceCommandHistoriesErrorMessage: undefined,
  fetchDeviceCommandHistoriesLazyParams: {
    first: 0,
    rows: 10,
    page: 1,
  },
};

const deviceCommandHistoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Index
    case deviceCommandHistoryActionTypes.FETCH_DEVICE_COMMAND_HISTORIES_START:
      return {
        ...state,
        isFetchingDeviceCommandHistories: true,
      };
    case deviceCommandHistoryActionTypes.FETCH_DEVICE_COMMAND_HISTORIES_SUCCESS:
      return {
        ...state,
        deviceCommandHistories: action.payload.data,
        deviceCommandHistoriesTotalRecords: action.payload.total,
        isFetchingDeviceCommandHistories: false,
      };
    case deviceCommandHistoryActionTypes.FETCH_DEVICE_COMMAND_HISTORIES_FAILURE:
      return {
        ...state,
        isFetchingDeviceCommandHistories: false,
        fetchDeviceCommandHistoriesErrorMessage: action.payload,
      };
    case deviceCommandHistoryActionTypes.SET_FETCH_DEVICE_COMMAND_HISTORIES_LAZY_PARAMS:
      return {
        ...state,
        fetchDeviceCommandHistoriesLazyParams: action.payload,
      };
    default:
      return state;
  }
};

export default deviceCommandHistoryReducer;
