import React from 'react';

import { CCard, CCardBody, CCardHeader } from '@coreui/react';

import JobDevicesDataTable from '../JobDevicesDataTable/JobDevicesDataTable';


const JobDetailsCard = ({deviceGroupName, deviceGroupDevices}) => {
  return (
    <CCard>
      <CCardHeader>
        {deviceGroupDevices?.length || 0} devices under device group: <b>{deviceGroupName}</b>
      </CCardHeader>
      <CCardBody>
        <JobDevicesDataTable devices={deviceGroupDevices}/>
      </CCardBody>
    </CCard>
  );
};

export default JobDetailsCard;