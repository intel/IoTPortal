/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import timerActionTypes from './timer.types';


// Tick device job elapsed time
export const tickCurrentTimeStartAsync = (interval = 1000) => {
  return dispatch => {
    const tick = () => dispatch(updateCurrentTime());

    dispatch({
      type: timerActionTypes.TICK_CURRENT_TIME_START,
      tick,
      interval,
    });
  };
};

export const tickCurrentTimeStop = () => ({
  type: timerActionTypes.TICK_CURRENT_TIME_STOP,
});

export const updateCurrentTime = () => ({
  type: timerActionTypes.UPDATE_CURRENT_TIME,
});