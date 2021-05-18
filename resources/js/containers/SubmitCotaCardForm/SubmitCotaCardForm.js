import React from 'react';
import { connect } from 'react-redux';

import { submitCotaStartAsync } from '../../redux/cota/cota.actions';

import CotaCard from '../../components/CotaCard/CotaCard';

const SubmitCotaCardForm = ({deviceUniqueId, isSubmittingCota, submitCotaStartAsync}) => {
  return (
    <CotaCard submitCallback={(data) => submitCotaStartAsync(deviceUniqueId, data)} isPrimaryLoading={isSubmittingCota}
              isPrimaryDisabled={isSubmittingCota} isSecondaryDisabled={isSubmittingCota}/>
  );
};

const mapStateToProps = state => ({
  isSubmittingCota: state.cota.isSubmittingCota,
});

const mapDispatchToProps = dispatch => ({
  submitCotaStartAsync: (deviceUniqueId, data) => dispatch(submitCotaStartAsync(deviceUniqueId, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SubmitCotaCardForm);