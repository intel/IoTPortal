import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Form, Formik } from 'formik';
import { Toaster } from 'react-hot-toast';
import { Steps } from 'primereact/steps';
import { CAlert, CCard, CCardBody, CCardFooter, CCardHeader, CCol, CRow } from '@coreui/react';

import { getSanitizedValues, isNotEmptyString } from '../../utils/utils';
import createDeviceJobValidationSchema from '../../schemas/deviceJob/createDeviceJobValidationSchema';
import { createDeviceJobStartAsync } from '../../redux/deviceJob/deviceJob.actions';
import {
  fetchDeviceGroupDevicesStartAsync,
  fetchDeviceGroupOptionsStartAsync,
  fetchDeviceGroupStartAsync
} from '../../redux/deviceGroup/deviceGroup.actions';
import {
  fetchSavedCommandOptionsStartAsync,
  fetchSavedCommandStartAsync
} from '../../redux/savedCommand/savedCommand.actions';

import {
  selectDeviceGroupDevices,
  selectDeviceGroupName,
  selectDeviceGroupOptions,
  selectIsFetchingDeviceGroupOptions
} from '../../redux/deviceGroup/deviceGroup.selectors';
import {
  selectIsFetchingSavedCommandOptions,
  selectSavedCommandCommandName,
  selectSavedCommandName,
  selectSavedCommandOptions,
  selectSavedCommandPayload
} from '../../redux/savedCommand/savedCommand.selectors';

import IotTextInputFormGroup from '../../components/IotTextInputFormGroup/IotTextInputFormGroup';
import IotSelectFormGroup from '../../components/IotSelectFormGroup/IotSelectFormGroup';
import PrimarySecondaryButtons from '../../components/PrimarySecondaryButtons/PrimarySecondaryButtons';
import DeviceJobDetailsCard from '../../components/DeviceJobDetailsCard/DeviceJobDetailsCard';
import DeviceJobDevicesCard from '../../components/DeviceJobDevicesCard/DeviceJobDevicesCard';

const CreateDeviceJob = ({
                           history,
                           deviceGroupOptions,
                           isFetchingDeviceGroupOptions,
                           savedCommandOptions,
                           isFetchingSavedCommandOptions,
                           deviceGroupName,
                           savedCommandName,
                           commandName,
                           payload,
                           deviceGroupDevices,
                           fetchDeviceGroupOptionsStartAsync,
                           fetchSavedCommandOptionsStartAsync,
                           fetchDeviceGroupStartAsync,
                           fetchSavedCommandStartAsync,
                           fetchDeviceGroupDevicesStartAsync,
                           createDeviceJobStartAsync
                         }) => {

  const [tempDeviceJob, setTempDeviceJob] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const formRef = useRef();

  useEffect(() => {
    fetchDeviceGroupOptionsStartAsync();
    fetchSavedCommandOptionsStartAsync();
  }, []);

  const steps = [
    {label: 'Enter device job details'},
    {label: 'Confirmation'},
  ];

  const handleStep0 = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  };

  const handleStep1 = () => {
    const sanitizedValues = getSanitizedValues(formRef.current.values);
    createDeviceJobStartAsync(sanitizedValues, history);
  };

  const handleReset = async () => {
    if (formRef.current) {
      formRef.current.resetForm();
    }
    setTempDeviceJob(null);
    setActiveIndex(0);
  };

  const onSubmit = (values, {setSubmitting}) => {
    setTempDeviceJob(values);
    setActiveIndex(activeIndex + 1);

    fetchDeviceGroupStartAsync(values.device_group.value);
    fetchSavedCommandStartAsync(values.saved_command.value);
    fetchDeviceGroupDevicesStartAsync(values.device_group.value);
  };

  const renderStep0 = () => (
    <>
      <IotTextInputFormGroup
        id="device_job_name"
        name="device_job_name"
        label="Device job name"
        placeholder="Enter device job name"
      />
      <IotSelectFormGroup
        id="device_group"
        name="device_group"
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
      <DeviceJobDetailsCard deviceGroupName={deviceGroupName} savedCommandName={savedCommandName}
                            commandName={commandName} payload={payload}/>
      <DeviceJobDevicesCard deviceGroupName={deviceGroupName} deviceJobDevices={deviceGroupDevices}/>
    </>
  );

  const validationSchema = createDeviceJobValidationSchema(deviceGroupOptions, savedCommandOptions);

  return (
    <>
      <CRow>
        <CCol xs="12" md="12" className="mb-4">
          <CCard>
            <CCardHeader>
              Create new device job
              {isNotEmptyString(tempDeviceJob?.name) && (<>: <b>{tempDeviceJob.name}</b></>)}
            </CCardHeader>
            <CCardBody>
              <Steps className="mb-5" model={steps} activeIndex={activeIndex}
                     onSelect={(e) => setActiveIndex(e.index)}/>
              {activeIndex === 0 &&
              <CAlert color="secondary">To create a new device job, enter a job name, select a device group and saved
                command to proceed.</CAlert>}
              <Formik
                enableReinitialize={true}
                innerRef={formRef}
                initialValues={{
                  device_job_name: '',
                  device_group: '',
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

const mapStateToProps = createStructuredSelector({
  deviceGroupOptions: selectDeviceGroupOptions,
  isFetchingDeviceGroupOptions: selectIsFetchingDeviceGroupOptions,
  savedCommandOptions: selectSavedCommandOptions,
  isFetchingSavedCommandOptions: selectIsFetchingSavedCommandOptions,
  deviceGroupName: selectDeviceGroupName,
  savedCommandName: selectSavedCommandName,
  commandName: selectSavedCommandCommandName,
  payload: selectSavedCommandPayload,
  deviceGroupDevices: selectDeviceGroupDevices,
});

const mapDispatchToProps = dispatch => ({
  fetchDeviceGroupOptionsStartAsync: (name) => dispatch(fetchDeviceGroupOptionsStartAsync(name)),
  fetchSavedCommandOptionsStartAsync: (name) => dispatch(fetchSavedCommandOptionsStartAsync(name)),
  fetchDeviceGroupStartAsync: (id) => dispatch(fetchDeviceGroupStartAsync(id)),
  fetchSavedCommandStartAsync: (id) => dispatch(fetchSavedCommandStartAsync(id)),
  fetchDeviceGroupDevicesStartAsync: (deviceGroupId, deviceGroupUniqueId) => dispatch(fetchDeviceGroupDevicesStartAsync(deviceGroupId, deviceGroupUniqueId)),
  createDeviceJobStartAsync: (data, history) => dispatch(createDeviceJobStartAsync(data, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateDeviceJob);
