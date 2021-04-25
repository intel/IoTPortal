import React from 'react';

import decommissionActionTypes from './decommission.types';
import { API_ENDPOINT } from '../../data/config';
import { toastHelper } from '../../utils/utils';


// Submit Decommission
export const submitDecommissionStart = () => ({
  type: decommissionActionTypes.SUBMIT_DECOMMISSION_START,
});

export const submitDecommissionSuccess = () => ({
  type: decommissionActionTypes.SUBMIT_DECOMMISSION_SUCCESS,
});

export const submitDecommissionFailure = errorMessage => ({
  type: decommissionActionTypes.SUBMIT_DECOMMISSION_FAILURE,
  payload: errorMessage,
});

export const submitDecommissionStartAsync = (id) => {
  return dispatch => {
    dispatch(submitDecommissionStart());

    const toastId = toastHelper.loading('Decommissioning device...');

    axios.post(`${API_ENDPOINT}/devices/${id}/commands`, {command: 'decommission'})
      .then(result => {
        dispatch(submitDecommissionSuccess());
        toastHelper.success('Decommissioned device successfully!', toastId);
      })
      .catch(error => {
        dispatch(submitDecommissionFailure(error.message));
        toastHelper.error(`Decommission device failed: ${error.message}`, toastId);
      });
  };
};
