/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import aotaActionTypes from './aota.types';


const INITIAL_STATE = {
  // Submit AOTA
  isSubmittingAota: false,
  submitAotaErrorMessage: undefined,
};

const aotaReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Submit AOTA
    case aotaActionTypes.SUBMIT_AOTA_START:
      return {
        ...state,
        isSubmittingAota: true,
        submitAotaErrorMessage: undefined,
      };
    case aotaActionTypes.SUBMIT_AOTA_SUCCESS:
      return {
        ...state,
        isSubmittingAota: false,
      };
    case aotaActionTypes.SUBMIT_AOTA_FAILURE:
      return {
        ...state,
        isSubmittingAota: false,
        submitAotaErrorMessage: action.payload,
      };
    default:
      return state;
  }
}

export default aotaReducer;
