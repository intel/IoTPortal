import React from 'react';
import { Form, useField, useFormikContext } from 'formik';

import { CCol, CFormGroup, CInput, CInvalidFeedback, CLabel, CButton } from '@coreui/react'
import CIcon from '@coreui/icons-react';

import { COTA_COMMAND_OPTIONS } from '../../data/options';

import IotTextInputFormGroup from '../IotTextInputFormGroup/IotTextInputFormGroup';
import IotSelectFormGroup from '../IotSelectFormGroup/IotSelectFormGroup';
import Select from 'react-select';

const CotaPathInputFormGroup = ({isHidden, label, value, ...props}) => {
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
      border: '1px solid red',
      '&:hover': {
        border: '1px solid red',
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
      props.updateSelectOptions(props.name, selection.value);
  };

  const updateBlur = () => {
    setFieldTouched(props.name, true);
  };

  return isHidden ? null : (
    <CFormGroup row>
      <CCol sm="5">
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
      </CCol>
      <CCol sm="5">
        <CInput
          {...(meta.touched && meta.error && {invalid: true})}
          id={props.id || props.name}
          {...field}
          {...props}
        />
      </CCol>
      <CCol sm="2">
        <CButton size="sm" color="primary" className="btn-brand mr-1 mb-1"><CIcon size="sm" name="cil-minus"/></CButton>
        <CButton size="sm" color="primary" className="btn-brand mr-1 mb-1"><CIcon size="sm" name="cil-plus"/></CButton>
      </CCol>
      {meta.touched && !!meta.error ? (
        <CInvalidFeedback>{meta.error.label || meta.error}</CInvalidFeedback>
      ) : null}
    </CFormGroup>
  );
};

export default CotaPathInputFormGroup;