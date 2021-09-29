/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import profileActionTypes from './profile.types';
import { API_ENDPOINT } from '../../data/config';


// Read
export const fetchProfileStart = () => ({
  type: profileActionTypes.FETCH_PROFILE_START,
});

export const fetchProfileSuccess = profile => ({
  type: profileActionTypes.FETCH_PROFILE_SUCCESS,
  payload: profile,
});

export const fetchProfileFailure = errorMessage => ({
  type: profileActionTypes.FETCH_PROFILE_FAILURE,
  payload: errorMessage,
});

export const fetchProfileStartAsync = () => {
  return dispatch => {
    dispatch(fetchProfileStart());

    axios.get(`${API_ENDPOINT}/profile`)
      .then(result => {
        dispatch(fetchProfileSuccess(result.data.result.profile));
      })
      .catch(error => {
        dispatch(fetchProfileFailure(error.message));
      });
  };
};