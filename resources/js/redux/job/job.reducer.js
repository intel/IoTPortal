import jobActionTypes from './job.types';


const INITIAL_STATE = {
  // Index
  jobs: null,
  jobsTotalRecords: 0,
  isFetchingJobs: false,
  fetchJobsErrorMessage: undefined,
  fetchJobsLazyParams: {
    first: 0,
    rows: 10,
    page: 1,
  },

  // Create
  isCreatingJob: false,
  createJobErrorMessage: undefined,

  // Read
  job: null,
  isFetchingJob: true,
  fetchJobErrorMessage: undefined,

  // Update
  isUpdatingJob: false,
  updateJobErrorMessage: undefined,

  // Delete Mass
  isDeletingJobs: false,
  deleteJobsErrorMessage: undefined,
};

const jobReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Index
    case jobActionTypes.FETCH_JOBS_START:
      return {
        ...state,
        isFetchingJobs: true,
        fetchJobsErrorMessage: undefined,
      };
    case jobActionTypes.FETCH_JOBS_SUCCESS:
      return {
        ...state,
        jobs: action.payload.data,
        jobsTotalRecords: action.payload.total,
        isFetchingJobs: false,
      };
    case jobActionTypes.FETCH_JOBS_FAILURE:
      return {
        ...state,
        isFetchingJobs: false,
        fetchJobsErrorMessage: action.payload,
      };
    case jobActionTypes.SET_FETCH_JOBS_LAZY_PARAMS:
      return {
        ...state,
        fetchJobsLazyParams: action.payload,
      };
    case jobActionTypes.RESET_FETCH_JOBS_LAZY_PARAMS:
      return {
        ...state,
        fetchJobsLazyParams: INITIAL_STATE.fetchJobsLazyParams,
      };

    // Create
    case jobActionTypes.CREATE_JOB_START:
      return {
        ...state,
        isCreatingJob: true,
        createJobErrorMessage: undefined,
      };
    case jobActionTypes.CREATE_JOB_SUCCESS:
      return {
        ...state,
        isCreatingJob: false,
      };
    case jobActionTypes.CREATE_JOB_FAILURE:
      return {
        ...state,
        isCreatingJob: false,
        createJobErrorMessage: action.payload,
      };

    // Read
    case jobActionTypes.FETCH_JOB_START:
      return {
        ...state,
        isFetchingJob: true,
        fetchJobErrorMessage: undefined,
      };
    case jobActionTypes.FETCH_JOB_SUCCESS:
      return {
        ...state,
        job: action.payload,
        isFetchingJob: false,
      };
    case jobActionTypes.FETCH_JOB_FAILURE:
      return {
        ...state,
        isFetchingJob: false,
        fetchJobErrorMessage: action.payload,
      };

    // Update
    case jobActionTypes.UPDATE_JOB_START:
      return {
        ...state,
        isUpdatingJob: true,
        updateJobErrorMessage: undefined,
      };
    case jobActionTypes.UPDATE_JOB_SUCCESS:
      return {
        ...state,
        job: action.payload,
        isUpdatingJob: false,
      };
    case jobActionTypes.UPDATE_JOB_FAILURE:
      return {
        ...state,
        isUpdatingJob: false,
        updateJobErrorMessage: action.payload,
      };

    // Delete Mass
    case jobActionTypes.DELETE_JOBS_START:
      return {
        ...state,
        isDeletingJobs: true,
        deleteJobsErrorMessage: undefined,
      };
    case jobActionTypes.DELETE_JOBS_SUCCESS:
      return {
        ...state,
        isDeletingJobs: false,
      };
    case jobActionTypes.DELETE_JOBS_FAILURE:
      return {
        ...state,
        isDeletingJobs: false,
        deleteJobsErrorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default jobReducer;
