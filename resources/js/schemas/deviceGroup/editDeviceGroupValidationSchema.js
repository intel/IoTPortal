/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import * as Yup from 'yup';

const editDeviceGroupValidationSchema = () => {
  return Yup.object({
    name: Yup.string()
      .label('device group name')
      .required()
      .max(255),
  });
};

export default editDeviceGroupValidationSchema;