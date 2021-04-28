import apiTokenActionTypes from './apiToken.types';


const INITIAL_STATE = {
  // Read
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
      };
    case apiTokenActionTypes.FETCH_API_TOKENS_SUCCESS:
      return {
        ...state,
        deviceConnectionKey: action.payload,
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
