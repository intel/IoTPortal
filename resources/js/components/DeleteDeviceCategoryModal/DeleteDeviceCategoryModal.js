/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import React from 'react';

import { truncateToStringEllipsis } from '../../utils/utils';

import Modal from '../Modal/Modal';

const DeleteDeviceCategoryModal = ({
                                     show,
                                     onClose,
                                     onConfirm,
                                     deviceCategory
                                   }) => {

  const modalMessage = () => {
    return (
      <>
        Are you sure you want to permanently delete this device category?
        <br/>
        <br/>Device Category ID: <b>{deviceCategory.unique_id}</b>
        <br/>Device Category Name: <b>{truncateToStringEllipsis(deviceCategory.name)}</b>
      </>
    );
  };

  return (
    <Modal show={show}
           modalTitle="Delete Device Category"
           modalMessage={modalMessage()}
           onClose={onClose}
           onConfirm={onConfirm}
    />
  );
};

export default DeleteDeviceCategoryModal;