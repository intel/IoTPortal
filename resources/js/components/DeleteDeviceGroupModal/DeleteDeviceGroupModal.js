import React from 'react';

import { truncateToStringEllipsis } from '../../utils/utils';

import Modal from '../Modal/Modal';

const DeleteDeviceGroupModal = ({
                                  show,
                                  onClose,
                                  onConfirm,
                                  deviceGroup
                                }) => {

  const modalMessageSingle = () => {
    return (
      <>
        Are you sure you want to permanently delete this device group?
        <br/>
        <br/>Device Group ID: <b>{deviceGroup.unique_id}</b>
        <br/>Device Group Name: <b>{truncateToStringEllipsis(deviceGroup.name)}</b>
      </>
    );
  };

  return (
    <Modal show={show}
           modalTitle="Delete Device Group"
           modalMessage={modalMessageSingle()}
           onClose={onClose}
           onConfirm={onConfirm}
    />
  );
};

export default DeleteDeviceGroupModal;