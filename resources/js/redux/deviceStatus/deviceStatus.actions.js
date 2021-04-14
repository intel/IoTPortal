import deviceStatusActionTypes from './deviceStatus.types';
import { API_ENDPOINT } from '../../data/config';

export const fetchDeviceStatusesStart = () => ({
  type: deviceStatusActionTypes.FETCH_DEVICE_STATUSES_START,
});

export const fetchDeviceStatusesSuccess = deviceStatuses => ({
  type: deviceStatusActionTypes.FETCH_DEVICE_STATUSES_SUCCESS,
  payload: deviceStatuses
});

export const fetchDeviceStatusesFailure = errorMessage => ({
  type: deviceStatusActionTypes.FETCH_DEVICE_STATUSES_FAILURE,
  payload: errorMessage
});

export const fetchDeviceStatusesStartAsync = () => {
  return dispatch => {
    dispatch(fetchDeviceStatusesStart());

    axios.get(`${API_ENDPOINT}/device-statuses`)
      .then(result => {
        dispatch(fetchDeviceStatusesSuccess(result.data.result.deviceStatuses));
      })
      .catch(error => {
        dispatch(fetchDeviceStatusesFailure(error.message));
      });
  }
};
