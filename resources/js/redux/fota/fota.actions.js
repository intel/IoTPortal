import React from 'react';

import toast from 'react-hot-toast';
import { CButton } from '@coreui/react';

import fotaActionTypes from './fota.types';
import { API_ENDPOINT } from '../../data/config';

export const submitFotaStart = () => ({
  type: fotaActionTypes.SUBMIT_FOTA_START,
});

export const submitFotaSuccess = () => ({
  type: fotaActionTypes.SUBMIT_FOTA_SUCCESS,
});

export const submitFotaFailure = errorMessage => ({
  type: fotaActionTypes.SUBMIT_FOTA_FAILURE,
  payload: errorMessage
});

export const submitFotaStartAsync = (id, data) => {
  return dispatch => {
    dispatch(submitFotaStart());
    const toastId = toast.loading('Submitting FOTA command. Waiting for device acknowledgement...', {
      style: {
        minWidth: '500px',
      },
    });

    axios.post(`${API_ENDPOINT}/devices/${id}/methods`, {method_name: 'triggerfota', payload: data})
      .then(result => {
        dispatch(submitFotaSuccess(result.data));

        toast.success(<b>Submitted FOTA command successfully!</b>, {
          id: toastId,
          style: {
            minWidth: '500px',
          },
        });
      })
      .catch(error => {
        dispatch(submitFotaFailure(error.message));

        toast.error((t) => (
          <span>
            <b>FOTA failed: {error.message}</b>
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