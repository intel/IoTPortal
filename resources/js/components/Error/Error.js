import React from 'react'
import { CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'

const Error = ({errorMessage}) => {
  return (
    <CRow className="justify-content-center">
      <CCol md="6">
        <div className="clearfix text-center mt-5">
          <CIcon size="5xl" name="cil-warning"/>
          <h4 className="pt-3">Oops! Something went wrong.</h4>
          <p className="text-muted">{(errorMessage || 'The resource you are looking for was not found.')}</p>
        </div>
      </CCol>
    </CRow>
  )
}

export default Error;
