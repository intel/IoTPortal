import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Toaster } from 'react-hot-toast';
import CIcon from '@coreui/icons-react';
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react';
import { Skeleton } from 'primereact/skeleton';

import { fetchDeviceJobStartAsync } from '../../redux/deviceJob/deviceJob.actions';

import {
  selectDeviceJob,
  selectDeviceJobCompletedAt,
  selectDeviceJobCompletedPercentage,
  selectDeviceJobDevicesWithStatus,
  selectDeviceJobDurationInMs,
  selectDeviceJobFailedDevicesCount,
  selectDeviceJobPendingDevicesCount,
  selectDeviceJobProcessingDevicesCount,
  selectDeviceJobStartedAt,
  selectDeviceJobSuccessfulDevicesCount,
  selectFetchDeviceJobErrorMessage,
} from '../../redux/deviceJob/deviceJob.selectors';

import DeviceJobDetailsCard from '../../components/DeviceJobDetailsCard/DeviceJobDetailsCard';
import Error from '../../components/Error/Error';
import DeviceJobStatusCard from '../../containers/DeviceJobStatusCard/DeviceJobStatusCard';
import DeviceJobDevicesCard from '../../components/DeviceJobDevicesCard/DeviceJobDevicesCard';

const ViewDeviceJob = (props) => {

  const deviceJobUniqueId = props.match.params.id;
  const {
    history,
    match,
    deviceJob,
    fetchDeviceJobErrorMessage,
    deviceJobDevicesWithStatus,
    completedPercentage,
    successfulDevicesCount,
    failedDevicesCount,
    processingDevicesCount,
    pendingDevicesCount,
    startedAt,
    completedAt,
    durationInMs,
    fetchDeviceJobStartAsync,
  } = props;

  useEffect(() => {
    fetchDeviceJobStartAsync(deviceJobUniqueId);
  }, []);

  if (fetchDeviceJobErrorMessage) {
    return (<Error errorMessage={fetchDeviceJobErrorMessage}/>);
  }

  return (
    <>
      <CRow>
        <CCol xs="12" md="12" className="mb-4">
          <CCard>
            <CCardHeader>
              <CRow>
                <CCol className="mb-3" lg="12">
                  <div className="d-flex">
                    <div className="m-4">
                      <CIcon name='cilCalendarCheck' size="4xl"/>
                    </div>
                    <div className="flex-grow-1 my-auto">
                      <h2>{deviceJob?.name || <Skeleton/>}</h2>
                      <small>ID: {deviceJob?.unique_id || <Skeleton/>}</small><br/>
                    </div>
                  </div>
                </CCol>
              </CRow>
            </CCardHeader>
            <CCardBody>
              <DeviceJobDetailsCard deviceGroupName={deviceJob?.device_group?.name}
                                    savedCommandName={deviceJob?.saved_command?.name}
                                    commandName={deviceJob?.saved_command?.command_name}
                                    payload={deviceJob?.saved_command?.payload}/>
              <DeviceJobStatusCard completedPercentage={completedPercentage}
                                   successfulDevicesCount={successfulDevicesCount}
                                   failedDevicesCount={failedDevicesCount}
                                   processingDevicesCount={processingDevicesCount}
                                   pendingDevicesCount={pendingDevicesCount} startedAt={startedAt}
                                   completedAt={completedAt} durationInMs={durationInMs}/>
              <DeviceJobDevicesCard deviceGroupName={deviceJob?.device_group?.name}
                                    deviceJobDevices={deviceJobDevicesWithStatus}/>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <Toaster/>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  deviceJob: selectDeviceJob,
  fetchDeviceJobErrorMessage: selectFetchDeviceJobErrorMessage,
  deviceJobDevicesWithStatus: selectDeviceJobDevicesWithStatus,
  completedPercentage: selectDeviceJobCompletedPercentage,
  successfulDevicesCount: selectDeviceJobSuccessfulDevicesCount,
  failedDevicesCount: selectDeviceJobFailedDevicesCount,
  processingDevicesCount: selectDeviceJobProcessingDevicesCount,
  pendingDevicesCount: selectDeviceJobPendingDevicesCount,
  startedAt: selectDeviceJobStartedAt,
  completedAt: selectDeviceJobCompletedAt,
  durationInMs: selectDeviceJobDurationInMs,
});

const mapDispatchToProps = dispatch => ({
  fetchDeviceJobStartAsync: (id) => dispatch(fetchDeviceJobStartAsync(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewDeviceJob);
