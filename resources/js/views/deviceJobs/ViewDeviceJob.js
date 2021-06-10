import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Toaster } from 'react-hot-toast';
import CIcon from '@coreui/icons-react';
import { CButton, CButtonGroup, CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react';
import { Skeleton } from 'primereact/skeleton';

import {
  deleteDeviceJobsStartAsync,
  fetchDeviceJobStartAsync,
  pollFetchDeviceJobStop
} from '../../redux/deviceJob/deviceJob.actions';

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
import DeleteDeviceJobModal from '../../components/DeleteDeviceJobModal/DeleteDeviceJobModal';

const ViewDeviceJob = (props) => {

  const deviceJobUniqueId = props.match.params.id;
  const {
    history,
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
    deleteDeviceJobsStartAsync,
    pollFetchDeviceJobStop
  } = props;

  const [showDeleteDeviceJobModal, setShowDeleteDeviceJobModal] = useState(false);

  useEffect(() => {
    fetchDeviceJobStartAsync(deviceJobUniqueId);
    return pollFetchDeviceJobStop;
  }, []);

  const deleteDeviceJob = () => {
    deleteDeviceJobsStartAsync([deviceJob.id], history);
    setShowDeleteDeviceJobModal(!showDeleteDeviceJobModal);
  };

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
                <CCol className="mb-3" lg="12" xl="9">
                  <div className="d-flex">
                    <div className="m-4">
                      <CIcon name='cilCalendarCheck' size="4xl"/>
                    </div>
                    <div className="flex-grow-1 my-auto">
                      <h2>{deviceJob?.name || <Skeleton height="2rem"/>}</h2>
                      <small>{deviceJob?.unique_id ? `ID: ${deviceJob?.unique_id}` :
                        <Skeleton width="20rem"/>}</small><br/>
                    </div>
                  </div>
                </CCol>
                <CCol className="my-auto" lg="12" xl="3">
                  <div className="d-flex justify-content-center">
                    <CButtonGroup>
                      <CButton color="danger"
                               onClick={() => setShowDeleteDeviceJobModal(!showDeleteDeviceJobModal)}> Delete</CButton>
                    </CButtonGroup>
                  </div>
                </CCol>
              </CRow>
            </CCardHeader>
            <CCardBody>
              <DeviceJobDetailsCard deviceGroupName={deviceJob?.device_group?.name}
                                    savedCommandName={deviceJob?.saved_command?.name}
                                    commandName={deviceJob?.saved_command?.command_name}
                                    payload={deviceJob?.saved_command?.payload}/>
              <DeviceJobStatusCard deviceJob={deviceJob}
                                   completedPercentage={completedPercentage}
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
      {showDeleteDeviceJobModal &&
      <DeleteDeviceJobModal deviceJob={deviceJob} show={showDeleteDeviceJobModal}
                            onClose={() => setShowDeleteDeviceJobModal(!showDeleteDeviceJobModal)}
                            onConfirm={deleteDeviceJob}
      />}
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
  deleteDeviceJobsStartAsync: (ids, history) => dispatch(deleteDeviceJobsStartAsync(ids, history)),
  pollFetchDeviceJobStop: () => dispatch(pollFetchDeviceJobStop())
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewDeviceJob);
