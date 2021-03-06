/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

const deviceActionTypes = {
  // Index
  FETCH_DEVICES_START: 'FETCH_DEVICES_START',
  FETCH_DEVICES_SUCCESS: 'FETCH_DEVICES_SUCCESS',
  FETCH_DEVICES_FAILURE: 'FETCH_DEVICES_FAILURE',
  SET_FETCH_DEVICES_LAZY_PARAMS: 'SET_FETCH_DEVICES_LAZY_PARAMS',
  RESET_FETCH_DEVICES_LAZY_PARAMS: 'RESET_FETCH_DEVICES_LAZY_PARAMS',

  // Create
  CREATE_DEVICE_START: 'CREATE_DEVICE_START',
  CREATE_DEVICE_SUCCESS: 'CREATE_DEVICE_SUCCESS',
  CREATE_DEVICE_FAILURE: 'CREATE_DEVICE_FAILURE',

  // Read
  FETCH_DEVICE_START: 'FETCH_DEVICE_START',
  FETCH_DEVICE_SUCCESS: 'FETCH_DEVICE_SUCCESS',
  FETCH_DEVICE_FAILURE: 'FETCH_DEVICE_FAILURE',

  // Update
  UPDATE_DEVICE_START: 'UPDATE_DEVICE_START',
  UPDATE_DEVICE_SUCCESS: 'UPDATE_DEVICE_SUCCESS',
  UPDATE_DEVICE_FAILURE: 'UPDATE_DEVICE_FAILURE',

  // Delete Mass
  DELETE_DEVICES_START: 'DELETE_DEVICES_START',
  DELETE_DEVICES_SUCCESS: 'DELETE_DEVICES_SUCCESS',
  DELETE_DEVICES_FAILURE: 'DELETE_DEVICES_FAILURE',
};

export default deviceActionTypes;