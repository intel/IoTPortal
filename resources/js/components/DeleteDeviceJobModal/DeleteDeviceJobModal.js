/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import React from 'react';

import { truncateToStringEllipsis } from '../../utils/utils';

import Modal from '../Modal/Modal';

const DeleteDeviceJobModal = ({
                                show,
                                onClose,
                                onConfirm,
                                deviceJob
                              }) => {

  const modalMessage = () => {
    return (
      <>
        Are you sure you want to permanently delete this device job?
        <br/>
        <br/>Device Job ID: <b>{deviceJob.unique_id}</b>
        <br/>Device Job Name: <b>{truncateToStringEllipsis(deviceJob.name)}</b>
      </>
    );
  };

  return (
    <Modal show={show}
           modalTitle="Delete Device Job"
           modalMessage={modalMessage()}
           onClose={onClose}
           onConfirm={onConfirm}
    />
  );
};

export default DeleteDeviceJobModal;