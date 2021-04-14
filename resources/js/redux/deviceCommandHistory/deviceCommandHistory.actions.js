import React from 'react';

import deviceCommandHistoryActionTypes from './deviceCommandHistory.types';
import { API_ENDPOINT } from '../../data/config';

export const fetchDeviceCommandHistoriesStart = () => ({
  type: deviceCommandHistoryActionTypes.FETCH_DEVICE_COMMAND_HISTORIES_START,
});

export const fetchDeviceCommandHistoriesSuccess = deviceCommandHistories => ({
  type: deviceCommandHistoryActionTypes.FETCH_DEVICE_COMMAND_HISTORIES_SUCCESS,
  payload: deviceCommandHistories,
});

export const fetchDeviceCommandHistoriesFailure = errorMessage => ({
  type: deviceCommandHistoryActionTypes.FETCH_DEVICE_COMMAND_HISTORIES_FAILURE,
  payload: errorMessage,
});

export const fetchDeviceCommandHistoriesStartAsync = (id, params) => {
  return dispatch => {
    dispatch(fetchDeviceCommandHistoriesStart());

    axios.get(`${API_ENDPOINT}/devices/${id}/commands/histories`, {params: params})
      .then(result => {
        dispatch(fetchDeviceCommandHistoriesSuccess(result.data.result.deviceCommandHistories));
      })
      .catch(error => {
        dispatch(fetchDeviceCommandHistoriesFailure(error.message));
      });
  };
};
