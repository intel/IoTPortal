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

import { deleteDeviceCategoriesStartAsync } from '../../redux/deviceCategory/deviceCategory.actions';

import DeviceCategoriesDataTable from '../../containers/DeviceCategoriesDataTable/DeviceCategoriesDataTable';
import DeleteDeviceCategoriesModal from '../../components/DeleteDeviceCategoriesModal/DeleteDeviceCategoriesModal';

const ListDeviceCategories = ({
                                history,
                                match,
                                isDeletingDeviceCategories,
                                deleteDeviceCategoriesErrorMessage,
                                deleteDeviceCategoriesStartAsync
                              }) => {

  const [showDeleteDeviceCategoriesModal, setShowDeleteDeviceCategoriesModal] = useState(false);
  const [selectedDeviceCategories, setSelectedDeviceCategories] = useState(null);

  const confirmDeleteSelectedDeviceCategories = () => {
    setShowDeleteDeviceCategoriesModal(!showDeleteDeviceCategoriesModal);
  };

  const deleteSelectedDeviceCategories = () => {
    const selectedDeviceCategoryIds = selectedDeviceCategories.map(selectedDeviceCategory => selectedDeviceCategory.id);
    deleteDeviceCategoriesStartAsync(selectedDeviceCategoryIds);
    setShowDeleteDeviceCategoriesModal(!showDeleteDeviceCategoriesModal);
    setSelectedDeviceCategories(null);
  };

  const leftToolbar = () => {
    return (
      <>
        <Button label="New" icon="pi pi-plus" className="p-button-success mr-2"
                onClick={() => history.push(`${match.url}/create`)}/>
        <Button label="Delete" icon="pi pi-trash" className="p-button-danger mr-2"
                onClick={confirmDeleteSelectedDeviceCategories}
                disabled={!selectedDeviceCategories || !selectedDeviceCategories.length}/>
      </>
    );
  };

  return (
    <>
      <CRow>
        <CCol xs="12" md="12" className="mb-4">
          <CCard>
            <CCardHeader>
              Devices Categories
            </CCardHeader>
            <CCardBody>
              <Toolbar className="mb-4" left={leftToolbar}/>
              <DeviceCategoriesDataTable selectedDeviceCategories={selectedDeviceCategories}
                                         setSelectedDeviceCategories={setSelectedDeviceCategories}/>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      {showDeleteDeviceCategoriesModal &&
      <DeleteDeviceCategoriesModal show={showDeleteDeviceCategoriesModal}
                                   onClose={() => setShowDeleteDeviceCategoriesModal(!showDeleteDeviceCategoriesModal)}
                                   onConfirm={deleteSelectedDeviceCategories}
      />}
      <Toaster/>
    </>
  );
};

const mapStateToProps = state => ({
  isDeletingDeviceCategories: state.deviceCategory.isDeletingDeviceCategories,
  deleteDeviceCategoriesErrorMessage: state.deviceCategory.deleteDeviceCategoriesErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  deleteDeviceCategoriesStartAsync: (ids, history) => dispatch(deleteDeviceCategoriesStartAsync(ids, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListDeviceCategories);
