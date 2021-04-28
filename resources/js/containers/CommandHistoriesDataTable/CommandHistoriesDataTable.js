import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';

import { fetchDeviceCommandOptionsStartAsync } from '../../redux/deviceCommand/deviceCommand.actions';
import {
  fetchDeviceCommandHistoriesStartAsync,
  setFetchDeviceCommandHistoriesLazyParams
} from '../../redux/deviceCommandHistory/deviceCommandHistory.actions';

import './commandHistoriesDataTable.css';
import { formatDateTimeISOStringToCommonString } from '../../utils/utils';
import DataTableDateRangeFilter from '../../components/DataTableDateRangeFilter/DataTableDateRangeFilter';
import CommandPayloadViewer from '../../components/CommandPayloadViewer/CommandPayloadViewer';

const CommandHistoriesDataTable = ({
                                     deviceId,
                                     deviceCommandOptions,
                                     isFetchingDeviceCommandOptions,
                                     fetchDeviceCommandOptionsErrorMessage,
                                     deviceCommandHistories,
                                     deviceCommandHistoriesTotalRecords,
                                     isFetchingDeviceCommandHistories,
                                     fetchDeviceCommandHistoriesErrorMessage,
                                     fetchDeviceCommandHistoriesLazyParams,
                                     fetchDeviceCommandOptionsStartAsync,
                                     fetchDeviceCommandHistoriesStartAsync,
                                     setFetchDeviceCommandHistoriesLazyParams
                                   }) => {

  const [expandedRows, setExpandedRows] = useState(null);
  const [globalFilter, setGlobalFilter] = useState(null);
  const [selectedCommandHistories, setSelectedCommandHistories] = useState(null);
  const [selectedCommandType, setSelectedCommandType] = useState(null);
  const [responseTimeFilter, setResponseTimeFilter] = useState(null);
  const [timestampFilter, setTimestampFilter] = useState(null);

  const dt = useRef(null);

  useEffect(() => {
    fetchDeviceCommandOptionsStartAsync(deviceId);
    fetchDeviceCommandHistoriesStartAsync(deviceId, fetchDeviceCommandHistoriesLazyParams);
  }, [fetchDeviceCommandHistoriesLazyParams]);

  const onPage = (event) => {
    let _lazyParams = {...fetchDeviceCommandHistoriesLazyParams, ...event};
    _lazyParams['page'] += 1;
    setFetchDeviceCommandHistoriesLazyParams(_lazyParams);
  };

  const onSort = (event) => {
    let _lazyParams = {...fetchDeviceCommandHistoriesLazyParams, ...event};
    setFetchDeviceCommandHistoriesLazyParams(_lazyParams);
  };

  const onFilter = (event) => {
    let _lazyParams = {...fetchDeviceCommandHistoriesLazyParams, ...event};
    _lazyParams['first'] = 0;
    _lazyParams['page'] = 1;
    setFetchDeviceCommandHistoriesLazyParams(_lazyParams);
  };

  const renderHeader = () => {
    return (
      <div className="table-header">
        Command Histories
        <span className="p-input-icon-left">
          <i className="pi pi-search"/>
          <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search"/>
        </span>
      </div>
    );
  };

  const renderCommandTypeFilter = () => {
    return (
      <Dropdown value={selectedCommandType} options={deviceCommandOptions}
                onChange={onCommandTypeFilterChange}
                itemTemplate={commandTypeItemTemplate} showClear placeholder="Select a command type"
                className="p-column-filter"/>
    );
  };

  const onCommandTypeFilterChange = (event) => {
    dt.current.filter(event.value, 'type', 'equals');
    setSelectedCommandType(event.value);
  };

  const commandTypeItemTemplate = (option) => {
    return (
      <span
        className={classNames('command-badge', 'type-' + option.label.replace(/\s+|_/g, '-').toLowerCase())}>{option.label}</span>
    );
  };

  const renderResponseTimeFilter = () => {
    return (
      <DataTableDateRangeFilter value={responseTimeFilter} setValueCallback={setResponseTimeFilter} dataTable={dt}
                                filterField="response_time" filterMatchMode="equals"/>
    );
  }

  const renderTimestampFilter = () => {
    return (
      <DataTableDateRangeFilter value={timestampFilter} setValueCallback={setTimestampFilter} dataTable={dt}
                                filterField="created_at" filterMatchMode="equals"/>
    );
  };

  const payloadColumnBody = (rowData) => {
    return (
      <>
        <span className="p-column-title">Payload </span>
        {rowData.payload}
      </>
    );
  };

  const commandTypeColumnBody = (rowData) => {
    return (
      <>
        <span className="p-column-title">Command type</span>
        <span
          className={classNames('command-badge', 'type-' + rowData.command.name.replace(/\s+|_/g, '-').toLowerCase())}>{rowData.command.name}</span>
      </>
    );
  };

  const respondedAtColumnBody = (rowData) => {
    return (
      <>
        <span className="p-column-title">Responded at</span>
        {rowData.responded_at}
      </>
    );
  };

  const timestampColumnBody = (rowData) => {
    return (
      <>
        <span className="p-column-title">Timestamp</span>
        {formatDateTimeISOStringToCommonString(rowData.created_at)}
      </>
    );
  };

  const rowExpansionTemplate = (data) => {
    return (
      <>
        <h5>Payload</h5>
        <CommandPayloadViewer payload={data.payload} isLabelHidden/>
      </>
    );
  };

  const header = renderHeader();
  const commandTypeFilterElement = renderCommandTypeFilter();
  const responseTimeFilterElement = renderResponseTimeFilter();
  const timestampFilterElement = renderTimestampFilter();

  return (
    <div className="datatable-command-histories">
      <DataTable ref={dt} value={deviceCommandHistories} resizableColumns columnResizeMode="fit" lazy
                 header={header} className="p-datatable-command-histories" dataKey="id" rowHover
                 globalFilter={globalFilter}
                 selection={selectedCommandHistories} onSelectionChange={e => setSelectedCommandHistories(e.value)}
                 paginator emptyMessage="No command history found"
                 currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
                 paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                 rowsPerPageOptions={[10, 25, 50, 100, 200]} first={fetchDeviceCommandHistoriesLazyParams.first}
                 rows={fetchDeviceCommandHistoriesLazyParams.rows}
                 totalRecords={deviceCommandHistoriesTotalRecords} onPage={onPage} onSort={onSort}
                 sortField={fetchDeviceCommandHistoriesLazyParams.sortField}
                 sortOrder={fetchDeviceCommandHistoriesLazyParams.sortOrder} onFilter={onFilter}
                 filters={fetchDeviceCommandHistoriesLazyParams.filters} filterDelay={800}
                 expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}
                 rowExpansionTemplate={rowExpansionTemplate} loading={isFetchingDeviceCommandHistories}>
        <Column expander style={{width: '5em'}}/>
        <Column selectionMode="multiple" style={{width: '3em'}}/>
        <Column field="payload" header="Payload" body={payloadColumnBody} sortable filter
                filterPlaceholder="Search by payload"/>
        <Column field="type" header="Command type" body={commandTypeColumnBody} sortable filter
                excludeGlobalFilter={true}
                filterElement={commandTypeFilterElement}/>
        <Column field="responded_at" header="Responded at" body={respondedAtColumnBody} sortable filter
                excludeGlobalFilter={true} filterElement={responseTimeFilterElement}/>
        <Column field="created_at" header="Timestamp" body={timestampColumnBody} sortable filter
                excludeGlobalFilter={true} filterElement={timestampFilterElement}/>
      </DataTable>
    </div>
  );
};

