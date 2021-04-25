import React from 'react';

import { truncateToStringEllipsis } from '../../utils/utils';

import Modal from '../Modal/Modal';

const DeleteDeviceModal = ({
                             show,
                             onClose,
                             onConfirm,
                             device
                           }) => {

  const modalMessageSingle = () => {
    return (
      <>
        Are you sure you want to permanently delete this device?
        <br/>
        <br/>Device ID: <b>{device.unique_id}</b>
        <br/>Device Name: <b>{truncateToStringEllipsis(device.name)}</b>
      </>
    );
  };

  return (
    <Modal show={show}
           modalTitle="Delete Device"
           modalMessage={modalMessageSingle()}
           onClose={onClose}
           onConfirm={onConfirm}
    />
  );
};

export default DeleteDeviceModal;