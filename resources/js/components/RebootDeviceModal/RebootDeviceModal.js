import React from 'react';

import Modal from '../Modal/Modal';

const RebootDeviceModal = ({show, onClose, onConfirm}) => {

  return (
    <Modal show={show}
           modalTitle="Reboot Device"
           modalMessage="Are you sure you want to reboot this device?"
           onClose={onClose}
           onConfirm={onConfirm}
    />
  );
};

export default RebootDeviceModal;