/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import deviceCommandActionTypes from './deviceCommand.types';


const INITIAL_STATE = {
  // Dropdown options
  deviceCommandOptions: null,
  isFetchingDeviceCommandOptions: false,
  fetchDeviceCommandOptionsErrorMessage: undefined,
};

const deviceCommandReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Dropdown options
    case deviceCommandActionTypes.FETCH_DEVICE_COMMAND_OPTIONS_START:
      return {
        ...state,
        isFetchingDeviceCommandOptions: true,
        fetchDeviceCommandOptionsErrorMessage: undefined,
      };
    case deviceCommandActionTypes.FETCH_DEVICE_COMMAND_OPTIONS_SUCCESS:
      return {
        ...state,
        deviceCommandOptions: action.payload,
        isFetchingDeviceCommandOptions: false,
      };
    case deviceCommandActionTypes.FETCH_DEVICE_COMMAND_OPTIONS_FAILURE:
      return {
        ...state,
        isFetchingDeviceCommandOptions: false,
        fetchDeviceCommandOptionsErrorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default deviceCommandReducer;
