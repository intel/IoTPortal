/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import React from 'react';

import apiTokenActionTypes from './apiToken.types';
import { API_ENDPOINT } from '../../data/config';


// Read
export const fetchApiTokensStart = () => ({
  type: apiTokenActionTypes.FETCH_API_TOKENS_START,
});

export const fetchApiTokensSuccess = tokens => ({
  type: apiTokenActionTypes.FETCH_API_TOKENS_SUCCESS,
  payload: tokens,
});

export const fetchApiTokensFailure = errorMessage => ({
  type: apiTokenActionTypes.FETCH_API_TOKENS_FAILURE,
  payload: errorMessage,
});

export const fetchApiTokensStartAsync = () => {
  return dispatch => {
    dispatch(fetchApiTokensStart());

    axios.get(`${API_ENDPOINT}/tokens`)
      .then(result => {
        dispatch(fetchApiTokensSuccess(result.data.result));
      })
      .catch(error => {
        dispatch(fetchApiTokensFailure(error.message));
      });
  };
};