import React from 'react'
import { useField } from 'formik';


import { CFormGroup, CInput, CInvalidFeedback, CLabel } from '@coreui/react'


const IotTextInputFormGroup = ({isHidden, isLabelHidden, isDisabled, label, ...props}) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);

  return isHidden ? null : (
    <CFormGroup>
      {isLabelHidden ? null : (<CLabel htmlFor={props.id || props.name}>{label}</CLabel>)}
      <CInput
        {...(meta.touched && meta.error && {invalid: true})}
        id={props.id || props.name}
        {...(isDisabled && {disabled: true})}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <CInvalidFeedback>{meta.error}</CInvalidFeedback>
      ) : null}
    </CFormGroup>
  );
};

export default IotTextInputFormGroup;