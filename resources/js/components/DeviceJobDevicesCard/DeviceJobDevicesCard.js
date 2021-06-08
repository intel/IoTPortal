import React from 'react';

import { Skeleton } from 'primereact/skeleton';
import { CCard, CCardBody, CCardHeader } from '@coreui/react';

import DeviceJobDevicesDataTable from '../DeviceJobDevicesDataTable/DeviceJobDevicesDataTable';

const DeviceJobDevicesCard = ({deviceGroupName, deviceJobDevices}) => {
  return (
    <CCard>
      <CCardHeader>
        {deviceJobDevices?.length || 0} devices under device group: <b>{deviceGroupName || <Skeleton/>}</b>
      </CCardHeader>
      <CCardBody>
        <DeviceJobDevicesDataTable deviceJobDevices={deviceJobDevices}/>
      </CCardBody>
    </CCard>
  );
};

export default DeviceJobDevicesCard;