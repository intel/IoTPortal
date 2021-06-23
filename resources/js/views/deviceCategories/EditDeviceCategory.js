import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import { Form, Formik } from 'formik';
import { Toaster } from 'react-hot-toast';
import { CAlert, CCard, CCardBody, CCardFooter, CCardHeader, CCol, CRow } from '@coreui/react';

import { getSanitizedValues } from '../../utils/utils';
import editDeviceCategoryValidationSchema from '../../schemas/deviceCategory/editDeviceCategoryValidationSchema';
import {
  fetchDeviceCategoryStartAsync,
  updateDeviceCategoryStartAsync
} from '../../redux/deviceCategory/deviceCategory.actions';

import CardSkeleton from '../../components/CardSkeleton/CardSkeleton';
import ContentError from '../../components/ContentError/ContentError';
import IotTextInputFormGroup from '../../components/IotTextInputFormGroup/IotTextInputFormGroup';
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

  useEffect(() => {
    fetchDeviceCategoryStartAsync(deviceCategoryUniqueId);
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

  const validationSchema = editDeviceCategoryValidationSchema();

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
                <Form>
                  <IotTextInputFormGroup
                    id="name"
                    name="name"
                    label="Device category name"
                    placeholder="Enter device category name"
                  />
                </Form>
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
