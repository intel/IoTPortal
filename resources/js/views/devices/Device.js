import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import {
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CTabContent,
  CTabPane,
  CTabs
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { fetchDeviceStartAsync } from '../../redux/device/device.actions';

import AotaCard from '../../components/AotaCard/AotaCard';
import FotaCard from '../../components/FotaCard/FotaCard';
import SotaCard from '../../components/SotaCard/SotaCard';
import CotaCard from '../../components/CotaCard/CotaCard';
import DevicePropertyCard from '../../components/DevicePropertyCard/DevicePropertyCard';
import Spinner from '../../components/Spinner/Spinner';

const Device = (props) => {

  const deviceId = props.match.params.id;
  const {device, isFetchingDevice, fetchDeviceStartAsync} = props;

  useEffect(() => {
    fetchDeviceStartAsync(deviceId);
  }, [])

  return isFetchingDevice ?
    (<Spinner/>) :
    (
      <CRow>
        <CCol xs="12" md="12" className="mb-4">
          <CCard>
            <CCardHeader>
              <CRow>
                <CCol className="my-auto" xs="12" md="12" lg="1" xl="1">
                  <div className="d-flex justify-content-center">
                    <CIcon name='cilDevices' size="4xl"/>
                  </div>
                </CCol>
                <CCol className="my-auto" xs="12" md="12" lg="6" xl="7">
                  <h2>{device.name}</h2>
                  <small>ID: {device.unique_id}</small>
                </CCol>
                <CCol className="my-auto" xs="12" md="12" lg="5" xl="4">
                  <div className="d-flex justify-content-center">
                    <CButtonGroup>
                      <CButton color="danger">Shutdown</CButton>
                      <CButton color="info">Reboot</CButton>
                      <CButton color="primary">Decommission</CButton>
                    </CButtonGroup>
                  </div>
                </CCol>
              </CRow>
            </CCardHeader>
            <CCardBody>
              <CTabs activeTab="overview">
                <CNav variant="tabs">
                  <CNavItem>
                    <CNavLink data-tab="overview">
                      Overview
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink data-tab="aota">
                      Application OTA Update
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink data-tab="fota">
                      Firmware OTA Update
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink data-tab="sota">
                      Software OTA Update
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink data-tab="cota">
                      Configuration OTA Update
                    </CNavLink>
                  </CNavItem>
                </CNav>
                <CTabContent>
                  <CTabPane className="m-3" data-tab="overview">
                    <DevicePropertyCard device={device}/>
                  </CTabPane>
                  <CTabPane className="m-3" data-tab="aota">
                    <AotaCard/>
                  </CTabPane>
                  <CTabPane className="m-3" data-tab="fota">
                    <FotaCard/>
                  </CTabPane>
                  <CTabPane className="m-3" data-tab="sota">
                    <SotaCard/>
                  </CTabPane>
                  <CTabPane className="m-3" data-tab="cota">
                    <CotaCard/>
                  </CTabPane>
                </CTabContent>
              </CTabs>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    )
}

const mapStateToProps = state => ({
  device: state.device.device,
  isFetchingDevice: state.device.isFetchingDevice
});

const mapDispatchToProps = dispatch => ({
  fetchDeviceStartAsync: (id) => dispatch(fetchDeviceStartAsync(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Device);
