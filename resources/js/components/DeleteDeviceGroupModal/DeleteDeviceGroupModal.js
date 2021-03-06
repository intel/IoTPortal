/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import React from 'react';

import { truncateToStringEllipsis } from '../../utils/utils';

import Modal from '../Modal/Modal';

const DeleteDeviceGroupModal = ({
                                  show,
                                  onClose,
                                  onConfirm,
                                  deviceGroup
                                }) => {

  const modalMessage = () => {
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
           modalMessage={modalMessage()}
           onClose={onClose}
           onConfirm={onConfirm}
    />
  );
};

export default DeleteDeviceGroupModal;