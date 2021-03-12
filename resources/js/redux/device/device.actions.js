import deviceActionTypes from './device.types';
import { API_ENDPOINT } from '../../data/config'

export const fetchDeviceStart = () => ({
  type: deviceActionTypes.FETCH_DEVICE_START,
});

export const fetchDeviceSuccess = device => ({
  type: deviceActionTypes.FETCH_DEVICE_SUCCESS,
  payload: device
});

export const fetchDeviceFailure = errorMessage => ({
  type: deviceActionTypes.FETCH_DEVICE_FAILURE,
  payload: errorMessage
});

export const fetchDeviceStartAsync = (id) => {
  return dispatch => {
    dispatch(fetchDeviceStart());
    axios.get(`${API_ENDPOINT}/devices/${id}`)
      .then(result => {
        dispatch(fetchDeviceSuccess(result.data.result.device));
      })
      .catch(error => {
        dispatch(fetchDeviceFailure(error.message));
      });
  }
}