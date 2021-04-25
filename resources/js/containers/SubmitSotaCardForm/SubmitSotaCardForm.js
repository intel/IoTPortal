import React from 'react';
import { connect } from 'react-redux';

import { submitSotaStartAsync } from '../../redux/sota/sota.actions';

import SotaCard from '../SotaCard/SotaCard';

const SubmitSotaCardForm = ({deviceId, isSubmittingSota, submitSotaStartAsync}) => {
  return (
    <SotaCard submitCallback={(data) => submitSotaStartAsync(deviceId, data)} isPrimaryLoading={isSubmittingSota}
              isSecondaryLoading={isSubmittingSota} isPrimaryDisabled={isSubmittingSota}
              isSecondaryDisabled={isSubmittingSota}/>
  );
};

const mapStateToProps = state => ({
  isSubmittingSota: state.sota.isSubmittingSota,
});

const mapDispatchToPros = dispatch => ({
  submitSotaStartAsync: (id, data) => dispatch(submitSotaStartAsync(id, data)),
});

export default connect(mapStateToProps, mapDispatchToPros)(SubmitSotaCardForm);