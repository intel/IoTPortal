import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { fetchCpuUsagePercentagesStartAsync } from '../../redux/deviceMetric/deviceMetric.actions';

import LineChartCard from '../LineChartCard/LineChartCard';

const CpuUsageLineChartCard = ({
                                 deviceId,
                                 cpuUsagePercentages,
                                 isFetchingCpuUsagePercentages,
                                 fetchCpuUsagePercentagesErrorMessage,
                                 fetchCpuUsagePercentagesStartAsync
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
    fetchCpuUsagePercentagesStartAsync(deviceId, selectedTimeRangeFilter);
  }, [selectedTimeRangeFilter]);

  const series = [{
    name: "CPU Usage %",
    data: cpuUsagePercentages,
  }];

  return (
    <LineChartCard
      title="CPU Usage"
      options={chartOptions}
      series={series}
      type="area"
      height={500}
      timeRangeFilters={timeRangeFilters}
      selectedTimeRangeFilter={selectedTimeRangeFilter}
      onTimeRangeFilter={(event) => setSelectedTimeRangeFilter(parseInt(event.target.value))}
      onRefresh={() => fetchCpuUsagePercentagesStartAsync(deviceId, selectedTimeRangeFilter)}
      isLoading={isFetchingCpuUsagePercentages}
      errorMessage={fetchCpuUsagePercentagesErrorMessage}
    />
  );
};

const mapStateToProps = state => ({
  cpuUsagePercentages: state.deviceMetric.cpuUsagePercentages,
  isFetchingCpuUsagePercentages: state.deviceMetric.isFetchingCpuUsagePercentages,
  fetchCpuUsagePercentagesErrorMessage: state.deviceMetric.fetchCpuUsagePercentagesErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  fetchCpuUsagePercentagesStartAsync: (id, timeRangeFilter) => dispatch(fetchCpuUsagePercentagesStartAsync(id, timeRangeFilter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CpuUsageLineChartCard);