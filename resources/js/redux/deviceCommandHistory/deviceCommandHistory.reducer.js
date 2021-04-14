import deviceCommandHistoryActionTypes from './deviceCommandHistory.types';

const INITIAL_STATE = {
  deviceCommandHistories: null,
  totalRecords: 0,
  isFetchingDeviceCommandHistories: false,
  fetchDeviceCommandHistoriesErrorMessage: undefined,
};

const deviceCommandHistoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case deviceCommandHistoryActionTypes.FETCH_DEVICE_COMMAND_HISTORIES_START:
      return {
        ...state,
        isFetchingDeviceCommandHistories: true,
      };
    case deviceCommandHistoryActionTypes.FETCH_DEVICE_COMMAND_HISTORIES_SUCCESS:
      return {
        ...state,
        deviceCommandHistories: action.payload.data,
        totalRecords: action.payload.total,
        isFetchingDeviceCommandHistories: false,
      };
    case deviceCommandHistoryActionTypes.FETCH_DEVICE_COMMAND_HISTORIES_FAILURE:
      return {
        ...state,
        isFetchingDeviceCommandHistories: false,
        fetchDeviceCommandHistoriesErrorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default deviceCommandHistoryReducer;
