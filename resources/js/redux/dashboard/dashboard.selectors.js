/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import { createSelector } from 'reselect';


const selectDashboardReducer = state => state.dashboard;

export const selectDashboardStatistics = createSelector(
  [selectDashboardReducer],
  dashboardReducer => dashboardReducer.statistics
);


// Select CPU temperature chart
export const selectDashboardCpuTemperatures = createSelector(
  [selectDashboardReducer],
  dashboardReducer => dashboardReducer.cpuTemperatures
);

export const selectDashboardIsFetchingCpuTemperatures = createSelector(
  [selectDashboardReducer],
  dashboardReducer => dashboardReducer.isFetchingCpuTemperatures
);

export const selectDashboardFetchCpuTemperaturesErrorMessage = createSelector(
  [selectDashboardReducer],
  dashboardReducer => dashboardReducer.fetchCpuTemperaturesErrorMessage
);


// Select CPU usage chart
export const selectDashboardCpuUsages = createSelector(
  [selectDashboardReducer],
  dashboardReducer => dashboardReducer.cpuUsages
);

export const selectDashboardIsFetchingCpuUsages = createSelector(
  [selectDashboardReducer],
  dashboardReducer => dashboardReducer.isFetchingCpuUsages
);

export const selectDashboardFetchCpuUsagesErrorMessage = createSelector(
  [selectDashboardReducer],
  dashboardReducer => dashboardReducer.fetchCpuUsagesErrorMessage
);


// Select disk usage chart
export const selectDashboardDiskUsages = createSelector(
  [selectDashboardReducer],
  dashboardReducer => dashboardReducer.diskUsages
);

export const selectDashboardIsFetchingDiskUsages = createSelector(
  [selectDashboardReducer],
  dashboardReducer => dashboardReducer.isFetchingDiskUsages
);

export const selectDashboardFetchDiskUsagesErrorMessage = createSelector(
  [selectDashboardReducer],
  dashboardReducer => dashboardReducer.fetchDiskUsagesErrorMessage
);


// Select available memory chart
export const selectDashboardAvailableMemories = createSelector(
  [selectDashboardReducer],
  dashboardReducer => dashboardReducer.availableMemories
);

export const selectDashboardIsFetchingAvailableMemories = createSelector(
  [selectDashboardReducer],
  dashboardReducer => dashboardReducer.isFetchingAvailableMemories
);

export const selectDashboardFetchAvailableMemoriesErrorMessage = createSelector(
  [selectDashboardReducer],
  dashboardReducer => dashboardReducer.fetchAvailableMemoriesErrorMessage
);


// Dashboard statistics - Device
export const selectDashboardStatisticsTotalDeviceCount = createSelector(
  [selectDashboardStatistics],
  statistics => statistics?.totalDeviceCount?.toString() || '0'
);

export const selectDashboardStatisticsLastSevenDaysNewDeviceCount = createSelector(
  [selectDashboardStatistics],
  statistics => {
    if (statistics?.lastSevenDaysNewDeviceCount) {
      return {
        labels: Object.keys(statistics?.lastSevenDaysNewDeviceCount),
        values: Object.values(statistics?.lastSevenDaysNewDeviceCount),
      };
    }
  }
);


// Dashboard statistics - Device group
export const selectDashboardStatisticsTotalDeviceGroupCount = createSelector(
  [selectDashboardStatistics],
  statistics => statistics?.totalDeviceGroupCount?.toString() || '0'
);

export const selectDashboardStatisticsLastSevenDaysNewDeviceGroupCount = createSelector(
  [selectDashboardStatistics],
  statistics => {
    if (statistics?.lastSevenDaysNewDeviceGroupCount) {
      return {
        labels: Object.keys(statistics?.lastSevenDaysNewDeviceGroupCount),
        values: Object.values(statistics?.lastSevenDaysNewDeviceGroupCount),
      };
    }
  }
);


// Dashboard statistics - Device category
export const selectDashboardStatisticsTotalDeviceCategoryCount = createSelector(
  [selectDashboardStatistics],
  statistics => statistics?.totalDeviceCategoryCount?.toString() || '0'
);

export const selectDashboardStatisticsLastSevenDaysNewDeviceCategoryCount = createSelector(
  [selectDashboardStatistics],
  statistics => {
    if (statistics?.lastSevenDaysNewDeviceCategoryCount) {
      return {
        labels: Object.keys(statistics?.lastSevenDaysNewDeviceCategoryCount),
        values: Object.values(statistics?.lastSevenDaysNewDeviceCategoryCount),
      };
    }
  }
);


// Dashboard statistics - Device job
export const selectDashboardStatisticsTotalDeviceJobCount = createSelector(
  [selectDashboardStatistics],
  statistics => statistics?.totalDeviceJobCount?.toString() || '0'
);

export const selectDashboardStatisticsLastSevenDaysNewDeviceJobCount = createSelector(
  [selectDashboardStatistics],
  statistics => {
    if (statistics?.lastSevenDaysNewDeviceJobCount) {
      return {
        labels: Object.keys(statistics?.lastSevenDaysNewDeviceJobCount),
        values: Object.values(statistics?.lastSevenDaysNewDeviceJobCount),
      };
    }
  }
);