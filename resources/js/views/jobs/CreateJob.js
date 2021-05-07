import React, { useEffect, useReducer, useRef, useState } from 'react';
import { connect } from 'react-redux';
import * as Yup from 'yup';

import { Form, Formik } from 'formik';
import { Toaster } from 'react-hot-toast';
import { Steps } from 'primereact/steps';
import { CAlert, CCard, CCardBody, CCardFooter, CCardHeader, CCol, CRow } from '@coreui/react';

import { isJobNameUnique, isNotEmptyString } from '../../utils/utils';
import {
  fetchDeviceGroupDevicesStartAsync,
  fetchDeviceGroupOptionsStartAsync
} from '../../redux/deviceGroup/deviceGroup.actions';
import {
  fetchSavedCommandOptionsStartAsync,
  fetchSavedCommandStartAsync
} from '../../redux/savedCommand/savedCommand.actions';

import IotTextInputFormGroup from '../../components/IotTextInputFormGroup/IotTextInputFormGroup';
import IotSelectFormGroup from '../../components/IotSelectFormGroup/IotSelectFormGroup';
import PrimarySecondaryButtons from '../../components/PrimarySecondaryButtons/PrimarySecondaryButtons';
import JobDetailsCard from '../../components/JobDetailsCard/JobDetailsCard';
import JobDevicesCard from '../../components/JobDevicesCard/JobDevicesCard';

