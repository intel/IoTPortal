import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import ReactJson from 'react-json-view';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Calendar } from 'primereact/calendar';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';

import { fetchDeviceCommandsStartAsync } from '../../redux/deviceCommand/deviceCommand.actions';
import { fetchDeviceCommandHistoriesStartAsync } from '../../redux/deviceCommandHistory/deviceCommandHistory.actions';

import './commandHistoryDataTable.css';

const CommandHistoriesCard = ({
                                deviceId,
                                deviceCommands,
                                isFetchingDeviceCommands,
                                fetchDeviceCommandsErrorMessage,
                                deviceCommandHistories,
                                totalRecords,
                                isFetchingDeviceCommandHistories,
                                fetchDeviceCommandHistoriesErrorMessage,
                                fetchDeviceCommandsStartAsync,
                                fetchDeviceCommandHistoriesStartAsync
                              }) => {

  const [expandedRows, setExpandedRows] = useState(null);
  const [globalFilter, setGlobalFilter] = useState(null);
  const [selectedCommandHistories, setSelectedCommandHistories] = useState(null);
  const [selectedCommandType, setSelectedCommandType] = useState(null);
  const [responseTimeFilter, setResponseTimeFilter] = useState(null);
  const [timestampFilter, setTimestampFilter] = useState(null);
  const [lazyParams, setLazyParams] = useState({
    first: 0,
    rows: 10,
    page: 1,
  });

  const dt = useRef(null);

  useEffect(() => {
    fetchDeviceCommandsStartAsync(deviceId);
    fetchDeviceCommandHistoriesStartAsync(deviceId, lazyParams);
  }, [lazyParams]);

  const onPage = (event) => {
    let _lazyParams = {...lazyParams, ...event};
    _lazyParams['page'] += 1;
    setLazyParams(_lazyParams);
  };

  const onSort = (event) => {
    let _lazyParams = {...lazyParams, ...event};
    setLazyParams(_lazyParams);
  };

  const onFilter = (event) => {
    let _lazyParams = {...lazyParams, ...event};
    _lazyParams['first'] = 0;
    _lazyParams['page'] = 1;
    setLazyParams(_lazyParams);
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
      <Dropdown optionLabel="name" optionValue="id" value={selectedCommandType} options={deviceCommands}
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
      <span className={classNames('command-badge', 'type-' + option.name.replace(/\s+/g, '-').toLowerCase())}>{option.name}</span>
    );
  };

  const renderResponseTimeFilter = () => {
    return (
      <Calendar selectionMode="range" value={responseTimeFilter} onChange={onResponseTimeFilterChange}
                placeholder="Filter by date range" dateFormat="yy-mm-dd" className="p-column-filter" baseZIndex={1000}
                showButtonBar touchUI monthNavigator yearNavigator yearRange="1900:2100"/>
    );
  }

  const onResponseTimeFilterChange = (event) => {
    if (event.value !== null && event.value[0] !== null && event.value[1] !== null)
      dt.current.filter(formatDateTimeRange(event.value), 'response_time', 'equals');
    else if (event.value === null)
      dt.current.filter(null, 'response_time', 'equals');

    setResponseTimeFilter(event.value);
  };

  const renderTimestampFilter = () => {
    return (
      <Calendar selectionMode="range" value={timestampFilter} onChange={onTimestampFilterChange}
                placeholder="Filter by date range" dateFormat="yy-mm-dd" className="p-column-filter" baseZIndex={1000}
                showButtonBar touchUI monthNavigator yearNavigator yearRange="1900:2100"/>
    );
  };

  const onTimestampFilterChange = (event) => {
    if (event.value !== null && event.value[0] !== null && event.value[1] !== null)
      dt.current.filter(formatDateTimeRange(event.value), 'created_at', 'equals');
    else if (event.value === null)
      dt.current.filter(null, 'created_at', 'equals');

    setTimestampFilter(event.value);
  };

  const filterDateTimeRange = (value, filter) => {
    if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
      return true;
    }

    if (value === undefined || value === null) {
      return false;
    }

    return value === formatDateTimeRange(filter);
  };

  const formatDateTimeRange = (dates) => {
    return `${dates[0].getFullYear().toString().padStart(4, '0')}-${
      (dates[0].getMonth() + 1).toString().padStart(2, '0')}-${
      dates[0].getDate().toString().padStart(2, '0')} ${
      dates[0].getHours().toString().padStart(2, '0')}:${
      dates[0].getMinutes().toString().padStart(2, '0')}:${
      dates[0].getSeconds().toString().padStart(2, '0')} - ${
      dates[1].getFullYear().toString().padStart(4, '0')}-${
      (dates[1].getMonth() + 1).toString().padStart(2, '0')}-${
      dates[1].getDate().toString().padStart(2, '0')} ${
      dates[1].getHours().toString().padStart(2, '0')}:${
      dates[1].getMinutes().toString().padStart(2, '0')}:${
      dates[1].getSeconds().toString().padStart(2, '0')}`
  }

  const payloadColumnBody = (rowData) => {
    return (
      <>
        <span className="p-column-title">Payload</span>
        {rowData.payload}
      </>
    );
  };

  const commandTypeColumnBody = (rowData) => {
    return (
      <>
        <span className="p-column-title">Command Type</span>
        <span
          className={classNames('command-badge', 'type-' + rowData.command.name.replace(/\s+/g, '-').toLowerCase())}>{rowData.command.name.toUpperCase()}</span>
      </>
    );
  };

  const responseTimeColumnBody = (rowData) => {
    return (
      <>
        <span className="p-column-title">Response Time</span>
        {rowData.response_time}
      </>
    );
  };

  const timestampColumnBody = (rowData) => {
    const dt = new Date(rowData.created_at);
    return (
      <>
        <span className="p-column-title">Timestamp</span>
        {`${dt.getFullYear().toString().padStart(4, '0')}-${
          (dt.getMonth() + 1).toString().padStart(2, '0')}-${
          dt.getDate().toString().padStart(2, '0')} ${
          dt.getHours().toString().padStart(2, '0')}:${
          dt.getMinutes().toString().padStart(2, '0')}:${
          dt.getSeconds().toString().padStart(2, '0')}`}
      </>
    );
  };

  const rowExpansionTemplate = (data) => {
    return (
      <>
        <h5>Payload</h5>
        <ReactJson src={JSON.parse(data.payload)} name="payload"/>
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
                 rowsPerPageOptions={[10, 25, 50, 100, 200]} first={lazyParams.first} rows={lazyParams.rows}
                 totalRecords={totalRecords} onPage={onPage} onSort={onSort} sortField={lazyParams.sortField}
                 sortOrder={lazyParams.sortOrder} onFilter={onFilter} filters={lazyParams.filters} filterDelay={800}
                 expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}
                 rowExpansionTemplate={rowExpansionTemplate} loading={isFetchingDeviceCommandHistories}>
        <Column expander style={{width: '5em'}}/>
        <Column selectionMode="multiple" style={{width: '3em'}}/>
        <Column field="payload" header="Payload" body={payloadColumnBody} sortable filter
                filterPlaceholder="Search by payload"/>
        <Column field="type" header="Type" body={commandTypeColumnBody} sortable filter excludeGlobalFilter={true}
                filterElement={commandTypeFilterElement}/>
        <Column field="response_time" header="Response Time" body={responseTimeColumnBody} sortable filter
                excludeGlobalFilter={true} filterMatchMode="custom" filterFunction={filterDateTimeRange}
                filterElement={responseTimeFilterElement}/>
        <Column field="created_at" header="Timestamp" body={timestampColumnBody} sortable filter
                excludeGlobalFilter={true} filterMatchMode="custom" filterFunction={filterDateTimeRange}
                filterElement={timestampFilterElement}/>
      </DataTable>
    </div>
  );
};

const mapStateToProps = state => ({
  deviceCommands: state.deviceCommand.deviceCommands,
  isFetchingDeviceCommands: state.deviceCommand.isFetchingDeviceCommands,
  fetchDeviceCommandsErrorMessage: state.deviceCommand.fetchDeviceCommandsErrorMessage,
  deviceCommandHistories: state.deviceCommandHistory.deviceCommandHistories,
  totalRecords: state.deviceCommandHistory.totalRecords,
  isFetchingDeviceCommandHistories: state.deviceCommandHistory.isFetchingDeviceCommandHistories,
  fetchDeviceCommandHistoriesErrorMessage: state.deviceCommandHistory.fetchDeviceCommandHistoriesErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  fetchDeviceCommandsStartAsync: (id) => dispatch(fetchDeviceCommandsStartAsync(id)),
  fetchDeviceCommandHistoriesStartAsync: (id, params) => dispatch(fetchDeviceCommandHistoriesStartAsync(id, params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommandHistoriesCard);