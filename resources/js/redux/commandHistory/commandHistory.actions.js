import React from 'react';

import commandHistoryActionTypes from './commandHistory.types';
import { API_ENDPOINT } from '../../data/config';

export const fetchCommandHistoryStart = () => ({
  type: commandHistoryActionTypes.FETCH_COMMAND_HISTORY_START,
});

export const fetchCommandHistorySuccess = (commandHistories) => ({
  type: commandHistoryActionTypes.FETCH_COMMAND_HISTORY_SUCCESS,
  payload: commandHistories,
});

export const fetchCommandHistoryFailure = errorMessage => ({
  type: commandHistoryActionTypes.FETCH_COMMAND_HISTORY_FAILURE,
  payload: errorMessage,
});

export const fetchCommandHistoryStartAsync = (id, params) => {
  return dispatch => {
    dispatch(fetchCommandHistoryStart());

    axios.get(`${API_ENDPOINT}/devices/${id}/command-histories`, {params: params})
      .then(result => {
        dispatch(fetchCommandHistorySuccess(result.data.result.commandHistories));
      })
      .catch(error => {
        dispatch(fetchCommandHistoryFailure(error.message));
      });
  };
};
