/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { fetchCpuUsagesStartAsync } from '../../redux/deviceMetric/deviceMetric.actions';

import ChartCard from '../../components/ChartCard/ChartCard';

const CpuUsageAreaChartCard = ({
                                 deviceUniqueId,
                                 cpuUsages,
                                 isFetchingCpuUsages,
                                 fetchCpuUsagesErrorMessage,
                                 fetchCpuUsagesStartAsync
                               }) => {

  const [selectedTimeRangeFilter, setSelectedTimeRangeFilter] = useState(1);
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: 'area',
      stacked: false,
      height: 500,
      zoom: {
        autoScaleYaxis: true
      },
    },
    dataLabels: {
      enabled: false
    },
    yaxis: {
      title: {
        text: 'CPU Usage %'
      },
      labels: {
        formatter: function (value) {
          return `${Math.round(value)}%`;
        },
      },
    },
    xaxis: {
      type: 'datetime',
      labels: {
        datetimeUTC: false,
      }
    },
    tooltip: {
      y: {
        formatter: function (value) {
          return `${value}%`;
        },
      },
      x: {
        format: 'dd MMM yyyy HH:mm:ss',
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100]
      },
    },
  });

  useEffect(() => {
    fetchCpuUsagesStartAsync(deviceUniqueId, selectedTimeRangeFilter);
  }, [selectedTimeRangeFilter]);

  const series = [{
    name: "CPU Usage %",
    data: cpuUsages,
  }];

  return (
    <ChartCard
      title="CPU Usage"
      options={chartOptions}
      series={series}
      type="area"
      height={500}
      selectedTimeRangeFilter={selectedTimeRangeFilter}
      onTimeRangeFilter={(event) => setSelectedTimeRangeFilter(parseInt(event.target.value))}
      onRefresh={() => fetchCpuUsagesStartAsync(deviceUniqueId, selectedTimeRangeFilter)}
      isLoading={isFetchingCpuUsages}
      errorMessage={fetchCpuUsagesErrorMessage}
    />
  );
};

const mapStateToProps = state => ({
  cpuUsages: state.deviceMetric.cpuUsages,
  isFetchingCpuUsages: state.deviceMetric.isFetchingCpuUsages,
  fetchCpuUsagesErrorMessage: state.deviceMetric.fetchCpuUsagesErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  fetchCpuUsagesStartAsync: (deviceUniqueId, timeRangeFilter) => dispatch(fetchCpuUsagesStartAsync(deviceUniqueId, timeRangeFilter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CpuUsageAreaChartCard);