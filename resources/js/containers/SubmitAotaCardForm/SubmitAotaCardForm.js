import React from 'react';
import { connect } from 'react-redux';

import { submitAotaStartAsync } from '../../redux/aota/aota.actions';

import AotaCard from '../AotaCard/AotaCard';

const SubmitAotaCardForm = ({deviceId, isSubmittingAota, submitAotaStartAsync}) => {
  return (
    <AotaCard submitCallback={(data) => submitAotaStartAsync(deviceId, data)} isPrimaryLoading={isSubmittingAota}
              isSecondaryLoading={isSubmittingAota} isPrimaryDisabled={isSubmittingAota}
              isSecondaryDisabled={isSubmittingAota}/>
  );
};

const mapStateToProps = state => ({
  isSubmittingAota: state.aota.isSubmittingAota,
});

const mapDispatchToProps = dispatch => ({
  submitAotaStartAsync: (id, data) => dispatch(submitAotaStartAsync(id, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SubmitAotaCardForm);