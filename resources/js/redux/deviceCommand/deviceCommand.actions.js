import deviceCommandActionTypes from './deviceCommand.types';
import { API_ENDPOINT } from '../../data/config';


// Fetch dropdown options
export const fetchDeviceCommandOptionsStart = () => ({
  type: deviceCommandActionTypes.FETCH_DEVICE_COMMAND_OPTIONS_START,
});

export const fetchDeviceCommandOptionsSuccess = deviceCommandOptions => ({
  type: deviceCommandActionTypes.FETCH_DEVICE_COMMAND_OPTIONS_SUCCESS,
  payload: deviceCommandOptions,
});

export const fetchDeviceCommandOptionsFailure = errorMessage => ({
  type: deviceCommandActionTypes.FETCH_DEVICE_COMMAND_OPTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchDeviceCommandOptionsStartAsync = (id, name) => {
  return dispatch => {
    dispatch(fetchDeviceCommandOptionsStart());

    const params = {};
    if (name) params.name = name;

    axios.get(`${API_ENDPOINT}/devices/${id}/commands/options`, {params: params})
      .then(result => {
        dispatch(fetchDeviceCommandOptionsSuccess(result.data.result.deviceCommands));
      })
      .catch(error => {
        dispatch(fetchDeviceCommandOptionsFailure(error.message));
      });
  }
};
