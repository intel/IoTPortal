import React from 'react';

import toast from 'react-hot-toast';
import { CButton } from '@coreui/react';

import sotaActionTypes from './sota.types';
import { API_ENDPOINT } from '../../data/config';

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
    const toastId = toast.loading('Submitting SOTA command. Waiting for device acknowledgement...', {
      style: {
        minWidth: '500px',
      },
    });

    axios.post(`${API_ENDPOINT}/devices/${id}/methods`, {method_name: 'triggersota', payload: data})
      .then(result => {
        dispatch(submitSotaSuccess(result.data));

        toast.success(<b>Submitted SOTA command successfully!</b>, {
          id: toastId,
          style: {
            minWidth: '500px',
          },
        });
      })
      .catch(error => {
        dispatch(submitSotaFailure(error.message));

        toast.error((t) => (
          <span>
            <b>SOTA failed: {error.message}</b>
            <CButton
              onClick={() => toast.dismiss(t.id)}
              color="primary"
              size="sm"
              className="m-2"
            >
              Dismiss
            </CButton>
          </span>
        ), {
          id: toastId,
          style: {
            minWidth: '500px',
          },
        });
      });
  };
};