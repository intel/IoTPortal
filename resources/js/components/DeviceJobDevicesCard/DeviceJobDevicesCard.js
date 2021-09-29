/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import React from 'react';

import { Skeleton } from 'primereact/skeleton';
import { CCard, CCardBody, CCardHeader } from '@coreui/react';

import DeviceJobDevicesDataTable from '../DeviceJobDevicesDataTable/DeviceJobDevicesDataTable';

const DeviceJobDevicesCard = ({deviceGroupName, deviceJobDevices}) => {
  return (
    <CCard>
      <CCardHeader>
        {(deviceJobDevices && deviceGroupName)
          ? <>{deviceJobDevices?.length || 0} devices under device group: <b>{deviceGroupName}</b></>
          : <Skeleton/>}
      </CCardHeader>
      <CCardBody>
        <DeviceJobDevicesDataTable deviceJobDevices={deviceJobDevices}/>
      </CCardBody>
    </CCard>
  );
};

export default DeviceJobDevicesCard;