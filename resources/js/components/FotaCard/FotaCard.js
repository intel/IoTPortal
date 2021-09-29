/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import React, { useRef } from 'react';
import { Form, Formik } from 'formik';

import { CCard, CCardBody, CCardFooter, CCardHeader } from '@coreui/react';

import { getSanitizedValues } from '../../utils/utils';
import fotaValidationSchema from '../../schemas/fota/fotaValidationSchema';

import IotTextInputFormGroup from '../IotTextInputFormGroup/IotTextInputFormGroup';
import PrimarySecondaryButtons from '../PrimarySecondaryButtons/PrimarySecondaryButtons';

const FotaCard = ({
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

  const validationSchema = fotaValidationSchema();

  return (
    <CCard>
      <CCardHeader>
        Firmware OTA Update
      </CCardHeader>
      <CCardBody>
        <Formik
          enableReinitialize={true}
          innerRef={formRef}
          initialValues={{
            bios_version: '',
            fetch_link: '',
            manufacturer: '',
            path: '',
            product: '',
            release_date: '',
            signature: '',
            tool_options: '',
            vendor: '',
            server_username: '',
            server_password: ''
          }}
          validationSchema={validationSchema}
          onSubmit={(values, {setSubmitting}) => {
            const data = {command: 'FOTA', payload: getSanitizedValues(values)}
            submitCallback(data);
          }}
        >
          <Form>
            <IotTextInputFormGroup
              id="bios_version"
              name="bios_version"
              label="BIOS version"
              placeholder="Enter BIOS version"
            />
            <IotTextInputFormGroup
              id="fetch_link"
              name="fetch_link"
              label="Fetch link"
              placeholder="Enter fetch link"
            />
            <IotTextInputFormGroup
              id="manufacturer"
              name="manufacturer"
              label="Manufacturer"
              placeholder="Enter manufacturer"
            />
            <IotTextInputFormGroup
              id="path"
              name="path"
              label="Path"
              placeholder="Enter path"
            />
            <IotTextInputFormGroup
              id="product"
              name="product"
              label="Product"
              placeholder="Enter product"
            />
            <IotTextInputFormGroup
              id="release_date"
              name="release_date"
              label="Release date"
              placeholder="Enter release date"
            />
            <IotTextInputFormGroup
              id="signature"
              name="signature"
              label="Signature"
              placeholder="Enter signature"
            />
            <IotTextInputFormGroup
              id="tool_options"
              name="tool_options"
              label="Tool options"
              placeholder="Enter tool options"
            />
            <IotTextInputFormGroup
              id="vendor"
              name="vendor"
              label="Vendor"
              placeholder="Enter vendor"
            />
            <IotTextInputFormGroup
              id="server_username"
              name="server_username"
              label="Server username"
              placeholder="Enter server username"
            />
            <IotTextInputFormGroup
              id="server_password"
              name="server_password"
              label="Server password"
              placeholder="Enter server password"
            />
          </Form>
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

export default FotaCard;