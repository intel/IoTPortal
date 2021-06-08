import React, { useReducer, useRef, useState } from 'react';
import { connect } from 'react-redux';

import { Form, Formik } from 'formik';
import { Toaster } from 'react-hot-toast';
import { Steps } from 'primereact/steps';
import { CAlert, CCard, CCardBody, CCardFooter, CCardHeader, CCol, CRow } from '@coreui/react';

import { getSanitizedValues, isNotEmptyString } from '../../utils/utils';
import createDeviceGroupValidationSchema from '../../schemas/deviceGroup/createDeviceGroupValidationSchema';
import { createDeviceGroupStartAsync } from '../../redux/deviceGroup/deviceGroup.actions';

import IotTextInputFormGroup from '../../components/IotTextInputFormGroup/IotTextInputFormGroup';
import DevicesDataTable from '../../containers/DevicesDataTable/DevicesDataTable';
import DeviceGroupNoDeviceSelectedModal
  from '../../components/DeviceGroupNoDeviceSelectedModal/DeviceGroupNoDeviceSelectedModal';
import PrimarySecondaryButtons from '../../components/PrimarySecondaryButtons/PrimarySecondaryButtons';
import SelectedDevicesDataView from '../../components/SelectedDevicesDataView/SelectedDevicesDataView';

const CreateDeviceGroup = ({
                             history,
                             isCreatingDeviceGroup,
                             createDeviceGroupErrorMessage,
                             createDeviceGroupStartAsync
                           }) => {

  const [, forceUpdate] = useReducer(x => x + 1, 0);
  const [showNoDeviceSelectedModal, setShowNoDeviceSelectedModal] = useState(false);
  const [selectedDevices, setSelectedDevices] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const formRef = useRef();

  const steps = [
    {label: 'Enter device group name'},
    {label: 'Select devices'},
    {label: 'Confirmation'},
  ];

  const handleStep0 = async () => {
    if (formRef.current) {
      if (!formRef.current.touched.name) {
        await formRef.current.setFieldTouched('name', true);
        return;
      }

      await formRef.current.validateForm();

      if (formRef.current.isValid) {
        setActiveIndex(activeIndex + 1);
      }
    }
  };

  const handleStep1 = () => {
    if (selectedDevices?.length && selectedDevices.length > 0)
      setActiveIndex(activeIndex + 1);
    else
      setShowNoDeviceSelectedModal(true);
  };

  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.values.devices = selectedDevices.map(({id}) => (id));
      formRef.current.handleSubmit();
    }
  };

  const handleReset = async () => {
    if (formRef.current) {
      // Because resetForm() is async, we would need to wait for it before triggering rerender
      await formRef.current.resetForm();

      // Force React to rerender the component so that the device group name in card header would be updated
      forceUpdate();
    }
    setSelectedDevices(null);
    setActiveIndex(0);
  };

  const onSubmit = async (values, {setSubmitting}) => {
    if (formRef.current) {
      if (!formRef.current.touched.name) {
        await formRef.current.setFieldTouched('name', true);
        return;
      }

      await formRef.current.validateForm();

      if (formRef.current.isValid && activeIndex === 0) {
        setActiveIndex(activeIndex + 1);
      } else if (formRef.current.isValid && activeIndex === 2 && selectedDevices?.length && selectedDevices.length > 0) {
        createDeviceGroupStartAsync(getSanitizedValues(values), history);
      }
    }
  };

  const renderSelectedDevicesDataView = () => (
    <SelectedDevicesDataView devices={selectedDevices}
                             onRemove={(device) => setSelectedDevices(selectedDevices.filter(selectedDevice => selectedDevice.id !== device.id))}/>
  );

  const renderStep0 = () => (
    <IotTextInputFormGroup
      id="name"
      name="name"
      label="Device group name"
      placeholder="Enter device group name"
    />
  );

  const renderStep1 = () => (
    <>
      {renderSelectedDevicesDataView()}
      <CCard>
        <CCardHeader>
          Select the devices below to add them to the new device group
        </CCardHeader>
        <CCardBody>
          <DevicesDataTable selectedDevices={selectedDevices} setSelectedDevices={setSelectedDevices} hideActionsBar/>
        </CCardBody>
      </CCard>
    </>
  );

  const renderStep2 = renderSelectedDevicesDataView;

  const validationSchema = createDeviceGroupValidationSchema();

  return (
    <>
      <CRow>
        <CCol xs="12" md="12" className="mb-4">
          <CCard>
            <CCardHeader>
              Create new device group
              {isNotEmptyString(formRef.current?.values?.name) && (<>: <b>{formRef.current.values.name}</b></>)}
            </CCardHeader>
            <CCardBody>
              <Steps className="mb-5" model={steps} activeIndex={activeIndex}
                     onSelect={(e) => setActiveIndex(e.index)}/>
              {activeIndex === 0 &&
              <CAlert color="secondary">To create a new device group, enter a device group name.</CAlert>}
              <Formik
                enableReinitialize={true}
                innerRef={formRef}
                initialValues={{
                  name: '',
                  devices: [],
                }}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                <Form>
                  {activeIndex === 0 && renderStep0()}
                  {activeIndex === 1 && renderStep1()}
                  {activeIndex === 2 && renderStep2()}
                </Form>
              </Formik>
            </CCardBody>
            <CCardFooter>
              {activeIndex === 0 && <PrimarySecondaryButtons primaryButtonText="Next" onClickPrimary={handleStep0}
                                                             onClickSecondary={handleReset}/>}
              {activeIndex === 1 && <PrimarySecondaryButtons primaryButtonText="Next" secondaryButtonText="Back"
                                                             onClickPrimary={handleStep1}
                                                             onClickSecondary={() => setActiveIndex(activeIndex - 1)}/>}
              {activeIndex === 2 && <PrimarySecondaryButtons primaryButtonText="Create" secondaryButtonText="Back"
                                                             onClickPrimary={handleSubmit}
                                                             onClickSecondary={() => setActiveIndex(activeIndex - 1)}/>}
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
  isCreatingDeviceGroup: state.deviceGroup.isCreatingDeviceGroup,
  createDeviceGroupErrorMessage: state.deviceGroup.createDeviceGroupErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  createDeviceGroupStartAsync: (data, history) => dispatch(createDeviceGroupStartAsync(data, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateDeviceGroup);
