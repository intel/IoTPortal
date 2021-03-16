import React from 'react'

import toast from 'react-hot-toast';
import { CButton } from '@coreui/react'

import otaActionTypes from './aota.types';
import { API_ENDPOINT } from '../../data/config'
import { removeObjectEmptyString } from '../../utils/utils';

export const submitAotaStart = () => ({
  type: otaActionTypes.SUBMIT_AOTA_START,
});

export const submitAotaSuccess = () => ({
  type: otaActionTypes.SUBMIT_AOTA_SUCCESS,
});

export const submitAotaFailure = errorMessage => ({
  type: otaActionTypes.SUBMIT_AOTA_FAILURE,
  payload: errorMessage
});

export const submitAotaStartAsync = (id, data) => {
  return dispatch => {
    dispatch(submitAotaStart());
    const toastId = toast.loading('Submitting AOTA command. Waiting for device acknowledgement...', {
      style: {
        minWidth: '500px',
      },
    });

    removeObjectEmptyString(data);

    axios.post(`${API_ENDPOINT}/devices/${id}/methods`, {method_name: 'triggeraota', payload: data})
      .then(result => {
        dispatch(submitAotaSuccess(result.data));

        toast.success(<b>Submitted AOTA command successfully!</b>, {
          id: toastId,
          style: {
            minWidth: '500px',
          },
        });
      })
      .catch(error => {
        dispatch(submitAotaFailure(error.message));

        toast.error((t) => (
          <span>
            <b>AOTA failed: {error.message}</b>
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