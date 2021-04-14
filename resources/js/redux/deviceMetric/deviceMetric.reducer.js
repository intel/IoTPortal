import deviceMetricActionTypes from './deviceMetric.types';

const INITIAL_STATE = {
  temperatures: null,
  isFetchingTemperatures: false,
  fetchTemperaturesErrorMessage: undefined,
  cpuUsagePercentages: null,
  isFetchingCpuUsagePercentages: false,
  fetchCpuUsagePercentagesErrorMessage: undefined,
  diskUsagePercentages: null,
  isFetchingDiskUsagePercentages: false,
  fetchDiskUsagePercentagesErrorMessage: undefined,
  availableMemoriesInBytes: null,
  isFetchingAvailableMemoriesInBytes: false,
  fetchAvailableMemoriesInBytesErrorMessage: undefined,
};

const deviceMetricReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case deviceMetricActionTypes.FETCH_TEMPERATURES_START:
      return {
        ...state,
        isFetchingTemperatures: true
      };
    case deviceMetricActionTypes.FETCH_TEMPERATURES_SUCCESS:
      return {
        ...state,
        temperatures: action.payload,
        isFetchingTemperatures: false
      };
    case deviceMetricActionTypes.FETCH_TEMPERATURES_FAILURE:
      return {
        ...state,
        isFetchingTemperatures: false,
        fetchTemperaturesErrorMessage: action.payload
      };
    case deviceMetricActionTypes.FETCH_CPU_USAGE_PERCENTAGES_START:
      return {
        ...state,
        isFetchingCpuUsagePercentages: true
      };
    case deviceMetricActionTypes.FETCH_CPU_USAGE_PERCENTAGES_SUCCESS:
      return {
        ...state,
        cpuUsagePercentages: action.payload,
        isFetchingCpuUsagePercentages: false
      };
    case deviceMetricActionTypes.FETCH_CPU_USAGE_PERCENTAGES_FAILURE:
      return {
        ...state,
        isFetchingCpuUsagePercentages: false,
        fetchTemperaturesErrorMessage: action.payload
      };
    case deviceMetricActionTypes.FETCH_DISK_USAGE_PERCENTAGES_START:
      return {
        ...state,
        isFetchingDiskUsagePercentages: true
      };
    case deviceMetricActionTypes.FETCH_DISK_USAGE_PERCENTAGES_SUCCESS:
      return {
        ...state,
        diskUsagePercentages: action.payload,
        isFetchingDiskUsagePercentages: false
      };
    case deviceMetricActionTypes.FETCH_DISK_USAGE_PERCENTAGES_FAILURE:
      return {
        ...state,
        isFetchingDiskUsagePercentages: false,
        fetchDiskUsagePercentagesErrorMessage: action.payload
      };
    case deviceMetricActionTypes.FETCH_AVAILABLE_MEMORIES_IN_BYTES_START:
      return {
        ...state,
        isFetchingAvailableMemoriesInBytes: true
      };
    case deviceMetricActionTypes.FETCH_AVAILABLE_MEMORIES_IN_BYTES_SUCCESS:
      return {
        ...state,
        availableMemoriesInBytes: action.payload,
        isFetchingAvailableMemoriesInBytes: false
      };
    case deviceMetricActionTypes.FETCH_AVAILABLE_MEMORIES_IN_BYTES_FAILURE:
      return {
        ...state,
        isFetchingAvailableMemoriesInBytes: false,
        fetchAvailableMemoriesInBytesErrorMessage: action.payload
      };
    default:
      return state;
  }
};

export default deviceMetricReducer;
