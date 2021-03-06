/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import React, { useRef, useState } from 'react';
import { Form, Formik } from 'formik';

import { CCard, CCardBody, CCardFooter, CCardHeader } from '@coreui/react';

import {
  SOTA_COMMAND_OPTIONS,
  SOTA_FIELDS_HIDDEN_STATES,
  SOTA_INITIAL_FIELDS_HIDDEN_STATE,
  SOTA_LOG_TO_FILE_OPTIONS,
  SOTA_OPTIONS
} from '../../data/options';
import { getSanitizedValues } from '../../utils/utils';
import sotaValidationSchema from '../../schemas/sota/sotaValidationSchema';

import IotSelectFormGroup from '../IotSelectFormGroup/IotSelectFormGroup';
import IotTextInputFormGroup from '../IotTextInputFormGroup/IotTextInputFormGroup';
import PrimarySecondaryButtons from '../PrimarySecondaryButtons/PrimarySecondaryButtons';

const SotaCard = ({
                    primaryButtonText,
                    secondaryButtonText,
                    isPrimaryLoading,
                    isSecondaryLoading,
                    isPrimaryDisabled,
                    isSecondaryDisabled,
                    submitCallback,
                    resetCallback
                  }) => {

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
    if (resetCallback) {
      resetCallback();
    }
  };

  const updateSelectOptions = (name, selectedOption) => {
    if (name === 'sota_option' && selectedOption) {
      handleReset();
      formRef.current.setFieldValue('sota_option', selectedOption);
      setFieldHidden(SOTA_FIELDS_HIDDEN_STATES[selectedOption.value]);
    } else if (name === 'sota_option' && !selectedOption) {
      handleReset();
    }
  };

  const validationSchema = sotaValidationSchema(isFieldHidden);

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
            const data = {command: 'SOTA', payload: getSanitizedValues(values)}
            submitCallback(data);
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
        <PrimarySecondaryButtons primaryButtonText={primaryButtonText} secondaryButtonText={secondaryButtonText}
                                 isPrimaryLoading={isPrimaryLoading} isSecondaryLoading={isSecondaryLoading}
                                 isPrimaryDisabled={isPrimaryDisabled} isSecondaryDisabled={isSecondaryDisabled}
                                 onClickPrimary={handleSubmit} onClickSecondary={handleReset}/>
      </CCardFooter>
    </CCard>
  );
};

export default SotaCard;