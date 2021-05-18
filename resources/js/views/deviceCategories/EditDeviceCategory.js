import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import * as Yup from 'yup';

import { Form, Formik } from 'formik';
import { Toaster } from 'react-hot-toast';
import { CAlert, CCard, CCardBody, CCardFooter, CCardHeader, CCol, CRow } from '@coreui/react';
import {
  fetchDeviceCategoryStartAsync,
  updateDeviceCategoryStartAsync
} from '../../redux/deviceCategory/deviceCategory.actions';
import { getSanitizedValues } from '../../utils/utils';

import IotTextInputFormGroup from '../../components/IotTextInputFormGroup/IotTextInputFormGroup';
import CardSkeleton from '../../components/CardSkeleton/CardSkeleton';
import Error from '../../components/Error/Error';
import PrimarySecondaryButtons from '../../components/PrimarySecondaryButtons/PrimarySecondaryButtons';

const EditDeviceCategory = (props) => {

  const deviceCategoryUniqueId = props.match.params.id;
  const {
    history,
    deviceCategory,
    isFetchingDeviceCategory,
    fetchDeviceCategoryErrorMessage,
    isUpdatingDeviceCategory,
    updateDeviceCategoryErrorMessage,
    fetchDeviceCategoryStartAsync,
    updateDeviceCategoryStartAsync,
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
    name: Yup.string()
      .required("Required")
      .max(255, 'The name may not be greater than 255 characters'),
  };

  const validationSchema = Yup.object(validationObject);

  useEffect(() => {
    fetchDeviceCategoryStartAsync(deviceCategoryUniqueId);
  }, []);

  if (isFetchingDeviceCategory) {
    return (<CardSkeleton/>);
  } else if (fetchDeviceCategoryErrorMessage) {
    return (<Error errorMessage={fetchDeviceCategoryErrorMessage}/>);
  }

  return (
    <>
      <CRow>
        <CCol xs="12" md="12" className="mb-4">
          <CCard>
            <CCardHeader>
              Edit Device Category: <b>{deviceCategory.unique_id}</b>
            </CCardHeader>
            <CCardBody>
              <CAlert color="secondary">You can edit the device category by entering the updated details below.</CAlert>
              <Formik
                enableReinitialize={true}
                innerRef={formRef}
                initialValues={{
                  name: deviceCategory.name,
                }}
                validationSchema={validationSchema}
                onSubmit={(values, {setSubmitting}) => {
                  updateDeviceCategoryStartAsync(deviceCategoryUniqueId, getSanitizedValues(values), history);
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
              <PrimarySecondaryButtons primaryButtonText="Save" isPrimaryLoading={isUpdatingDeviceCategory}
                                       onClickPrimary={handleSubmit} onClickSecondary={handleReset}
                                       isPrimaryDisabled={isUpdatingDeviceCategory}
                                       isSecondaryDisabled={isUpdatingDeviceCategory}/>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
      <Toaster/>
    </>
  );
};

const mapStateToProps = state => ({
  deviceCategory: state.deviceCategory.deviceCategory,
  isFetchingDeviceCategory: state.deviceCategory.isFetchingDeviceCategory,
  fetchDeviceCategoryErrorMessage: state.deviceCategory.fetchDeviceCategoryErrorMessage,
  isUpdatingDeviceCategory: state.deviceCategory.isUpdatingDeviceCategory,
  updateDeviceCategoryErrorMessage: state.deviceCategory.updateDeviceCategoryErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  fetchDeviceCategoryStartAsync: (deviceCategoryUniqueId) => dispatch(fetchDeviceCategoryStartAsync(deviceCategoryUniqueId)),
  updateDeviceCategoryStartAsync: (deviceCategoryUniqueId, data, history) => dispatch(updateDeviceCategoryStartAsync(deviceCategoryUniqueId, data, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditDeviceCategory);
