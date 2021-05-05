import React from 'react';

import deviceEventHistoryActionTypes from './deviceEventHistory.types';
import { API_ENDPOINT } from '../../data/config';


// Index
export const fetchDeviceEventHistoriesStart = showIsFetchingIndicator => ({
  type: deviceEventHistoryActionTypes.FETCH_DEVICE_EVENT_HISTORIES_START,
  payload: showIsFetchingIndicator,
});

export const fetchDeviceEventHistoriesSuccess = deviceEventHistories => ({
  type: deviceEventHistoryActionTypes.FETCH_DEVICE_EVENT_HISTORIES_SUCCESS,
  payload: deviceEventHistories,
});

export const fetchDeviceEventHistoriesFailure = errorMessage => ({
  type: deviceEventHistoryActionTypes.FETCH_DEVICE_EVENT_HISTORIES_FAILURE,
  payload: errorMessage,
});

export const fetchDeviceEventHistoriesStartAsync = (id, lazyParams, showIsFetchingIndicator = true) => {
  return dispatch => {
    dispatch(fetchDeviceEventHistoriesStart(showIsFetchingIndicator));

    axios.get(`${API_ENDPOINT}/devices/${id}/events/histories`, {params: lazyParams})
      .then(result => {
        dispatch(fetchDeviceEventHistoriesSuccess(result.data.result.deviceEventHistories));
      })
      .catch(error => {
        dispatch(fetchDeviceEventHistoriesFailure(error.message));
      });
  };
};

export const setFetchDeviceEventHistoriesLazyParams = lazyParams => ({
  type: deviceEventHistoryActionTypes.SET_FETCH_DEVICE_EVENT_HISTORIES_LAZY_PARAMS,
  payload: lazyParams,
});

export const resetFetchDeviceEventHistoriesLazyParams = () => ({
  type: deviceEventHistoryActionTypes.RESET_FETCH_DEVICE_EVENT_HISTORIES_LAZY_PARAMS
});
