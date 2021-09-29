/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import userActionTypes from './user.types';
import { API_ENDPOINT } from '../../data/config';


// Read
export const fetchUserStart = () => ({
  type: userActionTypes.FETCH_USER_START,
});

export const fetchUserSuccess = user => ({
  type: userActionTypes.FETCH_USER_SUCCESS,
  payload: user,
});

export const fetchUserFailure = errorMessage => ({
  type: userActionTypes.FETCH_USER_FAILURE,
  payload: errorMessage,
});

export const fetchUserStartAsync = () => {
  return dispatch => {
    dispatch(fetchUserStart());

    axios.get(`${API_ENDPOINT}/user`)
      .then(result => {
        dispatch(fetchUserSuccess(result.data.result.user));
      })
      .catch(error => {
        dispatch(fetchUserFailure(error.message));
      });
  };
};