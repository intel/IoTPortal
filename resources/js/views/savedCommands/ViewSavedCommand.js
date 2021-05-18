import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import CIcon from '@coreui/icons-react';
import { Toaster } from 'react-hot-toast';
import { CButton, CButtonGroup, CCard, CCardBody, CCardHeader, CCol, CLabel, CRow } from '@coreui/react';

import {
  deleteSavedCommandsStartAsync,
  fetchSavedCommandStartAsync
} from '../../redux/savedCommand/savedCommand.actions';

import Error from '../../components/Error/Error';
import CardSkeleton from '../../components/CardSkeleton/CardSkeleton';
import DeleteSavedCommandModal from '../../components/DeleteSavedCommandModal/DeleteSavedCommandModal';
import PayloadViewer from '../../components/PayloadViewer/PayloadViewer';

const ViewSavedCommand = (props) => {

  const savedCommandUniqueId = props.match.params.id;
  const {
    history,
    match,
    savedCommand,
    isFetchingSavedCommand,
    fetchSavedCommandErrorMessage,
    fetchSavedCommandStartAsync,
    deleteSavedCommandsStartAsync
  } = props;

  const [showDeleteSavedCommandModal, setShowDeleteSavedCommandModal] = useState(false);

  useEffect(() => {
    fetchSavedCommandStartAsync(savedCommandUniqueId);
  }, []);

  const deleteSavedCommand = () => {
    deleteSavedCommandsStartAsync([savedCommand.id], history);
    setShowDeleteSavedCommandModal(!showDeleteSavedCommandModal);
  };

  if (isFetchingSavedCommand) {
    return (<CardSkeleton/>);
  } else if (fetchSavedCommandErrorMessage) {
    return (<Error errorMessage={fetchSavedCommandErrorMessage}/>);
  }

  return (
    <>
      <CRow>
        <CCol xs="12" md="12" className="mb-4">
          <CCard>
            <CCardHeader>
              <CRow>
                <CCol className="mb-3" lg="12" xl="9">
                  <div className="d-flex">
                    <div className="m-4">
                      <CIcon name='cilCommand' size="4xl"/>
                    </div>
                    <div className="flex-grow-1 overflow-hidden my-auto">
                      <h2>{savedCommand.name}</h2>
                      <small>ID: {savedCommand.unique_id}</small><br/>
                    </div>
                  </div>
                </CCol>
                <CCol className="my-auto" lg="12" xl="3">
                  <div className="d-flex justify-content-center">
                    <CButtonGroup>
                      {/*<CButton color="primary" onClick={() => history.push(`${match.url}/edit`)}> Edit</CButton>*/}
                      <CButton color="danger"
                               onClick={() => setShowDeleteSavedCommandModal(!showDeleteSavedCommandModal)}> Delete</CButton>
                    </CButtonGroup>
                  </div>
                </CCol>
              </CRow>
            </CCardHeader>
            <CCardBody>
              <div className="mb-3">
                <CLabel>Command name</CLabel>
                <div><span>{savedCommand.command_name}</span></div>
              </div>
              <PayloadViewer payload={savedCommand.payload}/>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <DeleteSavedCommandModal savedCommand={savedCommand} show={showDeleteSavedCommandModal}
                               onClose={() => setShowDeleteSavedCommandModal(!showDeleteSavedCommandModal)}
                               onConfirm={deleteSavedCommand}/>
      <Toaster/>
    </>
  );
};

const mapStateToProps = state => ({
  savedCommand: state.savedCommand.savedCommand,
  isFetchingSavedCommand: state.savedCommand.isFetchingSavedCommand,
  fetchSavedCommandErrorMessage: state.savedCommand.fetchSavedCommandErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  fetchSavedCommandStartAsync: (savedCommandUniqueId) => dispatch(fetchSavedCommandStartAsync(savedCommandUniqueId)),
  deleteSavedCommandsStartAsync: (ids, history) => dispatch(deleteSavedCommandsStartAsync(ids, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewSavedCommand);
