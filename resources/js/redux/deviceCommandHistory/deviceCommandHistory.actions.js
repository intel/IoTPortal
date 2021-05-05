import React from 'react';

import { API_ENDPOINT } from '../../data/config';
import deviceCommandHistoryActionTypes from './deviceCommandHistory.types';


// Index
export const fetchDeviceCommandHistoriesStart = showIsFetchingIndicator => ({
  type: deviceCommandHistoryActionTypes.FETCH_DEVICE_COMMAND_HISTORIES_START,
  payload: showIsFetchingIndicator,
});

export const fetchDeviceCommandHistoriesSuccess = deviceCommandHistories => ({
  type: deviceCommandHistoryActionTypes.FETCH_DEVICE_COMMAND_HISTORIES_SUCCESS,
  payload: deviceCommandHistories,
});

export const fetchDeviceCommandHistoriesFailure = errorMessage => ({
  type: deviceCommandHistoryActionTypes.FETCH_DEVICE_COMMAND_HISTORIES_FAILURE,
  payload: errorMessage,
});

export const fetchDeviceCommandHistoriesStartAsync = (id, lazyParams, showIsFetchingIndicator = true) => {
  return dispatch => {
    dispatch(fetchDeviceCommandHistoriesStart(showIsFetchingIndicator))

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

export const resetFetchDeviceCommandHistoriesLazyParams = () => ({
  type: deviceCommandHistoryActionTypes.RESET_FETCH_DEVICE_COMMAND_HISTORIES_LAZY_PARAMS,
});
