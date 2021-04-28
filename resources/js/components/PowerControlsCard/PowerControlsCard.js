import React, { useRef } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { CCard, CCardBody, CCardFooter, CCardHeader } from '@coreui/react';

import { POWER_CONTROLS_COMMAND_OPTIONS } from '../../data/options';
import { getSanitizedValues } from '../../utils/utils';

import PrimarySecondaryButtons from '../PrimarySecondaryButtons/PrimarySecondaryButtons';
import IotSelectFormGroup from '../IotSelectFormGroup/IotSelectFormGroup';


const PowerControlsCard = ({
                             primaryButtonText,
                             secondaryButtonText,
                             isPrimaryLoading,
                             isSecondaryLoading,
                             isPrimaryDisabled,
                             isSecondaryDisabled,
                             submitCallback,
                             resetCallback
                           }) => {

  const formRef = useRef();

  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
    if (resetCallback) {
      resetCallback();
    }
  };

  const handleReset = () => {
    if (formRef.current) {
      formRef.current.resetForm();
    }
    resetCallback();
  };

  const validationSchema = Yup.object({
    command: Yup.object().shape({
      value: Yup.string().required(),
      label: Yup.string().oneOf(
        POWER_CONTROLS_COMMAND_OPTIONS.map(({label}) => label),
        "Invalid command option"
      ).required("Required")
    }).nullable().required("Required"),
  });

  return (
    <CCard>
      <CCardHeader>
        Power Controls
      </CCardHeader>
      <CCardBody>
        <Formik
          enableReinitialize={true}
          innerRef={formRef}
          initialValues={{
            command: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values, {setSubmitting}) => {
            submitCallback(getSanitizedValues(values));
          }}
        >
          {({values}) => (
            <Form>
              <IotSelectFormGroup
                id="command"
                name="command"
                label="Command"
                placeholder="Enter your command"
                options={POWER_CONTROLS_COMMAND_OPTIONS}
                value={values.command}
                isSearchable
                isClearable
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

export default PowerControlsCard;