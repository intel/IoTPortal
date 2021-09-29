/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import * as Yup from 'yup';

const editDeviceValidationSchema = (deviceCategoryOptions) => {
  return Yup.object({
    name: Yup.string()
      .label('device name')
      .required()
      .max(255),
    device_category: Yup.object().shape({
      value: Yup.string().required(),
      label: Yup.string()
        .label('device category')
        .required()
        .oneOf(deviceCategoryOptions ? deviceCategoryOptions.map(({label}) => label) : [])
    }).nullable().required(),
  });
};

export default editDeviceValidationSchema;