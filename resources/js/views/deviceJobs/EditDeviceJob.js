import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import * as Yup from 'yup';

import { Form, Formik } from 'formik';
import { Toaster } from 'react-hot-toast';
import { CAlert, CCard, CCardBody, CCardFooter, CCardHeader, CCol, CRow } from '@coreui/react';

import { fetchDeviceStartAsync, updateDeviceStartAsync } from '../../redux/device/device.actions';
import { fetchDeviceCategoryOptionsStartAsync } from '../../redux/deviceCategory/deviceCategory.actions';
import { getSanitizedValues } from '../../utils/utils';

import IotTextInputFormGroup from '../../components/IotTextInputFormGroup/IotTextInputFormGroup';
import IotSelectFormGroup from '../../components/IotSelectFormGroup/IotSelectFormGroup';
import CardSkeleton from '../../components/CardSkeleton/CardSkeleton';
import Error from '../../components/Error/Error';
import PrimarySecondaryButtons from '../../components/PrimarySecondaryButtons/PrimarySecondaryButtons';

const EditDeviceJob = (props) => {

  const deviceId = props.match.params.id;
  const {
    history,
    device,
    isFetchingDevice,
    fetchDeviceErrorMessage,
    deviceCategoryOptions,
    isFetchingDeviceCategoryOptions,
    fetchDeviceCategoryOptionsErrorMessage,
    isUpdatingDevice,
    updateDeviceErrorMessage,
    fetchDeviceStartAsync,
    fetchDeviceCategoryOptionsStartAsync,
    updateDeviceStartAsync
  } = props;

  const formRef = useRef();

  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  };

  const handleReset = () => {
    if (formRef.current) {
      formRef.current.resetForm();
    }
  };

  const validationObject = {
    name: Yup.string().required("Required"),
    category: Yup.object().shape({
      value: Yup.string().required(),
      label: Yup.string().oneOf(
        deviceCategories ? deviceCategories.map(({label}) => label) : [],
        "Invalid device category selection"
      ).required("Required")
    }).nullable().required("Required"),
  };

  const validationSchema = Yup.object(validationObject);

  useEffect(() => {
    fetchDeviceStartAsync(deviceId);
    fetchDeviceCategoryOptionsErrorMessage();
  }, []);

  if (isFetchingDevice) {
    return (<CardSkeleton/>);
  } else if (fetchDeviceErrorMessage) {
    return (<Error errorMessage={fetchDeviceErrorMessage}/>);
  }

  return (
    <>
      <CRow>
        <CCol xs="12" md="12" className="mb-4">
          <CCard>
            <CCardHeader>
              Edit Device: <b>{device.unique_id}</b>
            </CCardHeader>
            <CCardBody>
              <CAlert color="secondary">You can edit the device name and device category by entering the updated details
                below.</CAlert>
              <Formik
                enableReinitialize={true}
                innerRef={formRef}
                initialValues={{
                  name: device.name,
                  category: device.category,
                }}
                validationSchema={validationSchema}
                onSubmit={(values, {setSubmitting}) => {
                  updateDeviceStartAsync(deviceId, getSanitizedValues(values), history);
                }}
              >
                {({values}) => (
                  <Form>
                    <IotTextInputFormGroup
                      id="name"
                      name="name"
                      label="Device Name"
                      placeholder="Enter device name"
                    />
                    <IotSelectFormGroup
                      id="category"
                      name="category"
                      label="Device Category"
                      placeholder="Select a device category"
                      options={deviceCategoryOptions}
                      value={values.category}
                      onInputChange={(name) => fetchDeviceCategoryOptionsStartAsync(name)}
                      isLoading={isFetchingDeviceCategoryOptions}
                      isSearchable
                      isClearable
                    />
                  </Form>
                )}
              </Formik>
            </CCardBody>
            <CCardFooter>
              <PrimarySecondaryButtons primaryButtonText="Save" isPrimaryLoading={isUpdatingDevice}
                                       onClickPrimary={handleSubmit} onClickSecondary={handleReset}
                                       isPrimaryDisabled={isUpdatingDevice} isSecondaryDisabled={isUpdatingDevice}/>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
      <Toaster/>
    </>
  );
};

const mapStateToProps = state => ({
  device: state.device.device ? {
    ...state.device.device,
    category: {value: state.device.device.category.id, label: state.device.device.category.name.toUpperCase()}
  } : state.device.device,
  isFetchingDevice: state.device.isFetchingDevice,
  fetchDeviceErrorMessage: state.device.fetchDeviceErrorMessage,
  deviceCategoryOptions: state.deviceCategory.deviceCategoryOptions,
  isFetchingDeviceCategoryOptions: state.deviceCategory.isFetchingDeviceCategoryOptions,
  fetchDeviceCategoryOptionsErrorMessage: state.deviceCategory.fetchDeviceCategoryOptionsErrorMessage,
  isUpdatingDevice: state.device.isUpdatingDevice,
  updateDeviceErrorMessage: state.device.updateDeviceErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  fetchDeviceStartAsync: (id) => dispatch(fetchDeviceStartAsync(id)),
  fetchDeviceCategoryOptionsStartAsync: (name) => dispatch(fetchDeviceCategoryOptionsStartAsync(name)),
  updateDeviceStartAsync: (id, data, history) => dispatch(updateDeviceStartAsync(id, data, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditDeviceJob);
