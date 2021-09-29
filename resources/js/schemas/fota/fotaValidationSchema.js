/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import * as Yup from 'yup';

const fotaValidationSchema = () => {
  return Yup.object({
    bios_version: Yup.string().label('BIOS version').required(),
    fetch_link: Yup.string().label('fetch link').required(),
    manufacturer: Yup.string().label('manufacturer').required(),
    path: Yup.string().label('path'),
    product: Yup.string().label('product').required(),
    release_date: Yup.string().label('release date').required(),
    signature: Yup.string().label('signature'),
    tool_options: Yup.string().label('tool options'),
    vendor: Yup.string().label('vendor').required(),
    server_username: Yup.string().label('server username'),
    server_password: Yup.string().label('server password'),
  });
};

export default fotaValidationSchema;