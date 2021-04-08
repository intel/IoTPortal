import React from 'react'
import toast from 'react-hot-toast';
import { CButton } from '@coreui/react'

import shutdownActionTypes from './shutdown.types';
import { API_ENDPOINT } from '../../data/config'

export const submitShutdownStart = () => ({
  type: shutdownActionTypes.SUBMIT_SHUTDOWN_START,
});

export const submitShutdownSuccess = () => ({
  type: shutdownActionTypes.SUBMIT_SHUTDOWN_SUCCESS,
});

export const submitShutdownFailure = errorMessage => ({
  type: shutdownActionTypes.SUBMIT_SHUTDOWN_FAILURE,
  payload: errorMessage
});

export const submitShutdownStartAsync = (id) => {
  return dispatch => {
    dispatch(submitShutdownStart());
    const toastId = toast.loading('Shutting down device...', {
      style: {
        minWidth: '500px',
      },
    });

    axios.post(`${API_ENDPOINT}/devices/${id}/methods`, {method_name: 'shutdown_device'})
      .then(result => {
        dispatch(submitShutdownSuccess(result.data));

        toast.success(<b>Shut down device successfully!</b>, {
          id: toastId,
          style: {
            minWidth: '500px',
          },
        });
      })
      .catch(error => {
        dispatch(submitShutdownFailure(error.message));

        toast.error((t) => (
          <span>
            <b>Shut down device failed: {error.message}</b>
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
