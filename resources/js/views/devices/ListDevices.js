import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Toaster } from 'react-hot-toast';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react';

import { deleteDevicesStartAsync } from '../../redux/device/device.actions';

import DevicesDataTable from '../../containers/DevicesDataTable/DevicesDataTable';
import DeleteDevicesModal from '../../components/DeleteDevicesModal/DeleteDevicesModal';

const ListDevices = ({
                       history,
                       match,
                       isDeletingDevices,
                       deleteDevicesErrorMessage,
                       deleteDevicesStartAsync
                     }) => {

  const [showDeleteDevicesModal, setShowDeleteDevicesModal] = useState(false);
  const [selectedDevices, setSelectedDevices] = useState(null);

  const confirmDeleteSelectedDevices = () => {
    setShowDeleteDevicesModal(!showDeleteDevicesModal);
  };

  const deleteSelectedDevices = () => {
    const selectedDeviceIds = selectedDevices.map(selectedDevice => selectedDevice.id);
    deleteDevicesStartAsync(selectedDeviceIds);
    setShowDeleteDevicesModal(!showDeleteDevicesModal);
    setSelectedDevices(null);
  };

  const leftToolbar = () => {
    return (
      <>
        <Button label="New" icon="pi pi-plus" className="p-button-success mr-2"
                onClick={() => history.push(`${match.url}/create`)}/>
        <Button label="Delete" icon="pi pi-trash" className="p-button-danger mr-2"
                onClick={confirmDeleteSelectedDevices}
                disabled={!selectedDevices || !selectedDevices.length}/>
      </>
    );
  };

  return (
    <>
      <CRow>
        <CCol xs="12" md="12" className="mb-4">
          <CCard>
            <CCardHeader>
              Devices
            </CCardHeader>
            <CCardBody>
              <Toolbar className="mb-4" left={leftToolbar}/>
              <DevicesDataTable selectedDevices={selectedDevices} setSelectedDevices={setSelectedDevices}/>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      {showDeleteDevicesModal &&
      <DeleteDevicesModal show={showDeleteDevicesModal}
                          onClose={() => setShowDeleteDevicesModal(!showDeleteDevicesModal)}
                          onConfirm={deleteSelectedDevices}
      />}
      <Toaster/>
    </>
  );
};

const mapStateToProps = state => ({
  isDeletingDevices: state.device.isDeletingDevices,
  deleteDevicesErrorMessage: state.device.deleteDevicesErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  deleteDevicesStartAsync: (ids, history) => dispatch(deleteDevicesStartAsync(ids, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListDevices);
