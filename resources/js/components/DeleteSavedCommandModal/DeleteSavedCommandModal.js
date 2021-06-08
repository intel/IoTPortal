import React from 'react';

import { truncateToStringEllipsis } from '../../utils/utils';

import Modal from '../Modal/Modal';

const DeleteSavedCommandModal = ({
                                   show,
                                   onClose,
                                   onConfirm,
                                   savedCommand
                                 }) => {

  const modalMessage = () => {
    return (
      <>
        Are you sure you want to permanently delete this saved command?
        <br/>
        <br/>Saved Command ID: <b>{savedCommand.unique_id}</b>
        <br/>Saved Command Name: <b>{truncateToStringEllipsis(savedCommand.name)}</b>
      </>
    );
  };

  return (
    <Modal show={show}
           modalTitle="Delete Saved Command"
           modalMessage={modalMessage()}
           onClose={onClose}
           onConfirm={onConfirm}
    />
  );
};

export default DeleteSavedCommandModal;