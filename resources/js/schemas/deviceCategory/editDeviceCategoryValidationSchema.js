/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import * as Yup from 'yup';

const editDeviceCategoryValidationSchema = () => {
  return Yup.object({
    name: Yup.string()
      .label('device category name')
      .required()
      .max(255),
  });
};

export default editDeviceCategoryValidationSchema;