/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Toaster } from 'react-hot-toast';
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';

import { deleteDeviceGroupsStartAsync } from '../../redux/deviceGroup/deviceGroup.actions';

import DeviceGroupsDataTable from '../../containers/DeviceGroupsDataTable/DeviceGroupsDataTable';
import DeleteDeviceGroupsModal from '../../components/DeleteDeviceGroupsModal/DeleteDeviceGroupsModal';

const ListDeviceGroups = ({
                            history,
                            match,
                            isDeletingDeviceGroups,
                            deleteDeviceGroupsErrorMessage,
                            deleteDeviceGroupsStartAsync
                          }) => {

  const [showDeleteDeviceGroupsModal, setShowDeleteDeviceGroupsModal] = useState(false);
  const [selectedDeviceGroups, setSelectedDeviceGroups] = useState(null);

  const confirmDeleteSelectedDeviceGroups = () => {
    setShowDeleteDeviceGroupsModal(!showDeleteDeviceGroupsModal);
  };

  const deleteSelectedDeviceGroups = () => {
    const selectedDeviceGroupIds = selectedDeviceGroups.map(selectedDeviceGroup => selectedDeviceGroup.id);
    deleteDeviceGroupsStartAsync(selectedDeviceGroupIds);
    setShowDeleteDeviceGroupsModal(!showDeleteDeviceGroupsModal);
    setSelectedDeviceGroups(null);
  };

  const leftToolbar = () => {
    return (
      <>
        <Button label="New" icon="pi pi-plus" className="p-button-success mr-2"
                onClick={() => history.push(`${match.url}/create`)}/>
        <Button label="Delete" icon="pi pi-trash" className="p-button-danger mr-2"
                onClick={confirmDeleteSelectedDeviceGroups}
                disabled={!selectedDeviceGroups || !selectedDeviceGroups.length}/>
      </>
    );
  };

  return (
    <>
      <CRow>
        <CCol xs="12" md="12" className="mb-4">
          <CCard>
            <CCardHeader>
              Device Groups
            </CCardHeader>
            <CCardBody>
              <Toolbar className="mb-4" left={leftToolbar}/>
              <DeviceGroupsDataTable selectedDeviceGroups={selectedDeviceGroups}
                                     setSelectedDeviceGroups={setSelectedDeviceGroups}/>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      {showDeleteDeviceGroupsModal &&
      <DeleteDeviceGroupsModal show={showDeleteDeviceGroupsModal}
                               onClose={() => setShowDeleteDeviceGroupsModal(!showDeleteDeviceGroupsModal)}
                               onConfirm={deleteSelectedDeviceGroups}/>}
      <Toaster/>
    </>
  );
};

const mapStateToProps = state => ({
  isDeletingDeviceGroups: state.deviceGroup.isDeletingDeviceGroups,
  deleteDeviceGroupsErrorMessage: state.deviceGroup.deleteDeviceGroupsErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  deleteDeviceGroupsStartAsync: (ids, history) => dispatch(deleteDeviceGroupsStartAsync(ids, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListDeviceGroups);
