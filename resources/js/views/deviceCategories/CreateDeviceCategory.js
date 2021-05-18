import React, { useRef } from 'react';
import { connect } from 'react-redux';
import * as Yup from 'yup';

import { Form, Formik } from 'formik';
import { Toaster } from 'react-hot-toast';
import { CAlert, CCard, CCardBody, CCardFooter, CCardHeader, CCol, CRow } from '@coreui/react';

import { createDeviceCategoryStartAsync, } from '../../redux/deviceCategory/deviceCategory.actions';
import { getSanitizedValues, isDeviceCategoryNameUniqueDebounced } from '../../utils/utils';

import IotTextInputFormGroup from '../../components/IotTextInputFormGroup/IotTextInputFormGroup';
import PrimarySecondaryButtons from '../../components/PrimarySecondaryButtons/PrimarySecondaryButtons';

const CreateDeviceCategory = ({
                                history,
                                isCreatingDeviceCategory,
                                createDeviceCategoryErrorMessage,
                                createDeviceCategoryStartAsync
                              }) => {

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
    name: Yup.string()
      .required("Required")
      .max(255, 'The name may not be greater than 255 characters')
      .test('isDeviceCategoryNameUnique', 'The name has already been taken', isDeviceCategoryNameUniqueDebounced),
  };

  const validationSchema = Yup.object(validationObject);

  return (
    <>
      <CRow>
        <CCol xs="12" md="12" className="mb-4">
          <CCard>
            <CCardHeader>
              Create new device category
            </CCardHeader>
            <CCardBody>
              <CAlert color="secondary">To create a new device category, enter a device category name.</CAlert>
              <Formik
                enableReinitialize={true}
                innerRef={formRef}
                initialValues={{
                  name: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values, {setSubmitting}) => {
                  createDeviceCategoryStartAsync(getSanitizedValues(values), history);
                }}
              >
                {({values}) => (
                  <Form>
                    <IotTextInputFormGroup
                      id="name"
                      name="name"
                      label="Device category name"
                      placeholder="Enter device category name"
                    />
                  </Form>
                )}
              </Formik>
            </CCardBody>
            <CCardFooter>
              <PrimarySecondaryButtons primaryButtonText="Create" isPrimaryLoading={isCreatingDeviceCategory}
                                       onClickPrimary={handleSubmit} onClickSecondary={handleReset}
                                       isPrimaryDisabled={isCreatingDeviceCategory}
                                       isSecondaryDisabled={isCreatingDeviceCategory}/>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
      <Toaster/>
    </>
  );
};

const mapStateToProps = state => ({
  isCreatingDeviceCategory: state.deviceCategory.isCreatingDeviceCategory,
  createDeviceCategoryErrorMessage: state.deviceCategory.createDeviceCategoryErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  createDeviceCategoryStartAsync: (data, history) => dispatch(createDeviceCategoryStartAsync(data, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateDeviceCategory);
