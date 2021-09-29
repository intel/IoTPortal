/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import React from 'react';

import Modal from '../Modal/Modal';

const DeleteDevicesModal = ({
                              show,
                              onClose,
                              onConfirm,
                            }) => {

  return (
    <Modal show={show}
           modalTitle="Delete Multiple Devices"
           modalMessage="Are you sure you want to permanently delete the selected devices?"
           onClose={onClose}
           onConfirm={onConfirm}
    />
  );
};

export default DeleteDevicesModal;