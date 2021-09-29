/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import * as Yup from 'yup';

import { SOTA_COMMAND_OPTIONS, SOTA_LOG_TO_FILE_OPTIONS, SOTA_OPTIONS } from '../../data/options';

const sotaValidationSchema = (isFieldHidden) => {
  const validationObject = {
    sota_option: Yup.object().shape({
      value: Yup.string().required(),
      label: Yup.string()
        .label('SOTA option')
        .required()
        .oneOf(SOTA_OPTIONS.map(({label}) => label))
    }).nullable().required(),
    command: Yup.object().shape({
      value: Yup.string().required(),
      label: Yup.string()
        .label('command')
        .required()
        .oneOf(SOTA_COMMAND_OPTIONS.map(({label}) => label))
    }).nullable().required()
  };

  if (!isFieldHidden.fetch_link) validationObject.fetch_link = Yup.string().label('fetch link').required();

  if (!isFieldHidden.log_to_file) {
    validationObject.log_to_file = Yup.object().shape({
      value: Yup.string(),
      label: Yup.string()
        .label('log to file')
        .required()
        .oneOf(SOTA_LOG_TO_FILE_OPTIONS.map(({label}) => label))
    }).nullable().required();
  }

  if (!isFieldHidden.username) validationObject.username = Yup.string().label('username');
  if (!isFieldHidden.password) validationObject.password = Yup.string().label('password');

  return Yup.object(validationObject);
};

export default sotaValidationSchema;