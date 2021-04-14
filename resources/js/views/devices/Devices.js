import React from 'react'

import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'

import DevicesCard from '../../containers/DevicesCard/DevicesCard';

const Devices = () => {

  return (
    <CRow>
      <CCol xs="12" md="12" className="mb-4">
        <CCard>
          <CCardHeader>
            Devices
          </CCardHeader>
          <CCardBody>
            <DevicesCard/>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Devices;
