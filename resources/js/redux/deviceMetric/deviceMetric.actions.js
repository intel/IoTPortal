import deviceMetricActionTypes from './deviceMetric.types';
import { API_ENDPOINT } from '../../data/config';

export const fetchTemperaturesStart = () => ({
  type: deviceMetricActionTypes.FETCH_TEMPERATURES_START,
});

export const fetchTemperaturesSuccess = temperatures => ({
  type: deviceMetricActionTypes.FETCH_TEMPERATURES_SUCCESS,
  payload: temperatures,
});

export const fetchTemperaturesFailure = errorMessage => ({
  type: deviceMetricActionTypes.FETCH_TEMPERATURES_FAILURE,
  payload: errorMessage,
});

export const fetchTemperaturesStartAsync = (id, timeRangeFilter) => {
  return dispatch => {
    dispatch(fetchTemperaturesStart());

    const params = {
      timeRangeFilter: timeRangeFilter
    };

    axios.get(`${API_ENDPOINT}/devices/${id}/metric-temperatures`, {params: params})
      .then(result => {
        dispatch(fetchTemperaturesSuccess(result.data.result.temperatures));
      })
      .catch(error => {
        dispatch(fetchTemperaturesFailure(error.message));
      });
  }
};

export const fetchCpuUsagePercentagesStart = () => ({
  type: deviceMetricActionTypes.FETCH_CPU_USAGE_PERCENTAGES_START,
});

export const fetchCpuUsagePercentagesSuccess = cpuUsagePercentages => ({
  type: deviceMetricActionTypes.FETCH_CPU_USAGE_PERCENTAGES_SUCCESS,
  payload: cpuUsagePercentages,
});

export const fetchCpuUsagePercentagesFailure = errorMessage => ({
  type: deviceMetricActionTypes.FETCH_CPU_USAGE_PERCENTAGES_FAILURE,
  payload: errorMessage,
});

export const fetchCpuUsagePercentagesStartAsync = (id, timeRangeFilter) => {
  return dispatch => {
    dispatch(fetchCpuUsagePercentagesStart());

    const params = {
      timeRangeFilter: timeRangeFilter
    };

    axios.get(`${API_ENDPOINT}/devices/${id}/metric-cpu-usage-percentages`, {params: params})
      .then(result => {
        dispatch(fetchCpuUsagePercentagesSuccess(result.data.result.cpuUsagePercentages));
      })
      .catch(error => {
        dispatch(fetchCpuUsagePercentagesFailure(error.message));
      });
  }
};

export const fetchDiskUsagePercentagesStart = () => ({
  type: deviceMetricActionTypes.FETCH_DISK_USAGE_PERCENTAGES_START,
});

export const fetchDiskUsagePercentagesSuccess = diskUsagePercentages => ({
  type: deviceMetricActionTypes.FETCH_DISK_USAGE_PERCENTAGES_SUCCESS,
  payload: diskUsagePercentages,
});

export const fetchDiskUsagePercentagesFailure = errorMessage => ({
  type: deviceMetricActionTypes.FETCH_DISK_USAGE_PERCENTAGES_FAILURE,
  payload: errorMessage,
});

export const fetchDiskUsagePercentagesStartAsync = (id, timeRangeFilter) => {
  return dispatch => {
    dispatch(fetchDiskUsagePercentagesStart());

    const params = {
      timeRangeFilter: timeRangeFilter
    };

    axios.get(`${API_ENDPOINT}/devices/${id}/metric-disk-usage-percentages`, {params: params})
      .then(result => {
        dispatch(fetchDiskUsagePercentagesSuccess(result.data.result.diskUsagePercentages));
      })
      .catch(error => {
        dispatch(fetchDiskUsagePercentagesFailure(error.message));
      });
  }
};

export const fetchAvailableMemoriesInBytesStart = () => ({
  type: deviceMetricActionTypes.FETCH_AVAILABLE_MEMORIES_IN_BYTES_START,
});

export const fetchAvailableMemoriesInBytesSuccess = availableMemoriesInBytes => ({
  type: deviceMetricActionTypes.FETCH_AVAILABLE_MEMORIES_IN_BYTES_SUCCESS,
  payload: availableMemoriesInBytes,
});

export const fetchAvailableMemoriesInBytesFailure = errorMessage => ({
  type: deviceMetricActionTypes.FETCH_AVAILABLE_MEMORIES_IN_BYTES_FAILURE,
  payload: errorMessage,
});

export const fetchAvailableMemoriesInBytesStartAsync = (id, timeRangeFilter) => {
  return dispatch => {
    dispatch(fetchAvailableMemoriesInBytesStart());

    const params = {
      timeRangeFilter: timeRangeFilter
    };

    axios.get(`${API_ENDPOINT}/devices/${id}/metric-available-memories`, {params: params})
      .then(result => {
        dispatch(fetchAvailableMemoriesInBytesSuccess(result.data.result.availableMemoriesInBytes));
      })
      .catch(error => {
        dispatch(fetchAvailableMemoriesInBytesFailure(error.message));
      });
  }
};