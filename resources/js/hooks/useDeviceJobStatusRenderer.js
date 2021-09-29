/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import { useCallback } from 'react';

import DeviceJobStatusIndicator from '../components/DeviceJobStatusIndicator/DeviceJobStatusIndicator';

const useDeviceJobStatusRenderer = () => {

  return useCallback((data) => {
    if (data) {
      if (!data.error && !data.started_at && !data.completed_at) {
        // Pending
        return (<DeviceJobStatusIndicator status="pending"/>);
      } else if (data.started_at && !data.completed_at) {
        // Processing
        return (<DeviceJobStatusIndicator status="processing"/>);
      } else if (!data.error && data.started_at && data.completed_at) {
        // Successful
        return (<DeviceJobStatusIndicator status="successful"/>);
      } else if (data.error && data.started_at && data.completed_at) {
        // Failed
        return (<DeviceJobStatusIndicator status="failed"/>);
      }
    }

    return null;
  }, []);
};

export default useDeviceJobStatusRenderer;