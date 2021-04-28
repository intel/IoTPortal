import savedCommandActionTypes from './savedCommand.types';


const INITIAL_STATE = {
  // Index
  savedCommands: null,
  savedCommandsTotalRecords: 0,
  isFetchingSavedCommands: false,
  fetchSavedCommandsErrorMessage: undefined,
  fetchSavedCommandsLazyParams: {
    first: 0,
    rows: 10,
    page: 1,
  },

// Create
  isCreatingSavedCommand: false,
  createSavedCommandErrorMessage: undefined,

  // Read
  savedCommand: null,
  isFetchingSavedCommand: true,
  fetchSavedCommandErrorMessage: undefined,

  // Update
  isUpdatingSavedCommand: false,
  updateSavedCommandErrorMessage: undefined,

  // Delete Mass
  isDeletingSavedCommands: false,
  deleteSavedCommandsErrorMessage: undefined,

  // Dropdown options
  savedCommandOptions: null,
  isFetchingSavedCommandOptions: false,
  fetchSavedCommandOptionsErrorMessage: undefined,
};

const savedCommandReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Index
    case savedCommandActionTypes.FETCH_SAVED_COMMANDS_START:
      return {
        ...state,
        isFetchingSavedCommands: true,
      };
    case savedCommandActionTypes.FETCH_SAVED_COMMANDS_SUCCESS:
      return {
        ...state,
        savedCommands: action.payload.data,
        savedCommandsTotalRecords: action.payload.total,
        isFetchingSavedCommands: false,
      };
    case savedCommandActionTypes.FETCH_SAVED_COMMANDS_FAILURE:
      return {
        ...state,
        isFetchingSavedCommands: false,
        fetchSavedCommandsErrorMessage: action.payload,
      };
    case savedCommandActionTypes.SET_FETCH_SAVED_COMMANDS_LAZY_PARAMS:
      return {
        ...state,
        fetchSavedCommandsLazyParams: action.payload,
      };

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

    // Read
    case savedCommandActionTypes.FETCH_SAVED_COMMAND_START:
      return {
        ...state,
        isFetchingSavedCommand: true,
      };
    case savedCommandActionTypes.FETCH_SAVED_COMMAND_SUCCESS:
      return {
        ...state,
        savedCommand: action.payload,
        isFetchingSavedCommand: false,
      };
    case savedCommandActionTypes.FETCH_SAVED_COMMAND_FAILURE:
      return {
        ...state,
        isFetchingSavedCommand: false,
        fetchSavedCommandErrorMessage: action.payload,
      };

    // Update
    case savedCommandActionTypes.UPDATE_SAVED_COMMAND_START:
      return {
        ...state,
        isUpdatingSavedCommand: true,
      };
    case savedCommandActionTypes.UPDATE_SAVED_COMMAND_SUCCESS:
      return {
        ...state,
        savedCommand: action.payload,
        isUpdatingSavedCommand: false,
      };
    case savedCommandActionTypes.UPDATE_SAVED_COMMAND_FAILURE:
      return {
        ...state,
        isUpdatingSavedCommand: false,
        updateSavedCommandErrorMessage: action.payload,
      };

    // Delete Mass
    case savedCommandActionTypes.DELETE_SAVED_COMMANDS_START:
      return {
        ...state,
        isDeletingSavedCommands: true,
      };
    case savedCommandActionTypes.DELETE_SAVED_COMMANDS_SUCCESS:
      return {
        ...state,
        isDeletingSavedCommands: false,
      };
    case savedCommandActionTypes.DELETE_SAVED_COMMANDS_FAILURE:
      return {
        ...state,
        isDeletingSavedCommands: false,
        deleteSavedCommandsErrorMessage: action.payload,
      };

    // Dropdown options
    case savedCommandActionTypes.FETCH_SAVED_COMMAND_OPTIONS_START:
      return {
        ...state,
        isFetchingSavedCommandOptions: true,
      };
    case savedCommandActionTypes.FETCH_SAVED_COMMAND_OPTIONS_SUCCESS:
      return {
        ...state,
        savedCommandOptions: action.payload,
        isFetchingSavedCommandOptions: false,
      };
    case savedCommandActionTypes.FETCH_SAVED_COMMAND_OPTIONS_FAILURE:
      return {
        ...state,
        isFetchingSavedCommandOptions: false,
        fetchSavedCommandOptionsErrorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default savedCommandReducer;
