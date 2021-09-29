/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import React from 'react';

import { CButton, CSpinner } from '@coreui/react';
import CIcon from '@coreui/icons-react';

const PrimarySecondaryButtons = ({
                                   primaryButtonText,
                                   secondaryButtonText,
                                   isPrimaryLoading,
                                   isSecondaryLoading,
                                   onClickPrimary,
                                   onClickSecondary,
                                   isPrimaryDisabled,
                                   isSecondaryDisabled
                                 }) => {
  return (
    <>
      <CButton type="submit" size="sm" color="primary" onClick={onClickPrimary} disabled={isPrimaryDisabled}>
        {isPrimaryLoading ? <CSpinner color="white" size="sm"/> :
          <CIcon name="cil-scrubber"/>} {primaryButtonText || 'Submit'}
      </CButton>
      <CButton type="reset" size="sm" color="danger" className="ml-3" onClick={onClickSecondary}
               disabled={isSecondaryDisabled}>
        {isSecondaryLoading ? <CSpinner color="white" size="sm"/> :
          <CIcon name="cil-ban"/>} {secondaryButtonText || 'Reset'}
      </CButton>
    </>
  );
};

export default PrimarySecondaryButtons;
