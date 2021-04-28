import React from 'react';
import { connect } from 'react-redux';

import { submitCotaStartAsync } from '../../redux/cota/cota.actions';

import CotaCard from '../../components/CotaCard/CotaCard';

const SubmitCotaCardForm = ({deviceId, isSubmittingCota, submitCotaStartAsync}) => {
  return (
    <CotaCard submitCallback={(data) => submitCotaStartAsync(deviceId, data)} isPrimaryLoading={isSubmittingCota}
              isSecondaryLoading={isSubmittingCota} isPrimaryDisabled={isSubmittingCota}
              isSecondaryDisabled={isSubmittingCota}/>
  );
};

const mapStateToProps = state => ({
  isSubmittingCota: state.cota.isSubmittingCota,
});

const mapDispatchToProps = dispatch => ({
  submitCotaStartAsync: (id, data) => dispatch(submitCotaStartAsync(id, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SubmitCotaCardForm);