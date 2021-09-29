/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import React from 'react';

import fotaActionTypes from './fota.types';
import { API_ENDPOINT } from '../../data/config';
import { toastHelper } from '../../utils/utils';


// Submit FOTA
export const submitFotaStart = () => ({
  type: fotaActionTypes.SUBMIT_FOTA_START,
});

export const submitFotaSuccess = () => ({
  type: fotaActionTypes.SUBMIT_FOTA_SUCCESS,
});

export const submitFotaFailure = errorMessage => ({
  type: fotaActionTypes.SUBMIT_FOTA_FAILURE,
  payload: errorMessage,
});

export const submitFotaStartAsync = (id, data) => {
  return dispatch => {
    dispatch(submitFotaStart());

    const toastId = toastHelper.loading('Submitting FOTA command. Waiting for device acknowledgement...');

    axios.post(`${API_ENDPOINT}/devices/${id}/commands`, data)
      .then(result => {
        dispatch(submitFotaSuccess());
        toastHelper.success('Submitted FOTA command successfully!', toastId);
      })
      .catch(error => {
        dispatch(submitFotaFailure(error.message));
        toastHelper.error(`FOTA failed: ${error.message}`, toastId);
      });
  };
};