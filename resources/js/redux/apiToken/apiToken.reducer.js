import apiTokenActionTypes from './apiToken.types';


const INITIAL_STATE = {
  // Read
  uniqueId: null,
  deviceConnectionKey: null,
  isFetchingApiTokens: true,
  fetchApiTokensErrorMessage: undefined,
};

const apiTokenReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Read
    case apiTokenActionTypes.FETCH_API_TOKENS_START:
      return {
        ...state,
        isFetchingApiTokens: true,
        fetchApiTokensErrorMessage: undefined,
      };
    case apiTokenActionTypes.FETCH_API_TOKENS_SUCCESS:
      return {
        ...state,
        uniqueId: action.payload.uniqueId,
        deviceConnectionKey: action.payload.deviceConnectionKey,
        isFetchingApiTokens: false,
      };
    case apiTokenActionTypes.FETCH_API_TOKENS_FAILURE:
      return {
        ...state,
        isFetchingApiTokens: false,
        fetchApiTokensErrorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default apiTokenReducer;
