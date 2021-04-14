import deviceActionTypes from './device.types';
import { API_ENDPOINT } from '../../data/config';
import toast from 'react-hot-toast';

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

export const fetchDeviceStartAsync = id => {
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
};


export const updateDeviceStart = () => ({
  type: deviceActionTypes.UPDATE_DEVICE_START,
});

export const updateDeviceSuccess = device => ({
  type: deviceActionTypes.UPDATE_DEVICE_SUCCESS,
  payload: device,
});

export const updateDeviceFailure = errorMessage => ({
  type: deviceActionTypes.UPDATE_DEVICE_FAILURE,
  payload: errorMessage
});

export const updateDeviceStartAsync = (id, params) => {
  return dispatch => {
    dispatch(updateDeviceStart());

    axios.patch(`${API_ENDPOINT}/devices/${id}`, params)
      .then(result => {
        dispatch(updateDeviceSuccess(result.data.result.device));
        toast.success(<b>Device updated successfully!</b>);
      })
      .catch(error => {
        dispatch(updateDeviceFailure(error.message));
        toast.success(<b>Device update failed!</b>);
      });
  };
};


export const fetchDevicesStart = () => ({
  type: deviceActionTypes.FETCH_DEVICES_START,
});

export const fetchDevicesSuccess = devices => ({
  type: deviceActionTypes.FETCH_DEVICES_SUCCESS,
  payload: devices
});

export const fetchDevicesFailure = errorMessage => ({
  type: deviceActionTypes.FETCH_DEVICES_FAILURE,
  payload: errorMessage
});

export const fetchDevicesStartAsync = params => {
  return dispatch => {
    dispatch(fetchDevicesStart());

    axios.get(`${API_ENDPOINT}/devices`, {params: params})
      .then(result => {
        dispatch(fetchDevicesSuccess(result.data.result.devices));
      })
      .catch(error => {
        dispatch(fetchDevicesFailure(error.message));
      });
  }
};
