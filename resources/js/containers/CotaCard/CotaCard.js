import React, { useRef, useState } from 'react';
import { FieldArray, Form, Formik } from 'formik';
import * as Yup from 'yup';

import { CButton, CCard, CCardBody, CCardFooter, CCardHeader, CCol, CFormGroup, CLabel } from '@coreui/react';
import CIcon from '@coreui/icons-react';

import {
  COTA_COMMAND_OPTIONS,
  COTA_CONFIGURATION_PATH_OPTIONS,
  COTA_FIELDS_HIDDEN_STATES,
  COTA_INITIAL_FIELDS_HIDDEN_STATE,
} from '../../data/options';
import { Configuration } from '../../models/Configuration';
import { getSanitizedValues } from '../../utils/utils';

import FormikPatchTouched from '../../reusable/FormikPatchTouched';
import IotSelectFormGroup from '../../components/IotSelectFormGroup/IotSelectFormGroup';
import IotTextInputFormGroup from '../../components/IotTextInputFormGroup/IotTextInputFormGroup';
import PrimarySecondaryButtons from '../../components/PrimarySecondaryButtons/PrimarySecondaryButtons';

const CotaCard = ({
                    primaryButtonText,
                    secondaryButtonText,
                    isPrimaryLoading,
                    isSecondaryLoading,
                    isPrimaryDisabled,
                    isSecondaryDisabled,
                    submitCallback,
                    resetCallback
                  }) => {

  const [isFieldHidden, setFieldHidden] = useState(COTA_INITIAL_FIELDS_HIDDEN_STATE);

  const formRef = useRef();

  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  };

  const handleReset = () => {
    setFieldHidden(COTA_INITIAL_FIELDS_HIDDEN_STATE);
    if (formRef.current) {
      formRef.current.resetForm();
    }
    if (resetCallback) {
      resetCallback();
    }
  };

  const validationObject = {
    command: Yup.object().shape({
      value: Yup.string().required(),
      label: Yup.string().oneOf(
        COTA_COMMAND_OPTIONS.map(({label}) => label),
        "Invalid command selection"
      ).required("Required")
    }).nullable().required("Required")
  };
  if (!isFieldHidden.fetch_link) validationObject.fetch_link = Yup.string().required("Required");
  if (!isFieldHidden.configurations) validationObject.configurations = Yup.array().of(
    Yup.object().shape({
      path: Yup.object().shape({
        value: Yup.string().required(),
        label: Yup.string().oneOf(
          COTA_CONFIGURATION_PATH_OPTIONS.map(({label}) => label),
          "Invalid configuration path selection"
        ).required("Required")
      }).nullable().required("Required").test("uniqueConfigurationPath", "Configuration paths need to be unique", function (value) {
        const configurationsArr = this.from[2].value.configurations.map(configuration => (configuration.path ? configuration.path.value : null)).filter(Boolean);
        return value ? configurationsArr.reduce((accumulator, currentValue) => accumulator + (currentValue === value.value), 0) < 2 : true;
      }),
      // Using .test() instead of .when() because of accessing parent schema not possible in current Yup version
      // https://github.com/jquense/yup/issues/225#issuecomment-692315453
      value: Yup.string().test('configurationValueRequired', 'Required', function (value) {
        return this.from[1].value.command === null ? true : (this.from[1].value.command.value === 'set') ?
          Yup.string().required().isValidSync(value) : true;
      })
    })
  ).required("Required")
  if (!isFieldHidden.signature) validationObject.signature = Yup.string().required("Required");

  const validationSchema = Yup.object(validationObject);

  const updateSelectOptions = (name, selectedOption) => {
    if (name === 'command' && selectedOption) {
      handleReset();
      formRef.current.setFieldValue('command', selectedOption);
      setFieldHidden(COTA_FIELDS_HIDDEN_STATES[selectedOption.value]);
    } else if (name === 'command' && !selectedOption) {
      handleReset();
    }
  };

  return (
    <CCard>
      <CCardHeader>
        Configuration OTA Update
      </CCardHeader>
      <CCardBody>
        <Formik
          innerRef={formRef}
          initialValues={{
            command: '',
            fetch_link: '',
            configurations: [new Configuration()],
            signature: ''
          }}
          validationSchema={validationSchema}
          onSubmit={(values, {setSubmitting}) => {
            const data = {command: 'cota', payload: getSanitizedValues(values)}
            submitCallback(data);
          }}
        >
          {({values}) => (
            <Form>
              <FormikPatchTouched/>
              <IotSelectFormGroup
                id="command"
                name="command"
                label="Command (get, load, set, append, remove)"
                placeholder="Enter your command"
                options={COTA_COMMAND_OPTIONS}
                updateSelectOptions={updateSelectOptions}
                isHidden={isFieldHidden.command}
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
              {!isFieldHidden.configurations && (
                <>
                  <CLabel htmlFor="configurations">Configurations</CLabel>
                  <FieldArray
                    id="configurations"
                    name="configurations"
                    render={arrayHelpers => (
                      values.configurations && values.configurations.length > 0 ? (
                        values.configurations.map((configuration, index) => (
                          <CFormGroup row key={index}>
                            <CCol sm={isFieldHidden.configuration_values ? 10 : 5}>
                              <IotSelectFormGroup
                                id={`configurations.${index}.path`}
                                name={`configurations.${index}.path`}
                                placeholder={`Enter configuration path ${index + 1}`}
                                options={COTA_CONFIGURATION_PATH_OPTIONS}
                                value={configuration.path}
                                updateSelectOptions={updateSelectOptions}
                                isLabelHidden
                                isSearchable
                                isClearable
                              />
                            </CCol>
                            {!isFieldHidden.configuration_values && (
                              <CCol sm="5">
                                <IotTextInputFormGroup
                                  id={`configurations.${index}.value`}
                                  name={`configurations.${index}.value`}
                                  placeholder={`Enter configuration value ${index + 1}`}
                                  isDisabled={values.command.value === 'get'}
                                  isLabelHidden
                                />
                              </CCol>
                            )}
                            <CCol sm="2">
                              {values.configurations.length > 1 && (
                                <CButton size="sm" color="danger" className="mr-1 mb-1"
                                         onClick={() => arrayHelpers.remove(index)}>
                                  <CIcon size="sm" name="cil-minus"/></CButton>
                              )}
                              <CButton size="sm" color="primary" className="mr-1 mb-1"
                                       onClick={() => arrayHelpers.insert(index + 1, new Configuration())}>
                                <CIcon size="sm" name="cil-plus"/></CButton>
                            </CCol>
                          </CFormGroup>
                        ))
                      ) : (<CButton color="primary" className="m-2"
                                    onClick={() => arrayHelpers.push(new Configuration())}>Add configuration</CButton>)
                    )}
                  />
                </>
              )}
              <IotTextInputFormGroup
                id="signature"
                name="signature"
                label="Signature"
                placeholder="Enter signature"
                isHidden={isFieldHidden.signature}
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

export default CotaCard;