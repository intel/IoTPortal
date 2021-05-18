import pluralize from 'pluralize';
import jobActionTypes from './job.types';
import { API_ENDPOINT } from '../../data/config';
import { redirectToAfterToastSuccess, toastHelper } from '../../utils/utils';


// Index
export const fetchJobsStart = () => ({
  type: jobActionTypes.FETCH_JOBS_START,
});

export const fetchJobsSuccess = jobs => ({
  type: jobActionTypes.FETCH_JOBS_SUCCESS,
  payload: jobs,
});

export const fetchJobsFailure = errorMessage => ({
  type: jobActionTypes.FETCH_JOBS_FAILURE,
  payload: errorMessage,
});

export const fetchJobsStartAsync = (lazyParams, jobGroupId) => {
  return dispatch => {
    dispatch(fetchJobsStart());

    const params = {...lazyParams};
    if (jobGroupId) params.jobGroupId = jobGroupId;

    axios.get(`${API_ENDPOINT}/jobs`, {params: params})
      .then(result => {
        dispatch(fetchJobsSuccess(result.data.result.jobs));
      })
      .catch(error => {
        dispatch(fetchJobsFailure(error.message));
      });
  };
};

export const setFetchJobsLazyParams = lazyParams => ({
  type: jobActionTypes.SET_FETCH_JOBS_LAZY_PARAMS,
  payload: lazyParams,
});

export const resetFetchJobsLazyParams = () => ({
  type: jobActionTypes.RESET_FETCH_JOBS_LAZY_PARAMS,
});


// Create
export const createJobStart = () => ({
  type: jobActionTypes.CREATE_JOB_START,
});

export const createJobSuccess = () => ({
  type: jobActionTypes.CREATE_JOB_SUCCESS,
});

export const createJobFailure = errorMessage => ({
  type: jobActionTypes.CREATE_JOB_FAILURE,
  payload: errorMessage,
});

export const createJobStartAsync = (data, history) => {
  return dispatch => {
    dispatch(createJobStart());

    const toastId = toastHelper.loading('Creating job');

    axios.post(`${API_ENDPOINT}/jobs`, data)
      .then(result => {
        dispatch(createJobSuccess());
        toastHelper.success('Job created successfully!', toastId);
      })
      .catch(error => {
        dispatch(createJobFailure(error.message));
        toastHelper.error(`Failed to create job: ${error.message}`, toastId);
      });
  };
};


// Read
export const fetchJobStart = () => ({
  type: jobActionTypes.FETCH_JOB_START,
});

export const fetchJobSuccess = job => ({
  type: jobActionTypes.FETCH_JOB_SUCCESS,
  payload: job,
});

export const fetchJobFailure = errorMessage => ({
  type: jobActionTypes.FETCH_JOB_FAILURE,
  payload: errorMessage,
});

export const fetchJobStartAsync = id => {
  return dispatch => {
    dispatch(fetchJobStart());

    axios.get(`${API_ENDPOINT}/jobs/${id}`)
      .then(result => {
        dispatch(fetchJobSuccess(result.data.result.job));
      })
      .catch(error => {
        dispatch(fetchJobFailure(error.message));
      });
  };
};


// Update
export const updateJobStart = () => ({
  type: jobActionTypes.UPDATE_JOB_START,
});

export const updateJobSuccess = job => ({
  type: jobActionTypes.UPDATE_JOB_SUCCESS,
  payload: job,
});

export const updateJobFailure = errorMessage => ({
  type: jobActionTypes.UPDATE_JOB_FAILURE,
  payload: errorMessage,
});

export const updateJobStartAsync = (id, data, history) => {
  return dispatch => {
    dispatch(updateJobStart());

    const toastId = toastHelper.loading('Updating job');

    axios.patch(`${API_ENDPOINT}/jobs/${id}`, data)
      .then(result => {

        dispatch(updateJobSuccess(result.data.result.job));
        toastHelper.success('Job updated successfully!', toastId);

        if (history) {
          redirectToAfterToastSuccess(history, '/jobs')
        }

      })
      .catch(error => {
        dispatch(updateJobFailure(error.message));
        toastHelper.error(`Job update failed: ${error.message}`, toastId);
      });
  };
};


// Delete Mass
export const deleteJobsStart = () => ({
  type: jobActionTypes.DELETE_JOBS_START,
});

export const deleteJobsSuccess = () => ({
  type: jobActionTypes.DELETE_JOBS_SUCCESS,
});

export const deleteJobsFailure = errorMessage => ({
  type: jobActionTypes.DELETE_JOBS_FAILURE,
  payload: errorMessage,
});

export const deleteJobsStartAsync = (ids, history) => {
  return (dispatch, getState) => {
    dispatch(deleteJobsStart());

    const toastId = toastHelper.loading(`Deleting ${pluralize('job', ids.length)}`);

    axios.delete(`${API_ENDPOINT}/jobs`, {data: {ids: ids}})
      .then(result => {
        dispatch(deleteJobsSuccess());
        toastHelper.success(`${pluralize('Job', ids.length)} deleted successfully!`, toastId);

        if (history) {
          redirectToAfterToastSuccess(history, '/jobs')
        } else {
          dispatch(fetchJobsStartAsync(getState().job.fetchJobsLazyParams));
        }

      })
      .catch(error => {
        dispatch(deleteJobsFailure(error.message));
        toastHelper.error(`${pluralize('Job', ids.length)} delete failed: ${error.message}`, toastId);
      });
  };
};