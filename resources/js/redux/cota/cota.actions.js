import React from 'react';

import cotaActionTypes from './cota.types';
import { API_ENDPOINT } from '../../data/config';
import { toastHelper } from '../../utils/utils';


// Submit COTA
export const submitCotaStart = () => ({
  type: cotaActionTypes.SUBMIT_COTA_START,
});

export const submitCotaSuccess = () => ({
  type: cotaActionTypes.SUBMIT_COTA_SUCCESS,
});

export const submitCotaFailure = errorMessage => ({
  type: cotaActionTypes.SUBMIT_COTA_FAILURE,
  payload: errorMessage,
});

export const submitCotaStartAsync = (id, data) => {
  return dispatch => {
    dispatch(submitCotaStart());

    const toastId = toastHelper.loading('Submitting COTA command. Waiting for device acknowledgement...');

    axios.post(`${API_ENDPOINT}/devices/${id}/commands`, data)
      .then(result => {
        dispatch(submitCotaSuccess());
        toastHelper.success('Submitted COTA command successfully!', toastId);
      })
      .catch(error => {
        dispatch(submitCotaFailure(error.message));
        toastHelper.error(`COTA failed: ${error.message}`, toastId);
      });
  };
};