import React, { useEffect, useState } from 'react';

import ChartCard from '../ChartCard/ChartCard';

const OverviewAvailableMemoryLineChartCard = ({series, isLoading, errorMessage, fetchCallback}) => {

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
  });

  useEffect(() => {
    fetchCallback(selectedTimeRangeFilter);
  }, [selectedTimeRangeFilter]);

  return (
    <ChartCard
      title="Available Memory"
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

export default OverviewAvailableMemoryLineChartCard;