import deviceCommandActionTypes from './deviceCommand.types';

const INITIAL_STATE = {
  deviceCommands: null,
  isFetchingDeviceCommands: false,
  fetchDeviceCommandsErrorMessage: undefined,
};

const deviceCommandReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case deviceCommandActionTypes.FETCH_DEVICE_COMMANDS_START:
      return {
        ...state,
        isFetchingDeviceCommands: true
      };
    case deviceCommandActionTypes.FETCH_DEVICE_COMMANDS_SUCCESS:
      return {
        ...state,
        deviceCommands: action.payload,
        isFetchingDeviceCommands: false
      };
    case deviceCommandActionTypes.FETCH_DEVICE_COMMANDS_FAILURE:
      return {
        ...state,
        isFetchingDeviceCommands: false,
        fetchDeviceCommandsErrorMessage: action.payload
      };
    default:
      return state;
  }
};

export default deviceCommandReducer;
