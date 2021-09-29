/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import * as Yup from 'yup';

import { isDeviceGroupNameUniqueDebounced } from '../../utils/utils';

const createDeviceGroupValidationSchema = () => {
  return Yup.object({
    name: Yup.string()
      .label('device group name')
      .required()
      .max(255)
      .test('isDeviceGroupNameUnique', ({path}) => ({
        key: 'validation.unique',
        values: {attribute: path}
      }), isDeviceGroupNameUniqueDebounced),
  });
};

export default createDeviceGroupValidationSchema;