/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import React, { useEffect, useState } from 'react';

import ChartCard from '../ChartCard/ChartCard';

const OverviewCpuUsageLineChartCard = ({series, isLoading, errorMessage, fetchCallback}) => {

  const [selectedTimeRangeFilter, setSelectedTimeRangeFilter] = useState(1);
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: 'line',
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
  });

  useEffect(() => {
    fetchCallback(selectedTimeRangeFilter);
  }, [selectedTimeRangeFilter]);

  return (
    <ChartCard
      title="CPU Usage"
      options={chartOptions}
      series={series}
      type="line"
      height={500}
      selectedTimeRangeFilter={selectedTimeRangeFilter}
      onTimeRangeFilter={(event) => setSelectedTimeRangeFilter(parseInt(event.target.value))}
      onRefresh={() => fetchCallback(selectedTimeRangeFilter)}
      isLoading={isLoading}
      errorMessage={errorMessage}
    />
  );
};

export default OverviewCpuUsageLineChartCard;