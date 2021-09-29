/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import { sidebarActionTypes } from './sidebar.types';

export const setSidebarShow = sidebarShow => ({
  type: sidebarActionTypes.SET_SIDEBAR_SHOW,
  payload: sidebarShow
});