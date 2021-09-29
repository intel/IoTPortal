/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import React from 'react';
import { connect } from 'react-redux';

import { CCard, CCardBody, CCardHeader } from '@coreui/react';

import CpuTemperatureAreaChartCard from '../../containers/CpuTemperatureAreaChartCard/CpuTemperatureAreaChartCard';
import CpuUsageAreaChartCard from '../../containers/CpuUsageAreaChartCard/CpuUsageAreaChartCard';
import DiskUsageAreaChartCard from '../../containers/DiskUsageAreaChartCard/DiskUsageAreaChartCard';
import AvailableMemoryAreaChartCard from '../../containers/AvailableMemoryAreaChartCard/AvailableMemoryAreaChartCard';

const MetricsCard = ({deviceUniqueId}) => {
  return (
    <CCard>
      <CCardHeader>
        Metrics
      </CCardHeader>
      <CCardBody>
        <CpuTemperatureAreaChartCard deviceUniqueId={deviceUniqueId}/>
        <CpuUsageAreaChartCard deviceUniqueId={deviceUniqueId}/>
        <DiskUsageAreaChartCard deviceUniqueId={deviceUniqueId}/>
        <AvailableMemoryAreaChartCard deviceUniqueId={deviceUniqueId}/>
      </CCardBody>
    </CCard>
  );
};

export default MetricsCard;