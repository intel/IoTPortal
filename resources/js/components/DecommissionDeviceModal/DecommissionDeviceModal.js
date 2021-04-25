import React from 'react';

import Modal from '../Modal/Modal';

const DecommissionDeviceModal = ({show, onClose, onConfirm}) => {

  return (
    <Modal show={show}
           modalTitle="Decommission Device"
           modalMessage="Are you sure you want to decommission this device?"
           onClose={onClose}
           onConfirm={onConfirm}
    />
  );
};

export default DecommissionDeviceModal;