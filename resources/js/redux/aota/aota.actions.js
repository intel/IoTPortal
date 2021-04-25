import React from 'react';

import aotaActionTypes from './aota.types';
import { API_ENDPOINT } from '../../data/config';
import { toastHelper } from '../../utils/utils';


// Submit AOTA
export const submitAotaStart = () => ({
  type: aotaActionTypes.SUBMIT_AOTA_START,
});

export const submitAotaSuccess = () => ({
  type: aotaActionTypes.SUBMIT_AOTA_SUCCESS,
});

export const submitAotaFailure = errorMessage => ({
  type: aotaActionTypes.SUBMIT_AOTA_FAILURE,
  payload: errorMessage,
});

export const submitAotaStartAsync = (id, data) => {
  return dispatch => {
    dispatch(submitAotaStart());

    const toastId = toastHelper.loading('Submitting AOTA command. Waiting for device acknowledgement...');

    axios.post(`${API_ENDPOINT}/devices/${id}/commands`, data)
      .then(result => {
        dispatch(submitAotaSuccess());
        toastHelper.success('Submitted AOTA command successfully!', toastId);
      })
      .catch(error => {
        dispatch(submitAotaFailure(error.message));
        toastHelper.error(`AOTA failed: ${error.message}`, toastId);
      });
  };
};