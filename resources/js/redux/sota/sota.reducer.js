import sotaActionTypes from './sota.types';


const INITIAL_STATE = {
  // Submit SOTA
  isSubmittingSota: false,
  submitSotaErrorMessage: undefined,
};

const sotaReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Submit SOTA
    case sotaActionTypes.SUBMIT_SOTA_START:
      return {
        ...state,
        isSubmittingSota: true,
      };
    case sotaActionTypes.SUBMIT_SOTA_SUCCESS:
      return {
        ...state,
        isSubmittingSota: false,
      };
    case sotaActionTypes.SUBMIT_SOTA_FAILURE:
      return {
        ...state,
        isSubmittingSota: false,
        submitSotaErrorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default sotaReducer;
