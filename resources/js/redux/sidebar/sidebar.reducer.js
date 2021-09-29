/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import { sidebarActionTypes } from './sidebar.types';

const INITIAL_STATE = {
  sidebarShow: 'responsive'
};

const sidebarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case sidebarActionTypes.SET_SIDEBAR_SHOW:
      return {
        ...state,
        sidebarShow: action.payload
      };
    default:
      return state;
  }
};

export default sidebarReducer;
