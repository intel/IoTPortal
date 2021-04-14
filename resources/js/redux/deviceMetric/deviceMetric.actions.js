import deviceMetricActionTypes from './deviceMetric.types';
import { API_ENDPOINT } from '../../data/config';

export const fetchCpuTemperaturesStart = () => ({
  type: deviceMetricActionTypes.FETCH_CPU_TEMPERATURES_START,
});

export const fetchCpuTemperaturesSuccess = cpuTemperatures => ({
  type: deviceMetricActionTypes.FETCH_CPU_TEMPERATURES_SUCCESS,
  payload: cpuTemperatures,
});

export const fetchCpuTemperaturesFailure = errorMessage => ({
  type: deviceMetricActionTypes.FETCH_CPU_TEMPERATURES_FAILURE,
  payload: errorMessage,
});

export const fetchCpuTemperaturesStartAsync = (id, timeRangeFilter) => {
  return dispatch => {
    dispatch(fetchCpuTemperaturesStart());

    const params = {
      timeRangeFilter: timeRangeFilter
    };

    axios.get(`${API_ENDPOINT}/devices/${id}/metrics/cpu/temperatures`, {params: params})
      .then(result => {
        dispatch(fetchCpuTemperaturesSuccess(result.data.result.cpuTemperatures));
      })
      .catch(error => {
        dispatch(fetchCpuTemperaturesFailure(error.message));
      });
  }
};

export const fetchCpuUsagesStart = () => ({
  type: deviceMetricActionTypes.FETCH_CPU_USAGES_START,
});

export const fetchCpuUsagesSuccess = cpuUsages => ({
  type: deviceMetricActionTypes.FETCH_CPU_USAGES_SUCCESS,
  payload: cpuUsages,
});

export const fetchCpuUsagesFailure = errorMessage => ({
  type: deviceMetricActionTypes.FETCH_CPU_USAGES_FAILURE,
  payload: errorMessage,
});

export const fetchCpuUsagesStartAsync = (id, timeRangeFilter) => {
  return dispatch => {
    dispatch(fetchCpuUsagesStart());

    const params = {
      timeRangeFilter: timeRangeFilter
    };

    axios.get(`${API_ENDPOINT}/devices/${id}/metrics/cpu/usages`, {params: params})
      .then(result => {
        dispatch(fetchCpuUsagesSuccess(result.data.result.cpuUsages));
      })
      .catch(error => {
        dispatch(fetchCpuUsagesFailure(error.message));
      });
  }
};

export const fetchDiskUsagesStart = () => ({
  type: deviceMetricActionTypes.FETCH_DISK_USAGES_START,
});

export const fetchDiskUsagesSuccess = diskUsages => ({
  type: deviceMetricActionTypes.FETCH_DISK_USAGES_SUCCESS,
  payload: diskUsages,
});

export const fetchDiskUsagesFailure = errorMessage => ({
  type: deviceMetricActionTypes.FETCH_DISK_USAGES_FAILURE,
  payload: errorMessage,
});

export const fetchDiskUsagesStartAsync = (id, timeRangeFilter) => {
  return dispatch => {
    dispatch(fetchDiskUsagesStart());

    const params = {
      timeRangeFilter: timeRangeFilter
    };

    axios.get(`${API_ENDPOINT}/devices/${id}/metrics/disk/usages`, {params: params})
      .then(result => {
        dispatch(fetchDiskUsagesSuccess(result.data.result.diskUsages));
      })
      .catch(error => {
        dispatch(fetchDiskUsagesFailure(error.message));
      });
  }
};

export const fetchAvailableMemoriesStart = () => ({
  type: deviceMetricActionTypes.FETCH_AVAILABLE_MEMORIES_START,
});

export const fetchAvailableMemoriesSuccess = availableMemories => ({
  type: deviceMetricActionTypes.FETCH_AVAILABLE_MEMORIES_SUCCESS,
  payload: availableMemories,
});

export const fetchAvailableMemoriesFailure = errorMessage => ({
  type: deviceMetricActionTypes.FETCH_AVAILABLE_MEMORIES_FAILURE,
  payload: errorMessage,
});

export const fetchAvailableMemoriesStartAsync = (id, timeRangeFilter) => {
  return dispatch => {
    dispatch(fetchAvailableMemoriesStart());

    const params = {
      timeRangeFilter: timeRangeFilter
    };

    axios.get(`${API_ENDPOINT}/devices/${id}/metrics/memory/availables`, {params: params})
      .then(result => {
        dispatch(fetchAvailableMemoriesSuccess(result.data.result.availableMemories));
      })
      .catch(error => {
        dispatch(fetchAvailableMemoriesFailure(error.message));
      });
  }
};