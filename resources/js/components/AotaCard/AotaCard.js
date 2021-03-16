import React, { useRef, useState } from 'react'
import { connect } from 'react-redux';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { Toaster } from 'react-hot-toast';
import { CButton, CCard, CCardBody, CCardFooter, CCardHeader, CSpinner } from '@coreui/react'
import CIcon from '@coreui/icons-react'

import {
  APP_OPTIONS,
  COMMAND_OPTIONS,
  REBOOT_OPTIONS,
  INITIAL_AOTA_FIELDS_HIDDEN_STATE,
  AOTA_FIELDS_HIDDEN_STATES
} from '../../data/options';

import { submitAotaStartAsync } from '../../redux/aota/aota.actions';

import IotTextInput from '../IotTextInput/IotTextInput';
import IotSelect from '../IotSelect/IotSelect';

const AotaCard = ({deviceId, isSubmittingAota, submitAotaStartAsync}) => {
  const [appOptions, setAppOptions] = useState(APP_OPTIONS);
  const [commandOptions, setCommandOptions] = useState(COMMAND_OPTIONS.docker);
  const [rebootOptions, setRebootOptions] = useState(REBOOT_OPTIONS);

  const [isFieldHidden, setFieldHidden] = useState(INITIAL_AOTA_FIELDS_HIDDEN_STATE);

  const formRef = useRef()

  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  }

  const handleReset = () => {
    if (formRef.current) {
      formRef.current.resetForm();
      setFieldHidden(INITIAL_AOTA_FIELDS_HIDDEN_STATE);
    }

  }

  const updateSelectOptions = (name, selectedOption) => {
    if (name === 'app') {
      setCommandOptions(COMMAND_OPTIONS[selectedOption]);
      setFieldHidden({...INITIAL_AOTA_FIELDS_HIDDEN_STATE, command: false});
      if (COMMAND_OPTIONS[selectedOption].find((element) => (element.value === formRef.current.values.command)) !== undefined) {
        setFieldHidden(AOTA_FIELDS_HIDDEN_STATES[selectedOption][formRef.current.values.command]);
      }
    } else if (name === 'command') {
      setFieldHidden(AOTA_FIELDS_HIDDEN_STATES[formRef.current.values.app][selectedOption]);
    }
  }

  const validationObject = {
    app: Yup.string()
      .oneOf(
        appOptions.map(({value}) => value),
        "Invalid application type"
      )
      .required("Required"),
    command: Yup.string()
      .oneOf(
        commandOptions.map(({value}) => value),
        "Invalid command selection"
      ).required("Required"),
  };

  if (!isFieldHidden.tag) validationObject.tag = Yup.string().required("Required");
  if (!isFieldHidden.reboot) validationObject.reboot = Yup.boolean().oneOf(
    rebootOptions.map(({value}) => value),
    "Please select Yes or No only"
  ).required("Required");
  if (!isFieldHidden.fetch_link) validationObject.fetch_link = Yup.string().required("Required");
  if (!isFieldHidden.signature) validationObject.signature = Yup.string().required("Required");
  if (!isFieldHidden.version) validationObject.version = Yup.string().required("Required");
  if (!isFieldHidden.server_username) validationObject.server_username = Yup.string().required("Required");
  if (!isFieldHidden.server_password) validationObject.server_password = Yup.string().required("Required");
  if (!isFieldHidden.docker_registry) validationObject.docker_registry = Yup.string().required("Required");
  if (!isFieldHidden.docker_username) validationObject.docker_username = Yup.string().required("Required");
  if (!isFieldHidden.docker_password) validationObject.docker_password = Yup.string().required("Required");
  if (!isFieldHidden.docker_compose_file) validationObject.docker_compose_file = Yup.string().required("Required");

  const validationSchema = Yup.object(validationObject);

  return (
    <CCard>
      <CCardHeader>
        Application OTA Update
      </CCardHeader>
      <CCardBody>
        <Formik
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
            submitAotaStartAsync(deviceId, values);
            // setTimeout(() => {
            //   alert(JSON.stringify(values, null, 2));
            //   setSubmitting(false);
            // }, 4000);

          }}
        >
          <Form>
            <IotSelect
              id="app"
              label="Application"
              name="app"
              placeholder="Choose your application"
              options={appOptions}
              updateSelectOptions={updateSelectOptions}
              isSearchable
            />
            <IotSelect
              id="command"
              label="Command"
              name="command"
              placeholder="Enter your command"
              options={commandOptions}
              updateSelectOptions={updateSelectOptions}
              isSearchable
              isHidden={isFieldHidden.command}
            />
            <IotTextInput
              id="tag"
              label="Container Tag"
              name="tag"
              placeholder="Enter container tag"
              isHidden={isFieldHidden.tag}
            />
            <IotSelect
              id="reboot"
              label="Device Reboot"
              name="reboot"
              placeholder="Choose device reboot"
              options={rebootOptions}
              isSearchable
              isHidden={isFieldHidden.reboot}
            />
            <IotTextInput
              id="fetch_link"
              label="Fetch Link"
              name="fetch_link"
              placeholder="Enter fetch link"
              isHidden={isFieldHidden.fetch_link}
            />
            <IotTextInput
              id="signature"
              label="Signature"
              name="signature"
              placeholder="Enter signature"
              isHidden={isFieldHidden.signature}
            />
            <IotTextInput
              id="version"
              label="Version"
              name="version"
              placeholder="Enter version"
              isHidden={isFieldHidden.version}
            />
            <IotTextInput
              id="server_username"
              label="Server Username"
              name="server_username"
              placeholder="Enter server username"
              isHidden={isFieldHidden.server_username}
            />
            <IotTextInput
              id="server_password"
              label="Server Password"
              name="server_password"
              placeholder="Enter server password"
              isHidden={isFieldHidden.server_password}
            />
            <IotTextInput
              id="docker_registry"
              label="Docker Registry"
              name="docker_registry"
              placeholder="Enter Docker registry"
              isHidden={isFieldHidden.docker_registry}
            />
            <IotTextInput
              id="docker_username"
              label="Docker Username"
              name="docker_username"
              placeholder="Enter Docker username"
              isHidden={isFieldHidden.docker_username}
            />
            <IotTextInput
              id="docker_password"
              label="Docker Password"
              name="docker_password"
              placeholder="Enter Docker password"
              isHidden={isFieldHidden.docker_password}
            />
            <IotTextInput
              id="docker_compose_file"
              label="Docker Compose File"
              name="docker_compose_file"
              placeholder="Enter Docker Compose file"
              isHidden={isFieldHidden.docker_compose_file}
            />
          </Form>
        </Formik>
      </CCardBody>
      <CCardFooter>
        <CButton type="submit" size="sm" color="primary" onClick={handleSubmit} disabled={isSubmittingAota}>
          {isSubmittingAota ? <CSpinner color="white" size="sm"/> : <CIcon name="cil-scrubber"/>} Submit
        </CButton>
        <CButton type="reset" size="sm" color="danger" className="ml-3" onClick={handleReset} disabled={isSubmittingAota}>
          <CIcon name="cil-ban"/> Reset
        </CButton>
      </CCardFooter>
      <Toaster/>
    </CCard>
  )
}

const mapStateToProps = state => ({
  isSubmittingAota: state.aota.isSubmittingAota
});

const mapDispatchToPros = dispatch => ({
  submitAotaStartAsync: (id, data) => dispatch(submitAotaStartAsync(id, data))
});

export default connect(mapStateToProps, mapDispatchToPros)(AotaCard);