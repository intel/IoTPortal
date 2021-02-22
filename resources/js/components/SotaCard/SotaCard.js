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

const SotaCard = () => {
    return(
        <CCard>
            <CCardHeader>
                Software OTA Update
            </CCardHeader>
            <CCardBody>
                <CFormGroup>
                    <CLabel htmlFor="command">Command (update only)</CLabel>
                    <CInput id="command" placeholder="Enter BIOS version" />
                </CFormGroup>
                <CFormGroup>
                    <CLabel htmlFor="fetch">Fetch</CLabel>
                    <CInput id="fetch" placeholder="Fetch" />
                </CFormGroup>
                <CFormGroup>
                    <CLabel htmlFor="log">Log to File (N, Y)</CLabel>
                    <CInput id="log" placeholder="Log to File (N, Y)" />
                </CFormGroup>
                <CFormGroup>
                    <CLabel htmlFor="username">Username</CLabel>
                    <CInput id="username" placeholder="Username" />
                </CFormGroup>
                <CFormGroup>
                    <CLabel htmlFor="password">Password</CLabel>
                    <CInput id="password" placeholder="Password" />
                </CFormGroup>
            </CCardBody>
        </CCard>
    )
}

export default SotaCard