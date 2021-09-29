/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { fetchAvailableMemoriesStartAsync } from '../../redux/deviceMetric/deviceMetric.actions';

import ChartCard from '../../components/ChartCard/ChartCard';

const AvailableMemoryAreaChartCard = ({
                                        deviceUniqueId,
                                        availableMemories,
                                        isFetchingAvailableMemories,
                                        fetchAvailableMemoriesErrorMessage,
                                        fetchAvailableMemoriesStartAsync
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
        text: 'Available Memory - Megabytes(MB)'
      },
      labels: {
        formatter: function (value) {
          return `${(value / 1024 / 1024).toFixed(2)} MB`;
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
          return `${(value / 1024 / 1024).toFixed(2)} MB`;
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
    fetchAvailableMemoriesStartAsync(deviceUniqueId, selectedTimeRangeFilter);
  }, [selectedTimeRangeFilter]);

  const series = [{
    name: "Available Memory",
    data: availableMemories,
  }];

  return (
    <ChartCard
      title="Available Memory"
      options={chartOptions}
      series={series}
      type="area"
      height={500}
      selectedTimeRangeFilter={selectedTimeRangeFilter}
      onTimeRangeFilter={(event) => setSelectedTimeRangeFilter(parseInt(event.target.value))}
      onRefresh={() => fetchAvailableMemoriesStartAsync(deviceUniqueId, selectedTimeRangeFilter)}
      isLoading={isFetchingAvailableMemories}
      errorMessage={fetchAvailableMemoriesErrorMessage}
    />
  );
};

const mapStateToProps = state => ({
  availableMemories: state.deviceMetric.availableMemories,
  isFetchingAvailableMemories: state.deviceMetric.isFetchingAvailableMemories,
  fetchAvailableMemoriesErrorMessage: state.deviceMetric.fetchAvailableMemoriesErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  fetchAvailableMemoriesStartAsync: (deviceUniqueId, timeRangeFilter) => dispatch(fetchAvailableMemoriesStartAsync(deviceUniqueId, timeRangeFilter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AvailableMemoryAreaChartCard);