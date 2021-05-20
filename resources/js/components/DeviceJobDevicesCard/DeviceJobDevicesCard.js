import React from 'react';

import { CCard, CCardBody, CCardHeader } from '@coreui/react';

import DeviceJobDevicesDataTable from '../DeviceJobDevicesDataTable/DeviceJobDevicesDataTable';


const DeviceJobDevicesCard = ({deviceGroupName, deviceGroupDevices, deviceStatuses}) => {
  return (
    <CCard>
      <CCardHeader>
        {deviceGroupDevices?.length || 0} devices under device group: <b>{deviceGroupName}</b>
      </CCardHeader>
      <CCardBody>
        <DeviceJobDevicesDataTable deviceJobDevices={deviceGroupDevices} deviceStatuses={deviceStatuses}/>
      </CCardBody>
    </CCard>
  );
};

export default DeviceJobDevicesCard;