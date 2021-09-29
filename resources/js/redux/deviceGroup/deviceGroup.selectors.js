/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import { createSelector } from 'reselect';

const selectDeviceGroupReducer = state => state.deviceGroup;

// deviceGroup
export const selectDeviceGroup = createSelector(
  [selectDeviceGroupReducer],
  deviceGroupReducer => deviceGroupReducer.deviceGroup,
);

export const selectDeviceGroupName = createSelector(
  [selectDeviceGroup],
  deviceGroup => deviceGroup?.name,
);


// deviceGroupDevices
export const selectDeviceGroupDevices = createSelector(
  [selectDeviceGroupReducer],
  deviceGroupReducer => deviceGroupReducer.deviceGroupDevices,
);

export const selectDeviceGroupDevicesCount = createSelector(
  [selectDeviceGroupDevices],
  deviceGroupDevices => deviceGroupDevices?.length || 0,
)


// Dropdown options
export const selectDeviceGroupOptions = createSelector(
  [selectDeviceGroupReducer],
  deviceGroupReducer => deviceGroupReducer.deviceGroupOptions,
);

export const selectIsFetchingDeviceGroupOptions = createSelector(
  [selectDeviceGroupReducer],
  deviceGroupReducer => deviceGroupReducer.isFetchingDeviceGroupOptions,
);

export const selectFetchDeviceGroupOptionsErrorMessage = createSelector(
  [selectDeviceGroupReducer],
  deviceGroupReducer => deviceGroupReducer.fetchDeviceGroupOptionsErrorMessage,
);