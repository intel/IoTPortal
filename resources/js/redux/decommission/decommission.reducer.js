/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import decommissionActionTypes from './decommission.types';

const INITIAL_STATE = {
  // Submit Decommission
  isSubmittingDecommission: false,
  submitDecommissionErrorMessage: undefined,
}

const decommissionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Submit Decommission
    case decommissionActionTypes.SUBMIT_DECOMMISSION_START:
      return {
        ...state,
        isSubmittingDecommission: true,
        submitDecommissionErrorMessage: undefined,
      };
    case decommissionActionTypes.SUBMIT_DECOMMISSION_SUCCESS:
      return {
        ...state,
        isSubmittingDecommission: false,
      };
    case decommissionActionTypes.SUBMIT_DECOMMISSION_FAILURE:
      return {
        ...state,
        isSubmittingDecommission: false,
        submitDecommissionErrorMessage: action.payload,
      };
    default:
      return state;
  }
}

export default decommissionReducer;
