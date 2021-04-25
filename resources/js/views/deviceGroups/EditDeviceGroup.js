import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import * as Yup from 'yup';

import { Form, Formik } from 'formik';
import { Toaster } from 'react-hot-toast';
import CIcon from '@coreui/icons-react';
import { CAlert, CButton, CCard, CCardBody, CCardFooter, CCardHeader, CCol, CRow } from '@coreui/react';

import {
  fetchDeviceGroupDevicesStartAsync,
  fetchDeviceGroupStartAsync,
  setDeviceGroupDevices,
  updateDeviceGroupStartAsync
} from '../../redux/deviceGroup/deviceGroup.actions';
import { getSanitizedValues } from '../../utils/utils';

import IotTextInputFormGroup from '../../components/IotTextInputFormGroup/IotTextInputFormGroup';
import DevicesDataTable from '../../containers/DevicesDataTable/DevicesDataTable';
import CardSkeleton from '../../components/CardSkeleton/CardSkeleton';
import Error from '../../components/Error/Error';
import SelectedDevicesDataView from '../../components/SelectedDevicesDataView/SelectedDevicesDataView';
import DeviceGroupNoDeviceSelectedModal
  from '../../components/DeviceGroupNoDeviceSelectedModal/DeviceGroupNoDeviceSelectedModal';

const EditDeviceGroup = (props) => {

  const deviceGroupId = props.match.params.id;
  const {
    history,
    deviceGroup,
    isFetchingDeviceGroup,
    fetchDeviceGroupErrorMessage,
    deviceGroupDevices,
    isFetchingDeviceGroupDevices,
    fetchDeviceGroupDevicesErrorMessage,
    isUpdatingDeviceGroup,
    updateDeviceGroupErrorMessage,
    fetchDeviceGroupStartAsync,
    fetchDeviceGroupDevicesStartAsync,
    setDeviceGroupDevices,
    updateDeviceGroupStartAsync
  } = props;

  const [showNoDeviceSelectedModal, setShowNoDeviceSelectedModal] = useState(false);

  const formRef = useRef();

  useEffect(() => {
    fetchDeviceGroupStartAsync(deviceGroupId);
    fetchDeviceGroupDevicesStartAsync(deviceGroupId)
  }, []);

  const handleSubmit = () => {
    if (deviceGroupDevices?.length && deviceGroupDevices.length > 0) {
      if (formRef.current) {
        formRef.current.values.devices = deviceGroupDevices.map(({id}) => (id));
        formRef.current.handleSubmit();
      }
    } else {
      setShowNoDeviceSelectedModal(true);
    }
  };

  const renderDeviceGroupNameInput = () => (
    <IotTextInputFormGroup
      id="name"
      name="name"
      label="Device group name"
      placeholder="Enter device group name"
    />
  );

  const renderSelectedDevicesDataView = () => (
    <SelectedDevicesDataView devices={deviceGroupDevices}
                             onRemove={(device) => setDeviceGroupDevices(deviceGroupDevices.filter(deviceGroupDevice => deviceGroupDevice.id !== device.id))}/>
  );

  const renderDeviceSelectionView = () => (
    <>
      {renderSelectedDevicesDataView()}
      <CCard>
        <CCardHeader>
          Select the devices below to add them to the new device group <b>This will deselect all selected devices!</b>
        </CCardHeader>
        <CCardBody>
          <DevicesDataTable selectedDevices={deviceGroupDevices} setSelectedDevices={setDeviceGroupDevices}
                            hideActionsBar/>
        </CCardBody>
      </CCard>
    </>
  );

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Required")
      .max(255, 'The name may not be greater than 255 characters'),

  });

  if (isFetchingDeviceGroup || isFetchingDeviceGroupDevices) {
    return (<CardSkeleton/>);
  } else if (fetchDeviceGroupErrorMessage || fetchDeviceGroupDevicesErrorMessage) {
    return (<Error errorMessage={fetchDeviceGroupErrorMessage || fetchDeviceGroupDevicesErrorMessage}/>);
  }

  return (
    <>
      <CRow>
        <CCol xs="12" md="12" className="mb-4">
          <CCard>
            <CCardHeader>
              Edit device group
            </CCardHeader>
            <CCardBody>
              <CAlert color="secondary">You can change a device group name, add or remove device from the device
                group.</CAlert>
              <Formik
                enableReinitialize={true}
                innerRef={formRef}
                initialValues={{
                  name: deviceGroup.name,
                  devices: deviceGroupDevices.map(({id}) => (id)),
                }}
                validationSchema={validationSchema}
                onSubmit={(values, {setSubmitting}) => {
                  updateDeviceGroupStartAsync(deviceGroupId, getSanitizedValues(values), history);
                }}
              >
                <Form>
                  {renderDeviceGroupNameInput()}
                  {renderDeviceSelectionView()}
                </Form>
              </Formik>
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" size="sm" color="primary" onClick={handleSubmit}>
                <CIcon name="cil-scrubber"/> Save
              </CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
      <DeviceGroupNoDeviceSelectedModal show={showNoDeviceSelectedModal}
                                        onClose={() => setShowNoDeviceSelectedModal(!showNoDeviceSelectedModal)}
                                        onConfirm={() => setShowNoDeviceSelectedModal(!showNoDeviceSelectedModal)}/>
      <Toaster/>
    </>
  );
};

const mapStateToProps = state => ({
  deviceGroup: state.deviceGroup.deviceGroup,
  isFetchingDeviceGroup: state.deviceGroup.isFetchingDeviceGroup,
  fetchDeviceGroupErrorMessage: state.deviceGroup.fetchDeviceGroupErrorMessage,
  deviceGroupDevices: state.deviceGroup.deviceGroupDevices,
  isFetchingDeviceGroupDevices: state.deviceGroup.isFetchingDeviceGroupDevices,
  fetchDeviceGroupDevicesErrorMessage: state.deviceGroup.fetchDeviceGroupDevicesErrorMessage,
  isUpdatingDeviceGroup: state.deviceGroup.isUpdatingDeviceGroup,
  updateDeviceGroupErrorMessage: state.deviceGroup.updateDeviceGroupErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  fetchDeviceGroupStartAsync: (id) => dispatch(fetchDeviceGroupStartAsync(id)),
  fetchDeviceGroupDevicesStartAsync: (id) => dispatch(fetchDeviceGroupDevicesStartAsync(id)),
  setDeviceGroupDevices: (deviceGroupDevices) => dispatch(setDeviceGroupDevices(deviceGroupDevices)),
  updateDeviceGroupStartAsync: (id, data, history) => dispatch(updateDeviceGroupStartAsync(id, data, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditDeviceGroup);
