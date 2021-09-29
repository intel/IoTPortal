/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Toaster } from 'react-hot-toast';
import { CAlert, CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react';

import { fetchApiTokensStartAsync } from '../../redux/apiToken/apiToken.actions';

import ContentError from '../../components/ContentError/ContentError';
import ApiToken from '../../components/ApiToken/ApiToken';
import CardSkeleton from '../../components/CardSkeleton/CardSkeleton';

const ListApiTokens = (props) => {

  const {
    uniqueId,
    deviceConnectionKey,
    isFetchingApiTokens,
    fetchApiTokensErrorMessage,
    fetchApiTokensStartAsync
  } = props;

  useEffect(() => {
    fetchApiTokensStartAsync();
  }, [])

  if (isFetchingApiTokens) {
    return (<CardSkeleton/>);
  } else if (fetchApiTokensErrorMessage) {
    return (<ContentError errorMessage={fetchApiTokensErrorMessage}/>);
  }

  return (
    <>
      <CRow>
        <CCol xs="12" md="12" className="mb-4">
          <CCard>
            <CCardHeader>
              API Tokens
            </CCardHeader>
            <CCardBody>
              <CAlert color="danger">
                You should never disclose your API tokens to anyone!
              </CAlert>
              <ApiToken name="unique_id" label="Unique ID" value={uniqueId}/>
              <ApiToken name="device_connection_key" label="Device Connection Key" value={deviceConnectionKey}/>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <Toaster/>
    </>
  );
};

const mapStateToProps = state => ({
  uniqueId: state.apiToken.uniqueId,
  deviceConnectionKey: state.apiToken.deviceConnectionKey,
  isFetchingApiTokens: state.apiToken.isFetchingApiTokens,
  fetchApiTokensErrorMessage: state.apiToken.fetchApiTokensErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  fetchApiTokensStartAsync: () => dispatch(fetchApiTokensStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListApiTokens);
