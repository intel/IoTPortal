import React from 'react';
import { useField, useFormikContext } from 'formik';

import Select from 'react-select';
import { CFormGroup, CInvalidFeedback, CLabel } from '@coreui/react';

const IotSelectFormGroup = ({isHidden, isLabelHidden, label, value, ...props}) => {
  const {setFieldValue, setFieldTouched} = useFormikContext();
  const [field, meta] = useField(props);

  const defaultStyle = {
    control: base => ({
      ...base,
      height: 35,
      minHeight: 35,
      '&:hover': {
        boxShadow: '0 0 0 0.2rem rgb(50 31 219 / 25%)',
      }
    }),
    dropdownIndicator: (styles) => ({
      ...styles,
      paddingTop: 7,
      paddingBottom: 7,
    }),
    clearIndicator: (styles) => ({
      ...styles,
      paddingTop: 7,
      paddingBottom: 7,
    })
  };

  const errorStyle = {
    control: base => ({
      ...base,
      height: 35,
      minHeight: 35,
      border: '1px solid #e55353',
      '&:hover': {
        border: '1px solid #e55353',
        boxShadow: '0 0 0 0.2rem rgb(255 0 0 / 25%)',
      }
    }),
    dropdownIndicator: (styles) => ({
      ...styles,
      paddingTop: 7,
      paddingBottom: 7,
    }),
    clearIndicator: (styles) => ({
      ...styles,
      paddingTop: 7,
      paddingBottom: 7,
    })
  };

  const handleOptionChange = (selection) => {
    setFieldValue(props.name, selection);
    if (props.updateSelectOptions)
      props.updateSelectOptions(props.name, selection);
  };

  const updateBlur = () => {
    setFieldTouched(props.name, true);
  };

  return isHidden ? null : (
    <CFormGroup>
      {isLabelHidden ? null : (<CLabel htmlFor={props.id || props.name}>{label}</CLabel>)}
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
        value={value}
        onBlur={updateBlur}
        onChange={handleOptionChange}
        {...props}
      />
      {meta.touched && meta.error ? (
        <CInvalidFeedback>{typeof meta.error === 'string' ? meta.error : meta.error.label}</CInvalidFeedback>
      ) : null}
    </CFormGroup>
  );
};

export default IotSelectFormGroup;