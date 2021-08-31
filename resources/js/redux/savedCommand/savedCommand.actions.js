import React from 'react';
import pluralize from 'pluralize';

import savedCommandActionTypes from './savedCommand.types';
import { API_ENDPOINT } from '../../data/config';
import { redirectToAfterToastSuccess, toastHelper } from '../../utils/utils';


// Index
export const fetchSavedCommandsStart = () => ({
  type: savedCommandActionTypes.FETCH_SAVED_COMMANDS_START,
});

export const fetchSavedCommandsSuccess = savedCommands => ({
  type: savedCommandActionTypes.FETCH_SAVED_COMMANDS_SUCCESS,
  payload: savedCommands,
});

export const fetchSavedCommandsFailure = errorMessage => ({
  type: savedCommandActionTypes.FETCH_SAVED_COMMANDS_FAILURE,
  payload: errorMessage,
});

export const fetchSavedCommandsStartAsync = lazyParams => {
  return dispatch => {
    dispatch(fetchSavedCommandsStart());

    axios.get(`${API_ENDPOINT}/commands/saved`, {params: lazyParams})
      .then(result => {
        dispatch(fetchSavedCommandsSuccess(result.data.result.savedCommands));
      })
      .catch(error => {
        dispatch(fetchSavedCommandsFailure(error.message));
      });
  };
};

export const setFetchSavedCommandsLazyParams = lazyParams => ({
  type: savedCommandActionTypes.SET_FETCH_SAVED_COMMANDS_LAZY_PARAMS,
  payload: lazyParams,
});

export const resetFetchSavedCommandsLazyParams = () => ({
  type: savedCommandActionTypes.RESET_FETCH_SAVED_COMMANDS_LAZY_PARAMS,
});


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


// Read
export const fetchSavedCommandStart = () => ({
  type: savedCommandActionTypes.FETCH_SAVED_COMMAND_START,
});

export const fetchSavedCommandSuccess = savedCommand => ({
  type: savedCommandActionTypes.FETCH_SAVED_COMMAND_SUCCESS,
  payload: savedCommand,
});

export const fetchSavedCommandFailure = errorMessage => ({
  type: savedCommandActionTypes.FETCH_SAVED_COMMAND_FAILURE,
  payload: errorMessage,
});

export const fetchSavedCommandStartAsync = id => {
  return dispatch => {
    dispatch(fetchSavedCommandStart());

    axios.get(`${API_ENDPOINT}/commands/saved/${id}`)
      .then(result => {
        dispatch(fetchSavedCommandSuccess(result.data.result.savedCommand));
      })
      .catch(error => {
        dispatch(fetchSavedCommandFailure(error.message));
      });
  };
};


// Update
export const updateSavedCommandStart = () => ({
  type: savedCommandActionTypes.UPDATE_SAVED_COMMAND_START,
});

export const updateSavedCommandSuccess = savedCommand => ({
  type: savedCommandActionTypes.UPDATE_SAVED_COMMAND_SUCCESS,
  payload: savedCommand,
});

export const updateSavedCommandFailure = errorMessage => ({
  type: savedCommandActionTypes.UPDATE_SAVED_COMMAND_FAILURE,
  payload: errorMessage,
});

export const updateSavedCommandStartAsync = (id, data, history) => {
  return dispatch => {
    dispatch(updateSavedCommandStart());

    const toastId = toastHelper.loading('Updating saved command');

    axios.patch(`${API_ENDPOINT}/commands/saved/${id}`, data)
      .then(result => {

        dispatch(updateSavedCommandSuccess(result.data.result.savedCommand));
        toastHelper.success('Saved command updated successfully!', toastId);

        if (history) {
          redirectToAfterToastSuccess(history, '/commands/saved')
        }

      })
      .catch(error => {
        dispatch(updateSavedCommandFailure(error.message));
        toastHelper.error(`Saved command update failed: ${error.message}`, toastId);
      });
  };
};


// Delete Mass
export const deleteSavedCommandsStart = () => ({
  type: savedCommandActionTypes.DELETE_SAVED_COMMANDS_START,
});

export const deleteSavedCommandsSuccess = () => ({
  type: savedCommandActionTypes.DELETE_SAVED_COMMANDS_SUCCESS,
});

export const deleteSavedCommandsFailure = errorMessage => ({
  type: savedCommandActionTypes.DELETE_SAVED_COMMANDS_FAILURE,
  payload: errorMessage,
});

export const deleteSavedCommandsStartAsync = (ids, history) => {
  return (dispatch, getState) => {
    dispatch(deleteSavedCommandsStart());

    const toastId = toastHelper.loading(`Deleting saved ${pluralize('command', ids.length)}`);

    axios.delete(`${API_ENDPOINT}/commands/saved`, {data: {ids: ids}})
      .then(result => {
        dispatch(deleteSavedCommandsSuccess());
        toastHelper.success(`Saved ${pluralize('command', ids.length)} deleted successfully!`, toastId);

        if (history) {
          redirectToAfterToastSuccess(history, '/commands/saved')
        } else {
          dispatch(fetchSavedCommandsStartAsync(getState().savedCommand.fetchSavedCommandsLazyParams));
        }

      })
      .catch(error => {
        dispatch(deleteSavedCommandsFailure(error.message));
        toastHelper.error(`Saved ${pluralize('command', ids.length)} delete failed: ${error.message}`, toastId);
      });
  };
};


// Fetch dropdown options
export const fetchSavedCommandOptionsStart = () => ({
  type: savedCommandActionTypes.FETCH_SAVED_COMMAND_OPTIONS_START,
});

export const fetchSavedCommandOptionsSuccess = savedCommandOptions => ({
  type: savedCommandActionTypes.FETCH_SAVED_COMMAND_OPTIONS_SUCCESS,
  payload: savedCommandOptions,
});

export const fetchSavedCommandOptionsFailure = errorMessage => ({
  type: savedCommandActionTypes.FETCH_SAVED_COMMAND_OPTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchSavedCommandOptionsStartAsync = (name) => {
  return dispatch => {
    dispatch(fetchSavedCommandOptionsStart());

    const params = {};
    if (name) params.name = name;

    axios.get(`${API_ENDPOINT}/commands/saved/options`, {params: params})
      .then(result => {
        dispatch(fetchSavedCommandOptionsSuccess(result.data.result.savedCommands));
      })
      .catch(error => {
        dispatch(fetchSavedCommandOptionsFailure(error.message));
      });
  };
};
