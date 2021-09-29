/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Toaster } from 'react-hot-toast';
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';

import {
  deleteDeviceJobsStartAsync,
  fetchDeviceJobsStartAsync,
  resetFetchDeviceJobsLazyParams,
  setFetchDeviceJobsLazyParams
} from '../../redux/deviceJob/deviceJob.actions';

import DeviceJobsDataTable from '../../components/DeviceJobsDataTable/DeviceJobsDataTable';
import DeleteDeviceJobsModal from '../../components/DeleteDeviceJobsModal/DeleteDeviceJobsModal';

const ListDeviceJobs = ({
                          history,
                          match,
                          deviceJobs,
                          deviceJobsTotalRecords,
                          isFetchingDeviceJobs,
                          fetchDeviceJobsErrorMessage,
                          fetchDeviceJobsLazyParams,
                          isDeletingDeviceJobs,
                          deleteDeviceJobsErrorMessage,
                          fetchDeviceJobsStartAsync,
                          setFetchDeviceJobsLazyParams,
                          resetFetchDeviceJobsLazyParams,
                          deleteDeviceJobsStartAsync
                        }) => {

  const [showDeleteDeviceJobsModal, setShowDeleteDeviceJobsModal] = useState(false);
  const [selectedDeviceJobs, setSelectedDeviceJobs] = useState(null);

  const confirmDeleteSelectedDeviceJobs = () => {
    setShowDeleteDeviceJobsModal(!showDeleteDeviceJobsModal);
  };

  const deleteSelectedDeviceJobs = () => {
    const selectedDeviceJobIds = selectedDeviceJobs.map(selectedDeviceJob => selectedDeviceJob.id);
    deleteDeviceJobsStartAsync(selectedDeviceJobIds);
    setShowDeleteDeviceJobsModal(!showDeleteDeviceJobsModal);
    setSelectedDeviceJobs(null);
  };

  const leftToolbar = () => {
    return (
      <>
        <Button label="New" icon="pi pi-plus" className="p-button-success mr-2"
                onClick={() => history.push(`${match.url}/create`)}/>
        <Button label="Delete" icon="pi pi-trash" className="p-button-danger mr-2"
                onClick={confirmDeleteSelectedDeviceJobs}
                disabled={!selectedDeviceJobs || !selectedDeviceJobs.length}/>
      </>
    );
  };

  return (
    <>
      <CRow>
        <CCol xs="12" md="12" className="mb-4">
          <CCard>
            <CCardHeader>
              Devices Jobs
            </CCardHeader>
            <CCardBody>
              <Toolbar className="mb-4" left={leftToolbar}/>
              <DeviceJobsDataTable selectedDeviceJobs={selectedDeviceJobs}
                                   setSelectedDeviceJobs={setSelectedDeviceJobs}
                                   deviceJobs={deviceJobs}
                                   deviceJobsTotalRecords={deviceJobsTotalRecords}
                                   isFetchingDeviceJobs={isFetchingDeviceJobs}
                                   fetchDeviceJobsErrorMessage={fetchDeviceJobsErrorMessage}
                                   fetchDeviceJobsLazyParams={fetchDeviceJobsLazyParams}
                                   isDeletingDeviceJobs={isDeletingDeviceJobs}
                                   deleteDeviceJobsErrorMessage={deleteDeviceJobsErrorMessage}
                                   fetchDeviceJobsStartAsync={fetchDeviceJobsStartAsync}
                                   setFetchDeviceJobsLazyParams={setFetchDeviceJobsLazyParams}
                                   resetFetchDeviceJobsLazyParams={resetFetchDeviceJobsLazyParams}
                                   deleteDeviceJobsStartAsync={deleteDeviceJobsStartAsync}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      {showDeleteDeviceJobsModal &&
      <DeleteDeviceJobsModal show={showDeleteDeviceJobsModal}
                             onClose={() => setShowDeleteDeviceJobsModal(!showDeleteDeviceJobsModal)}
                             onConfirm={deleteSelectedDeviceJobs}
      />}
      <Toaster/>
    </>
  );
};

const mapStateToProps = state => ({
  deviceJobs: state.deviceJob.deviceJobs,
  deviceJobsTotalRecords: state.deviceJob.deviceJobsTotalRecords,
  isFetchingDeviceJobs: state.deviceJob.isFetchingDeviceJobs,
  fetchDeviceJobsErrorMessage: state.deviceJob.fetchDeviceJobsErrorMessage,
  fetchDeviceJobsLazyParams: state.deviceJob.fetchDeviceJobsLazyParams,
  isDeletingDeviceJobs: state.deviceJob.isDeletingDeviceJobs,
  deleteDeviceJobsErrorMessage: state.deviceJob.deleteDeviceJobsErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  fetchDeviceJobsStartAsync: (lazyParams) => dispatch(fetchDeviceJobsStartAsync(lazyParams)),
  setFetchDeviceJobsLazyParams: (lazyParams) => dispatch(setFetchDeviceJobsLazyParams(lazyParams)),
  resetFetchDeviceJobsLazyParams: () => dispatch(resetFetchDeviceJobsLazyParams()),
  deleteDeviceJobsStartAsync: (ids, history) => dispatch(deleteDeviceJobsStartAsync(ids, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListDeviceJobs);
