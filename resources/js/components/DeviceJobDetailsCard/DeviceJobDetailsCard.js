import React from 'react';

import { Skeleton } from 'primereact/skeleton';
import { CCard, CCardBody, CCardHeader, CFormGroup, CLabel } from '@coreui/react';

import PayloadViewer from '../PayloadViewer/PayloadViewer';


const DeviceJobDetailsCard = ({deviceGroupName, savedCommandName, commandName, payload, isLoading}) => {
  return (
    <CCard>
      <CCardHeader>
        Device job details
      </CCardHeader>
      <CCardBody>
        <CFormGroup>
          <CLabel>Device group: <b>{deviceGroupName}</b></CLabel>
        </CFormGroup>
        <CFormGroup>
          <CLabel>
            Saved command: {isLoading ? <Skeleton/> : <b>{savedCommandName}</b>}
          </CLabel>
        </CFormGroup>
        <CFormGroup>
          <CLabel>
            Command name: {isLoading ? <Skeleton/> : <b>{commandName}</b>}
          </CLabel>
        </CFormGroup>
        <PayloadViewer payload={payload} isLoading={isLoading}/>
      </CCardBody>
    </CCard>
  );
};

export default DeviceJobDetailsCard;