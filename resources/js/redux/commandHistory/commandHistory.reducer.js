import commandHistoryActionTypes from './commandHistory.types';

const INITIAL_STATE = {
  commandHistories: null,
  totalRecords: 0,
  isFetchingCommandHistories: false,
  fetchCommandHistoriesErrorMessage: undefined,
}

const commandHistoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case commandHistoryActionTypes.FETCH_COMMAND_HISTORY_START:
      return {
        ...state,
        isFetchingCommandHistories: true,
      };
    case commandHistoryActionTypes.FETCH_COMMAND_HISTORY_SUCCESS:
      return {
        ...state,
        commandHistories: action.payload.data,
        totalRecords: action.payload.total,
        isFetchingCommandHistories: false,
      };
    case commandHistoryActionTypes.FETCH_COMMAND_HISTORY_FAILURE:
      return {
        ...state,
        isFetchingCommandHistories: false,
        fetchCommandHistoriesErrorMessage: action.payload,
      };
    default:
      return state;
  }
}

export default commandHistoryReducer;
