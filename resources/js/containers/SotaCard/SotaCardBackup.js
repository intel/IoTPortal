import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { CButton, CCard, CCardBody, CCardFooter, CCardHeader, CSpinner } from '@coreui/react';
import CIcon from '@coreui/icons-react';

import {
  SOTA_OPTIONS,
  SOTA_COMMAND_OPTIONS,
  SOTA_LOG_TO_FILE_OPTIONS,
  SOTA_INITIAL_FIELDS_HIDDEN_STATE,
  SOTA_FIELDS_HIDDEN_STATES
} from '../../data/options';
import { submitSotaStartAsync } from '../../redux/sota/sota.actions';
import { getSanitizedValues } from '../../utils/utils';

import IotSelectFormGroup from '../../components/IotSelectFormGroup/IotSelectFormGroup';
import IotTextInputFormGroup from '../../components/IotTextInputFormGroup/IotTextInputFormGroup';

const SotaCard = ({deviceId, isSubmittingSota, submitSotaStartAsync}) => {
  const [isFieldHidden, setFieldHidden] = useState(SOTA_INITIAL_FIELDS_HIDDEN_STATE);

  const formRef = useRef();

  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  };

  const handleReset = () => {
    setFieldHidden(SOTA_INITIAL_FIELDS_HIDDEN_STATE);
    if (formRef.current) {
      formRef.current.resetForm();
    }
  };

  const validationObject = {
    sota_option: Yup.object().shape({
      value: Yup.string().required(),
      label: Yup.string().oneOf(
        SOTA_OPTIONS.map(({label}) => label),
        "Invalid SOTA option"
      ).required("Required")
    }).nullable().required("Required"),
    command: Yup.object().shape({
      value: Yup.string().required(),
      label: Yup.string().oneOf(
        SOTA_COMMAND_OPTIONS.map(({label}) => label),
        "Invalid command selection"
      ).required("Required")
    }).nullable().required("Required")
  };

  if (!isFieldHidden.fetch_link) validationObject.fetch_link = Yup.string().required("Required");
  if (!isFieldHidden.log_to_file) validationObject.log_to_file = Yup.object().shape({
    value: Yup.string(),
    label: Yup.string().oneOf(
      SOTA_LOG_TO_FILE_OPTIONS.map(({label}) => label),
      "Please select Yes or No only"
    )
  });
  if (!isFieldHidden.username) validationObject.username = Yup.string();
  if (!isFieldHidden.password) validationObject.password = Yup.string();

  const validationSchema = Yup.object(validationObject);

  const updateSelectOptions = (name, selectedOption) => {
    if (name === 'sota_option' && selectedOption) {
      handleReset();
      formRef.current.setFieldValue('sota_option', selectedOption);
      setFieldHidden(SOTA_FIELDS_HIDDEN_STATES[selectedOption.value]);
    } else if (name === 'sota_option' && !selectedOption) {
      handleReset();
    }
  };

  return (
    <CCard>
      <CCardHeader>
        Software OTA Update
      </CCardHeader>
      <CCardBody>
        <Formik
          enableReinitialize={true}
          innerRef={formRef}
          initialValues={{
            sota_option: '',
            command: SOTA_COMMAND_OPTIONS[0],
            fetch_link: '',
            log_to_file: '',
            username: '',
            password: ''
          }}
          validationSchema={validationSchema}
          onSubmit={(values, {setSubmitting}) => {
            submitSotaStartAsync(deviceId, getSanitizedValues(values));
          }}
        >
          {({values}) => (
            <Form>
              <IotSelectFormGroup
                id="sota_option"
                name="sota_option"
                label="SOTA option"
                placeholder="Enter your SOTA option"
                options={SOTA_OPTIONS}
                value={values.sota_option}
                updateSelectOptions={updateSelectOptions}
                isHidden={isFieldHidden.sota_option}
                isSearchable
                isClearable
              />
              <IotSelectFormGroup
                id="command"
                name="command"
                label="Command"
                defaultValue={SOTA_COMMAND_OPTIONS[0]}
                placeholder="Enter your command"
                options={SOTA_COMMAND_OPTIONS}
                value={values.command}
                isHidden={isFieldHidden.command}
                isDisabled
              />
              <IotTextInputFormGroup
                id="fetch_link"
                name="fetch_link"
                label="Fetch link"
                placeholder="Enter fetch link"
                isHidden={isFieldHidden.fetch_link}
              />
              <IotSelectFormGroup
                id="log_to_file"
                name="log_to_file"
                label="Log to file (No, Yes)"
                placeholder="Log to file (No, Yes)"
                options={SOTA_LOG_TO_FILE_OPTIONS}
                value={values.log_to_file}
                isHidden={isFieldHidden.log_to_file}
                isSearchable
                isClearable
              />
              <IotTextInputFormGroup
                id="username"
                name="username"
                label="Username"
                placeholder="Enter username"
                isHidden={isFieldHidden.username}
              />
              <IotTextInputFormGroup
                id="password"
                name="password"
                label="Password"
                placeholder="Enter password"
                isHidden={isFieldHidden.password}
              />
            </Form>
          )}
        </Formik>
      </CCardBody>
      <CCardFooter>
        <CButton type="submit" size="sm" color="primary" onClick={handleSubmit} disabled={isSubmittingSota}>
          {isSubmittingSota ? <CSpinner color="white" size="sm"/> : <CIcon name="cil-scrubber"/>} Submit
        </CButton>
        <CButton type="reset" size="sm" color="danger" className="ml-3" onClick={handleReset}
                 disabled={isSubmittingSota}>
          <CIcon name="cil-ban"/> Reset
        </CButton>
      </CCardFooter>
    </CCard>
  );
};

const mapStateToProps = state => ({
  isSubmittingSota: state.sota.isSubmittingSota
});

const mapDispatchToPros = dispatch => ({
  submitSotaStartAsync: (id, data) => dispatch(submitSotaStartAsync(id, data))
});

export default connect(mapStateToProps, mapDispatchToPros)(SotaCard);