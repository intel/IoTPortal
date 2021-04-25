import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import * as Yup from 'yup';

import { Form, Formik } from 'formik';
import { Toaster } from 'react-hot-toast';
import { CAlert, CCard, CCardBody, CCardFooter, CCardHeader, CCol, CRow } from '@coreui/react';
import { createDeviceStartAsync } from '../../redux/device/device.actions';
import { getSanitizedValues } from '../../utils/utils';

import IotTextInputFormGroup from '../../components/IotTextInputFormGroup/IotTextInputFormGroup';
import IotSelectFormGroup from '../../components/IotSelectFormGroup/IotSelectFormGroup';
import { Steps } from 'primereact/steps';

const CreateJob = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  const steps = [
    {label: 'Enter Job Details'},
    {label: 'Select Command'},
    {label: 'Confirmation'}
  ];

  const formRef = useRef();

  useEffect(() => {
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
                      label="Job Name"
                      placeholder="Enter job name"
                    />
                    <IotSelectFormGroup
                      id="group"
                      name="group"
                      label="Device Group"
                      placeholder="Select a device group"
                      // options={deviceCategories}
                      value={values.category}
                      // onInputChange={(name) => fetchDeviceCategoriesStartAsync(name)}
                      // isLoading={isFetchingDeviceCategories}
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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CreateJob);
