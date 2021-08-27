import { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

import {
  deleteSavedCommandsStartAsync,
  fetchSavedCommandsStartAsync,
  resetFetchSavedCommandsLazyParams,
  setFetchSavedCommandsLazyParams,
} from '../../redux/savedCommand/savedCommand.actions';

import DataTableHeader from '../../components/DataTableHeader/DataTableHeader';
import DeleteSavedCommandModal from '../../components/DeleteSavedCommandModal/DeleteSavedCommandModal';
import PayloadViewer from '../../components/PayloadViewer/PayloadViewer';

import './savedCommandsDataTable.css';

const SavedCommandsDataTable = ({
                                  history,
                                  hideActionsBar,
                                  selectedSavedCommands,
                                  setSelectedSavedCommands,
                                  savedCommands,
                                  savedCommandsTotalRecords,
                                  isFetchingSavedCommands,
                                  fetchSavedCommandsErrorMessage,
                                  fetchSavedCommandsLazyParams,
                                  isDeletingSavedCommands,
                                  deleteSavedCommandsErrorMessage,
                                  fetchSavedCommandsStartAsync,
                                  setFetchSavedCommandsLazyParams,
                                  resetFetchSavedCommandsLazyParams,
                                  deleteSavedCommandsStartAsync
                                }) => {

  const [showDeleteSavedCommandModal, setShowDeleteSavedCommandModal] = useState(false);
  const [savedCommand, setSavedCommand] = useState(null);
  const [expandedRows, setExpandedRows] = useState(null);
  const [globalFilter, setGlobalFilter] = useState(null);

  const dt = useRef(null);

  useEffect(() => {
    fetchSavedCommandsStartAsync(fetchSavedCommandsLazyParams);
  }, [fetchSavedCommandsLazyParams]);

  useEffect(() => resetFetchSavedCommandsLazyParams, []);

  const confirmDeleteSavedCommand = (savedCommand) => {
    setSavedCommand(savedCommand);
    setShowDeleteSavedCommandModal(!showDeleteSavedCommandModal);
  };

  const deleteSavedCommand = () => {
    deleteSavedCommandsStartAsync([savedCommand.id]);
    setShowDeleteSavedCommandModal(!showDeleteSavedCommandModal);
    setSavedCommand(null);
  };

  const onPage = (event) => {
    let _lazyParams = {...fetchSavedCommandsLazyParams, ...event};
    _lazyParams['page'] += 1;
    setFetchSavedCommandsLazyParams(_lazyParams);
  };

  const onSort = (event) => {
    let _lazyParams = {...fetchSavedCommandsLazyParams, ...event};
    setFetchSavedCommandsLazyParams(_lazyParams);
  };

  const onFilter = (event) => {
    let _lazyParams = {...fetchSavedCommandsLazyParams, ...event};
    _lazyParams['first'] = 0;
    _lazyParams['page'] = 1;
    setFetchSavedCommandsLazyParams(_lazyParams);
  };

  const header = (
    <DataTableHeader headerName="Saved Commands" onSearchInputChange={(e) => setGlobalFilter(e.target.value)}/>);

  const savedCommandUniqueIdColumnBody = (rowData) => {
    return (
      <>
        <span className="p-column-title">Saved command ID</span>
        {rowData.unique_id}
      </>
    );
  };

  const savedCommandNameColumnBody = (rowData) => {
    return (
      <>
        <span className="p-column-title">Saved command name</span>
        {rowData.name}
      </>
    );
  };

  const commandNameColumnBody = (rowData) => {
    return (
      <>
        <span className="p-column-title">Command name</span>
        {rowData.command_name}
      </>
    );
  };

  const actionColumnBody = (rowData) => {
    return (
      <>
        <Button icon="pi pi-search" className="p-button-rounded p-button-success mr-2"
                onClick={() => history.push(`/commands/saved/${rowData.unique_id}`)}
                tooltip="View"/>
        <Button icon="pi pi-trash" className="p-button-rounded p-button-danger mr-2"
                onClick={() => confirmDeleteSavedCommand(rowData)}
                tooltip="Delete"/>
      </>
    );
  };

  const rowExpansionTemplate = (data) => {
    return (
      <>
        <h5>Command Payload</h5>
        <PayloadViewer payload={data.payload} isLabelHidden/>
      </>
    );
  };

  return (
    <>
      <div className="datatable-saved-commands">
        <DataTable ref={dt} value={savedCommands} resizableColumns columnResizeMode="fit" lazy
                   header={header} className="p-datatable-saved-commands" dataKey="id" rowHover
                   globalFilter={globalFilter}
                   {...(selectedSavedCommands !== undefined && {selection: selectedSavedCommands})}
                   {...(setSelectedSavedCommands !== undefined && {onSelectionChange: e => setSelectedSavedCommands(e.value)})}
                   paginator emptyMessage="No saved command found"
                   currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
                   paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                   rowsPerPageOptions={[10, 50, 100, 200]} first={fetchSavedCommandsLazyParams.first}
                   rows={fetchSavedCommandsLazyParams.rows}
                   totalRecords={savedCommandsTotalRecords} onPage={onPage} onSort={onSort}
                   sortField={fetchSavedCommandsLazyParams.sortField}
                   sortOrder={fetchSavedCommandsLazyParams.sortOrder} onFilter={onFilter}
                   filters={fetchSavedCommandsLazyParams.filters} filterDelay={800}
                   expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}
                   rowExpansionTemplate={rowExpansionTemplate} loading={isFetchingSavedCommands}>
          <Column expander style={{width: '5em'}}/>
          {(selectedSavedCommands !== undefined && setSelectedSavedCommands !== undefined) &&
          <Column selectionMode="multiple" style={{width: '4em'}}/>}
          <Column field="unique_id" header="Saved command ID" body={savedCommandUniqueIdColumnBody} sortable filter
                  filterPlaceholder="Search by saved command ID"/>
          <Column field="name" header="Saved command name" body={savedCommandNameColumnBody} sortable filter
                  filterPlaceholder="Search by saved command name"/>
          <Column field="command_name" header="Command name" body={commandNameColumnBody} sortable filter
                  filterPlaceholder="Search by command name"/>
          {!hideActionsBar && <Column body={actionColumnBody} headerStyle={{width: '15em', textAlign: 'center'}}
                                      bodyStyle={{textAlign: 'center', overflow: 'visible'}}/>}
        </DataTable>
      </div>
      {(showDeleteSavedCommandModal && !hideActionsBar) &&
      <DeleteSavedCommandModal savedCommand={savedCommand}
                               show={showDeleteSavedCommandModal}
                               onClose={() => setShowDeleteSavedCommandModal(!showDeleteSavedCommandModal)}
                               onConfirm={deleteSavedCommand}/>}
    </>
  );
};

const mapStateToProps = state => ({
  savedCommands: state.savedCommand.savedCommands,
  savedCommandsTotalRecords: state.savedCommand.savedCommandsTotalRecords,
  isFetchingSavedCommands: state.savedCommand.isFetchingSavedCommands,
  fetchSavedCommandsErrorMessage: state.savedCommand.fetchSavedCommandsErrorMessage,
  fetchSavedCommandsLazyParams: state.savedCommand.fetchSavedCommandsLazyParams,
  isDeletingSavedCommands: state.savedCommand.isDeletingSavedCommands,
  deleteSavedCommandsErrorMessage: state.savedCommand.deleteSavedCommandsErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  fetchSavedCommandsStartAsync: (params) => dispatch(fetchSavedCommandsStartAsync(params)),
  setFetchSavedCommandsLazyParams: (lazyParams) => dispatch(setFetchSavedCommandsLazyParams(lazyParams)),
  resetFetchSavedCommandsLazyParams: () => dispatch(resetFetchSavedCommandsLazyParams()),
  deleteSavedCommandsStartAsync: (ids, history) => dispatch(deleteSavedCommandsStartAsync(ids, history)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SavedCommandsDataTable));