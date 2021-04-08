import React from 'react'
import toast from 'react-hot-toast';
import { CButton } from '@coreui/react'

import decommissionActionTypes from './decommission.types';
import { API_ENDPOINT } from '../../data/config'

export const submitDecommissionStart = () => ({
  type: decommissionActionTypes.SUBMIT_DECOMMISSION_START,
});

export const submitDecommissionSuccess = () => ({
  type: decommissionActionTypes.SUBMIT_DECOMMISSION_SUCCESS,
});

export const submitDecommissionFailure = errorMessage => ({
  type: decommissionActionTypes.SUBMIT_DECOMMISSION_FAILURE,
  payload: errorMessage
});

export const submitDecommissionStartAsync = (id) => {
  return dispatch => {
    dispatch(submitDecommissionStart());
    const toastId = toast.loading('Decommissioning device...', {
      style: {
        minWidth: '500px',
      },
    });

    axios.post(`${API_ENDPOINT}/devices/${id}/methods`, {method_name: 'decommission_device'})
      .then(result => {
        dispatch(submitDecommissionSuccess(result.data));

        toast.success(<b>Decommissioned device successfully!</b>, {
          id: toastId,
          style: {
            minWidth: '500px',
          },
        });
      })
      .catch(error => {
        dispatch(submitDecommissionFailure(error.message));

        toast.error((t) => (
          <span>
            <b>Decommission device failed: {error.message}</b>
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
            minWidth: '600px',
          },
        });
      });
  };
};
