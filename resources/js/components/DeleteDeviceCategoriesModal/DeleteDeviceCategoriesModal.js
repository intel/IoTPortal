import React from 'react';

import Modal from '../Modal/Modal';

const DeleteDeviceCategoriesModal = ({
                                       show,
                                       onClose,
                                       onConfirm,
                                     }) => {

  return (
    <Modal show={show}
           modalTitle="Delete Multiple Device Categories"
           modalMessage="Are you sure you want to permanently delete the selected device categories?"
           onClose={onClose}
           onConfirm={onConfirm}
    />
  );
};

export default DeleteDeviceCategoriesModal;