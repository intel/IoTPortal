import dashboardActionTypes from './dashboard.types';


const INITIAL_STATE = {
  // Read statistics
  statistics: null,
  isFetchingStatistics: false,
  fetchStatisticsErrorMessage: undefined,

  // Read CPU temperature chart
  cpuTemperatures: [],
  isFetchingCpuTemperatures: false,
  fetchCpuTemperaturesErrorMessage: undefined,

  // Read CPU usage chart
  cpuUsages: [],
  isFetchingCpuUsages: false,
  fetchCpuUsagesErrorMessage: undefined,

  // Read disk usage chart
  diskUsages: [],
  isFetchingDiskUsages: false,
  fetchDiskUsagesErrorMessage: undefined,

  // Read available memory chart
  availableMemories: [],
  isFetchingAvailableMemories: false,
  fetchAvailableMemoriesErrorMessage: undefined,
};

const dashboardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Read statistics
    case dashboardActionTypes.FETCH_DASHBOARD_STATISTICS_START:
      return {
        ...state,
        isFetchingStatistics: true,
        fetchStatisticsErrorMessage: undefined,
      };
    case dashboardActionTypes.FETCH_DASHBOARD_STATISTICS_SUCCESS:
      return {
        ...state,
        statistics: action.payload,
        isFetchingStatistics: false,
      };
    case dashboardActionTypes.FETCH_DASHBOARD_STATISTICS_FAILURE:
      return {
        ...state,
        isFetchingStatistics: false,
        fetchStatisticsErrorMessage: action.payload,
      };

    // Read CPU temperature chart
    case dashboardActionTypes.FETCH_DASHBOARD_CPU_TEMPERATURES_START:
      return {
        ...state,
        isFetchingCpuTemperatures: true,
        fetchCpuTemperaturesErrorMessage: undefined,
      };
    case dashboardActionTypes.FETCH_DASHBOARD_CPU_TEMPERATURES_SUCCESS:
      return {
        ...state,
        cpuTemperatures: action.payload,
        isFetchingCpuTemperatures: false,
      };
    case dashboardActionTypes.FETCH_DASHBOARD_CPU_TEMPERATURES_FAILURE:
      return {
        ...state,
        isFetchingCpuTemperatures: false,
        fetchCpuTemperaturesErrorMessage: action.payload,
      };

    // Read CPU usage chart
    case dashboardActionTypes.FETCH_DASHBOARD_CPU_USAGES_START:
      return {
        ...state,
        isFetchingCpuUsages: true,
        fetchCpuUsagesErrorMessage: undefined,
      };
    case dashboardActionTypes.FETCH_DASHBOARD_CPU_USAGES_SUCCESS:
      return {
        ...state,
        cpuUsages: action.payload,
        isFetchingCpuUsages: false,
      };
    case dashboardActionTypes.FETCH_DASHBOARD_CPU_USAGES_FAILURE:
      return {
        ...state,
        isFetchingCpuUsages: false,
        fetchCpuUsagesErrorMessage: action.payload,
      };

    // Read disk usage chart
    case dashboardActionTypes.FETCH_DASHBOARD_DISK_USAGES_START:
      return {
        ...state,
        isFetchingDiskUsages: true,
        fetchDiskUsagesErrorMessage: undefined,
      };
    case dashboardActionTypes.FETCH_DASHBOARD_DISK_USAGES_SUCCESS:
      return {
        ...state,
        diskUsages: action.payload,
        isFetchingDiskUsages: false,
      };
    case dashboardActionTypes.FETCH_DASHBOARD_DISK_USAGES_FAILURE:
      return {
        ...state,
        isFetchingDiskUsages: false,
        fetchDiskUsagesErrorMessage: action.payload,
      };

    // Read available memory chart
    case dashboardActionTypes.FETCH_DASHBOARD_AVAILABLE_MEMORIES_START:
      return {
        ...state,
        isFetchingAvailableMemories: true,
        fetchAvailableMemoriesErrorMessage: undefined,
      };
    case dashboardActionTypes.FETCH_DASHBOARD_AVAILABLE_MEMORIES_SUCCESS:
      return {
        ...state,
        availableMemories: action.payload,
        isFetchingAvailableMemories: false,
      };
    case dashboardActionTypes.FETCH_DASHBOARD_AVAILABLE_MEMORIES_FAILURE:
      return {
        ...state,
        isFetchingAvailableMemories: false,
        fetchAvailableMemoriesErrorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default dashboardReducer;