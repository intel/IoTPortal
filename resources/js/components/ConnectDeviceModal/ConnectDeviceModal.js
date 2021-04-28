import React from 'react';

import Modal from '../Modal/Modal';
import ApiToken from '../ApiToken/ApiToken';
import { CAlert, CFormGroup, CLabel, CLink } from '@coreui/react';

const ConnectDeviceModal = ({
                              show,
                              onClose,
                              onConfirm,
                              device
                            }) => {

  const modalMessage = () => {
    return (
      <>
        <CAlert color="secondary">
          To connect the device to the portal, enter your <b>unique ID</b>, <b>device connection key</b> and <b>device
          unique ID</b> during your device set up.
          <hr/>
          Your <b>unique ID</b> and <b>device connection key</b> can be retrieved from the <CLink to="/tokens"
                                                                                                  rel="noreferrer noopener"
                                                                                                  target="_blank">API
          Tokens</CLink> page.
        </CAlert>
        <CFormGroup>
          <CLabel>Unique ID</CLabel>
          <div>
            Get it from <CLink to="/tokens" rel="noreferrer noopener" target="_blank">API Tokens</CLink> page.
          </div>
        </CFormGroup>
        <CFormGroup>
          <CLabel>Device connection key</CLabel>
          <div>
            Get it from <CLink to="/tokens" rel="noreferrer noopener" target="_blank">API Tokens</CLink> page.
          </div>
        </CFormGroup>
        <ApiToken name="unique_id" label="Device unique ID" value={device.unique_id}/>
      </>
    );
  };

  return (
    <Modal show={show}
           modalTitle="Connect Device"
           modalMessage={modalMessage()}
           onClose={onClose}
           secondaryButtonText="Close"
           hidePrimaryButton
    />
  );
};

export default ConnectDeviceModal;