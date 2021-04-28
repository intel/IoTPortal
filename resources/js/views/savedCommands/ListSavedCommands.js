import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Toaster } from 'react-hot-toast';
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';

import { deleteSavedCommandsStartAsync } from '../../redux/savedCommand/savedCommand.actions';

import SavedCommandsDataTable from '../../containers/SavedCommandsDataTable/SavedCommandsDataTable';
import DeleteSavedCommandsModal from '../../components/DeleteSavedCommandsModal/DeleteSavedCommandsModal';

const ListSavedCommands = ({
                             history,
                             match,
                             isDeletingSavedCommands,
                             deleteSavedCommandsErrorMessage,
                             deleteSavedCommandsStartAsync
                           }) => {

  const [showDeleteSavedCommandsModal, setShowDeleteSavedCommandsModal] = useState(false);
  const [selectedSavedCommands, setSelectedSavedCommands] = useState(null);

  const confirmDeleteSelectedSavedCommands = () => {
    setShowDeleteSavedCommandsModal(!showDeleteSavedCommandsModal);
  };

  const deleteSelectedSavedCommands = () => {
    const selectedSavedCommandIds = selectedSavedCommands.map(selectedSavedCommand => selectedSavedCommand.id);
    deleteSavedCommandsStartAsync(selectedSavedCommandIds);
    setShowDeleteSavedCommandsModal(!showDeleteSavedCommandsModal);
    setSelectedSavedCommands(null);
  };

  const leftToolbar = () => {
    return (
      <>
        <Button label="New" icon="pi pi-plus" className="p-button-success mr-2"
                onClick={() => history.push(`${match.url}/create`)}/>
        <Button label="Delete" icon="pi pi-trash" className="p-button-danger mr-2"
                onClick={confirmDeleteSelectedSavedCommands}
                disabled={!selectedSavedCommands || !selectedSavedCommands.length}/>
      </>
    );
  };

  return (
    <>
      <CRow>
        <CCol xs="12" md="12" className="mb-4">
          <CCard>
            <CCardHeader>
              Saved Commands
            </CCardHeader>
            <CCardBody>
              <Toolbar className="mb-4" left={leftToolbar}/>
              <SavedCommandsDataTable selectedSavedCommands={selectedSavedCommands}
                                      setSelectedSavedCommands={setSelectedSavedCommands}/>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      {showDeleteSavedCommandsModal &&
      <DeleteSavedCommandsModal show={showDeleteSavedCommandsModal}
                                onClose={() => setShowDeleteSavedCommandsModal(!showDeleteSavedCommandsModal)}
                                onConfirm={deleteSelectedSavedCommands}/>}
      <Toaster/>
    </>
  );
};

const mapStateToProps = state => ({
  isDeletingSavedCommands: state.savedCommand.isDeletingSavedCommands,
  deleteSavedCommandsErrorMessage: state.savedCommand.deleteSavedCommandsErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  deleteSavedCommandsStartAsync: (ids, history) => dispatch(deleteSavedCommandsStartAsync(ids, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListSavedCommands);
