import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { fetchAvailableMemoriesStartAsync } from '../../redux/deviceMetric/deviceMetric.actions';

import LineChartCard from '../../components/LineChartCard/LineChartCard';

const AvailableMemoryLineChartCard = ({
                                        deviceUniqueId,
                                        availableMemories,
                                        isFetchingAvailableMemories,
                                        fetchAvailableMemoriesErrorMessage,
                                        fetchAvailableMemoriesStartAsync
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
    <LineChartCard
      title="Available Memory"
      options={chartOptions}
      series={series}
      type="area"
      height={500}
      timeRangeFilters={timeRangeFilters}
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

export default connect(mapStateToProps, mapDispatchToProps)(AvailableMemoryLineChartCard);