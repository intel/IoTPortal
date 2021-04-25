import React from 'react';

import Modal from '../Modal/Modal';

const ShutDownDeviceModal = ({show, onClose, onConfirm}) => {

  return (
    <Modal show={show}
           modalTitle="Shut Down Device"
           modalMessage="Are you sure you want to shut down this device?"
           onClose={onClose}
           onConfirm={onConfirm}
    />
  );
};

export default ShutDownDeviceModal;