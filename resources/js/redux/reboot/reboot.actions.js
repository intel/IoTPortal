import React from 'react'
import toast from 'react-hot-toast';
import { CButton } from '@coreui/react'

import rebootActionTypes from './reboot.types';
import { API_ENDPOINT } from '../../data/config'

export const submitRebootStart = () => ({
  type: rebootActionTypes.SUBMIT_REBOOT_START,
});

export const submitRebootSuccess = () => ({
  type: rebootActionTypes.SUBMIT_REBOOT_SUCCESS,
});

export const submitRebootFailure = errorMessage => ({
  type: rebootActionTypes.SUBMIT_REBOOT_FAILURE,
  payload: errorMessage
});

export const submitRebootStartAsync = (id, data) => {
  return dispatch => {
    dispatch(submitRebootStart());
    const toastId = toast.loading('Rebooting device...', {
      style: {
        minWidth: '500px',
      },
    });

    axios.post(`${API_ENDPOINT}/devices/${id}/reboot`, data)
      .then(result => {
        dispatch(submitRebootSuccess(result.data));

        toast.success(<b>Rebooted device successfully!</b>, {
          id: toastId,
          style: {
            minWidth: '500px',
          },
        });
      })
      .catch(error => {
        dispatch(submitRebootFailure(error.message));

        toast.error((t) => (
          <span>
            <b>Reboot device failed: {error.message}</b>
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
