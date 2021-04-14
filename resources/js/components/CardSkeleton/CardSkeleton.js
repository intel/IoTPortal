import React from 'react';

import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react';
import { Skeleton } from 'primereact/skeleton';

const CardSkeleton = () => {

  return (
    <CCard>
      <CCardHeader>
        <CRow>
          <CCol className="my-auto" xs="12" md="12" lg="1" xl="1">
            <div className="d-flex justify-content-center">
              <Skeleton size="5rem"/>
            </div>
          </CCol>
          <CCol className="my-auto" xs="12" md="12" lg="11" xl="11">
            <Skeleton className="mb-2"/>
            <Skeleton width="10rem"/>
          </CCol>
        </CRow>
      </CCardHeader>
      <CCardBody>
        <Skeleton className="mb-2"/>
        <Skeleton width="10rem" className="mb-2"/>
        <Skeleton width="5rem" className="mb-2"/>
        <Skeleton height="2rem" className="mb-2"/>
        <Skeleton width="10rem" height="4rem" className="mb-2"/>
      </CCardBody>
    </CCard>
  );
};

export default CardSkeleton;