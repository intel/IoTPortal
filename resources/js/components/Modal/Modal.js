import React from 'react'
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react';

const Modal = ({show, onConfirm, onClose, modalTitle, modalMessage}) => {
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
        <CButton color="primary" onClick={onConfirm}>Shut down</CButton>{' '}
        <CButton color="secondary" onClick={onClose}>Cancel</CButton>
      </CModalFooter>
    </CModal>
  )
}

export default Modal