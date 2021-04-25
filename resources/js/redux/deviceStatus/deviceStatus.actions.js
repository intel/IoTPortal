import deviceStatusActionTypes from './deviceStatus.types';
import { API_ENDPOINT } from '../../data/config';


// Fetch dropdown options
export const fetchDeviceStatusOptionsStart = () => ({
  type: deviceStatusActionTypes.FETCH_DEVICE_STATUS_OPTIONS_START,
});

export const fetchDeviceStatusOptionsSuccess = deviceStatuses => ({
  type: deviceStatusActionTypes.FETCH_DEVICE_STATUS_OPTIONS_SUCCESS,
  payload: deviceStatuses,
});

export const fetchDeviceStatusOptionsFailure = errorMessage => ({
  type: deviceStatusActionTypes.FETCH_DEVICE_STATUS_OPTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchDeviceStatusOptionsStartAsync = (name) => {
  return dispatch => {
    dispatch(fetchDeviceStatusOptionsStart());

    const params = {};
    if (name) params.name = name;

    axios.get(`${API_ENDPOINT}/device/statuses/options`, {params: params})
      .then(result => {
        dispatch(fetchDeviceStatusOptionsSuccess(result.data.result.deviceStatuses));
      })
      .catch(error => {
        dispatch(fetchDeviceStatusOptionsFailure(error.message));
      });
  }
};
