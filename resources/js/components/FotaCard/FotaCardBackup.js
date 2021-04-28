import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { CButton, CCard, CCardBody, CCardFooter, CCardHeader, CSpinner } from '@coreui/react';
import CIcon from '@coreui/icons-react';

import { submitFotaStartAsync } from '../../redux/fota/fota.actions';
import { getSanitizedValues } from '../../utils/utils';

import IotTextInputFormGroup from '../IotTextInputFormGroup/IotTextInputFormGroup';

const FotaCard = ({deviceId, isSubmittingFota, submitFotaStartAsync}) => {

  const formRef = useRef();

  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  };

  const handleReset = () => {
    if (formRef.current) {
      formRef.current.resetForm();
    }
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
            submitFotaStartAsync(deviceId, getSanitizedValues(values));
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
        <CButton type="submit" size="sm" color="primary" onClick={handleSubmit} disabled={isSubmittingFota}>
          {isSubmittingFota ? <CSpinner color="white" size="sm"/> : <CIcon name="cil-scrubber"/>} Submit
        </CButton>
        <CButton type="reset" size="sm" color="danger" className="ml-3" onClick={handleReset}
                 disabled={isSubmittingFota}>
          <CIcon name="cil-ban"/> Reset
        </CButton>
      </CCardFooter>
    </CCard>
  );
};

const mapStateToProps = state => ({
  isSubmittingFota: state.fota.isSubmittingFota
});

const mapDispatchToPros = dispatch => ({
  submitFotaStartAsync: (id, data) => dispatch(submitFotaStartAsync(id, data))
});

export default connect(mapStateToProps, mapDispatchToPros)(FotaCard);