import pluralize from 'pluralize';

import deviceJobActionTypes from './deviceJob.types';
import { API_ENDPOINT, DATA_POLLING_INTERVAL_IN_MS } from '../../data/config';
import { redirectToAfterToastSuccess, toastHelper } from '../../utils/utils';


// Index
export const fetchDeviceJobsStart = () => ({
  type: deviceJobActionTypes.FETCH_DEVICE_JOBS_START,
});

export const fetchDeviceJobsSuccess = deviceJobs => ({
  type: deviceJobActionTypes.FETCH_DEVICE_JOBS_SUCCESS,
  payload: deviceJobs,
});

export const fetchDeviceJobsFailure = errorMessage => ({
  type: deviceJobActionTypes.FETCH_DEVICE_JOBS_FAILURE,
  payload: errorMessage,
});

export const fetchDeviceJobsStartAsync = lazyParams => {
  return dispatch => {
    dispatch(fetchDeviceJobsStart());

    axios.get(`${API_ENDPOINT}/device/jobs`, {params: lazyParams})
      .then(result => {
        dispatch(fetchDeviceJobsSuccess(result.data.result.deviceJobs));
      })
      .catch(error => {
        dispatch(fetchDeviceJobsFailure(error.message));
      });
  };
};

export const setFetchDeviceJobsLazyParams = lazyParams => ({
  type: deviceJobActionTypes.SET_FETCH_DEVICE_JOBS_LAZY_PARAMS,
  payload: lazyParams,
});

export const resetFetchDeviceJobsLazyParams = () => ({
  type: deviceJobActionTypes.RESET_FETCH_DEVICE_JOBS_LAZY_PARAMS,
});


// Create
export const createDeviceJobStart = () => ({
  type: deviceJobActionTypes.CREATE_DEVICE_JOB_START,
});

export const createDeviceJobSuccess = () => ({
  type: deviceJobActionTypes.CREATE_DEVICE_JOB_SUCCESS,
});

export const createDeviceJobFailure = errorMessage => ({
  type: deviceJobActionTypes.CREATE_DEVICE_JOB_FAILURE,
  payload: errorMessage,
});

export const createDeviceJobStartAsync = (data, history) => {
  return dispatch => {
    dispatch(createDeviceJobStart());

    const toastId = toastHelper.loading('Creating device job');

    axios.post(`${API_ENDPOINT}/device/jobs`, data)
      .then(result => {
        dispatch(createDeviceJobSuccess());
        toastHelper.success('Device job created successfully!', toastId);
        redirectToAfterToastSuccess(history, `/device/jobs/${result.data.result.deviceJob.unique_id}`)
      })
      .catch(error => {
        dispatch(createDeviceJobFailure(error.message));
        toastHelper.error(`Failed to create device job: ${error.message}`, toastId);
      });
  };
};


// Read
export const fetchDeviceJobStart = () => ({
  type: deviceJobActionTypes.FETCH_DEVICE_JOB_START,
});

export const fetchDeviceJobSuccess = deviceJob => ({
  type: deviceJobActionTypes.FETCH_DEVICE_JOB_SUCCESS,
  payload: deviceJob,
});

export const fetchDeviceJobFailure = errorMessage => ({
  type: deviceJobActionTypes.FETCH_DEVICE_JOB_FAILURE,
  payload: errorMessage,
});

export const fetchDeviceJobStartAsync = id => {
  return (dispatch, getState) => {
    dispatch(fetchDeviceJobStart());

    axios.get(`${API_ENDPOINT}/device/jobs/${id}`)
      .then(result => {
        dispatch(fetchDeviceJobSuccess(result.data.result.deviceJob));

        if (!getState().deviceJob.isPollingFetchDeviceJob && !result.data.result.deviceJob.completed_at) {
          dispatch(pollFetchDeviceJobStartAsync(result.data.result.deviceJob.unique_id))
        }

        if (getState().deviceJob.isPollingFetchDeviceJob && result.data.result.deviceJob.completed_at) {
          dispatch(pollFetchDeviceJobStop());
        }
      })
      .catch(error => {
        dispatch(fetchDeviceJobFailure(error.message));
      });
  };
};


// Update
export const updateDeviceJobStart = () => ({
  type: deviceJobActionTypes.UPDATE_DEVICE_JOB_START,
});

export const updateDeviceJobSuccess = deviceJob => ({
  type: deviceJobActionTypes.UPDATE_DEVICE_JOB_SUCCESS,
  payload: deviceJob,
});

export const updateDeviceJobFailure = errorMessage => ({
  type: deviceJobActionTypes.UPDATE_DEVICE_JOB_FAILURE,
  payload: errorMessage,
});

export const updateDeviceJobStartAsync = (id, data, history) => {
  return dispatch => {
    dispatch(updateDeviceJobStart());

    const toastId = toastHelper.loading('Updating deviceJob');

    axios.patch(`${API_ENDPOINT}/device/jobs/${id}`, data)
      .then(result => {

        dispatch(updateDeviceJobSuccess(result.data.result.deviceJob));
        toastHelper.success('DeviceJob updated successfully!', toastId);

        if (history) {
          redirectToAfterToastSuccess(history, '/device/jobs')
        }
      })
      .catch(error => {
        dispatch(updateDeviceJobFailure(error.message));
        toastHelper.error(`Device job update failed: ${error.message}`, toastId);
      });
  };
};


// Delete Mass
export const deleteDeviceJobsStart = () => ({
  type: deviceJobActionTypes.DELETE_DEVICE_JOBS_START,
});

export const deleteDeviceJobsSuccess = () => ({
  type: deviceJobActionTypes.DELETE_DEVICE_JOBS_SUCCESS,
});

export const deleteDeviceJobsFailure = errorMessage => ({
  type: deviceJobActionTypes.DELETE_DEVICE_JOBS_FAILURE,
  payload: errorMessage,
});

export const deleteDeviceJobsStartAsync = (ids, history) => {
  return (dispatch, getState) => {
    dispatch(deleteDeviceJobsStart());

    const toastId = toastHelper.loading(`Deleting device ${pluralize('job', ids.length)}`);

    axios.delete(`${API_ENDPOINT}/device/jobs`, {data: {ids: ids}})
      .then(result => {
        dispatch(deleteDeviceJobsSuccess());
        toastHelper.success(`Device ${pluralize('job', ids.length)} deleted successfully!`, toastId);

        if (history) {
          redirectToAfterToastSuccess(history, '/device/jobs')
        } else {
          dispatch(fetchDeviceJobsStartAsync(getState().deviceJob.fetchDeviceJobsLazyParams));
        }

      })
      .catch(error => {
        dispatch(deleteDeviceJobsFailure(error.message));
        toastHelper.error(`Device ${pluralize('job', ids.length)} delete failed: ${error.message}`, toastId);
      });
  };
};


// Poll device job
export const pollFetchDeviceJobStartAsync = (id, interval = DATA_POLLING_INTERVAL_IN_MS) => {
  return dispatch => {
    dispatch(fetchDeviceJobStartAsync(id));

    const fetch = () => dispatch(fetchDeviceJobStartAsync(id));

    dispatch({
      type: deviceJobActionTypes.POLL_FETCH_DEVICE_JOB_START,
      fetch,
      interval,
    });
  };
};

export const pollFetchDeviceJobStop = () => ({
  type: deviceJobActionTypes.POLL_FETCH_DEVICE_JOB_STOP,
});