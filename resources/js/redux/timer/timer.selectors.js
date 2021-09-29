/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import moment from 'moment';
import { createSelector } from 'reselect';

const selectTimerReducer = state => state.timer;

export const selectCurrentTime = createSelector(
  [selectTimerReducer],
  timerReducer => timerReducer.currentTime || moment()
);

export const selectCurrentTimeTickerId = createSelector(
  [selectTimerReducer],
  timerReducer => timerReducer.currentTimeTickerId
);

