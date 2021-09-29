/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import React from 'react';

import rebootActionTypes from './reboot.types';
import { API_ENDPOINT } from '../../data/config';
import { toastHelper } from '../../utils/utils';


// Submit reboot
export const submitRebootStart = () => ({
  type: rebootActionTypes.SUBMIT_REBOOT_START,
});

export const submitRebootSuccess = () => ({
  type: rebootActionTypes.SUBMIT_REBOOT_SUCCESS,
});

export const submitRebootFailure = errorMessage => ({
  type: rebootActionTypes.SUBMIT_REBOOT_FAILURE,
  payload: errorMessage,
});

export const submitRebootStartAsync = (id) => {
  return dispatch => {
    dispatch(submitRebootStart());

    const toastId = toastHelper.loading('Rebooting device...');

    axios.post(`${API_ENDPOINT}/devices/${id}/commands`, {command: 'REBOOT'})
      .then(result => {
        dispatch(submitRebootSuccess());
        toastHelper.success('Rebooted device successfully!', toastId);
      })
      .catch(error => {
        dispatch(submitRebootFailure(error.message));
        toastHelper.error(`Reboot device failed: ${error.message}`, toastId);
      });
  };
};
