import React from 'react';

import sotaActionTypes from './sota.types';
import { API_ENDPOINT } from '../../data/config';
import { toastHelper } from '../../utils/utils';


// Submit SOTA
export const submitSotaStart = () => ({
  type: sotaActionTypes.SUBMIT_SOTA_START,
});

export const submitSotaSuccess = () => ({
  type: sotaActionTypes.SUBMIT_SOTA_SUCCESS,
});

export const submitSotaFailure = errorMessage => ({
  type: sotaActionTypes.SUBMIT_SOTA_FAILURE,
  payload: errorMessage
});

export const submitSotaStartAsync = (id, data) => {
  return dispatch => {
    dispatch(submitSotaStart());

    const toastId = toastHelper.loading('Submitting SOTA command. Waiting for device acknowledgement...');

    axios.post(`${API_ENDPOINT}/devices/${id}/commands`, data)
      .then(result => {
        dispatch(submitSotaSuccess());
        toastHelper.success('Submitted SOTA command successfully!', toastId);
      })
      .catch(error => {
        dispatch(submitSotaFailure(error.message));
        toastHelper.error(`SOTA failed: ${error.message}`, toastId);
      });
  };
};