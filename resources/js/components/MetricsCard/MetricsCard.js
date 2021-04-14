import React from 'react';
import { connect } from 'react-redux';

import { CCard, CCardBody, CCardHeader } from '@coreui/react';
import TemperatureLineChartCard from '../TemperatureLineChartCard/TemperatureLineChartCard';
import CpuUsageLineChartCard from '../CpuUsageLineChartCard/CpuUsageLineChartCard';
import DiskUsageLineChartCard from '../DiskUsageLineChartCard/DiskUsageLineChartCard';
import AvailableMemoryLineChartCard from '../AvailableMemoryLineChartCard/AvailableMemoryLineChartCard';


const MetricsCard = ({deviceId}) => {

  return (
    <CCard>
      <CCardHeader>
        Metrics
      </CCardHeader>
      <CCardBody>
        <TemperatureLineChartCard deviceId={deviceId}/>
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