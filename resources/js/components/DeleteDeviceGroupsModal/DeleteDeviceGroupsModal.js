import React from 'react';

import Modal from '../Modal/Modal';

const DeleteDeviceGroupsModal = ({
                                   show,
                                   onClose,
                                   onConfirm,
                                 }) => {

  return (
    <Modal show={show}
           modalTitle="Delete Multiple Device Groups"
           modalMessage="Are you sure you want to permanently delete the selected device groups?"
           onClose={onClose}
           onConfirm={onConfirm}
    />
  );
};

export default DeleteDeviceGroupsModal;