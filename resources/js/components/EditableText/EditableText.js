import React, { useState } from 'react'
import classnames from 'classnames';

import { CInput } from '@coreui/react';

import './editableText.css';

const EditableText = ({tag: Tag, value, updateFunction, ...props}) => {
  const [edit, setEdit] = useState(false);
  const [currentValue, setCurrentValue] = useState(value);
  const [originalValue, setOriginalValue] = useState(value || '');

  const _updateFunction = (value) => {
    if (value !== originalValue) {
      updateFunction(value);
    }
  };

  return edit ? (
    <CInput
      autoFocus
      onFocus={() => setOriginalValue(value)}
      onChange={event => setCurrentValue(event.target.value)}
      onBlur={event => {
        setEdit(false);
        _updateFunction(event.target.value);
      }}
      onKeyUp={event => {
        if (event.key === 'Escape') {
          setEdit(false);
          setCurrentValue(originalValue);
        } else if (event.key === 'Enter') {
          setEdit(false);
          _updateFunction(event.target.value);
        }
      }}
      value={currentValue}
      {...props}
    />
  ) : (<Tag className={classnames('editable-text')} onClick={() => setEdit(!edit)}>{currentValue}</Tag>);

};

export default EditableText;