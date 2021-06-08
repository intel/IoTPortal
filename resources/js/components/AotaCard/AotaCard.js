import React, { useRef, useState } from 'react';
import { Form, Formik } from 'formik';

import { CCard, CCardBody, CCardFooter, CCardHeader } from '@coreui/react';

import {
  AOTA_APP_OPTIONS,
  AOTA_COMMAND_OPTIONS,
  AOTA_FIELDS_HIDDEN_STATES,
  AOTA_INITIAL_FIELDS_HIDDEN_STATE,
  AOTA_REBOOT_OPTIONS
} from '../../data/options';
import { getSanitizedValues } from '../../utils/utils';
import aotaValidationSchema from '../../schemas/aota/aotaValidationSchema';

import IotTextInputFormGroup from '../../components/IotTextInputFormGroup/IotTextInputFormGroup';
import IotSelectFormGroup from '../../components/IotSelectFormGroup/IotSelectFormGroup';
import PrimarySecondaryButtons from '../../components/PrimarySecondaryButtons/PrimarySecondaryButtons';

const AotaCard = ({
                    primaryButtonText,
                    secondaryButtonText,
                    isPrimaryLoading,
                    isSecondaryLoading,
                    isPrimaryDisabled,
                    isSecondaryDisabled,
                    submitCallback,
                    resetCallback
                  }) => {

  const [commandOptions, setCommandOptions] = useState(AOTA_COMMAND_OPTIONS.docker);
  const [isFieldHidden, setIsFieldHidden] = useState(AOTA_INITIAL_FIELDS_HIDDEN_STATE);

  const formRef = useRef();

  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  };

  const handleReset = () => {
    setIsFieldHidden(AOTA_INITIAL_FIELDS_HIDDEN_STATE);
    if (formRef.current) {
      formRef.current.resetForm();
    }
    if (resetCallback) {
      resetCallback();
    }
  };

  const updateSelectOptions = (name, selectedOption) => {
    if (name === 'app' && selectedOption) {
      handleReset();
      formRef.current.setFieldValue('app', selectedOption);
      setCommandOptions(AOTA_COMMAND_OPTIONS[selectedOption.value]);
      setIsFieldHidden({...AOTA_INITIAL_FIELDS_HIDDEN_STATE, command: false});
    } else if (name === 'app' && !selectedOption) {
      handleReset();
    } else if (name === 'command' && selectedOption) {
      setIsFieldHidden(AOTA_FIELDS_HIDDEN_STATES[formRef.current.values.app.value][selectedOption.value]);
    }
  };

  const validationSchema = aotaValidationSchema(commandOptions, isFieldHidden);

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
            const data = {command: 'AOTA', payload: getSanitizedValues(values)}
            submitCallback(data);
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
                label="Container tag"
                placeholder="Enter container tag"
                isHidden={isFieldHidden.tag}
              />
              <IotSelectFormGroup
                id="reboot"
                name="reboot"
                label="Device reboot"
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
                label="Fetch link"
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
                label="Server username"
                placeholder="Enter server username"
                isHidden={isFieldHidden.server_username}
              />
              <IotTextInputFormGroup
                id="server_password"
                name="server_password"
                label="Server password"
                placeholder="Enter server password"
                isHidden={isFieldHidden.server_password}
              />
              <IotTextInputFormGroup
                id="docker_registry"
                name="docker_registry"
                label="Docker registry"
                placeholder="Enter Docker registry"
                isHidden={isFieldHidden.docker_registry}
              />
              <IotTextInputFormGroup
                id="docker_username"
                name="docker_username"
                label="Docker username"
                placeholder="Enter Docker username"
                isHidden={isFieldHidden.docker_username}
              />
              <IotTextInputFormGroup
                id="docker_password"
                name="docker_password"
                label="Docker password"
                placeholder="Enter Docker password"
                isHidden={isFieldHidden.docker_password}
              />
              <IotTextInputFormGroup
                id="docker_compose_file"
                name="docker_compose_file"
                label="Docker compose file"
                placeholder="Enter Docker Compose file"
                isHidden={isFieldHidden.docker_compose_file}
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

export default AotaCard;