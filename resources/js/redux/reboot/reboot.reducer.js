import rebootActionTypes from './reboot.types';

const INITIAL_STATE = {
  // Submit reboot
  isSubmittingReboot: false,
  submitRebootErrorMessage: undefined,
};

const rebootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Submit reboot
    case rebootActionTypes.SUBMIT_REBOOT_START:
      return {
        ...state,
        isSubmittingReboot: true,
        submitRebootErrorMessage: undefined,
      };
    case rebootActionTypes.SUBMIT_REBOOT_SUCCESS:
      return {
        ...state,
        isSubmittingReboot: false,
      };
    case rebootActionTypes.SUBMIT_REBOOT_FAILURE:
      return {
        ...state,
        isSubmittingReboot: false,
        submitRebootErrorMessage: action.payload,
      };
    default:
      return state;
  }
}

export default rebootReducer;
