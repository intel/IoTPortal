import React from 'react';
import { connect } from 'react-redux';

import { submitFotaStartAsync } from '../../redux/fota/fota.actions';

import FotaCard from '../../components/FotaCard/FotaCard';

const SubmitFotaCardForm = ({deviceUniqueId, isSubmittingFota, submitFotaStartAsync}) => {
  return (
    <FotaCard submitCallback={(data) => submitFotaStartAsync(deviceUniqueId, data)} isPrimaryLoading={isSubmittingFota}
              isPrimaryDisabled={isSubmittingFota} isSecondaryDisabled={isSubmittingFota}/>
  );
};

const mapStateToProps = state => ({
  isSubmittingFota: state.fota.isSubmittingFota,
});

const mapDispatchToPros = dispatch => ({
  submitFotaStartAsync: (deviceUniqueId, data) => dispatch(submitFotaStartAsync(deviceUniqueId, data)),
});

export default connect(mapStateToProps, mapDispatchToPros)(SubmitFotaCardForm);