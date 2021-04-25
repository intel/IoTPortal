import savedCommandActionTypes from './savedCommand.types';


const INITIAL_STATE = {
  // Create
  isCreatingSavedCommand: false,
  createSavedCommandErrorMessage: undefined,
};

const savedCommandReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Create
    case savedCommandActionTypes.CREATE_SAVED_COMMAND_START:
      return {
        ...state,
        isCreatingSavedCommand: true,
      };
    case savedCommandActionTypes.CREATE_SAVED_COMMAND_SUCCESS:
      return {
        ...state,
        isCreatingSavedCommand: false,
      };
    case savedCommandActionTypes.CREATE_SAVED_COMMAND_FAILURE:
      return {
        ...state,
        isCreatingSavedCommand: false,
        createSavedCommandErrorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default savedCommandReducer;
