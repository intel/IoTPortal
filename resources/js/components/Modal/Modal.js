/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import React from 'react';

import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react';

const Modal = ({show, onClose, onConfirm, modalTitle, modalMessage, hidePrimaryButton, hideSecondaryButton, primaryButtonText, secondaryButtonText}) => {
  return (
    <CModal
      show={show}
      onClose={onClose}
    >
      <CModalHeader closeButton>
        <CModalTitle>{modalTitle}</CModalTitle>
      </CModalHeader>
      <CModalBody>
        {modalMessage}
      </CModalBody>
      <CModalFooter>
        {!hideSecondaryButton && (<><CButton color="secondary" onClick={onClose}>{secondaryButtonText || 'No'}</CButton>{' '}</>)}
        {!hidePrimaryButton && <CButton color="primary" onClick={onConfirm}>{primaryButtonText || 'Yes'}</CButton>}
      </CModalFooter>
    </CModal>
  );
};

export default Modal;