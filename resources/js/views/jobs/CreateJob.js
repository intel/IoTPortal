import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import * as Yup from 'yup';

import { Form, Formik } from 'formik';
import { Toaster } from 'react-hot-toast';
import { Steps } from 'primereact/steps';
import { CAlert, CCard, CCardBody, CCardFooter, CCardHeader, CCol, CRow } from '@coreui/react';

import { fetchDeviceGroupOptionsStartAsync } from '../../redux/deviceGroup/deviceGroup.actions';

import IotTextInputFormGroup from '../../components/IotTextInputFormGroup/IotTextInputFormGroup';
import IotSelectFormGroup from '../../components/IotSelectFormGroup/IotSelectFormGroup';

const CreateJob = ({
                     history,
                     deviceGroupOptions,
                     isFetchingDeviceGroupOptions,
                     fetchDeviceGroupOptionsErrorMessage,
                     fetchDeviceGroupOptionsStartAsync
                   }) => {

  const [activeIndex, setActiveIndex] = useState(0);
  const steps = [
    {label: 'Enter job details'},
    {label: 'Confirmation'},
    {label: 'Result'},
  ];

  const formRef = useRef();

  useEffect(() => {
    fetchDeviceGroupOptionsStartAsync();
  }, []);

  const validationSchema = Yup.object({});

  return (
    <>
      <CRow>
        <CCol xs="12" md="12" className="mb-4">
          <CCard>
            <CCardHeader>
              Create new job
            </CCardHeader>
            <CCardBody>
              <Steps className="mb-5" model={steps} activeIndex={activeIndex}
                     onSelect={(e) => setActiveIndex(e.index)}/>
              {activeIndex === 0 &&
              <CAlert color="secondary">To create a new job, enter a job name and select a device group.</CAlert>}
              <Formik
                enableReinitialize={true}
                innerRef={formRef}
                initialValues={{
                  name: '',
                  group: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values, {setSubmitting}) => {
                  // createDeviceStartAsync(getSanitizedValues(values), history);
                }}
              >
                {({values}) => (
                  <Form>
                    <IotTextInputFormGroup
                      id="name"
                      name="name"
                      label="Job Name"
                      placeholder="Enter job name"
                    />
                    <IotSelectFormGroup
                      id="group"
                      name="group"
                      label="Device Group"
                      placeholder="Select a device group"
                      options={deviceGroupOptions}
                      value={values.group}
                      onInputChange={(name) => fetchDeviceGroupOptionsStartAsync(name)}
                      isLoading={isFetchingDeviceGroupOptions}
                      isSearchable
                      isClearable
                    />
                  </Form>
                )}
              </Formik>
            </CCardBody>
            <CCardFooter>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
      <Toaster/>
    </>
  );
};

const mapStateToProps = state => ({
  deviceGroupOptions: state.deviceGroup.deviceGroupOptions,
  isFetchingDeviceGroupOptions: state.deviceGroup.isFetchingDeviceGroupOptions,
  fetchDeviceGroupOptionsErrorMessage: state.deviceGroup.fetchDeviceGroupOptionsErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  fetchDeviceGroupOptionsStartAsync: (name) => dispatch(fetchDeviceGroupOptionsStartAsync(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateJob);
