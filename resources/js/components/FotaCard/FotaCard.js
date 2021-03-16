import React, { useState } from 'react'
import {
  CCol,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CTabContent,
  CTabPane,
  CCard,
  CCardBody,
  CTabs,
  CCardHeader,
  CButtonGroup,
  CButton, CDataTable, CBadge, CFormGroup, CLabel, CInput, CCardFooter, CSpinner
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { submitAotaStartAsync } from '../../redux/aota/aota.actions';

const FotaCard = () => {
  return(
    <CCard>
      <CCardHeader>
        Firmware OTA Update
      </CCardHeader>
      <CCardBody>
        <CFormGroup>
          <CLabel htmlFor="bios_version">BIOS Version</CLabel>
          <CInput id="bios_version" placeholder="Enter BIOS version" />
        </CFormGroup>
        <CFormGroup>
          <CLabel htmlFor="fetch">Fetch</CLabel>
          <CInput id="fetch" placeholder="Fetch" />
        </CFormGroup>
        <CFormGroup>
          <CLabel htmlFor="manufacturer">Manufacturer</CLabel>
          <CInput id="manufacturer" placeholder="Manufacturer" />
        </CFormGroup>
        <CFormGroup>
          <CLabel htmlFor="path">Path</CLabel>
          <CInput id="path" placeholder="Path" />
        </CFormGroup>
        <CFormGroup>
          <CLabel htmlFor="product">Product</CLabel>
          <CInput id="product" placeholder="Product" />
        </CFormGroup>
        <CFormGroup>
          <CLabel htmlFor="release_date">Release Date</CLabel>
          <CInput id="release_date" placeholder="Release Date" />
        </CFormGroup>
        <CFormGroup>
          <CLabel htmlFor="signature">Signature</CLabel>
          <CInput id="signature" placeholder="Signature" />
        </CFormGroup>
        <CFormGroup>
          <CLabel htmlFor="tool_options">Tool Options</CLabel>
          <CInput id="tool_options" placeholder="Tool Options" />
        </CFormGroup>
        <CFormGroup>
          <CLabel htmlFor="vendor">Vendor</CLabel>
          <CInput id="vendor" placeholder="Vendor" />
        </CFormGroup>
        <CFormGroup>
          <CLabel htmlFor="server_username">Server Username</CLabel>
          <CInput id="server_username" placeholder="Server Username" />
        </CFormGroup>
        <CFormGroup>
          <CLabel htmlFor="server_password">Server Password</CLabel>
          <CInput id="server_password" placeholder="Server Password" />
        </CFormGroup>
      </CCardBody>
      {/*<CCardFooter>*/}
      {/*  <CButton type="submit" size="sm" color="primary" onClick={handleSubmit} disabled={isSubmittingAota}>*/}
      {/*    {isSubmittingAota ? <CSpinner color="white" size="sm"/> : <CIcon name="cil-scrubber"/>} Submit*/}
      {/*  </CButton>*/}
      {/*  <CButton type="reset" size="sm" color="danger" className="ml-3" onClick={handleReset} disabled={isSubmittingAota}>*/}
      {/*    <CIcon name="cil-ban"/> Reset*/}
      {/*  </CButton>*/}
      {/*</CCardFooter>*/}
    </CCard>
  )
}

// const mapStateToProps = state => ({
//   isSubmittingAota: state.aota.isSubmittingAota
// });
//
// const mapDispatchToPros = dispatch => ({
//   submitAotaStartAsync: (id, data) => dispatch(submitAotaStartAsync(id, data))
// });


export default FotaCard