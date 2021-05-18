import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { fetchDiskUsagesStartAsync } from '../../redux/deviceMetric/deviceMetric.actions';

import LineChartCard from '../../components/LineChartCard/LineChartCard';

const DiskUsageLineChartCard = ({
                                  deviceUniqueId,
                                  diskUsages,
                                  isFetchingDiskUsages,
                                  fetchDiskUsagesErrorMessage,
                                  fetchDiskUsagesStartAsync
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
    <LineChartCard
      title="Disk Usage"
      options={chartOptions}
      series={series}
      type="area"
      height={500}
      timeRangeFilters={timeRangeFilters}
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

export default connect(mapStateToProps, mapDispatchToProps)(DiskUsageLineChartCard);