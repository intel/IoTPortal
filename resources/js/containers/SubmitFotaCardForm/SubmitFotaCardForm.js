import React from 'react';
import { connect } from 'react-redux';

import { submitFotaStartAsync } from '../../redux/fota/fota.actions';

import FotaCard from '../FotaCard/FotaCard';

const SubmitFotaCardForm = ({deviceId, isSubmittingFota, submitFotaStartAsync}) => {
  return (
    <FotaCard submitCallback={(data) => submitFotaStartAsync(deviceId, data)} isPrimaryLoading={isSubmittingFota}
              isSecondaryLoading={isSubmittingFota} isPrimaryDisabled={isSubmittingFota}
              isSecondaryDisabled={isSubmittingFota}/>
  );
};

const mapStateToProps = state => ({
  isSubmittingFota: state.fota.isSubmittingFota,
});

const mapDispatchToPros = dispatch => ({
  submitFotaStartAsync: (id, data) => dispatch(submitFotaStartAsync(id, data)),
});

export default connect(mapStateToProps, mapDispatchToPros)(SubmitFotaCardForm);