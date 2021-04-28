import React, { useReducer, useRef, useState } from 'react';
import { connect } from 'react-redux';
import * as Yup from 'yup';

import { Form, Formik } from 'formik';
import { Toaster } from 'react-hot-toast';
import { Steps } from 'primereact/steps';
import { CAlert, CCard, CCardBody, CCardFooter, CCardHeader, CCol, CRow } from '@coreui/react';

import { getSanitizedValues, isDeviceGroupNameUnique, isNotEmptyString } from '../../utils/utils';
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

  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  const [showNoDeviceSelectedModal, setShowNoDeviceSelectedModal] = useState(false);
  const [selectedDevices, setSelectedDevices] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const steps = [
    {label: 'Enter device group name'},
    {label: 'Select devices'},
    {label: 'Confirmation'},
  ];

  const formRef = useRef();

  const handleStep0 = async () => {
    if (formRef.current) {
      if (!formRef.current.touched.name) {
        await formRef.current.setFieldTouched('name', true);
      } else if (!formRef.current.errors.name) {
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
      await formRef.current.resetForm();
      forceUpdate();
    }
    setSelectedDevices(null);
    setActiveIndex(0);
  };

  const onSubmit = (values, {setSubmitting}) => {
    if (activeIndex < 2) {
      setActiveIndex(activeIndex + 1);
    } else {
      createDeviceGroupStartAsync(getSanitizedValues(values), history);
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

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Required")
      .max(255, 'The name may not be greater than 255 characters.')
      .test('isDeviceGroupNameUnique', 'The name has already been taken.', isDeviceGroupNameUnique),
  });

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
