import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import * as Yup from 'yup';

import { Form, Formik } from 'formik';
import { Toaster } from 'react-hot-toast';
import Chart from 'react-apexcharts';
import { ProgressBar } from 'primereact/progressbar';
import { Knob } from 'primereact/knob';
import { Steps } from 'primereact/steps';
import { CAlert, CCard, CCardBody, CCardFooter, CCardHeader, CCol, CRow } from '@coreui/react';

import { createJobStartAsync } from '../../redux/job/job.actions';
import {
  fetchDeviceGroupDevicesStartAsync,
  fetchDeviceGroupOptionsStartAsync
} from '../../redux/deviceGroup/deviceGroup.actions';
import {
  fetchSavedCommandOptionsStartAsync,
  fetchSavedCommandStartAsync
} from '../../redux/savedCommand/savedCommand.actions';
import { getSanitizedValues, isJobNameUniqueDebounced, isNotEmptyString } from '../../utils/utils';

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
                     isCreatingJob,
                     createJobErrorMessage,
                     fetchDeviceGroupOptionsStartAsync,
                     fetchSavedCommandOptionsStartAsync,
                     fetchSavedCommandStartAsync,
                     fetchDeviceGroupDevicesStartAsync,
                     createJobStartAsync
                   }) => {

  const [job, setJob] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const steps = [
    {label: 'Enter job details'},
    {label: 'Confirmation'},
    {label: 'Result'},
  ];

  const series = [44, 55];

  const [chartOptions, setChartOptions] = useState({
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: ['Success', 'Failure'],
    colors: ['#00e396', '#ff4560'],
    legend: {
      position: 'top'
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  });

  const formRef = useRef();

  useEffect(() => {
    fetchDeviceGroupOptionsStartAsync();
    fetchSavedCommandOptionsStartAsync();
  }, []);

  const handleStep0 = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  };

  const handleStep1 = () => {
    setActiveIndex(activeIndex + 1);
    const sanitizedValues = getSanitizedValues(formRef.current.values);
    createJobStartAsync(sanitizedValues);
    // send create job
    // and loop to check status
  };

  const handleReset = async () => {
    if (formRef.current) {
      formRef.current.resetForm();
    }
    setJob(null);
    setActiveIndex(0);
  };

  const onSubmit = (values, {setSubmitting}) => {
    setJob(values);
    setActiveIndex(activeIndex + 1);
    fetchSavedCommandStartAsync(values.saved_command.value);
    fetchDeviceGroupDevicesStartAsync(values.group.value);
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

  const renderStep2 = () => (
    <>
      <JobDetailsCard deviceGroupName={job.group.label} savedCommandName={savedCommand?.name}
                      commandName={savedCommand?.command_name} payload={savedCommand?.payload}
                      isLoading={isFetchingSavedCommand}/>
      <CCard>
        <CCardHeader>
          Job Status
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol className="mb-5" md="8">
              <Chart
                options={chartOptions}
                series={series}
                type="pie"
                height={380}
              />
            </CCol>
            <CCol className="d-flex justify-content-center align-items-center" md="4">
              <div className="text-center">
                <h5>Time taken (seconds)</h5>
                <Knob value={50} readOnly/>
              </div>
            </CCol>
          </CRow>
          <ProgressBar value={50}/>
        </CCardBody>
      </CCard>
      <JobDevicesCard deviceGroupName={job.group.label} deviceGroupDevices={deviceGroupDevices}/>
    </>
  );

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Required")
      .max(255, 'The name may not be greater than 255 characters.')
      .test('isJobNameUnique', 'The name has already been taken.', isJobNameUniqueDebounced),
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
                  {activeIndex === 2 && renderStep2()}
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
  isCreatingJob: state.job.isCreatingJob,
  createJobErrorMessage: state.device.createJobErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  fetchDeviceGroupOptionsStartAsync: (name) => dispatch(fetchDeviceGroupOptionsStartAsync(name)),
  fetchSavedCommandOptionsStartAsync: (name) => dispatch(fetchSavedCommandOptionsStartAsync(name)),
  fetchSavedCommandStartAsync: (id) => dispatch(fetchSavedCommandStartAsync(id)),
  fetchDeviceGroupDevicesStartAsync: (deviceGroupId, deviceGroupUniqueId) => dispatch(fetchDeviceGroupDevicesStartAsync(deviceGroupId, deviceGroupUniqueId)),
  createJobStartAsync: (data, history) => dispatch(createJobStartAsync(data, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateJob);
