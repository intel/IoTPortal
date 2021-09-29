/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import React from 'react';
import { connect } from 'react-redux';

import { submitSotaStartAsync } from '../../redux/sota/sota.actions';

import SotaCard from '../../components/SotaCard/SotaCard';

const SubmitSotaCardForm = ({deviceUniqueId, isSubmittingSota, submitSotaStartAsync}) => {
  return (
    <SotaCard submitCallback={(data) => submitSotaStartAsync(deviceUniqueId, data)} isPrimaryLoading={isSubmittingSota}
              isPrimaryDisabled={isSubmittingSota} isSecondaryDisabled={isSubmittingSota}/>
  );
};

const mapStateToProps = state => ({
  isSubmittingSota: state.sota.isSubmittingSota,
});

const mapDispatchToPros = dispatch => ({
  submitSotaStartAsync: (deviceUniqueId, data) => dispatch(submitSotaStartAsync(deviceUniqueId, data)),
});

export default connect(mapStateToProps, mapDispatchToPros)(SubmitSotaCardForm);