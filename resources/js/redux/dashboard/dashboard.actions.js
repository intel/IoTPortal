/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import dashboardActionTypes from './dashboard.types';
import { API_ENDPOINT } from '../../data/config';


// Read statistics
export const fetchDashboardStatisticsStart = () => ({
  type: dashboardActionTypes.FETCH_DASHBOARD_STATISTICS_START,
});

export const fetchDashboardStatisticsSuccess = statistics => ({
  type: dashboardActionTypes.FETCH_DASHBOARD_STATISTICS_SUCCESS,
  payload: statistics,
});

export const fetchDashboardStatisticsFailure = errorMessage => ({
  type: dashboardActionTypes.FETCH_DASHBOARD_STATISTICS_FAILURE,
  payload: errorMessage,
});

export const fetchDashboardStatisticsStartAsync = () => {
  return dispatch => {
    dispatch(fetchDashboardStatisticsStart());

    axios.get(`${API_ENDPOINT}/dashboard/statistics`)
      .then(result => {
        dispatch(fetchDashboardStatisticsSuccess(result.data.result.statistics));
      })
      .catch(error => {
        dispatch(fetchDashboardStatisticsFailure(error.message));
      });
  };
};


// Read CPU temperature chart
export const fetchDashboardCpuTemperaturesStart = () => ({
  type: dashboardActionTypes.FETCH_DASHBOARD_CPU_TEMPERATURES_START,
});

export const fetchDashboardCpuTemperaturesSuccess = cpuTemperatures => ({
  type: dashboardActionTypes.FETCH_DASHBOARD_CPU_TEMPERATURES_SUCCESS,
  payload: cpuTemperatures,
});

export const fetchDashboardCpuTemperaturesFailure = errorMessage => ({
  type: dashboardActionTypes.FETCH_DASHBOARD_CPU_TEMPERATURES_FAILURE,
  payload: errorMessage,
});

export const fetchDashboardCpuTemperaturesStartAsync = (timeRangeFilter) => {
  return dispatch => {
    dispatch(fetchDashboardCpuTemperaturesStart());

    const params = {
      timeRangeFilter: timeRangeFilter
    };

    axios.get(`${API_ENDPOINT}/dashboard/cpu/temperatures`, {params: params})
      .then(result => {
        dispatch(fetchDashboardCpuTemperaturesSuccess(result.data.result.cpuTemperatures));
      })
      .catch(error => {
        dispatch(fetchDashboardCpuTemperaturesFailure(error.message));
      });
  };
};


// Read CPU usage chart
export const fetchDashboardCpuUsagesStart = () => ({
  type: dashboardActionTypes.FETCH_DASHBOARD_CPU_USAGES_START,
});

export const fetchDashboardCpuUsagesSuccess = cpuUsages => ({
  type: dashboardActionTypes.FETCH_DASHBOARD_CPU_USAGES_SUCCESS,
  payload: cpuUsages,
});

export const fetchDashboardCpuUsagesFailure = errorMessage => ({
  type: dashboardActionTypes.FETCH_DASHBOARD_CPU_USAGES_FAILURE,
  payload: errorMessage,
});

export const fetchDashboardCpuUsagesStartAsync = (timeRangeFilter) => {
  return dispatch => {
    dispatch(fetchDashboardCpuUsagesStart());

    const params = {
      timeRangeFilter: timeRangeFilter
    };

    axios.get(`${API_ENDPOINT}/dashboard/cpu/usages`, {params: params})
      .then(result => {
        dispatch(fetchDashboardCpuUsagesSuccess(result.data.result.cpuUsages));
      })
      .catch(error => {
        dispatch(fetchDashboardCpuUsagesFailure(error.message));
      });
  };
};


// Read disk usage chart
export const fetchDashboardDiskUsagesStart = () => ({
  type: dashboardActionTypes.FETCH_DASHBOARD_DISK_USAGES_START,
});

export const fetchDashboardDiskUsagesSuccess = diskUsages => ({
  type: dashboardActionTypes.FETCH_DASHBOARD_DISK_USAGES_SUCCESS,
  payload: diskUsages,
});

export const fetchDashboardDiskUsagesFailure = errorMessage => ({
  type: dashboardActionTypes.FETCH_DASHBOARD_DISK_USAGES_FAILURE,
  payload: errorMessage,
});

export const fetchDashboardDiskUsagesStartAsync = (timeRangeFilter) => {
  return dispatch => {
    dispatch(fetchDashboardDiskUsagesStart());

    const params = {
      timeRangeFilter: timeRangeFilter
    };

    axios.get(`${API_ENDPOINT}/dashboard/disk/usages`, {params: params})
      .then(result => {
        dispatch(fetchDashboardDiskUsagesSuccess(result.data.result.diskUsages));
      })
      .catch(error => {
        dispatch(fetchDashboardDiskUsagesFailure(error.message));
      });
  };
};


// Read available memory chart
export const fetchDashboardAvailableMemoriesStart = () => ({
  type: dashboardActionTypes.FETCH_DASHBOARD_AVAILABLE_MEMORIES_START,
});

export const fetchDashboardAvailableMemoriesSuccess = availableMemories => ({
  type: dashboardActionTypes.FETCH_DASHBOARD_AVAILABLE_MEMORIES_SUCCESS,
  payload: availableMemories,
});

export const fetchDashboardAvailableMemoriesFailure = errorMessage => ({
  type: dashboardActionTypes.FETCH_DASHBOARD_AVAILABLE_MEMORIES_FAILURE,
  payload: errorMessage,
});

export const fetchDashboardAvailableMemoriesStartAsync = (timeRangeFilter) => {
  return dispatch => {
    dispatch(fetchDashboardAvailableMemoriesStart());

    const params = {
      timeRangeFilter: timeRangeFilter
    };

    axios.get(`${API_ENDPOINT}/dashboard/memory/availables`, {params: params})
      .then(result => {
        dispatch(fetchDashboardAvailableMemoriesSuccess(result.data.result.availableMemories));
      })
      .catch(error => {
        dispatch(fetchDashboardAvailableMemoriesFailure(error.message));
      });
  };
};