const CreateJob = ({
                     history,
                     deviceGroupOptions,
                     isFetchingDeviceGroupOptions,
                     fetchDeviceGroupOptionsErrorMessage,
                     savedCommandOptions,
                     isFetchingSavedCommandOptions,
                     fetchSavedCommandOptionsErrorMessage,
                     savedCommand,
                     isFetchingSavedCommand,
                     fetchSavedCommandErrorMessage,
                     deviceGroupDevices,
                     isFetchingDeviceGroupDevices,
                     fetchDeviceGroupDevicesErrorMessage,
                     fetchDeviceGroupOptionsStartAsync,
                     fetchSavedCommandOptionsStartAsync,
                     fetchSavedCommandStartAsync,
                     fetchDeviceGroupDevicesStartAsync
                   }) => {

  const [, forceUpdate] = useReducer(x => x + 1, 0);
  const [job, setJob] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const steps = [
    {label: 'Enter job details'},
    {label: 'Confirmation'},
    {label: 'Result'},
  ];

  const formRef = useRef();

  useEffect(() => {
    fetchDeviceGroupOptionsStartAsync();
    fetchSavedCommandOptionsStartAsync();
  }, []);

  const onSubmit = (values, {setSubmitting}) => {
    setJob(values);
    setActiveIndex(activeIndex + 1);
    fetchSavedCommandStartAsync(values.saved_command.value);
    fetchDeviceGroupDevicesStartAsync(values.group.value);
  };

  const handleStep0 = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  };

  const handleStep1 = () => {
    setActiveIndex(activeIndex + 1);
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  };

  const handleReset = async () => {
    if (formRef.current) {
      formRef.current.resetForm();
    }
    setJob(null);
    setActiveIndex(0);
  };

  const renderStep0 = () => (
    <>
      <IotTextInputFormGroup
        id="name"
        name="name"
        label="Job name"
        placeholder="Enter job name"
      />
      <IotSelectFormGroup
        id="group"
        name="group"
        label="Device group"
        placeholder="Select a device group"
        options={deviceGroupOptions}
        onInputChange={(name) => fetchDeviceGroupOptionsStartAsync(name)}
        isLoading={isFetchingDeviceGroupOptions}
        isSearchable
        isClearable
      />
      <IotSelectFormGroup
        id="saved_command"
        name="saved_command"
        label="Saved command"
        placeholder="Select a saved command"
        options={savedCommandOptions}
        onInputChange={(name) => fetchSavedCommandOptionsStartAsync(name)}
        isLoading={isFetchingSavedCommandOptions}
        isSearchable
        isClearable
      />
    </>
  );

  const renderStep1 = () => (
    <>
      <JobDetailsCard deviceGroupName={job.group.label} savedCommandName={savedCommand?.name}
                      commandName={savedCommand?.command_name} payload={savedCommand?.payload}
                      isLoading={isFetchingSavedCommand}/>
      <JobDevicesCard deviceGroupName={job.group.label} deviceGroupDevices={deviceGroupDevices}/>
    </>
  );

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Required")
      .max(255, 'The name may not be greater than 255 characters.')
      .test('isJobNameUnique', 'The name has already been taken.', isJobNameUnique),
    group: Yup.object().shape({
      value: Yup.string().required(),
      label: Yup.string().oneOf(
        deviceGroupOptions ? deviceGroupOptions.map(({label}) => label) : [],
        "Invalid device group selection"
      ).required("Required")
    }).nullable().required("Required"),
    saved_command: Yup.object().shape({
      value: Yup.string().required(),
      label: Yup.string().oneOf(
        savedCommandOptions ? savedCommandOptions.map(({label}) => label) : [],
        "Invalid saved command selection"
      ).required("Required")
    }).nullable().required("Required")
  });

  return (
    <>
      <CRow>
        <CCol xs="12" md="12" className="mb-4">
          <CCard>
            <CCardHeader>
              Create new job
              {isNotEmptyString(job?.name) && (<>: <b>{job.name}</b></>)}
            </CCardHeader>
            <CCardBody>
              <Steps className="mb-5" model={steps} activeIndex={activeIndex}
                     onSelect={(e) => setActiveIndex(e.index)}/>
              {activeIndex === 0 &&
              <CAlert color="secondary">To create a new job, enter a job name, select a device group and saved command
                to proceed.</CAlert>}
              <Formik
                enableReinitialize={true}
                innerRef={formRef}
                initialValues={{
                  name: '',
                  group: '',
                  saved_command: '',
                }}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                <Form>
                  {activeIndex === 0 && renderStep0()}
                  {activeIndex === 1 && renderStep1()}

                </Form>
              </Formik>
            </CCardBody>
            <CCardFooter>
              {activeIndex === 0 && <PrimarySecondaryButtons primaryButtonText="Next" onClickPrimary={handleStep0}
                                                             onClickSecondary={handleReset}/>}
              {activeIndex === 1 && <PrimarySecondaryButtons primaryButtonText="Run" secondaryButtonText="Back"
                                                             onClickPrimary={handleStep1}
                                                             onClickSecondary={() => setActiveIndex(activeIndex - 1)}/>}
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
  savedCommandOptions: state.savedCommand.savedCommandOptions,
  isFetchingSavedCommandOptions: state.savedCommand.isFetchingSavedCommandOptions,
  fetchSavedCommandOptionsErrorMessage: state.savedCommand.fetchSavedCommandOptionsErrorMessage,
  savedCommand: state.savedCommand.savedCommand,
  isFetchingSavedCommand: state.savedCommand.isFetchingSavedCommand,
  fetchSavedCommandErrorMessage: state.savedCommand.fetchSavedCommandErrorMessage,
  deviceGroupDevices: state.deviceGroup.deviceGroupDevices,
  isFetchingDeviceGroupDevices: state.deviceGroup.isFetchingDeviceGroupDevices,
  fetchDeviceGroupDevicesErrorMessage: state.deviceGroup.fetchDeviceGroupDevicesErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  fetchDeviceGroupOptionsStartAsync: (name) => dispatch(fetchDeviceGroupOptionsStartAsync(name)),
  fetchSavedCommandOptionsStartAsync: (name) => dispatch(fetchSavedCommandOptionsStartAsync(name)),
  fetchSavedCommandStartAsync: (id) => dispatch(fetchSavedCommandStartAsync(id)),
  fetchDeviceGroupDevicesStartAsync: (id) => dispatch(fetchDeviceGroupDevicesStartAsync(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateJob);
