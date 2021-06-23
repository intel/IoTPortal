import React from 'react';

import { CCol, CContainer, CRow } from '@coreui/react';
import CIcon from '@coreui/icons-react';

const PageError = ({errorMessage}) => {
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <div className="clearfix text-center">
              <CIcon size="5xl" name="cil-warning"/>
              <h4 className="pt-3">Oops! Something went wrong.</h4>
              <p className="text-muted">
                Sorry, this page isn't available. The link you followed may be broken or the page may have been removed.
              </p>
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default PageError;
