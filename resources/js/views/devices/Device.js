import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Toaster } from 'react-hot-toast';

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
import { submitShutdownStartAsync } from '../../redux/shutdown/shutdown.actions'
import { submitRebootStartAsync } from '../../redux/reboot/reboot.actions'
import { submitDecommissionStartAsync } from '../../redux/decommission/decommission.actions'

import AotaCard from '../../components/AotaCard/AotaCard';
import FotaCard from '../../components/FotaCard/FotaCard';
import SotaCard from '../../components/SotaCard/SotaCard';
import CotaCard from '../../components/CotaCard/CotaCard';
import DevicePropertyCard from '../../components/DevicePropertyCard/DevicePropertyCard';
import Spinner from '../../components/Spinner/Spinner';
import Modal from '../../components/Modal/Modal';


const Device = (props) => {

  const deviceId = props.match.params.id;
  const {
    device,
    isFetchingDevice,
    isSubmittingShutdown,
    isSubmittingReboot,
    isSubmittingDecommission,
    fetchDeviceStartAsync,
    submitShutdownStartAsync,
    submitRebootStartAsync,
    submitDecommissionStartAsync
  } = props;

  const [showShutdownModal, setShowShutdownModal] = useState(false);
  const [showRebootModal, setShowRebootModal] = useState(false);
  const [showDecommissionModal, setShowDecommissionModal] = useState(false);

  useEffect(() => {
    fetchDeviceStartAsync(deviceId);
  }, [])

  const confirmShutdown = () => {
    setShowShutdownModal(!showShutdownModal);
    submitShutdownStartAsync(deviceId);
  }

  const confirmReboot = () => {
    setShowRebootModal(!showRebootModal);
    submitRebootStartAsync(deviceId);
  }

  const confirmDecommission = () => {
    setShowDecommissionModal(!showDecommissionModal);
    submitDecommissionStartAsync(deviceId);
  }

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
                      <CButton color="danger" onClick={() => setShowShutdownModal(true)}
                               disabled={isSubmittingShutdown}>{isSubmittingShutdown ? 'Shutting down' : 'Shut down'}</CButton>
                      <CButton color="info" onClick={() => setShowRebootModal(true)}
                               disabled={isSubmittingReboot}>{isSubmittingReboot ? 'Rebooting' : 'Reboot'}</CButton>
                      <CButton color="primary" onClick={() => setShowDecommissionModal(true)}
                               disabled={isSubmittingDecommission}>{isSubmittingDecommission ? 'Decommissioning' : 'Decommission'}</CButton>
                    </CButtonGroup>
                  </div>
                  <Modal show={showShutdownModal}
                         modalTitle="Confirm Shut Down Device"
                         modalMessage="Do you confirm to shut down this device?"
                         onClose={() => setShowShutdownModal(!showShutdownModal)}
                         onConfirm={confirmShutdown}
                  />
                  <Modal show={showRebootModal}
                         modalTitle="Confirm Reboot Device"
                         modalMessage="Do you confirm to reboot this device?"
                         onClose={() => setShowRebootModal(!showRebootModal)}
                         onConfirm={confirmReboot}
                  />
                  <Modal show={showDecommissionModal}
                         modalTitle="Confirm Decommission Device"
                         modalMessage="Do you confirm to decommission this device?"
                         onClose={() => setShowDecommissionModal(!showDecommissionModal)}
                         onConfirm={confirmDecommission}
                  />
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
                    <AotaCard deviceId={deviceId}/>
                  </CTabPane>
                  <CTabPane className="m-3" data-tab="fota">
                    <FotaCard deviceId={deviceId}/>
                  </CTabPane>
                  <CTabPane className="m-3" data-tab="sota">
                    <SotaCard deviceId={deviceId}/>
                  </CTabPane>
                  <CTabPane className="m-3" data-tab="cota">
                    <CotaCard deviceId={deviceId}/>
                  </CTabPane>
                </CTabContent>
              </CTabs>
            </CCardBody>
          </CCard>
        </CCol>
        <Toaster/>
      </CRow>
    )
}

const mapStateToProps = state => ({
  device: state.device.device,
  isFetchingDevice: state.device.isFetchingDevice,
  isSubmittingShutdown: state.shutdown.isSubmittingShutdown,
  isSubmittingReboot: state.reboot.isSubmittingReboot,
  isSubmittingDecommission: state.decommission.isSubmittingDecommission,
});

const mapDispatchToProps = dispatch => ({
  fetchDeviceStartAsync: (id) => dispatch(fetchDeviceStartAsync(id)),
  submitShutdownStartAsync: (id) => dispatch(submitShutdownStartAsync(id)),
  submitRebootStartAsync: (id) => dispatch(submitRebootStartAsync(id)),
  submitDecommissionStartAsync: (id) => dispatch(submitDecommissionStartAsync(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Device);
