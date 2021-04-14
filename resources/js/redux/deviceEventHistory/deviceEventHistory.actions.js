import React from 'react';

import deviceEventHistoryActionTypes from './deviceEventHistory.types';
import { API_ENDPOINT } from '../../data/config';

export const fetchDeviceEventHistoriesStart = () => ({
  type: deviceEventHistoryActionTypes.FETCH_DEVICE_EVENT_HISTORIES_START,
});

export const fetchDeviceEventHistoriesSuccess = deviceEventHistories => ({
  type: deviceEventHistoryActionTypes.FETCH_DEVICE_EVENT_HISTORIES_SUCCESS,
  payload: deviceEventHistories,
});

export const fetchDeviceEventHistoriesFailure = errorMessage => ({
  type: deviceEventHistoryActionTypes.FETCH_DEVICE_EVENT_HISTORIES_FAILURE,
  payload: errorMessage,
});

export const fetchDeviceEventHistoriesStartAsync = (id, params) => {
  return dispatch => {
    dispatch(fetchDeviceEventHistoriesStart());

    axios.get(`${API_ENDPOINT}/devices/${id}/event-histories`, {params: params})
      .then(result => {
        dispatch(fetchDeviceEventHistoriesSuccess(result.data.result.deviceEventHistories));
      })
      .catch(error => {
        dispatch(fetchDeviceEventHistoriesFailure(error.message));
      });
  };
};
