/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

const deviceJobActionTypes = {
  // Index
  FETCH_DEVICE_JOBS_START: 'FETCH_DEVICE_JOBS_START',
  FETCH_DEVICE_JOBS_SUCCESS: 'FETCH_DEVICE_JOBS_SUCCESS',
  FETCH_DEVICE_JOBS_FAILURE: 'FETCH_DEVICE_JOBS_FAILURE',
  SET_FETCH_DEVICE_JOBS_LAZY_PARAMS: 'SET_FETCH_DEVICE_JOBS_LAZY_PARAMS',
  RESET_FETCH_DEVICE_JOBS_LAZY_PARAMS: 'RESET_FETCH_DEVICE_JOBS_LAZY_PARAMS',

  // Create
  CREATE_DEVICE_JOB_START: 'CREATE_DEVICE_JOB_START',
  CREATE_DEVICE_JOB_SUCCESS: 'CREATE_DEVICE_JOB_SUCCESS',
  CREATE_DEVICE_JOB_FAILURE: 'CREATE_DEVICE_JOB_FAILURE',

  // Read
  FETCH_DEVICE_JOB_START: 'FETCH_DEVICE_JOB_START',
  FETCH_DEVICE_JOB_SUCCESS: 'FETCH_DEVICE_JOB_SUCCESS',
  FETCH_DEVICE_JOB_FAILURE: 'FETCH_DEVICE_JOB_FAILURE',

  // Update
  UPDATE_DEVICE_JOB_START: 'UPDATE_DEVICE_JOB_START',
  UPDATE_DEVICE_JOB_SUCCESS: 'UPDATE_DEVICE_JOB_SUCCESS',
  UPDATE_DEVICE_JOB_FAILURE: 'UPDATE_DEVICE_JOB_FAILURE',

  // Delete Mass
  DELETE_DEVICE_JOBS_START: 'DELETE_DEVICE_JOBS_START',
  DELETE_DEVICE_JOBS_SUCCESS: 'DELETE_DEVICE_JOBS_SUCCESS',
  DELETE_DEVICE_JOBS_FAILURE: 'DELETE_DEVICE_JOBS_FAILURE',

  // Poll device job
  POLL_FETCH_DEVICE_JOB_START: 'POLL_FETCH_DEVICE_JOB_START',
  POLL_FETCH_DEVICE_JOB_STOP: 'POLL_FETCH_DEVICE_JOB_STOP',
};

export default deviceJobActionTypes;