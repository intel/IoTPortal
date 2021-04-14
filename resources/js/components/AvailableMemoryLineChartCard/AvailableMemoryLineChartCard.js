import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { fetchAvailableMemoriesInBytesStartAsync } from '../../redux/deviceMetric/deviceMetric.actions';

import LineChartCard from '../LineChartCard/LineChartCard';

const AvailableMemoryLineChartCard = ({
                                        deviceId,
                                        availableMemoriesInBytes,
                                        isFetchingAvailableMemoriesInBytes,
                                        fetchAvailableMemoriesInBytesErrorMessage,
                                        fetchAvailableMemoriesInBytesStartAsync
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
    fetchAvailableMemoriesInBytesStartAsync(deviceId, selectedTimeRangeFilter);
  }, [selectedTimeRangeFilter]);

  const series = [{
    name: "Available Memory",
    data: availableMemoriesInBytes,
  }];

  return (
    <LineChartCard
      title="Available Memory"
      options={chartOptions}
      series={series}
      type="area"
      height={500}
      timeRangeFilters={timeRangeFilters}
      selectedTimeRangeFilter={selectedTimeRangeFilter}
      onTimeRangeFilter={(event) => setSelectedTimeRangeFilter(parseInt(event.target.value))}
      onRefresh={() => fetchAvailableMemoriesInBytesStartAsync(deviceId, selectedTimeRangeFilter)}
      isLoading={isFetchingAvailableMemoriesInBytes}
      errorMessage={fetchAvailableMemoriesInBytesErrorMessage}
    />
  );
};

const mapStateToProps = state => ({
  availableMemoriesInBytes: state.deviceMetric.availableMemoriesInBytes,
  isFetchingAvailableMemoriesInBytes: state.deviceMetric.isFetchingAvailableMemoriesInBytes,
  fetchAvailableMemoriesInBytesErrorMessage: state.deviceMetric.fetchAvailableMemoriesInBytesErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  fetchAvailableMemoriesInBytesStartAsync: (id, timeRangeFilter) => dispatch(fetchAvailableMemoriesInBytesStartAsync(id, timeRangeFilter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AvailableMemoryLineChartCard);