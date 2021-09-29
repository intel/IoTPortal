/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import React from 'react';

import shutdownActionTypes from './shutdown.types';
import { API_ENDPOINT } from '../../data/config';
import { toastHelper } from '../../utils/utils';

export const submitShutdownStart = () => ({
  type: shutdownActionTypes.SUBMIT_SHUTDOWN_START,
});

export const submitShutdownSuccess = () => ({
  type: shutdownActionTypes.SUBMIT_SHUTDOWN_SUCCESS,
});

export const submitShutdownFailure = errorMessage => ({
  type: shutdownActionTypes.SUBMIT_SHUTDOWN_FAILURE,
  payload: errorMessage,
});

export const submitShutdownStartAsync = (id) => {
  return dispatch => {
    dispatch(submitShutdownStart());

    const toastId = toastHelper.loading('Shutting down device...');

    axios.post(`${API_ENDPOINT}/devices/${id}/commands`, {command: 'SHUTDOWN'})
      .then(result => {
        dispatch(submitShutdownSuccess());
        toastHelper.success('Shut down device successfully!', toastId);
      })
      .catch(error => {
        dispatch(submitShutdownFailure(error.message));
        toastHelper.error(`Shut down device failed: ${error.message}`, toastId);
      });
  };
};
