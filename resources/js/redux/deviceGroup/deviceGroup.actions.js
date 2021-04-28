import pluralize from 'pluralize';

import deviceGroupActionTypes from './deviceGroup.types';
import { API_ENDPOINT } from '../../data/config';
import { redirectToAfterToastSuccess, toastHelper } from '../../utils/utils';


// Index
export const fetchDeviceGroupsStart = () => ({
  type: deviceGroupActionTypes.FETCH_DEVICE_GROUPS_START,
});

export const fetchDeviceGroupsSuccess = deviceGroups => ({
  type: deviceGroupActionTypes.FETCH_DEVICE_GROUPS_SUCCESS,
  payload: deviceGroups,
});

export const fetchDeviceGroupsFailure = errorMessage => ({
  type: deviceGroupActionTypes.FETCH_DEVICE_GROUPS_FAILURE,
  payload: errorMessage,
});

export const fetchDeviceGroupsStartAsync = lazyParams => {
  return dispatch => {
    dispatch(fetchDeviceGroupsStart());

    axios.get(`${API_ENDPOINT}/device/groups`, {params: lazyParams})
      .then(result => {
        dispatch(fetchDeviceGroupsSuccess(result.data.result.deviceGroups));
      })
      .catch(error => {
        dispatch(fetchDeviceGroupsFailure(error.message));
      });
  };
};

export const setFetchDeviceGroupsLazyParams = lazyParams => ({
  type: deviceGroupActionTypes.SET_FETCH_DEVICE_GROUPS_LAZY_PARAMS,
  payload: lazyParams,
});


// Device group devices index
export const fetchDeviceGroupDevicesStart = () => ({
  type: deviceGroupActionTypes.FETCH_DEVICE_GROUP_DEVICES_START,
});

export const fetchDeviceGroupDevicesSuccess = deviceGroupDevices => ({
  type: deviceGroupActionTypes.FETCH_DEVICE_GROUP_DEVICES_SUCCESS,
  payload: deviceGroupDevices,
});

export const fetchDeviceGroupDevicesFailure = errorMessage => ({
  type: deviceGroupActionTypes.FETCH_DEVICE_GROUP_DEVICES_FAILURE,
  payload: errorMessage,
});

export const fetchDeviceGroupDevicesStartAsync = (deviceGroupId, fetchAll = true) => {
  return dispatch => {
    dispatch(fetchDeviceGroupDevicesStart());

    const params = {};
    if (deviceGroupId) params.deviceGroupId = deviceGroupId;
    if (fetchAll) params.fetchAll = true;

    axios.get(`${API_ENDPOINT}/devices`, {params: params})
      .then(result => {
        dispatch(fetchDeviceGroupDevicesSuccess(result.data.result.devices));
      })
      .catch(error => {
        dispatch(fetchDeviceGroupDevicesFailure(error.message));
      });
  };
};


// Create
export const createDeviceGroupStart = () => ({
  type: deviceGroupActionTypes.CREATE_DEVICE_GROUP_START,
});

export const createDeviceGroupSuccess = () => ({
  type: deviceGroupActionTypes.CREATE_DEVICE_GROUP_SUCCESS,
});

export const createDeviceGroupFailure = errorMessage => ({
  type: deviceGroupActionTypes.CREATE_DEVICE_GROUP_FAILURE,
  payload: errorMessage,
});

export const createDeviceGroupStartAsync = (data, history) => {
  return dispatch => {
    dispatch(createDeviceGroupStart());

    const toastId = toastHelper.loading('Creating device group');

    axios.post(`${API_ENDPOINT}/device/groups`, data)
      .then(result => {
        dispatch(createDeviceGroupSuccess());
        toastHelper.success('Device group created successfully!', toastId);
        redirectToAfterToastSuccess(history, '/device/groups')
      })
      .catch(error => {
        dispatch(createDeviceGroupFailure(error.message));
        toastHelper.error(`Failed to create device group: ${error.message}`, toastId);
      });
  };
};


// Read
export const fetchDeviceGroupStart = () => ({
  type: deviceGroupActionTypes.FETCH_DEVICE_GROUP_START,
});

export const fetchDeviceGroupSuccess = deviceGroup => ({
  type: deviceGroupActionTypes.FETCH_DEVICE_GROUP_SUCCESS,
  payload: deviceGroup,
});

export const fetchDeviceGroupFailure = errorMessage => ({
  type: deviceGroupActionTypes.FETCH_DEVICE_GROUP_FAILURE,
  payload: errorMessage,
});

