import pluralize from 'pluralize';
import deviceActionTypes from './device.types';
import { API_ENDPOINT } from '../../data/config';
import { redirectToAfterToastSuccess, toastHelper } from '../../utils/utils';


// Index
export const fetchDevicesStart = () => ({
  type: deviceActionTypes.FETCH_DEVICES_START,
});

export const fetchDevicesSuccess = devices => ({
  type: deviceActionTypes.FETCH_DEVICES_SUCCESS,
  payload: devices,
});

export const fetchDevicesFailure = errorMessage => ({
  type: deviceActionTypes.FETCH_DEVICES_FAILURE,
  payload: errorMessage,
});

export const fetchDevicesStartAsync = (lazyParams, deviceGroupId) => {
  return dispatch => {
    dispatch(fetchDevicesStart());

    const params = {...lazyParams};
    if (deviceGroupId) params.deviceGroupId = deviceGroupId;

    axios.get(`${API_ENDPOINT}/devices`, {params: params})
      .then(result => {
        dispatch(fetchDevicesSuccess(result.data.result.devices));
      })
      .catch(error => {
        dispatch(fetchDevicesFailure(error.message));
      });
  };
};

export const setFetchDevicesLazyParams = lazyParams => ({
  type: deviceActionTypes.SET_FETCH_DEVICES_LAZY_PARAMS,
  payload: lazyParams,
});

export const resetFetchDevicesLazyParams = () => ({
  type: deviceActionTypes.RESET_FETCH_DEVICES_LAZY_PARAMS,
});


// Create
export const createDeviceStart = () => ({
  type: deviceActionTypes.CREATE_DEVICE_START,
});

export const createDeviceSuccess = () => ({
  type: deviceActionTypes.CREATE_DEVICE_SUCCESS,
});

export const createDeviceFailure = errorMessage => ({
  type: deviceActionTypes.CREATE_DEVICE_FAILURE,
  payload: errorMessage,
});

export const createDeviceStartAsync = (data, history) => {
  return dispatch => {
    dispatch(createDeviceStart());

    const toastId = toastHelper.loading('Creating device');

    axios.post(`${API_ENDPOINT}/devices`, data)
      .then(result => {
        dispatch(createDeviceSuccess());
        toastHelper.success('Device created successfully!', toastId);
        redirectToAfterToastSuccess(history, '/devices')
      })
      .catch(error => {
        dispatch(createDeviceFailure(error.message));
        toastHelper.error(`Failed to create device: ${error.message}`, toastId);
      });
  };
};


// Read
export const fetchDeviceStart = () => ({
  type: deviceActionTypes.FETCH_DEVICE_START,
});

export const fetchDeviceSuccess = device => ({
  type: deviceActionTypes.FETCH_DEVICE_SUCCESS,
  payload: device,
});

export const fetchDeviceFailure = errorMessage => ({
  type: deviceActionTypes.FETCH_DEVICE_FAILURE,
  payload: errorMessage,
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
  };
};


// Update
export const updateDeviceStart = () => ({
  type: deviceActionTypes.UPDATE_DEVICE_START,
});

export const updateDeviceSuccess = device => ({
  type: deviceActionTypes.UPDATE_DEVICE_SUCCESS,
  payload: device,
});

export const updateDeviceFailure = errorMessage => ({
  type: deviceActionTypes.UPDATE_DEVICE_FAILURE,
  payload: errorMessage,
});

export const updateDeviceStartAsync = (id, data, history) => {
  return dispatch => {
    dispatch(updateDeviceStart());

    const toastId = toastHelper.loading('Updating device');

    axios.patch(`${API_ENDPOINT}/devices/${id}`, data)
      .then(result => {

        dispatch(updateDeviceSuccess(result.data.result.device));
        toastHelper.success('Device updated successfully!', toastId);

        if (history) {
          redirectToAfterToastSuccess(history, '/devices')
        }

      })
      .catch(error => {
        dispatch(updateDeviceFailure(error.message));
        toastHelper.error(`Device update failed: ${error.message}`, toastId);
      });
  };
};


// Delete Mass
export const deleteDevicesStart = () => ({
  type: deviceActionTypes.DELETE_DEVICES_START,
});

export const deleteDevicesSuccess = () => ({
  type: deviceActionTypes.DELETE_DEVICES_SUCCESS,
});

export const deleteDevicesFailure = errorMessage => ({
  type: deviceActionTypes.DELETE_DEVICES_FAILURE,
  payload: errorMessage,
});

export const deleteDevicesStartAsync = (ids, history) => {
  return (dispatch, getState) => {
    dispatch(deleteDevicesStart());

    const toastId = toastHelper.loading(`Deleting ${pluralize('device', ids.length)}`);

    axios.delete(`${API_ENDPOINT}/devices`, {data: {ids: ids}})
      .then(result => {
        dispatch(deleteDevicesSuccess());
        toastHelper.success(`${pluralize('Device', ids.length)} deleted successfully!`, toastId);

        if (history) {
          redirectToAfterToastSuccess(history, '/devices')
        } else {
          dispatch(fetchDevicesStartAsync(getState().device.fetchDevicesLazyParams));
        }

      })
      .catch(error => {
        dispatch(deleteDevicesFailure(error.message));
        toastHelper.error(`${pluralize('Device', ids.length)} delete failed: ${error.message}`, toastId);
      });
  };
};