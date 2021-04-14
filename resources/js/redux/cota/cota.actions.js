import React from 'react';

import toast from 'react-hot-toast';
import { CButton } from '@coreui/react';

import cotaActionTypes from './cota.types';
import { API_ENDPOINT } from '../../data/config';

export const submitCotaStart = () => ({
  type: cotaActionTypes.SUBMIT_COTA_START,
});

export const submitCotaSuccess = () => ({
  type: cotaActionTypes.SUBMIT_COTA_SUCCESS,
});

export const submitCotaFailure = errorMessage => ({
  type: cotaActionTypes.SUBMIT_COTA_FAILURE,
  payload: errorMessage
});

export const submitCotaStartAsync = (id, data) => {
  return dispatch => {
    dispatch(submitCotaStart());
    const toastId = toast.loading('Submitting COTA command. Waiting for device acknowledgement...', {
      style: {
        minWidth: '500px',
      },
    });

    axios.post(`${API_ENDPOINT}/devices/${id}/methods`, {method_name: 'triggerconfig', payload: data})
      .then(result => {
        dispatch(submitCotaSuccess(result.data));

        toast.success(<b>Submitted COTA command successfully!</b>, {
          id: toastId,
          style: {
            minWidth: '500px',
          },
        });
      })
      .catch(error => {
        dispatch(submitCotaFailure(error.message));

        toast.error((t) => (
          <span>
            <b>COTA failed: {error.message}</b>
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