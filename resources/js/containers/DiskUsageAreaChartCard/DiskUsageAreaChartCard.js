/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { fetchDiskUsagesStartAsync } from '../../redux/deviceMetric/deviceMetric.actions';

import ChartCard from '../../components/ChartCard/ChartCard';

const DiskUsageAreaChartCard = ({
                                  deviceUniqueId,
                                  diskUsages,
                                  isFetchingDiskUsages,
                                  fetchDiskUsagesErrorMessage,
                                  fetchDiskUsagesStartAsync
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
        text: 'Disk Usage %'
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
    fetchDiskUsagesStartAsync(deviceUniqueId, selectedTimeRangeFilter);
  }, [selectedTimeRangeFilter]);

  const series = [{
    name: "Disk Usage",
    data: diskUsages,
  }];

  return (
    <ChartCard
      title="Disk Usage"
      options={chartOptions}
      series={series}
      type="area"
      height={500}
      selectedTimeRangeFilter={selectedTimeRangeFilter}
      onTimeRangeFilter={(event) => setSelectedTimeRangeFilter(parseInt(event.target.value))}
      onRefresh={() => fetchDiskUsagesStartAsync(deviceUniqueId, selectedTimeRangeFilter)}
      isLoading={isFetchingDiskUsages}
      errorMessage={fetchDiskUsagesErrorMessage}
    />
  );
};

const mapStateToProps = state => ({
  diskUsages: state.deviceMetric.diskUsages,
  isFetchingDiskUsages: state.deviceMetric.isFetchingDiskUsages,
  fetchDiskUsagesErrorMessage: state.deviceMetric.fetchDiskUsagesErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  fetchDiskUsagesStartAsync: (deviceUniqueId, timeRangeFilter) => dispatch(fetchDiskUsagesStartAsync(deviceUniqueId, timeRangeFilter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DiskUsageAreaChartCard);