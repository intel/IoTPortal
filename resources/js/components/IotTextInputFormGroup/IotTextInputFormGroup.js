import React from 'react'
import { useField } from 'formik';
import { useTranslation } from 'react-i18next';

import { CFormGroup, CInput, CInvalidFeedback, CLabel } from '@coreui/react'

import { isValidJSONObject } from '../../utils/utils';

const IotTextInputFormGroup = ({isHidden, isLabelHidden, isDisabled, label, ...props}) => {

  const {t} = useTranslation();

  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);

  const renderErrorMessage = () => {
    if (_.isString(meta.error)) {
      return meta.error;
    } else if (isValidJSONObject(meta.error) && _.has(meta.error, 'key') && _.has(meta.error, 'values')) {
      return t(meta.error.key, meta.error.values);
    }

    return null;
  }

  return isHidden ? null : (
    <CFormGroup>
      {isLabelHidden ? null : (<CLabel htmlFor={props.id || props.name}>{label}</CLabel>)}
      <CInput
        {...(meta.touched && meta.error && {invalid: true})}
        {...(isDisabled && {disabled: true})}
        {...field}
        {...props}
      />
      {/*{meta.touched && meta.error ? (*/}
      {/*  <CInvalidFeedback>{meta.error}</CInvalidFeedback>*/}
      {/*) : null}*/}
      {meta.touched && meta.error && (<CInvalidFeedback>{renderErrorMessage()}</CInvalidFeedback>)}
    </CFormGroup>
  );
};

export default IotTextInputFormGroup;