/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import deviceEventActionTypes from './deviceEvent.types';
import { API_ENDPOINT } from '../../data/config';


// Fetch dropdown options
export const fetchDeviceEventOptionsStart = () => ({
  type: deviceEventActionTypes.FETCH_DEVICE_EVENT_OPTIONS_START,
});

export const fetchDeviceEventOptionsSuccess = deviceEventOptions => ({
  type: deviceEventActionTypes.FETCH_DEVICE_EVENT_OPTIONS_SUCCESS,
  payload: deviceEventOptions,
});

export const fetchDeviceEventOptionsFailure = errorMessage => ({
  type: deviceEventActionTypes.FETCH_DEVICE_EVENT_OPTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchDeviceEventOptionsStartAsync = (id, name) => {
  return dispatch => {
    dispatch(fetchDeviceEventOptionsStart());

    const params = {};
    if (name) params.name = name;

    axios.get(`${API_ENDPOINT}/devices/${id}/events/options`, {params: params})
      .then(result => {
        dispatch(fetchDeviceEventOptionsSuccess(result.data.result.deviceEvents));
      })
      .catch(error => {
        dispatch(fetchDeviceEventOptionsFailure(error.message));
      });
  }
};
