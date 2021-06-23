import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import {
  CBadge,
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
  CSpinner,
  CTabContent,
  CTabPane,
  CTabs
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { Toaster } from 'react-hot-toast';

import { DEVICE_VIEW_TAB_OPTIONS } from '../../data/options';
import { stripStringAfterLastSlash } from '../../utils/utils';
import { fetchDeviceStartAsync, updateDeviceStartAsync } from '../../redux/device/device.actions';
import { submitShutdownStartAsync } from '../../redux/shutdown/shutdown.actions';
import { submitRebootStartAsync } from '../../redux/reboot/reboot.actions';
import { submitDecommissionStartAsync } from '../../redux/decommission/decommission.actions';

import EditableText from '../../components/EditableText/EditableText';
import CardSkeleton from '../../components/CardSkeleton/CardSkeleton';
import DevicePropertyCard from '../../components/DevicePropertyCard/DevicePropertyCard';
import MetricsCard from '../../components/MetricsCard/MetricsCard';
import CommandHistoriesDataTable from '../../containers/CommandHistoriesDataTable/CommandHistoriesDataTable';
import EventHistoriesDataTable from '../../containers/EventHistoriesDataTable/EventHistoriesDataTable';
import RebootDeviceModal from '../../components/RebootDeviceModal/RebootDeviceModal';
import ShutDownDeviceModal from '../../components/ShutDownDeviceModal/ShutDownDeviceModal';
import DecommissionDeviceModal from '../../components/DecommissionDeviceModal/DecommissionDeviceModal';
import SubmitAotaCardForm from '../../containers/SubmitAotaCardForm/SubmitAotaCardForm';
import SubmitFotaCardForm from '../../containers/SubmitFotaCardForm/SubmitFotaCardForm';
import SubmitSotaCardForm from '../../containers/SubmitSotaCardForm/SubmitSotaCardForm';
import SubmitCotaCardForm from '../../containers/SubmitCotaCardForm/SubmitCotaCardForm';
import ConnectDeviceModal from '../../components/ConnectDeviceModal/ConnectDeviceModal';
import ContentError from '../../components/ContentError/ContentError';

const ViewDevice = (props) => {

  const deviceUniqueId = props.match.params.id;
  const activeTab = props.match.params.tab;
  const {
    history,
    match,
    device,
    isFetchingDevice,
    fetchDeviceErrorMessage,
    isSubmittingShutdown,
    isSubmittingReboot,
    isSubmittingDecommission,
    fetchDeviceStartAsync,
    updateDeviceStartAsync,
    submitShutdownStartAsync,
    submitRebootStartAsync,
    submitDecommissionStartAsync,
  } = props;

  const [showConnectDeviceModal, setShowConnectDeviceModal] = useState(false);
  const [showShutdownModal, setShowShutdownModal] = useState(false);
  const [showRebootModal, setShowRebootModal] = useState(false);
  const [showDecommissionModal, setShowDecommissionModal] = useState(false);

  const DEFAULT_ACTIVE_TAB = 'overview';

  useEffect(() => {
    if (!activeTab) {
      history.push(`${match.url}/${DEFAULT_ACTIVE_TAB}`);
    }
    if (activeTab && !DEVICE_VIEW_TAB_OPTIONS.includes(activeTab)) {
      history.push(`${stripStringAfterLastSlash(match.url)}${DEFAULT_ACTIVE_TAB}`);
    }
    fetchDeviceStartAsync(deviceUniqueId);
  }, []);

  const handleNavChange = (tab) => {
    history.push(`${stripStringAfterLastSlash(match.url)}${tab}`);
  };

  const confirmShutdown = () => {
    setShowShutdownModal(!showShutdownModal);
    submitShutdownStartAsync(deviceUniqueId);
  }

  const confirmReboot = () => {
    setShowRebootModal(!showRebootModal);
    submitRebootStartAsync(deviceUniqueId);
  }

  const confirmDecommission = () => {
    setShowDecommissionModal(!showDecommissionModal);
    submitDecommissionStartAsync(deviceUniqueId);
  }

  if (isFetchingDevice) {
    return (<CardSkeleton/>);
  } else if (fetchDeviceErrorMessage) {
    return (<ContentError errorMessage={fetchDeviceErrorMessage}/>);
  }

  return (
    <>
      <CRow>
        <CCol xs="12" md="12" className="mb-4">
          <CCard>
            <CCardHeader>
              <CRow>
                <CCol className="mb-3" lg="12" xl="7">
                  <div className="d-flex">
                    <div className="m-4">
                      <CIcon name='cilDevices' size="4xl"/>
                    </div>
                    <div className="flex-grow-1 overflow-hidden my-auto">
                      <EditableText style={{minHeight: '48px'}} tag="h2" value={device.name} maxLength="255"
                                    updateFunction={(value) => updateDeviceStartAsync(deviceUniqueId, {name: value})}/>
                      <small>ID: {device.unique_id}</small><br/>
                      <div className="mt-2">
                        <CBadge color="secondary" className="font-lg mr-2">{device.device_status.name}</CBadge>
                        <CBadge color="primary" className="font-lg">{device.device_category.name}</CBadge>
                      </div>
                    </div>
                  </div>
                </CCol>
                <CCol className="my-auto" lg="12" xl="5">
                  <div className="d-flex justify-content-center">
                    <CButtonGroup>
                      <CButton color="dark" onClick={() => setShowConnectDeviceModal(true)}>
                        Connect
                      </CButton>
                      <CButton color="danger" onClick={() => setShowShutdownModal(true)}
                               disabled={isSubmittingShutdown}>{isSubmittingShutdown &&
                      <CSpinner color="white" size="sm"/>} Shut down</CButton>
                      <CButton color="info" onClick={() => setShowRebootModal(true)}
                               disabled={isSubmittingReboot}>{isSubmittingReboot &&
                      <CSpinner color="white" size="sm"/>} Reboot</CButton>
                      <CButton color="primary" onClick={() => setShowDecommissionModal(true)}
                               disabled={isSubmittingDecommission}>{isSubmittingDecommission &&
                      <CSpinner color="white" size="sm"/>} Decommission</CButton>
                    </CButtonGroup>
                  </div>
                </CCol>
              </CRow>
            </CCardHeader>
            <CCardBody>
              <CTabs activeTab={activeTab}>
                <CNav variant="tabs">
                  <CNavItem>
                    <CNavLink data-tab="overview" onClick={() => handleNavChange('overview')}>
                      Overview
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink data-tab="metrics" onClick={() => handleNavChange('metrics')}>
                      Metrics
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink data-tab="aota" onClick={() => handleNavChange('aota')}>
                      Application OTA Update
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink data-tab="fota" onClick={() => handleNavChange('fota')}>
                      Firmware OTA Update
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink data-tab="sota" onClick={() => handleNavChange('sota')}>
                      Software OTA Update
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink data-tab="cota" onClick={() => handleNavChange('cota')}>
                      Configuration OTA Update
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink data-tab="command-histories" onClick={() => handleNavChange('command-histories')}>
                      Command Histories
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink data-tab="event-histories" onClick={() => handleNavChange('event-histories')}>
                      Event Histories
                    </CNavLink>
                  </CNavItem>
                </CNav>
                <CTabContent>
                  <CTabPane className="m-3" data-tab="overview">
                    {activeTab === 'overview' && <DevicePropertyCard device={device}/>}
                  </CTabPane>
                  <CTabPane className="m-3" data-tab="metrics">
                    {activeTab === 'metrics' && <MetricsCard deviceUniqueId={deviceUniqueId}/>}
                  </CTabPane>
                  <CTabPane className="m-3" data-tab="aota">
                    {activeTab === 'aota' && <SubmitAotaCardForm deviceUniqueId={deviceUniqueId}/>}
                  </CTabPane>
                  <CTabPane className="m-3" data-tab="fota">
                    {activeTab === 'fota' && <SubmitFotaCardForm deviceUniqueId={deviceUniqueId}/>}
                  </CTabPane>
                  <CTabPane className="m-3" data-tab="sota">
                    {activeTab === 'sota' && <SubmitSotaCardForm deviceUniqueId={deviceUniqueId}/>}
                  </CTabPane>
                  <CTabPane className="m-3" data-tab="cota">
                    {activeTab === 'cota' && <SubmitCotaCardForm deviceUniqueId={deviceUniqueId}/>}
                  </CTabPane>
                  <CTabPane className="m-3" data-tab="command-histories">
                    {activeTab === 'command-histories' && <CommandHistoriesDataTable deviceUniqueId={deviceUniqueId}/>}
                  </CTabPane>
                  <CTabPane className="m-3" data-tab="event-histories">
                    {activeTab === 'event-histories' && <EventHistoriesDataTable deviceUniqueId={deviceUniqueId}/>}
                  </CTabPane>
                </CTabContent>
              </CTabs>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      {showConnectDeviceModal &&
      <ConnectDeviceModal device={device} show={showConnectDeviceModal}
                          onClose={() => setShowConnectDeviceModal(!showConnectDeviceModal)}
      />}
      {showShutdownModal &&
      <ShutDownDeviceModal show={showShutdownModal} onClose={() => setShowShutdownModal(!showShutdownModal)}
                           onConfirm={confirmShutdown}
      />}
      {showRebootModal &&
      <RebootDeviceModal show={showRebootModal} onClose={() => setShowRebootModal(!showRebootModal)}
                         onConfirm={confirmReboot}
      />}
      {showDecommissionModal &&
      <DecommissionDeviceModal show={showDecommissionModal}
                               onClose={() => setShowDecommissionModal(!showDecommissionModal)}
                               onConfirm={confirmDecommission}
      />}
      <Toaster/>
    </>
  );
};

const mapStateToProps = state => ({
  device: state.device.device,
  isFetchingDevice: state.device.isFetchingDevice,
  fetchDeviceErrorMessage: state.device.fetchDeviceErrorMessage,
  isUpdatingDevice: state.device.isUpdatingDevice,
  updateDeviceErrorMessage: state.device.updateDeviceErrorMessage,
  isSubmittingShutdown: state.shutdown.isSubmittingShutdown,
  isSubmittingReboot: state.reboot.isSubmittingReboot,
  isSubmittingDecommission: state.decommission.isSubmittingDecommission,
});

const mapDispatchToProps = dispatch => ({
  fetchDeviceStartAsync: (deviceUniqueId) => dispatch(fetchDeviceStartAsync(deviceUniqueId)),
  updateDeviceStartAsync: (deviceUniqueId, params) => dispatch(updateDeviceStartAsync(deviceUniqueId, params)),
  submitShutdownStartAsync: (deviceUniqueId) => dispatch(submitShutdownStartAsync(deviceUniqueId)),
  submitRebootStartAsync: (deviceUniqueId) => dispatch(submitRebootStartAsync(deviceUniqueId)),
  submitDecommissionStartAsync: (deviceUniqueId) => dispatch(submitDecommissionStartAsync(deviceUniqueId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewDevice);