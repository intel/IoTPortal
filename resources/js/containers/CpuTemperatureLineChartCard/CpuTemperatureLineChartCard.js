import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { fetchCpuTemperaturesStartAsync } from '../../redux/deviceMetric/deviceMetric.actions';

import LineChartCard from '../../components/LineChartCard/LineChartCard';

const CpuTemperatureLineChartCard = ({
                                    deviceId,
                                    cpuTemperatures,
                                    isFetchingCpuTemperatures,
                                    fetchCpuTemperaturesErrorMessage,
                                    fetchCpuTemperaturesStartAsync
                                  }) => {

  const [timeRangeFilters, setTimeRangeFilters] = useState([
    {value: 1, label: 'Last 1 hour'},
    {value: 7, label: 'Last 7 hours'},
    {value: 24, label: 'Last 24 hours'},
    {value: 168, label: 'Last 7 days'},
  ]);
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
    fetchCpuTemperaturesStartAsync(deviceId, selectedTimeRangeFilter);
  }, [selectedTimeRangeFilter]);

  const series = [{
    name: "Temperature",
    data: cpuTemperatures,
  }];

  return (
    <LineChartCard
      title="Temperature"
      options={chartOptions}
      series={series}
      type="area"
      height={500}
      timeRangeFilters={timeRangeFilters}
      selectedTimeRangeFilter={selectedTimeRangeFilter}
      onTimeRangeFilter={(event) => setSelectedTimeRangeFilter(parseInt(event.target.value))}
      onRefresh={() => fetchCpuTemperaturesStartAsync(deviceId, selectedTimeRangeFilter)}
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
  fetchCpuTemperaturesStartAsync: (id, timeRangeFilter) => dispatch(fetchCpuTemperaturesStartAsync(id, timeRangeFilter)),

});

export default connect(mapStateToProps, mapDispatchToProps)(CpuTemperatureLineChartCard);