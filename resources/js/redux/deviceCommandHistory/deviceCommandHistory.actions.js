import React from 'react';

import { API_ENDPOINT } from '../../data/config';
import deviceCommandHistoryActionTypes from './deviceCommandHistory.types';


// Index
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

export const fetchDeviceCommandHistoriesStartAsync = (id, lazyParams) => {
  return dispatch => {
    dispatch(fetchDeviceCommandHistoriesStart())

    axios.get(`${API_ENDPOINT}/devices/${id}/commands/histories`, {params: lazyParams})
      .then(result => {
        dispatch(fetchDeviceCommandHistoriesSuccess(result.data.result.deviceCommandHistories));
      })
      .catch(error => {
        dispatch(fetchDeviceCommandHistoriesFailure(error.message));
      });
  };
};

export const setFetchDeviceCommandHistoriesLazyParams = lazyParams => ({
  type: deviceCommandHistoryActionTypes.SET_FETCH_DEVICE_COMMAND_HISTORIES_LAZY_PARAMS,
  payload: lazyParams,
});
