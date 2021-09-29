/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { fetchCpuTemperaturesStartAsync } from '../../redux/deviceMetric/deviceMetric.actions';

import ChartCard from '../../components/ChartCard/ChartCard';

const CpuTemperatureAreaChartCard = ({
                                    deviceUniqueId,
                                    cpuTemperatures,
                                    isFetchingCpuTemperatures,
                                    fetchCpuTemperaturesErrorMessage,
                                    fetchCpuTemperaturesStartAsync
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
    fetchCpuTemperaturesStartAsync(deviceUniqueId, selectedTimeRangeFilter);
  }, [selectedTimeRangeFilter]);

  const series = [{
    name: "Temperature",
    data: cpuTemperatures,
  }];

  return (
    <ChartCard
      title="Temperature"
      options={chartOptions}
      series={series}
      type="area"
      height={500}
      selectedTimeRangeFilter={selectedTimeRangeFilter}
      onTimeRangeFilter={(event) => setSelectedTimeRangeFilter(parseInt(event.target.value))}
      onRefresh={() => fetchCpuTemperaturesStartAsync(deviceUniqueId, selectedTimeRangeFilter)}
      isLoading={isFetchingCpuTemperatures}
      errorMessage={fetchCpuTemperaturesErrorMessage}
    />
  );
};

const mapStateToProps = state => ({
  cpuTemperatures: state.deviceMetric.cpuTemperatures,
  isFetchingCpuTemperatures: state.deviceMetric.isFetchingCpuTemperatures,
  fetchCpuTemperaturesErrorMessage: state.deviceMetric.fetchCpuTemperaturesErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  fetchCpuTemperaturesStartAsync: (deviceUniqueId, timeRangeFilter) => dispatch(fetchCpuTemperaturesStartAsync(deviceUniqueId, timeRangeFilter)),

});

export default connect(mapStateToProps, mapDispatchToProps)(CpuTemperatureAreaChartCard);