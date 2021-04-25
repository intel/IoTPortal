import aotaActionTypes from './aota.types';


const INITIAL_STATE = {
  // Submit AOTA
  isSubmittingAota: false,
  submitAotaErrorMessage: undefined,
};

const aotaReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Submit AOTA
    case aotaActionTypes.SUBMIT_AOTA_START:
      return {
        ...state,
        isSubmittingAota: true,
      };
    case aotaActionTypes.SUBMIT_AOTA_SUCCESS:
      return {
        ...state,
        isSubmittingAota: false,
      };
    case aotaActionTypes.SUBMIT_AOTA_FAILURE:
      return {
        ...state,
        isSubmittingAota: false,
        submitAotaErrorMessage: action.payload,
      };
    default:
      return state;
  }
}

export default aotaReducer;
