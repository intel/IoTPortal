import rebootActionTypes from './reboot.types';

const INITIAL_STATE = {
  isSubmittingReboot: false,
  submitRebootErrorMessage: undefined
}

const rebootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case rebootActionTypes.SUBMIT_REBOOT_START:
      return {
        ...state,
        isSubmittingReboot: true
      };
    case rebootActionTypes.SUBMIT_REBOOT_SUCCESS:
      return {
        ...state,
        submitRebootErrorMessage: false
      };
    case rebootActionTypes.SUBMIT_REBOOT_FAILURE:
      return {
        ...state,
        isSubmittingReboot: false,
        submitRebootErrorMessage: action.payload
      };
    default:
      return state;
  }
}

export default rebootReducer;
