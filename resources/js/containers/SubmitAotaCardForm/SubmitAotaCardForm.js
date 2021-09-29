/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import React from 'react';
import { connect } from 'react-redux';

import { submitAotaStartAsync } from '../../redux/aota/aota.actions';

import AotaCard from '../../components/AotaCard/AotaCard';

const SubmitAotaCardForm = ({deviceUniqueId, isSubmittingAota, submitAotaStartAsync}) => {
  return (
    <AotaCard submitCallback={(data) => submitAotaStartAsync(deviceUniqueId, data)} isPrimaryLoading={isSubmittingAota}
              isPrimaryDisabled={isSubmittingAota} isSecondaryDisabled={isSubmittingAota}/>
  );
};

const mapStateToProps = state => ({
  isSubmittingAota: state.aota.isSubmittingAota,
});

const mapDispatchToProps = dispatch => ({
  submitAotaStartAsync: (deviceUniqueId, data) => dispatch(submitAotaStartAsync(deviceUniqueId, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SubmitAotaCardForm);