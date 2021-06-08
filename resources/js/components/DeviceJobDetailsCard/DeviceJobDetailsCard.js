import React from 'react';

import { Skeleton } from 'primereact/skeleton';
import { CCard, CCardBody, CCardHeader, CFormGroup, CLabel } from '@coreui/react';

import PayloadViewer from '../PayloadViewer/PayloadViewer';


const DeviceJobDetailsCard = ({deviceGroupName, savedCommandName, commandName, payload}) => {
  return (
    <CCard>
      <CCardHeader>
        Device job details
      </CCardHeader>
      <CCardBody>
        <CFormGroup>
          <CLabel>
            Device group: <b>{deviceGroupName || <Skeleton/>}</b>
          </CLabel>
        </CFormGroup>
        <CFormGroup>
          <CLabel>
            Saved command: <b>{savedCommandName || <Skeleton/>}</b>
          </CLabel>
        </CFormGroup>
        <CFormGroup>
          <CLabel>
            Command name: <b>{commandName || <Skeleton/>}</b>
          </CLabel>
        </CFormGroup>
        <PayloadViewer payload={payload} isLoading={!payload}/>
      </CCardBody>
    </CCard>
  );
};

export default DeviceJobDetailsCard;