import React from 'react';
import { connect } from 'react-redux';

import { CCard, CCardBody, CCardHeader } from '@coreui/react';

import CpuTemperatureLineChartCard from '../../containers/CpuTemperatureLineChartCard/CpuTemperatureLineChartCard';
import CpuUsageLineChartCard from '../../containers/CpuUsageLineChartCard/CpuUsageLineChartCard';
import DiskUsageLineChartCard from '../../containers/DiskUsageLineChartCard/DiskUsageLineChartCard';
import AvailableMemoryLineChartCard from '../../containers/AvailableMemoryLineChartCard/AvailableMemoryLineChartCard';

const MetricsCard = ({deviceUniqueId}) => {
  return (
    <CCard>
      <CCardHeader>
        Metrics
      </CCardHeader>
      <CCardBody>
        <CpuTemperatureLineChartCard deviceUniqueId={deviceUniqueId}/>
        <CpuUsageLineChartCard deviceUniqueId={deviceUniqueId}/>
        <DiskUsageLineChartCard deviceUniqueId={deviceUniqueId}/>
        <AvailableMemoryLineChartCard deviceUniqueId={deviceUniqueId}/>
      </CCardBody>
    </CCard>
  );
};

export default MetricsCard;