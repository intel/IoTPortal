import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormGroup,
  CInput,
  CInputGroup,
  CInputGroupAppend,
  CLabel,
  CRow
} from '@coreui/react';

import CardSkeleton from '../../components/CardSkeleton/CardSkeleton';
import Error from '../../components/Error/Error';

import { fetchApiTokensStartAsync } from '../../redux/apiToken/apiToken.actions';
import { toast, Toaster } from 'react-hot-toast';


const ListApiTokens = (props) => {

  const {
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
    return (<Error errorMessage={fetchApiTokensErrorMessage}/>);
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
              <CFormGroup>
                <CLabel htmlFor="device_connection_key">Device Connection Key</CLabel>
                <CInputGroup>
                  <CInput type="text" name="device_connection_key" value={deviceConnectionKey} disabled/>
                  <CInputGroupAppend>
                    <CopyToClipboard text={deviceConnectionKey}
                                     onCopy={() => toast.success('Copied')}>
                      <CButton type="button" color="primary">Copy</CButton>
                    </CopyToClipboard>
                  </CInputGroupAppend>
                </CInputGroup>
              </CFormGroup>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <Toaster/>
    </>
  );
};

const mapStateToProps = state => ({
  deviceConnectionKey: state.apiToken.deviceConnectionKey,
  isFetchingApiTokens: state.apiToken.isFetchingApiTokens,
  fetchApiTokensErrorMessage: state.apiToken.fetchApiTokensErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  fetchApiTokensStartAsync: () => dispatch(fetchApiTokensStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListApiTokens);
