/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { CCol, CRow } from '@coreui/react';

import {
  fetchDashboardAvailableMemoriesStartAsync,
  fetchDashboardCpuTemperaturesStartAsync,
  fetchDashboardCpuUsagesStartAsync,
  fetchDashboardDiskUsagesStartAsync,
  fetchDashboardStatisticsStartAsync
} from '../../redux/dashboard/dashboard.actions';

import {
  selectDashboardAvailableMemories,
  selectDashboardCpuTemperatures,
  selectDashboardCpuUsages,
  selectDashboardDiskUsages,
  selectDashboardFetchAvailableMemoriesErrorMessage,
  selectDashboardFetchCpuTemperaturesErrorMessage,
  selectDashboardFetchCpuUsagesErrorMessage,
  selectDashboardFetchDiskUsagesErrorMessage,
  selectDashboardIsFetchingAvailableMemories,
  selectDashboardIsFetchingCpuTemperatures,
  selectDashboardIsFetchingCpuUsages,
  selectDashboardIsFetchingDiskUsages,
  selectDashboardStatisticsLastSevenDaysNewDeviceCategoryCount,
  selectDashboardStatisticsLastSevenDaysNewDeviceCount,
  selectDashboardStatisticsLastSevenDaysNewDeviceGroupCount,
  selectDashboardStatisticsLastSevenDaysNewDeviceJobCount,
  selectDashboardStatisticsTotalDeviceCategoryCount,
  selectDashboardStatisticsTotalDeviceCount,
  selectDashboardStatisticsTotalDeviceGroupCount,
  selectDashboardStatisticsTotalDeviceJobCount
} from '../../redux/dashboard/dashboard.selectors';

import DropdownWidget from '../../components/DropdownWidget/DropdownWidget';
import OverviewCpuTemperatureLineChartCard
  from '../../components/OverviewCpuTemperatureLineChartCard/OverviewCpuTemperatureLineChartCard';
import OverviewCpuUsageLineChartCard
  from '../../components/OverviewCpuUsageLineChartCard/OverviewCpuUsageLineChartCard';
import OverviewDiskUsageLineChartCard
  from '../../components/OverviewDiskUsageLineChartCard/OverviewDiskUsageLineChartCard';
import OverviewAvailableMemoryLineChartCard
  from '../../components/OverviewAvailableMemoryLineChartCard/OverviewAvailableMemoryLineChartCard';

