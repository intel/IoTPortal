import cotaActionTypes from './cota.types';

const INITIAL_STATE = {
  // Submit COTA
  isSubmittingCota: false,
  submitCotaErrorMessage: undefined,
};

const cotaReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Submit COTA
    case cotaActionTypes.SUBMIT_COTA_START:
      return {
        ...state,
        isSubmittingCota: true,
      };
    case cotaActionTypes.SUBMIT_COTA_SUCCESS:
      return {
        ...state,
        isSubmittingCota: false,
      };
    case cotaActionTypes.SUBMIT_COTA_FAILURE:
      return {
        ...state,
        isSubmittingCota: false,
        submitCotaErrorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default cotaReducer;
