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
    CButton, CDataTable, CBadge, CFormGroup, CLabel, CInput
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const CotaCard = () => {
    return(
        <CCard>
            <CCardHeader>
                Configuration OTA Update
            </CCardHeader>
            <CCardBody>
                <CFormGroup>
                    <CLabel htmlFor="command">Command (get, load, set, append, remove)</CLabel>
                    <CInput id="command" placeholder="get, load, set, append, remove" />
                </CFormGroup>
                <CFormGroup>
                    <CLabel htmlFor="fetch">Fetch</CLabel>
                    <CInput id="fetch" placeholder="Fetch" />
                </CFormGroup>
                <CFormGroup>
                    <CLabel htmlFor="path">Path</CLabel>
                    <CInput id="path" placeholder="Path" />
                </CFormGroup>
                <CFormGroup>
                    <CLabel htmlFor="signature">Signature</CLabel>
                    <CInput id="signature" placeholder="Signature" />
                </CFormGroup>
            </CCardBody>
        </CCard>
    )
}

export default CotaCard