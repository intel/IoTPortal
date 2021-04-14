import React from 'react';
import { connect } from 'react-redux';

import { CCard, CCardBody, CCardHeader } from '@coreui/react';

import CpuTemperatureLineChartCard from '../../containers/CpuTemperatureLineChartCard/CpuTemperatureLineChartCard';
import CpuUsageLineChartCard from '../../containers/CpuUsageLineChartCard/CpuUsageLineChartCard';
import DiskUsageLineChartCard from '../../containers/DiskUsageLineChartCard/DiskUsageLineChartCard';
import AvailableMemoryLineChartCard from '../../containers/AvailableMemoryLineChartCard/AvailableMemoryLineChartCard';

const MetricsCard = ({deviceId}) => {

  return (
    <CCard>
      <CCardHeader>
        Metrics
      </CCardHeader>
      <CCardBody>
        <CpuTemperatureLineChartCard deviceId={deviceId}/>
        <CpuUsageLineChartCard deviceId={deviceId}/>
        <DiskUsageLineChartCard deviceId={deviceId}/>
        <AvailableMemoryLineChartCard deviceId={deviceId}/>
      </CCardBody>
    </CCard>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MetricsCard);