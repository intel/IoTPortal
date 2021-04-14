import deviceMetricActionTypes from './deviceMetric.types';

const INITIAL_STATE = {
  cpuTemperatures: null,
  isFetchingCpuTemperatures: false,
  fetchCpuTemperaturesErrorMessage: undefined,
  cpuUsages: null,
  isFetchingCpuUsages: false,
  fetchCpuUsagesErrorMessage: undefined,
  diskUsages: null,
  isFetchingDiskUsages: false,
  fetchDiskUsagesErrorMessage: undefined,
  availableMemories: null,
  isFetchingAvailableMemories: false,
  fetchAvailableMemoriesErrorMessage: undefined,
};

const deviceMetricReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case deviceMetricActionTypes.FETCH_CPU_TEMPERATURES_START:
      return {
        ...state,
        isFetchingCpuTemperatures: true
      };
    case deviceMetricActionTypes.FETCH_CPU_TEMPERATURES_SUCCESS:
      return {
        ...state,
        cpuTemperatures: action.payload,
        isFetchingCpuTemperatures: false
      };
    case deviceMetricActionTypes.FETCH_CPU_TEMPERATURES_FAILURE:
      return {
        ...state,
        isFetchingCpuTemperatures: false,
        fetchCpuTemperaturesErrorMessage: action.payload
      };
    case deviceMetricActionTypes.FETCH_CPU_USAGES_START:
      return {
        ...state,
        isFetchingCpuUsages: true
      };
    case deviceMetricActionTypes.FETCH_CPU_USAGES_SUCCESS:
      return {
        ...state,
        cpuUsages: action.payload,
        isFetchingCpuUsages: false
      };
    case deviceMetricActionTypes.FETCH_CPU_USAGES_FAILURE:
      return {
        ...state,
        isFetchingCpuUsages: false,
        fetchCpuTemperaturesErrorMessage: action.payload
      };
    case deviceMetricActionTypes.FETCH_DISK_USAGES_START:
      return {
        ...state,
        isFetchingDiskUsages: true
      };
    case deviceMetricActionTypes.FETCH_DISK_USAGES_SUCCESS:
      return {
        ...state,
        diskUsages: action.payload,
        isFetchingDiskUsages: false
      };
    case deviceMetricActionTypes.FETCH_DISK_USAGES_FAILURE:
      return {
        ...state,
        isFetchingDiskUsages: false,
        fetchDiskUsagesErrorMessage: action.payload
      };
    case deviceMetricActionTypes.FETCH_AVAILABLE_MEMORIES_START:
      return {
        ...state,
        isFetchingAvailableMemories: true
      };
    case deviceMetricActionTypes.FETCH_AVAILABLE_MEMORIES_SUCCESS:
      return {
        ...state,
        availableMemories: action.payload,
        isFetchingAvailableMemories: false
      };
    case deviceMetricActionTypes.FETCH_AVAILABLE_MEMORIES_FAILURE:
      return {
        ...state,
        isFetchingAvailableMemories: false,
        fetchAvailableMemoriesErrorMessage: action.payload
      };
    default:
      return state;
  }
};

export default deviceMetricReducer;
