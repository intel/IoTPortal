import React from 'react';
import { useField, useFormikContext } from 'formik';

import Select from 'react-select';
import { CFormGroup, CInvalidFeedback, CLabel } from '@coreui/react';

import { ASYNC_VALIDATION_TIMEOUT_IN_MS } from '../../data/config';

const IotSelectFormGroup = ({isHidden, isLabelHidden, label, value, onInputChange, ...props}) => {

  const {setFieldValue, setFieldTouched} = useFormikContext();
  const [field, meta] = useField(props);

  const {onChange, ...fieldRest} = field;

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

  const onInputChangeDebounced = () => {
    if (onInputChange)
      return _.debounce(onInputChange, ASYNC_VALIDATION_TIMEOUT_IN_MS);

    return false;
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
        {...fieldRest}
        {...props}
        onInputChange={onInputChangeDebounced()}
        onChange={handleOptionChange}
      />
      {meta.touched && meta.error ? (
        <CInvalidFeedback>{typeof meta.error === 'string' ? meta.error : meta.error.label}</CInvalidFeedback>
      ) : null}
    </CFormGroup>
  );
};

export default IotSelectFormGroup;