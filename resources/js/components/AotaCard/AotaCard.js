import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { CButton, CCard, CCardBody, CCardFooter, CCardHeader, CSpinner } from '@coreui/react';
import CIcon from '@coreui/icons-react';

import {
  AOTA_APP_OPTIONS,
  AOTA_COMMAND_OPTIONS,
  AOTA_REBOOT_OPTIONS,
  AOTA_INITIAL_FIELDS_HIDDEN_STATE,
  AOTA_FIELDS_HIDDEN_STATES
} from '../../data/options';
import { submitAotaStartAsync } from '../../redux/aota/aota.actions';
import { getSanitizedValues } from '../../utils/utils';

import IotTextInputFormGroup from '../IotTextInputFormGroup/IotTextInputFormGroup';
import IotSelectFormGroup from '../IotSelectFormGroup/IotSelectFormGroup';

const AotaCard = ({deviceId, isSubmittingAota, submitAotaStartAsync}) => {
  const [commandOptions, setCommandOptions] = useState(AOTA_COMMAND_OPTIONS.docker);
  const [isFieldHidden, setFieldHidden] = useState(AOTA_INITIAL_FIELDS_HIDDEN_STATE);

  const formRef = useRef();

  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  };

  const handleReset = () => {
    setFieldHidden(AOTA_INITIAL_FIELDS_HIDDEN_STATE);
    if (formRef.current) {
      formRef.current.resetForm();
    }
  };

  const validationObject = {
    app: Yup.object().shape({
      value: Yup.string().required(),
      label: Yup.string().oneOf(
        AOTA_APP_OPTIONS.map(({label}) => label),
        "Invalid application type"
      ).required("Required")
    }).nullable().required("Required"),
    command: Yup.object().shape({
      value: Yup.string().required(),
      label: Yup.string().oneOf(
        commandOptions.map(({label}) => label),
        "Invalid command selection"
      ).required("Required")
    }).nullable().required("Required")
  };

  if (!isFieldHidden.tag) validationObject.tag = Yup.string().required("Required");
  if (!isFieldHidden.reboot) validationObject.reboot = Yup.object().shape({
    value: Yup.string().required(),
    label: Yup.string().oneOf(
      AOTA_REBOOT_OPTIONS.map(({label}) => label),
      "Please select Yes or No only"
    ).required("Required")
  }).nullable().required("Required");
  if (!isFieldHidden.fetch_link) validationObject.fetch_link = Yup.string().required("Required");
  if (!isFieldHidden.signature) validationObject.signature = Yup.string().required("Required");
  if (!isFieldHidden.version) validationObject.version = Yup.string().when(['app', 'command'], {
    is: (app, command) => app.value === 'docker' && command.value === 'remove',
    then: Yup.string().required("Required"),
    otherwise: Yup.string(),
  });
  if (!isFieldHidden.server_username) validationObject.server_username = Yup.string();
  if (!isFieldHidden.server_password) validationObject.server_password = Yup.string();
  if (!isFieldHidden.docker_registry) validationObject.docker_registry = Yup.string();
  if (!isFieldHidden.docker_username) validationObject.docker_username = Yup.string();
  if (!isFieldHidden.docker_password) validationObject.docker_password = Yup.string();
  if (!isFieldHidden.docker_compose_file) validationObject.docker_compose_file = Yup.string();

  const validationSchema = Yup.object(validationObject);

  const updateSelectOptions = (name, selectedOption) => {
    if (name === 'app' && selectedOption) {
      handleReset();
      formRef.current.setFieldValue('app', selectedOption);
      setCommandOptions(AOTA_COMMAND_OPTIONS[selectedOption.value]);
      setFieldHidden({...AOTA_INITIAL_FIELDS_HIDDEN_STATE, command: false});
      // Reset form fields hidden state when command dropdown is different than the previous one
      // if (AOTA_COMMAND_OPTIONS[selectedOption.value].find((element) => (element.value === formRef.current.values.command.value)) !== undefined) {
      //   setFieldHidden(AOTA_FIELDS_HIDDEN_STATES[selectedOption.value][formRef.current.values.command.value]);
      // }
    } else if (name === 'app' && !selectedOption) {
      handleReset();
    } else if (name === 'command' && selectedOption) {
      setFieldHidden(AOTA_FIELDS_HIDDEN_STATES[formRef.current.values.app.value][selectedOption.value]);
    }
  };

  return (
    <CCard>
      <CCardHeader>
        Application OTA Update
      </CCardHeader>
      <CCardBody>
        <Formik
          enableReinitialize={true}
          innerRef={formRef}
          initialValues={{
            app: '',
            command: '',
            tag: '',
            reboot: '',
            fetch_link: '',
            signature: '',
            version: '',
            server_username: '',
            server_password: '',
            docker_registry: '',
            docker_username: '',
            docker_password: '',
            docker_compose_file: ''
          }}
          validationSchema={validationSchema}
          onSubmit={(values, {setSubmitting}) => {
            submitAotaStartAsync(deviceId, getSanitizedValues(values));
            // setTimeout(() => {
            //   alert(JSON.stringify(values, null, 2));
            //   setSubmitting(false);
            // }, 4000);
          }}
        >
          {({values}) => (
            <Form>
              <IotSelectFormGroup
                id="app"
                name="app"
                label="Application"
                placeholder="Choose your application"
                options={AOTA_APP_OPTIONS}
                value={values.app}
                updateSelectOptions={updateSelectOptions}
                isHidden={isFieldHidden.app}
                isSearchable
                isClearable
              />
              <IotSelectFormGroup
                id="command"
                name="command"
                label="Command"
                placeholder="Enter your command"
                options={commandOptions}
                value={values.command}
                updateSelectOptions={updateSelectOptions}
                isHidden={isFieldHidden.command}
                isSearchable
                isClearable
              />
              <IotTextInputFormGroup
                id="tag"
                name="tag"
                label="Container Tag"
                placeholder="Enter container tag"
                isHidden={isFieldHidden.tag}
              />
              <IotSelectFormGroup
                id="reboot"
                name="reboot"
                label="Device Reboot"
                placeholder="Choose device reboot"
                options={AOTA_REBOOT_OPTIONS}
                value={values.reboot}
                isHidden={isFieldHidden.reboot}
                isSearchable
                isClearable
              />
              <IotTextInputFormGroup
                id="fetch_link"
                name="fetch_link"
                label="Fetch Link"
                placeholder="Enter fetch link"
                isHidden={isFieldHidden.fetch_link}
              />
              <IotTextInputFormGroup
                id="signature"
                name="signature"
                label="Signature"
                placeholder="Enter signature"
                isHidden={isFieldHidden.signature}
              />
              <IotTextInputFormGroup
                id="version"
                name="version"
                label="Version"
                placeholder="Enter version"
                isHidden={isFieldHidden.version}
              />
              <IotTextInputFormGroup
                id="server_username"
                name="server_username"
                label="Server Username"
                placeholder="Enter server username"
                isHidden={isFieldHidden.server_username}
              />
              <IotTextInputFormGroup
                id="server_password"
                name="server_password"
                label="Server Password"
                placeholder="Enter server password"
                isHidden={isFieldHidden.server_password}
              />
              <IotTextInputFormGroup
                id="docker_registry"
                name="docker_registry"
                label="Docker Registry"
                placeholder="Enter Docker registry"
                isHidden={isFieldHidden.docker_registry}
              />
              <IotTextInputFormGroup
                id="docker_username"
                name="docker_username"
                label="Docker Username"
                placeholder="Enter Docker username"
                isHidden={isFieldHidden.docker_username}
              />
              <IotTextInputFormGroup
                id="docker_password"
                name="docker_password"
                label="Docker Password"
                placeholder="Enter Docker password"
                isHidden={isFieldHidden.docker_password}
              />
              <IotTextInputFormGroup
                id="docker_compose_file"
                name="docker_compose_file"
                label="Docker Compose File"
                placeholder="Enter Docker Compose file"
                isHidden={isFieldHidden.docker_compose_file}
              />
            </Form>
          )}
        </Formik>
      </CCardBody>
      <CCardFooter>
        <CButton type="submit" size="sm" color="primary" onClick={handleSubmit} disabled={isSubmittingAota}>
          {isSubmittingAota ? <CSpinner color="white" size="sm"/> : <CIcon name="cil-scrubber"/>} Submit
        </CButton>
        <CButton type="reset" size="sm" color="danger" className="ml-3" onClick={handleReset}
                 disabled={isSubmittingAota}>
          <CIcon name="cil-ban"/> Reset
        </CButton>
      </CCardFooter>
    </CCard>
  );
};

const mapStateToProps = state => ({
  isSubmittingAota: state.aota.isSubmittingAota
});

const mapDispatchToPros = dispatch => ({
  submitAotaStartAsync: (id, data) => dispatch(submitAotaStartAsync(id, data))
});

export default connect(mapStateToProps, mapDispatchToPros)(AotaCard);