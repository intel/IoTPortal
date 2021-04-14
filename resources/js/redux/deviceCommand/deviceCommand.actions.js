import deviceCommandActionTypes from './deviceCommand.types';
import { API_ENDPOINT } from '../../data/config';

export const fetchDeviceCommandsStart = () => ({
  type: deviceCommandActionTypes.FETCH_DEVICE_COMMANDS_START,
});

export const fetchDeviceCommandsSuccess = deviceCommands => ({
  type: deviceCommandActionTypes.FETCH_DEVICE_COMMANDS_SUCCESS,
  payload: deviceCommands
});

export const fetchDeviceCommandsFailure = errorMessage => ({
  type: deviceCommandActionTypes.FETCH_DEVICE_COMMANDS_FAILURE,
  payload: errorMessage
});

export const fetchDeviceCommandsStartAsync = id => {
  return dispatch => {
    dispatch(fetchDeviceCommandsStart());

    axios.get(`${API_ENDPOINT}/devices/${id}/device-commands`)
      .then(result => {
        dispatch(fetchDeviceCommandsSuccess(result.data.result.deviceCommands));
      })
      .catch(error => {
        dispatch(fetchDeviceCommandsFailure(error.message));
      });
  }
};
