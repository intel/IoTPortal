import fotaActionTypes from './fota.types';

const INITIAL_STATE = {
  // Submit FOTA
  isSubmittingFota: false,
  submitFotaErrorMessage: undefined,
};

const fotaReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Submit FOTA
    case fotaActionTypes.SUBMIT_FOTA_START:
      return {
        ...state,
        isSubmittingFota: true,
      };
    case fotaActionTypes.SUBMIT_FOTA_SUCCESS:
      return {
        ...state,
        isSubmittingFota: false,
      };
    case fotaActionTypes.SUBMIT_FOTA_FAILURE:
      return {
        ...state,
        isSubmittingFota: false,
        submitFotaErrorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default fotaReducer;