const Dashboard = ({
                     totalDeviceCount,
                     lastSevenDaysNewDeviceCount,
                     totalDeviceGroupCount,
                     lastSevenDaysNewDeviceGroupCount,
                     totalDeviceCategoryCount,
                     lastSevenDaysNewDeviceCategoryCount,
                     totalDeviceJobCount,
                     lastSevenDaysNewDeviceJobCount,
                     cpuTemperatures,
                     isFetchingCpuTemperatures,
                     fetchCpuTemperaturesErrorMessage,
                     cpuUsages,
                     isFetchingCpuUsages,
                     fetchCpuUsagesErrorMessage,
                     diskUsages,
                     isFetchingDiskUsages,
                     fetchDiskUsagesErrorMessage,
                     availableMemories,
                     isFetchingAvailableMemories,
                     fetchAvailableMemoriesErrorMessage,
                     fetchDashboardStatisticsStartAsync,
                     fetchDashboardCpuTemperaturesStartAsync,
                     fetchDashboardCpuUsagesStartAsync,
                     fetchDashboardDiskUsagesStartAsync,
                     fetchDashboardAvailableMemoriesStartAsync
                   }) => {

  useEffect(() => {
    fetchDashboardStatisticsStartAsync();
  }, []);

  return (
    <>
      <CRow>
        <CCol sm="6" lg="3">
          <DropdownWidget color="gradient-primary"
                          header={totalDeviceCount}
                          text="Devices"
                          dataPoints={lastSevenDaysNewDeviceCount?.values}
                          pointHoverBackgroundColor="primary"
                          label="Devices"
                          labels={lastSevenDaysNewDeviceCount?.labels}
                          createUrl="/devices/create"
                          viewUrl="/devices"
          />
        </CCol>
        <CCol sm="6" lg="3">
          <DropdownWidget color="gradient-info"
                          header={totalDeviceGroupCount}
                          text="Device groups"
                          dataPoints={lastSevenDaysNewDeviceGroupCount?.values}
                          pointHoverBackgroundColor="info"
                          label="Device groups"
                          labels={lastSevenDaysNewDeviceGroupCount?.labels}
                          createUrl="/device/groups/create"
                          viewUrl="/device/groups"
          />
        </CCol>
        <CCol sm="6" lg="3">
          <DropdownWidget color="gradient-warning"
                          header={totalDeviceCategoryCount}
                          text="Device categories"
                          dataPoints={lastSevenDaysNewDeviceCategoryCount?.values}
                          pointHoverBackgroundColor="warning"
                          label="Device categories"
                          labels={lastSevenDaysNewDeviceCategoryCount?.labels}
                          createUrl="/device/categories/create"
                          viewUrl="/device/categories"
          />
        </CCol>
        <CCol sm="6" lg="3">
          <DropdownWidget color="gradient-danger"
                          header={totalDeviceJobCount}
                          text="Device jobs"
                          dataPoints={lastSevenDaysNewDeviceJobCount?.values}
                          pointHoverBackgroundColor="danger"
                          label="Device jobs"
                          labels={lastSevenDaysNewDeviceJobCount?.labels}
                          createUrl="/device/jobs/create"
                          viewUrl="/device/jobs"
          />
        </CCol>
      </CRow>
      <CRow>
        <CCol xs="12" md="12" className="mb-4">
          <OverviewCpuTemperatureLineChartCard series={cpuTemperatures}
                                               isLoading={isFetchingCpuTemperatures}
                                               errorMessage={fetchCpuTemperaturesErrorMessage}
                                               fetchCallback={fetchDashboardCpuTemperaturesStartAsync}
          />
          <OverviewCpuUsageLineChartCard series={cpuUsages}
                                         isLoading={isFetchingCpuUsages}
                                         errorMessage={fetchCpuUsagesErrorMessage}
                                         fetchCallback={fetchDashboardCpuUsagesStartAsync}
          />
          <OverviewDiskUsageLineChartCard series={diskUsages}
                                          isLoading={isFetchingDiskUsages}
                                          errorMessage={fetchDiskUsagesErrorMessage}
                                          fetchCallback={fetchDashboardDiskUsagesStartAsync}
          />
          <OverviewAvailableMemoryLineChartCard series={availableMemories}
                                                isLoading={isFetchingAvailableMemories}
                                                errorMessage={fetchAvailableMemoriesErrorMessage}
                                                fetchCallback={fetchDashboardAvailableMemoriesStartAsync}
          />
        </CCol>
      </CRow>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  totalDeviceCount: selectDashboardStatisticsTotalDeviceCount,
  lastSevenDaysNewDeviceCount: selectDashboardStatisticsLastSevenDaysNewDeviceCount,
  totalDeviceGroupCount: selectDashboardStatisticsTotalDeviceGroupCount,
  lastSevenDaysNewDeviceGroupCount: selectDashboardStatisticsLastSevenDaysNewDeviceGroupCount,
  totalDeviceCategoryCount: selectDashboardStatisticsTotalDeviceCategoryCount,
  lastSevenDaysNewDeviceCategoryCount: selectDashboardStatisticsLastSevenDaysNewDeviceCategoryCount,
  totalDeviceJobCount: selectDashboardStatisticsTotalDeviceJobCount,
  lastSevenDaysNewDeviceJobCount: selectDashboardStatisticsLastSevenDaysNewDeviceJobCount,
  cpuTemperatures: selectDashboardCpuTemperatures,
  isFetchingCpuTemperatures: selectDashboardIsFetchingCpuTemperatures,
  fetchCpuTemperaturesErrorMessage: selectDashboardFetchCpuTemperaturesErrorMessage,
  cpuUsages: selectDashboardCpuUsages,
  isFetchingCpuUsages: selectDashboardIsFetchingCpuUsages,
  fetchCpuUsagesErrorMessage: selectDashboardFetchCpuUsagesErrorMessage,
  diskUsages: selectDashboardDiskUsages,
  isFetchingDiskUsages: selectDashboardIsFetchingDiskUsages,
  fetchDiskUsagesErrorMessage: selectDashboardFetchDiskUsagesErrorMessage,
  availableMemories: selectDashboardAvailableMemories,
  isFetchingAvailableMemories: selectDashboardIsFetchingAvailableMemories,
  fetchAvailableMemoriesErrorMessage: selectDashboardFetchAvailableMemoriesErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  fetchDashboardStatisticsStartAsync: () => dispatch(fetchDashboardStatisticsStartAsync()),
  fetchDashboardCpuTemperaturesStartAsync: (timeRangeFilter) => dispatch(fetchDashboardCpuTemperaturesStartAsync(timeRangeFilter)),
  fetchDashboardCpuUsagesStartAsync: (timeRangeFilter) => dispatch(fetchDashboardCpuUsagesStartAsync(timeRangeFilter)),
  fetchDashboardDiskUsagesStartAsync: (timeRangeFilter) => dispatch(fetchDashboardDiskUsagesStartAsync(timeRangeFilter)),
  fetchDashboardAvailableMemoriesStartAsync: (timeRangeFilter) => dispatch(fetchDashboardAvailableMemoriesStartAsync(timeRangeFilter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
