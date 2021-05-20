import deviceJobActionTypes from './deviceJob.types';


const INITIAL_STATE = {
  // Index
  deviceJobs: null,
  deviceJobsTotalRecords: 0,
  isFetchingDeviceJobs: false,
  fetchDeviceJobsErrorMessage: undefined,
  fetchDeviceJobsLazyParams: {
    first: 0,
    rows: 10,
    page: 1,
  },

  // Create
  isCreatingDeviceJob: false,
  createDeviceJobErrorMessage: undefined,

  // Read
  deviceJob: null,
  isFetchingDeviceJob: true,
  fetchDeviceJobErrorMessage: undefined,

  // Update
  isUpdatingDeviceJob: false,
  updateDeviceJobErrorMessage: undefined,

  // Delete Mass
  isDeletingDeviceJobs: false,
  deleteDeviceJobsErrorMessage: undefined,

  // Read device job device statuses
  deviceJobDeviceStatuses: null,
  isFetchingDeviceJobDeviceStatuses: true,
  fetchDeviceJobDeviceStatusesErrorMessage: undefined,

  // Poll device job
  isPollingFetchDeviceJob: false,
  fetchDeviceJobPollingId: null,
};

const deviceJobReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Index
    case deviceJobActionTypes.FETCH_DEVICE_JOBS_START:
      return {
        ...state,
        isFetchingDeviceJobs: true,
        fetchDeviceJobsErrorMessage: undefined,
      };
    case deviceJobActionTypes.FETCH_DEVICE_JOBS_SUCCESS:
      return {
        ...state,
        deviceJobs: action.payload.data,
        deviceJobsTotalRecords: action.payload.total,
        isFetchingDeviceJobs: false,
      };
    case deviceJobActionTypes.FETCH_DEVICE_JOBS_FAILURE:
      return {
        ...state,
        isFetchingDeviceJobs: false,
        fetchDeviceJobsErrorMessage: action.payload,
      };
    case deviceJobActionTypes.SET_FETCH_DEVICE_JOBS_LAZY_PARAMS:
      return {
        ...state,
        fetchDeviceJobsLazyParams: action.payload,
      };
    case deviceJobActionTypes.RESET_FETCH_DEVICE_JOBS_LAZY_PARAMS:
      return {
        ...state,
        fetchDeviceJobsLazyParams: INITIAL_STATE.fetchDeviceJobsLazyParams,
      };

    // Create
    case deviceJobActionTypes.CREATE_DEVICE_JOB_START:
      return {
        ...state,
        isCreatingDeviceJob: true,
        createDeviceJobErrorMessage: undefined,
      };
    case deviceJobActionTypes.CREATE_DEVICE_JOB_SUCCESS:
      return {
        ...state,
        isCreatingDeviceJob: false,
      };
    case deviceJobActionTypes.CREATE_DEVICE_JOB_FAILURE:
      return {
        ...state,
        isCreatingDeviceJob: false,
        createDeviceJobErrorMessage: action.payload,
      };

    // Read
    case deviceJobActionTypes.FETCH_DEVICE_JOB_START:
      return {
        ...state,
        isFetchingDeviceJob: true,
        fetchDeviceJobErrorMessage: undefined,
      };
    case deviceJobActionTypes.FETCH_DEVICE_JOB_SUCCESS:
      return {
        ...state,
        deviceJob: action.payload,
        isFetchingDeviceJob: false,
      };
    case deviceJobActionTypes.FETCH_DEVICE_JOB_FAILURE:
      return {
        ...state,
        isFetchingDeviceJob: false,
        fetchDeviceJobErrorMessage: action.payload,
      };

    // Update
    case deviceJobActionTypes.UPDATE_DEVICE_JOB_START:
      return {
        ...state,
        isUpdatingDeviceJob: true,
        updateDeviceJobErrorMessage: undefined,
      };
    case deviceJobActionTypes.UPDATE_DEVICE_JOB_SUCCESS:
      return {
        ...state,
        deviceJob: action.payload,
        isUpdatingDeviceJob: false,
      };
    case deviceJobActionTypes.UPDATE_DEVICE_JOB_FAILURE:
      return {
        ...state,
        isUpdatingDeviceJob: false,
        updateDeviceJobErrorMessage: action.payload,
      };

    // Delete Mass
    case deviceJobActionTypes.DELETE_DEVICE_JOBS_START:
      return {
        ...state,
        isDeletingDeviceJobs: true,
        deleteDeviceJobsErrorMessage: undefined,
      };
    case deviceJobActionTypes.DELETE_DEVICE_JOBS_SUCCESS:
      return {
        ...state,
        isDeletingDeviceJobs: false,
      };
    case deviceJobActionTypes.DELETE_DEVICE_JOBS_FAILURE:
      return {
        ...state,
        isDeletingDeviceJobs: false,
        deleteDeviceJobsErrorMessage: action.payload,
      };

    // Poll device job
    case deviceJobActionTypes.POLL_DEVICE_JOB_START:
      return {
        ...state,
        isPollingFetchDeviceJob: true,
        fetchDeviceJobPollingId: setInterval(action.fetch, action.interval),
      };
    case deviceJobActionTypes.POLL_DEVICE_JOB_STOP:
      clearInterval(state.fetchDeviceJobPollingId);
      return {
        ...state,
        isPollingFetchDeviceJob: false,
        fetchDeviceJobPollingId: null
      };





    // // Read device job device statuses
    // case deviceJobActionTypes.FETCH_DEVICE_JOB_DEVICE_STATUSES_START:
    //   return {
    //     ...state,
    //     isFetchingDeviceJobDeviceStatuses: true,
    //     fetchDeviceJobDeviceStatusesErrorMessage: undefined,
    //   };
    // case deviceJobActionTypes.FETCH_DEVICE_JOB_DEVICE_STATUSES_SUCCESS:
    //   return {
    //     ...state,
    //     deviceJobDeviceStatuses: action.payload,
    //     isFetchingDeviceJobDeviceStatuses: false,
    //   };
    // case deviceJobActionTypes.FETCH_DEVICE_JOB_DEVICE_STATUSES_FAILURE:
    //   return {
    //     ...state,
    //     isFetchingDeviceJobDeviceStatuses: false,
    //     fetchDeviceJobDeviceStatusesErrorMessage: action.payload,
    //   };
    default:
      return state;
  }
};

export default deviceJobReducer;