const mapStateToProps = state => ({
  deviceCommandOptions: state.deviceCommand.deviceCommandOptions,
  isFetchingDeviceCommandOptions: state.deviceCommand.isFetchingDeviceCommandOptions,
  fetchDeviceCommandOptionsErrorMessage: state.deviceCommand.fetchDeviceCommandOptionsErrorMessage,
  deviceCommandHistories: state.deviceCommandHistory.deviceCommandHistories,
  deviceCommandHistoriesTotalRecords: state.deviceCommandHistory.deviceCommandHistoriesTotalRecords,
  isFetchingDeviceCommandHistories: state.deviceCommandHistory.isFetchingDeviceCommandHistories,
  fetchDeviceCommandHistoriesErrorMessage: state.deviceCommandHistory.fetchDeviceCommandHistoriesErrorMessage,
  fetchDeviceCommandHistoriesLazyParams: state.deviceCommandHistory.fetchDeviceCommandHistoriesLazyParams,
});

const mapDispatchToProps = dispatch => ({
  fetchDeviceCommandOptionsStartAsync: (id, name) => dispatch(fetchDeviceCommandOptionsStartAsync(id, name)),
  fetchDeviceCommandHistoriesStartAsync: (id, lazyParams) => dispatch(fetchDeviceCommandHistoriesStartAsync(id, lazyParams)),
  setFetchDeviceCommandHistoriesLazyParams: (lazyParams) => dispatch(setFetchDeviceCommandHistoriesLazyParams(lazyParams)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommandHistoriesDataTable);