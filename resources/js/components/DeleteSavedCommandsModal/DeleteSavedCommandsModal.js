import React from 'react';

import Modal from '../Modal/Modal';

const DeleteSavedCommandsModal = ({
                                    show,
                                    onClose,
                                    onConfirm,
                                  }) => {

  return (
    <Modal show={show}
           modalTitle="Delete Multiple Saved Commands"
           modalMessage="Are you sure you want to permanently delete the selected saved commands?"
           onClose={onClose}
           onConfirm={onConfirm}
    />
  );
};

export default DeleteSavedCommandsModal;