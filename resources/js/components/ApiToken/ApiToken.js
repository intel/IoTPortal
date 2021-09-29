/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import React from 'react';

import { toast } from 'react-hot-toast';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { CButton, CFormGroup, CInput, CInputGroup, CInputGroupAppend, CLabel } from '@coreui/react';


const ApiToken = ({name, label, value}) => {
  return (
    <CFormGroup>
      <CLabel htmlFor={name}>{label}</CLabel>
      <CInputGroup>
        <CInput type="text" name={name} value={value} readOnly/>
        <CInputGroupAppend>
          <CopyToClipboard text={value}
                           onCopy={() => toast.success('Copied')}>
            <CButton type="button" color="primary">Copy</CButton>
          </CopyToClipboard>
        </CInputGroupAppend>
      </CInputGroup>
    </CFormGroup>
  );
};

export default ApiToken;