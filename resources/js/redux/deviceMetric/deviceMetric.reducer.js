import deviceMetricActionTypes from './deviceMetric.types';


const INITIAL_STATE = {
  // CPU temperatures
  cpuTemperatures: null,
  isFetchingCpuTemperatures: false,
  fetchCpuTemperaturesErrorMessage: undefined,

  // CPU usages
  cpuUsages: null,
  isFetchingCpuUsages: false,
  fetchCpuUsagesErrorMessage: undefined,

  // Disk usages
  diskUsages: null,
  isFetchingDiskUsages: false,
  fetchDiskUsagesErrorMessage: undefined,

  // Available memories
  availableMemories: null,
  isFetchingAvailableMemories: false,
  fetchAvailableMemoriesErrorMessage: undefined,
};

const deviceMetricReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // CPU temperatures
    case deviceMetricActionTypes.FETCH_CPU_TEMPERATURES_START:
      return {
        ...state,
        isFetchingCpuTemperatures: true,
        fetchCpuTemperaturesErrorMessage: undefined,
      };
    case deviceMetricActionTypes.FETCH_CPU_TEMPERATURES_SUCCESS:
      return {
        ...state,
        cpuTemperatures: action.payload,
        isFetchingCpuTemperatures: false,
      };
    case deviceMetricActionTypes.FETCH_CPU_TEMPERATURES_FAILURE:
      return {
        ...state,
        isFetchingCpuTemperatures: false,
        fetchCpuTemperaturesErrorMessage: action.payload,
      };

    // CPU usages
    case deviceMetricActionTypes.FETCH_CPU_USAGES_START:
      return {
        ...state,
        isFetchingCpuUsages: true,
        fetchCpuUsagesErrorMessage: undefined,
      };
    case deviceMetricActionTypes.FETCH_CPU_USAGES_SUCCESS:
      return {
        ...state,
        cpuUsages: action.payload,
        isFetchingCpuUsages: false,
      };
    case deviceMetricActionTypes.FETCH_CPU_USAGES_FAILURE:
      return {
        ...state,
        isFetchingCpuUsages: false,
        fetchCpuUsagesErrorMessage: action.payload,
      };

    // Disk usages
    case deviceMetricActionTypes.FETCH_DISK_USAGES_START:
      return {
        ...state,
        isFetchingDiskUsages: true,
        fetchDiskUsagesErrorMessage: undefined,
      };
    case deviceMetricActionTypes.FETCH_DISK_USAGES_SUCCESS:
      return {
        ...state,
        diskUsages: action.payload,
        isFetchingDiskUsages: false,
      };
    case deviceMetricActionTypes.FETCH_DISK_USAGES_FAILURE:
      return {
        ...state,
        isFetchingDiskUsages: false,
        fetchDiskUsagesErrorMessage: action.payload,
      };

    // Available memories
    case deviceMetricActionTypes.FETCH_AVAILABLE_MEMORIES_START:
      return {
        ...state,
        isFetchingAvailableMemories: true,
        fetchAvailableMemoriesErrorMessage: undefined,
      };
    case deviceMetricActionTypes.FETCH_AVAILABLE_MEMORIES_SUCCESS:
      return {
        ...state,
        availableMemories: action.payload,
        isFetchingAvailableMemories: false,
      };
    case deviceMetricActionTypes.FETCH_AVAILABLE_MEMORIES_FAILURE:
      return {
        ...state,
        isFetchingAvailableMemories: false,
        fetchAvailableMemoriesErrorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default deviceMetricReducer;
