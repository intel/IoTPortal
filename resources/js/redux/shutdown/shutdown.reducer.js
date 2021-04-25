import shutdownActionTypes from './shutdown.types';

const INITIAL_STATE = {
  // Submit shutdown
  isSubmittingShutdown: false,
  submitShutdownErrorMessage: undefined,
};

const shutdownReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Submit shutdown
    case shutdownActionTypes.SUBMIT_SHUTDOWN_START:
      return {
        ...state,
        isSubmittingShutdown: true,
      };
    case shutdownActionTypes.SUBMIT_SHUTDOWN_SUCCESS:
      return {
        ...state,
        isSubmittingShutdown: false,
      };
    case shutdownActionTypes.SUBMIT_SHUTDOWN_FAILURE:
      return {
        ...state,
        isSubmittingShutdown: false,
        submitShutdownErrorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default shutdownReducer;