export const fetchDeviceGroupStartAsync = id => {
  return dispatch => {
    dispatch(fetchDeviceGroupStart());

    axios.get(`${API_ENDPOINT}/device/groups/${id}`)
      .then(result => {
        dispatch(fetchDeviceGroupSuccess(result.data.result.deviceGroup));
      })
      .catch(error => {
        dispatch(fetchDeviceGroupFailure(error.message));
      });
  }
};


// Update
export const updateDeviceGroupStart = () => ({
  type: deviceGroupActionTypes.UPDATE_DEVICE_GROUP_START,
});

export const updateDeviceGroupSuccess = deviceGroup => ({
  type: deviceGroupActionTypes.UPDATE_DEVICE_GROUP_SUCCESS,
  payload: deviceGroup,
});

export const updateDeviceGroupFailure = errorMessage => ({
  type: deviceGroupActionTypes.UPDATE_DEVICE_GROUP_FAILURE,
  payload: errorMessage,
});

export const updateDeviceGroupStartAsync = (id, data, history) => {
  return dispatch => {
    dispatch(updateDeviceGroupStart());

    const toastId = toastHelper.loading('Updating device group');

    axios.patch(`${API_ENDPOINT}/device/groups/${id}`, data)
      .then(result => {

        dispatch(updateDeviceGroupSuccess(result.data.result.deviceGroup));
        toastHelper.success('Device group updated successfully!', toastId);

        if (history) {
          redirectToAfterToastSuccess(history, '/device/groups')
        }

      })
      .catch(error => {
        dispatch(updateDeviceGroupFailure(error.message));
        toastHelper.error(`Device group update failed: ${error.message}`, toastId);
      });
  };
};


// Delete Mass
export const deleteDeviceGroupsStart = () => ({
  type: deviceGroupActionTypes.DELETE_DEVICE_GROUPS_START,
});

export const deleteDeviceGroupsSuccess = () => ({
  type: deviceGroupActionTypes.DELETE_DEVICE_GROUPS_SUCCESS,
});

export const deleteDeviceGroupsFailure = errorMessage => ({
  type: deviceGroupActionTypes.DELETE_DEVICE_GROUPS_FAILURE,
  payload: errorMessage,
});

export const deleteDeviceGroupsStartAsync = (ids, history) => {
  return (dispatch, getState) => {
    dispatch(deleteDeviceGroupsStart());

    const toastId = toastHelper.loading(`Deleting device ${pluralize('group', ids.length)}`);

    axios.delete(`${API_ENDPOINT}/device/groups`, {data: {ids: ids}})
      .then(result => {
        dispatch(deleteDeviceGroupsSuccess());
        toastHelper.success(`Device ${pluralize('group', ids.length)} deleted successfully!`, toastId);

        if (history) {
          redirectToAfterToastSuccess(history, '/device/groups')
        } else {
          dispatch(fetchDeviceGroupsStartAsync(getState().deviceGroup.fetchDeviceGroupsLazyParams));
        }

      })
      .catch(error => {
        dispatch(deleteDeviceGroupsFailure(error.message));
        toastHelper.error(`Device ${pluralize('group', ids.length)} delete failed: ${error.message}`, toastId);
      });
  };
};


// Set selection
export const setDeviceGroupDevices = deviceGroupDevices => ({
  type: deviceGroupActionTypes.SET_DEVICE_GROUP_DEVICES,
  payload: deviceGroupDevices,
});


// Fetch dropdown options
export const fetchDeviceGroupOptionsStart = () => ({
  type: deviceGroupActionTypes.FETCH_DEVICE_GROUP_OPTIONS_START,
});

export const fetchDeviceGroupOptionsSuccess = deviceGroupOptions => ({
  type: deviceGroupActionTypes.FETCH_DEVICE_GROUP_OPTIONS_SUCCESS,
  payload: deviceGroupOptions,
});

export const fetchDeviceGroupOptionsFailure = errorMessage => ({
  type: deviceGroupActionTypes.FETCH_DEVICE_GROUP_OPTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchDeviceGroupOptionsStartAsync = name => {
  return dispatch => {
    dispatch(fetchDeviceGroupOptionsStart());

    const params = {};
    if (name) params.name = name;

    axios.get(`${API_ENDPOINT}/device/groups/options`, {params: params})
      .then(result => {
        dispatch(fetchDeviceGroupOptionsSuccess(result.data.result.deviceGroups));
      })
      .catch(error => {
        dispatch(fetchDeviceGroupOptionsFailure(error.message));
      });
  };
};