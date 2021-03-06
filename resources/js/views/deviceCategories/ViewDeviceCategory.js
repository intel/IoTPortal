/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import CIcon from '@coreui/icons-react';
import { CButton, CButtonGroup, CCard, CCardHeader, CCol, CRow } from '@coreui/react';
import { Toaster } from 'react-hot-toast';

import {
  deleteDeviceCategoriesStartAsync,
  fetchDeviceCategoryStartAsync
} from '../../redux/deviceCategory/deviceCategory.actions';

import ContentError from '../../components/ContentError/ContentError';
import CardSkeleton from '../../components/CardSkeleton/CardSkeleton';
import DeleteDeviceCategoryModal from '../../components/DeleteDeviceCategoryModal/DeleteDeviceCategoryModal';

const ViewDeviceCategory = (props) => {

  const deviceCategoryUniqueId = props.match.params.id;
  const {
    history,
    match,
    deviceCategory,
    isFetchingDeviceCategory,
    fetchDeviceCategoryErrorMessage,
    fetchDeviceCategoryStartAsync,
    deleteDeviceCategoriesStartAsync,
  } = props;

  const [showDeleteDeviceCategoryModal, setShowDeleteDeviceCategoryModal] = useState(false);

  useEffect(() => {
    fetchDeviceCategoryStartAsync(deviceCategoryUniqueId);
  }, [])

  const deleteDeviceCategory = () => {
    deleteDeviceCategoriesStartAsync([deviceCategory.id], history);
    setShowDeleteDeviceCategoryModal(!showDeleteDeviceCategoryModal);
  };

  if (isFetchingDeviceCategory) {
    return (<CardSkeleton/>);
  } else if (fetchDeviceCategoryErrorMessage) {
    return (<ContentError errorMessage={fetchDeviceCategoryErrorMessage}/>);
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
                      <CIcon name='cilLibraryAdd' size="4xl"/>
                    </div>
                    <div className="flex-grow-1 overflow-hidden my-auto">
                      <h2>{deviceCategory.name}</h2>
                      <small>ID: {deviceCategory.unique_id}</small><br/>
                    </div>
                  </div>
                </CCol>
                <CCol className="my-auto" lg="12" xl="3">
                  <div className="d-flex justify-content-center">
                    <CButtonGroup>
                      <CButton color="primary" onClick={() => history.push(`${match.url}/edit`)}> Edit</CButton>
                      <CButton color="danger"
                               onClick={() => setShowDeleteDeviceCategoryModal(!showDeleteDeviceCategoryModal)}> Delete</CButton>
                    </CButtonGroup>
                  </div>
                </CCol>
              </CRow>
            </CCardHeader>
          </CCard>
        </CCol>
      </CRow>
      {showDeleteDeviceCategoryModal &&
      <DeleteDeviceCategoryModal deviceCategory={deviceCategory} show={showDeleteDeviceCategoryModal}
                                 onClose={() => setShowDeleteDeviceCategoryModal(!showDeleteDeviceCategoryModal)}
                                 onConfirm={deleteDeviceCategory}
      />}
      <Toaster/>
    </>
  )
};

const mapStateToProps = state => ({
  deviceCategory: state.deviceCategory.deviceCategory,
  isFetchingDeviceCategory: state.deviceCategory.isFetchingDeviceCategory,
  fetchDeviceCategoryErrorMessage: state.deviceCategory.fetchDeviceCategoryErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  fetchDeviceCategoryStartAsync: (deviceCategoryUniqueId) => dispatch(fetchDeviceCategoryStartAsync(deviceCategoryUniqueId)),
  deleteDeviceCategoriesStartAsync: (ids, history) => dispatch(deleteDeviceCategoriesStartAsync(ids, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewDeviceCategory);
