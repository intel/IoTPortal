import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import ReactJson from 'react-json-view';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Calendar } from 'primereact/calendar';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import { fetchCommandHistoryStartAsync } from '../../redux/commandHistory/commandHistory.actions';

import './rawDataDataTable.css';

const RawDataCard = ({
                                    deviceId,
                                    commandHistories,
                                    totalRecords,
                                    isFetchingCommandHistories,
                                    fetchCommandHistoryStartAsync
                                  }) => {
  const [selectedCommandHistories, setSelectedCommandHistories] = useState(null);
  const [expandedRows, setExpandedRows] = useState(null);
  const [globalFilter, setGlobalFilter] = useState(null);
  const [selectedCommandType, setSelectedCommandType] = useState(null);
  const [responseTimeFilter, setResponseTimeFilter] = useState(null);
  const [timestampFilter, setTimestampFilter] = useState(null);
  const [lazyParams, setLazyParams] = useState({
    first: 0,
    rows: 3,
    page: 1,
  });

  const dt = useRef(null);

  const commandTypes = [
    {name: 'OTA', value: 0, style: 'ota'},
    {name: 'AOTA', value: 1, style: 'aota'},
    {name: 'FOTA', value: 2, style: 'fota'},
    {name: 'SOTA', value: 3, style: 'sota'},
    {name: 'COTA', value: 4, style: 'cota'},
    {name: 'SHUTDOWN', value: 5, style: 'shutdown'},
    {name: 'REBOOT', value: 6, style: 'reboot'},
    {name: 'DECOMMISSION', value: 7, style: 'decommission'},
    {name: 'FILE UPLOAD', value: 8, style: 'file-upload'},
  ];

  useEffect(() => {
    fetchCommandHistoryStartAsync(deviceId, lazyParams);
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
          <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..."/>
        </span>
      </div>
    );
  };

  const renderCommandTypeFilter = () => {
    return (
      <Dropdown optionLabel="name" optionValue="value" value={selectedCommandType} options={commandTypes}
                onChange={onCommandTypeFilterChange}
                itemTemplate={commandTypeItemTemplate} showClear placeholder="Select a Command Type"
                className="p-column-filter"/>
    );
  };

  const onCommandTypeFilterChange = (event) => {
    dt.current.filter(event.value, 'type', 'equals');
    setSelectedCommandType(event.value);
  };

  const commandTypeItemTemplate = (option) => {
    return (
      <span className={classNames('command-badge', 'type-' + option.style)}>{option.name}</span>
    );
  };

  const renderResponseTimeFilter = () => {
    return (
      <Calendar selectionMode="range" value={responseTimeFilter} onChange={onResponseTimeFilterChange}
                placeholder="Filter by Date Range" dateFormat="yy-mm-dd" className="p-column-filter" baseZIndex={1000}
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
                placeholder="Filter by Date Range" dateFormat="yy-mm-dd" className="p-column-filter" baseZIndex={1000}
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

  const typeColumnBody = (rowData) => {
    return (
      <>
        <span className="p-column-title">Command Type</span>
        <span
          className={classNames('command-badge', 'type-' + commandTypes[rowData.type].style)}>{commandTypes[rowData.type].name}</span>
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
    <div className="datatable-command-history">
      <DataTable ref={dt} value={commandHistories} lazy
                 header={header} className="p-datatable-command-history" dataKey="id" rowHover
                 globalFilter={globalFilter}
                 selection={selectedCommandHistories} onSelectionChange={e => setSelectedCommandHistories(e.value)}
                 paginator emptyMessage="No command history found"
                 currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
                 paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                 rowsPerPageOptions={[3, 10, 25, 50]} first={lazyParams.first} rows={lazyParams.rows}
                 totalRecords={totalRecords} onPage={onPage} onSort={onSort} sortField={lazyParams.sortField}
                 sortOrder={lazyParams.sortOrder} onFilter={onFilter} filters={lazyParams.filters} filterDelay={800}
                 expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}
                 rowExpansionTemplate={rowExpansionTemplate} loading={isFetchingCommandHistories}>
        <Column expander style={{width: '3em'}}/>
        <Column selectionMode="multiple" style={{width: '3em'}}/>
        <Column field="payload" header="Payload" body={payloadColumnBody} sortable filter
                filterPlaceholder="Search by payload"/>
        <Column field="type" header="Type" body={typeColumnBody} sortable filter excludeGlobalFilter={true}
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
  commandHistories: state.commandHistory.commandHistories,
  totalRecords: state.commandHistory.totalRecords,
  isFetchingCommandHistories: state.commandHistory.isFetchingCommandHistories,
  fetchCommandHistoriesErrorMessage: state.commandHistory.fetchCommandHistoriesErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  fetchCommandHistoryStartAsync: (id, pagination) => dispatch(fetchCommandHistoryStartAsync(id, pagination)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RawDataCard);