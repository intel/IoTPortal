import React from 'react';
import { useField, useFormikContext } from 'formik';

import Select from 'react-select';
import { CFormGroup, CInvalidFeedback, CLabel } from '@coreui/react'

const IotSelect = ({isHidden, label, ...props}) => {
  const {setFieldValue, setFieldTouched} = useFormikContext();
  const [field, meta] = useField(props);


  const defaultStyle = {
    control: base => ({
      ...base,
      '&:hover': {
        boxShadow: '0 0 0 0.2rem rgb(50 31 219 / 25%)',
      }
    })
  };

  const errorStyle = {
    control: base => ({
      ...base,
      border: '1px solid red',
      '&:hover': {
        border: '1px solid red',
        boxShadow: '0 0 0 0.2rem rgb(255 0 0 / 25%)',
      }
    })
  };

  const handleOptionChange = (selection) => {
    setFieldValue(props.name, selection.value);
    if (props.updateSelectOptions)
      props.updateSelectOptions(props.name, selection.value);
  };

  const updateBlur = () => {
    setFieldTouched(props.name, true);
  };

  return isHidden ? null : (
    <CFormGroup>
      <CLabel htmlFor={props.id || props.name}>{label}</CLabel>
      <Select
        theme={theme => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary50: '#958bef80',
            primary25: '#958bef26',
            primary: '#958bef',
          },
        })}
        styles={defaultStyle}
        {...(meta.touched && meta.error && {className: 'is-invalid', styles: errorStyle})}
        id={props.id || props.name}
        name={field.name}
        options={props.options}
        onBlur={updateBlur}
        onChange={handleOptionChange}
        {...props}
      />
      {meta.touched && meta.error ? (
        <CInvalidFeedback>{meta.error}</CInvalidFeedback>
      ) : null}
    </CFormGroup>
  );
};

export default IotSelect;