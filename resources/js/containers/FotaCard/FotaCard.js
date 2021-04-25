import React, { useRef } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { CCard, CCardBody, CCardFooter, CCardHeader } from '@coreui/react';
import { getSanitizedValues } from '../../utils/utils';

import IotTextInputFormGroup from '../../components/IotTextInputFormGroup/IotTextInputFormGroup';
import PrimarySecondaryButtons from '../../components/PrimarySecondaryButtons/PrimarySecondaryButtons';

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

  const validationSchema = Yup.object({
    bios_version: Yup.string().required("Required"),
    fetch_link: Yup.string().required("Required"),
    manufacturer: Yup.string().required("Required"),
    path: Yup.string(),
    product: Yup.string().required("Required"),
    release_date: Yup.string().required("Required"),
    signature: Yup.string(),
    tool_options: Yup.string(),
    vendor: Yup.string().required("Required"),
    server_username: Yup.string(),
    server_password: Yup.string()
  });

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
            const data = {command: 'fota', payload: getSanitizedValues(values)}
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