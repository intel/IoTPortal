import deviceEventActionTypes from './deviceEvent.types';
import { API_ENDPOINT } from '../../data/config';

export const fetchDeviceEventsStart = () => ({
  type: deviceEventActionTypes.FETCH_DEVICE_EVENTS_START,
});

export const fetchDeviceEventsSuccess = deviceEvents => ({
  type: deviceEventActionTypes.FETCH_DEVICE_EVENTS_SUCCESS,
  payload: deviceEvents
});

export const fetchDeviceEventsFailure = errorMessage => ({
  type: deviceEventActionTypes.FETCH_DEVICE_EVENTS_FAILURE,
  payload: errorMessage
});

export const fetchDeviceEventsStartAsync = id => {
  return dispatch => {
    dispatch(fetchDeviceEventsStart());

    axios.get(`${API_ENDPOINT}/devices/${id}/device-events`)
      .then(result => {
        dispatch(fetchDeviceEventsSuccess(result.data.result.deviceEvents));
      })
      .catch(error => {
        dispatch(fetchDeviceEventsFailure(error.message));
      });
  }
};
