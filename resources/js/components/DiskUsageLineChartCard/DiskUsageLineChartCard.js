import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { fetchDiskUsagePercentagesStartAsync } from '../../redux/deviceMetric/deviceMetric.actions';

import LineChartCard from '../LineChartCard/LineChartCard';

const DiskUsageLineChartCard = ({
                                  deviceId,
                                  diskUsagePercentages,
                                  isFetchingDiskUsagePercentages,
                                  fetchDiskUsagePercentagesErrorMessage,
                                  fetchDiskUsagePercentagesStartAsync
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
    fetchDiskUsagePercentagesStartAsync(deviceId, selectedTimeRangeFilter);
  }, [selectedTimeRangeFilter]);

  const series = [{
    name: "Disk Usage",
    data: diskUsagePercentages,
  }];

  return (
    <LineChartCard
      title="Disk Usage"
      options={chartOptions}
      series={series}
      type="area"
      height={500}
      timeRangeFilters={timeRangeFilters}
      selectedTimeRangeFilter={selectedTimeRangeFilter}
      onTimeRangeFilter={(event) => setSelectedTimeRangeFilter(parseInt(event.target.value))}
      onRefresh={() => fetchDiskUsagePercentagesStartAsync(deviceId, selectedTimeRangeFilter)}
      isLoading={isFetchingDiskUsagePercentages}
      errorMessage={fetchDiskUsagePercentagesErrorMessage}
    />
  );
};

const mapStateToProps = state => ({
  diskUsagePercentages: state.deviceMetric.diskUsagePercentages,
  isFetchingDiskUsagePercentages: state.deviceMetric.isFetchingDiskUsagePercentages,
  fetchDiskUsagePercentagesErrorMessage: state.deviceMetric.fetchDiskUsagePercentagesErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  fetchDiskUsagePercentagesStartAsync: (id, timeRangeFilter) => dispatch(fetchDiskUsagePercentagesStartAsync(id, timeRangeFilter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DiskUsageLineChartCard);