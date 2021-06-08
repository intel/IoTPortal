import React from 'react';

import Modal from '../Modal/Modal';

const DeleteDeviceJobsModal = ({
                                 show,
                                 onClose,
                                 onConfirm,
                               }) => {

  return (
    <Modal show={show}
           modalTitle="Delete Multiple Device Jobs"
           modalMessage="Are you sure you want to permanently delete the selected device jobs?"
           onClose={onClose}
           onConfirm={onConfirm}
    />
  );
};

export default DeleteDeviceJobsModal;