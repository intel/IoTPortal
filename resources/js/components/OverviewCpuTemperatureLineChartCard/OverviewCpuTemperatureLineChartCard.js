/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import React, { useEffect, useState } from 'react';

import ChartCard from '../ChartCard/ChartCard';

const OverviewCpuTemperatureLineChartCard = ({series, isLoading, errorMessage, fetchCallback}) => {

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
        text: 'Temperature - Celsius(°C)'
      },
      labels: {
        formatter: function (value) {
          return `${Math.round(value)}°C`;
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
          return `${value}°C`;
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
      title="Temperature"
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

export default OverviewCpuTemperatureLineChartCard;