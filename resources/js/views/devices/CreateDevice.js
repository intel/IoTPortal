import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import * as Yup from 'yup';

import { Form, Formik } from 'formik';
import { Toaster } from 'react-hot-toast';
import { CAlert, CCard, CCardBody, CCardFooter, CCardHeader, CCol, CRow } from '@coreui/react';

import { fetchDeviceCategoryOptionsStartAsync } from '../../redux/deviceCategory/deviceCategory.actions';
import { createDeviceStartAsync } from '../../redux/device/device.actions';
import { getSanitizedValues, isDeviceNameUniqueDebounced } from '../../utils/utils';

import IotTextInputFormGroup from '../../components/IotTextInputFormGroup/IotTextInputFormGroup';
import IotSelectFormGroup from '../../components/IotSelectFormGroup/IotSelectFormGroup';
import PrimarySecondaryButtons from '../../components/PrimarySecondaryButtons/PrimarySecondaryButtons';

const CreateDevice = ({
                        history,
                        deviceCategoryOptions,
                        isFetchingDeviceCategoryOptions,
                        fetchDeviceCategoryOptionsErrorMessage,
                        isCreatingDevice,
                        createDeviceErrorMessage,
                        fetchDeviceCategoryOptionsStartAsync,
                        createDeviceStartAsync
                      }) => {

  const formRef = useRef();

  useEffect(() => {
    fetchDeviceCategoryOptionsStartAsync();
  }, []);

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
    name: Yup.string()
      .required("Required")
      .max(255, 'The name may not be greater than 255 characters')
      .test('isDeviceNameUnique', 'The name has already been taken', isDeviceNameUniqueDebounced),
    category: Yup.object().shape({
      value: Yup.string().required(),
      label: Yup.string().oneOf(
        deviceCategoryOptions ? deviceCategoryOptions.map(({label}) => label) : [],
        "Invalid device category selection"
      ).required("Required")
    }).nullable().required("Required")
  };

  const validationSchema = Yup.object(validationObject);

  return (
    <>
      <CRow>
        <CCol xs="12" md="12" className="mb-4">
          <CCard>
            <CCardHeader>
              Create new device
            </CCardHeader>
            <CCardBody>
              <CAlert color="secondary">To create a new device, enter a device name and select a device
                category.</CAlert>
              <Formik
                enableReinitialize={true}
                innerRef={formRef}
                initialValues={{
                  name: '',
                  category: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values, {setSubmitting}) => {
                  createDeviceStartAsync(getSanitizedValues(values), history);
                }}
              >
                {({values}) => (
                  <Form>
                    <IotTextInputFormGroup
                      id="name"
                      name="name"
                      label="Device name"
                      placeholder="Enter device name"
                    />
                    <IotSelectFormGroup
                      id="category"
                      name="category"
                      label="Device category"
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
              <PrimarySecondaryButtons primaryButtonText="Create" isPrimaryLoading={isCreatingDevice}
                                       onClickPrimary={handleSubmit} onClickSecondary={handleReset}
                                       isPrimaryDisabled={isCreatingDevice} isSecondaryDisabled={isCreatingDevice}/>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
      <Toaster/>
    </>
  );
};

const mapStateToProps = state => ({
  deviceCategoryOptions: state.deviceCategory.deviceCategoryOptions,
  isFetchingDeviceCategoryOptions: state.deviceCategory.isFetchingDeviceCategoryOptions,
  fetchDeviceCategoryOptionsErrorMessage: state.deviceCategory.fetchDeviceCategoryOptionsErrorMessage,
  isCreatingDevice: state.device.isCreatingDevice,
  createDeviceErrorMessage: state.device.createDeviceErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  fetchDeviceCategoryOptionsStartAsync: (name) => dispatch(fetchDeviceCategoryOptionsStartAsync(name)),
  createDeviceStartAsync: (data, history) => dispatch(createDeviceStartAsync(data, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateDevice);
