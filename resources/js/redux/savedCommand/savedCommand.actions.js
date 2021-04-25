import React from 'react';

import savedCommandActionTypes from './savedCommand.types';
import { API_ENDPOINT } from '../../data/config';
import { redirectToAfterToastSuccess, toastHelper } from '../../utils/utils';


// Create
export const createSavedCommandStart = () => ({
  type: savedCommandActionTypes.CREATE_SAVED_COMMAND_START,
});

export const createSavedCommandSuccess = () => ({
  type: savedCommandActionTypes.CREATE_SAVED_COMMAND_SUCCESS,
});

export const createSavedCommandFailure = errorMessage => ({
  type: savedCommandActionTypes.CREATE_SAVED_COMMAND_FAILURE,
  payload: errorMessage,
});

export const createSavedCommandStartAsync = (data, history) => {
  return dispatch => {
    dispatch(createSavedCommandStart());

    const toastId = toastHelper.loading('Creating saved command');

    axios.post(`${API_ENDPOINT}/commands/saved`, data)
      .then(result => {
        dispatch(createSavedCommandSuccess());
        toastHelper.success('Saved command created successfully!', toastId);
        redirectToAfterToastSuccess(history, '/commands/saved')
      })
      .catch(error => {
        dispatch(createSavedCommandFailure(error.message));
        toastHelper.error(`Failed to create saved command: ${error.message}`, toastId);
      });
  };
};