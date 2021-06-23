import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import CIcon from '@coreui/icons-react';
import { Toaster } from 'react-hot-toast';
import { CButton, CButtonGroup, CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react';

import { deleteDeviceGroupsStartAsync, fetchDeviceGroupStartAsync } from '../../redux/deviceGroup/deviceGroup.actions';

import ContentError from '../../components/ContentError/ContentError';
import CardSkeleton from '../../components/CardSkeleton/CardSkeleton';
import DevicesDataTable from '../../containers/DevicesDataTable/DevicesDataTable';
import DeleteDeviceGroupModal from '../../components/DeleteDeviceGroupModal/DeleteDeviceGroupModal';

const ViewDeviceGroup = (props) => {

  const deviceGroupUniqueId = props.match.params.id;
  const {
    history,
    match,
    deviceGroup,
    isFetchingDeviceGroup,
    fetchDeviceGroupErrorMessage,
    fetchDeviceGroupStartAsync,
    deleteDeviceGroupsStartAsync
  } = props;

  const [showDeleteDeviceGroupModal, setShowDeleteDeviceGroupModal] = useState(false);

  useEffect(() => {
    fetchDeviceGroupStartAsync(deviceGroupUniqueId);
  }, []);

  const deleteDeviceGroup = () => {
    deleteDeviceGroupsStartAsync([deviceGroup.id], history);
    setShowDeleteDeviceGroupModal(!showDeleteDeviceGroupModal);
  };

  if (isFetchingDeviceGroup) {
    return (<CardSkeleton/>);
  } else if (fetchDeviceGroupErrorMessage) {
    return (<ContentError errorMessage={fetchDeviceGroupErrorMessage}/>);
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
                      <CIcon name='cilBasket' size="4xl"/>
                    </div>
                    <div className="flex-grow-1  my-auto">
                      <h2>{deviceGroup.name}</h2>
                      <small>ID: {deviceGroup.unique_id}</small><br/>
                    </div>
                  </div>
                </CCol>
                <CCol className="my-auto" lg="12" xl="3">
                  <div className="d-flex justify-content-center">
                    <CButtonGroup>
                      <CButton color="primary" onClick={() => history.push(`${match.url}/edit`)}> Edit</CButton>
                      <CButton color="danger"
                               onClick={() => setShowDeleteDeviceGroupModal(!showDeleteDeviceGroupModal)}> Delete</CButton>
                    </CButtonGroup>
                  </div>
                </CCol>
              </CRow>
            </CCardHeader>
            <CCardBody>
              <CCard>
                <CCardHeader>
                  Devices under this group
                </CCardHeader>
                <CCardBody>
                  <DevicesDataTable deviceGroupUniqueId={deviceGroupUniqueId}/>
                </CCardBody>
              </CCard>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      {showDeleteDeviceGroupModal &&
      <DeleteDeviceGroupModal deviceGroup={deviceGroup} show={showDeleteDeviceGroupModal}
                               onClose={() => setShowDeleteDeviceGroupModal(!showDeleteDeviceGroupModal)}
                               onConfirm={deleteDeviceGroup}
      />}
      <Toaster/>
    </>
  );
};

const mapStateToProps = state => ({
  deviceGroup: state.deviceGroup.deviceGroup,
  isFetchingDeviceGroup: state.deviceGroup.isFetchingDeviceGroup,
  fetchDeviceGroupErrorMessage: state.deviceGroup.fetchDeviceGroupErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  fetchDeviceGroupStartAsync: (id) => dispatch(fetchDeviceGroupStartAsync(id)),
  deleteDeviceGroupsStartAsync: (ids, history) => dispatch(deleteDeviceGroupsStartAsync(ids, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewDeviceGroup);
