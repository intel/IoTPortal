import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import ReactJson from 'react-json-view';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';

import { fetchDeviceEventOptionsStartAsync } from '../../redux/deviceEvent/deviceEvent.actions';
import {
  fetchDeviceEventHistoriesStartAsync,
  setFetchDeviceEventHistoriesLazyParams
} from '../../redux/deviceEventHistory/deviceEventHistory.actions';

import './eventHistoriesDataTable.css';
import { formatDateTimeISOStringToCommonString } from '../../utils/utils';
import DataTableDateRangeFilter from '../../components/DataTableDateRangeFilter/DataTableDateRangeFilter';

const EventHistoriesDataTable = ({
                                   deviceId,
                                   deviceEventOptions,
                                   isFetchingDeviceEventOptions,
                                   fetchDeviceEventOptionsErrorMessage,
                                   deviceEventHistories,
                                   deviceEventHistoriesTotalRecords,
                                   isFetchingDeviceEventHistories,
                                   fetchDeviceEventHistoriesErrorMessage,
                                   fetchDeviceEventHistoriesLazyParams,
                                   fetchDeviceEventOptionsStartAsync,
                                   fetchDeviceEventHistoriesStartAsync,
                                   setFetchDeviceEventHistoriesLazyParams
                                 }) => {

  const [expandedRows, setExpandedRows] = useState(null);
  const [globalFilter, setGlobalFilter] = useState(null);
  const [selectedDeviceEventHistories, setSelectedDeviceEventHistories] = useState(null);
  const [selectedEventType, setSelectedEventType] = useState(null);
  const [timestampFilter, setTimestampFilter] = useState(null);

  const dt = useRef(null);

  useEffect(() => {
    fetchDeviceEventOptionsStartAsync(deviceId);
    fetchDeviceEventHistoriesStartAsync(deviceId, fetchDeviceEventHistoriesLazyParams);
  }, [fetchDeviceEventHistoriesLazyParams]);

  const onPage = (event) => {
    let _lazyParams = {...fetchDeviceEventHistoriesLazyParams, ...event};
    _lazyParams['page'] += 1;
    setFetchDeviceEventHistoriesLazyParams(_lazyParams);
  };

  const onSort = (event) => {
    let _lazyParams = {...fetchDeviceEventHistoriesLazyParams, ...event};
    setFetchDeviceEventHistoriesLazyParams(_lazyParams);
  };

  const onFilter = (event) => {
    let _lazyParams = {...fetchDeviceEventHistoriesLazyParams, ...event};
    _lazyParams['first'] = 0;
    _lazyParams['page'] = 1;
    setFetchDeviceEventHistoriesLazyParams(_lazyParams);
  };

  const renderHeader = () => {
    return (
      <div className="table-header">
        Event Histories
        <span className="p-input-icon-left">
          <i className="pi pi-search"/>
          <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search"/>
        </span>
      </div>
    );
  };

  const renderEventTypeFilter = () => {
    return (
      <Dropdown value={selectedEventType} options={deviceEventOptions}
                onChange={onEventTypeFilterChange}
                itemTemplate={eventTypeItemTemplate} showClear placeholder="Select an event type"
                className="p-column-filter"/>
    );
  };

  const onEventTypeFilterChange = (event) => {
    dt.current.filter(event.value, 'type', 'equals');
    setSelectedEventType(event.value);
  };

  const eventTypeItemTemplate = (option) => {
    return (
      <span
        className={classNames('event-badge', 'type-' + option.label.replace(/\s+/g, '-').toLowerCase())}>{option.label}</span>
    );
  };

  const renderTimestampFilter = () => {
    return (
      <DataTableDateRangeFilter value={timestampFilter} setValueCallback={setTimestampFilter} dataTable={dt}
                                filterField="created_at" filterMatchMode="equals"/>
    );
  };

  const rawDataColumnBody = (rowData) => {
    return (
      <>
        <span className="p-column-title">Raw Data</span>
        {rowData.raw_data}
      </>
    );
  };

  const eventTypeColumnBody = (rowData) => {
    return (
      <>
        <span className="p-column-title">Event Type</span>
        <span
          className={classNames('event-badge', 'type-' + rowData.event.name.replace(/\s+/g, '-').toLowerCase())}>{rowData.event.name.toUpperCase()}</span>
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
        <h5>Raw Data</h5>
        <ReactJson src={JSON.parse(data.raw_data)} name="raw_data"/>
      </>
    );
  };

  const header = renderHeader();
  const eventTypeFilterElement = renderEventTypeFilter();
  const timestampFilterElement = renderTimestampFilter();

  return (
    <div className="datatable-event-histories">
      <DataTable ref={dt} value={deviceEventHistories} resizableColumns columnResizeMode="fit" lazy
                 header={header} className="p-datatable-event-histories" dataKey="id" rowHover
                 globalFilter={globalFilter}
                 selection={selectedDeviceEventHistories}
                 onSelectionChange={e => setSelectedDeviceEventHistories(e.value)}
                 paginator emptyMessage="No event history found"
                 currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
                 paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                 rowsPerPageOptions={[10, 25, 50, 100, 200]} first={fetchDeviceEventHistoriesLazyParams.first}
                 rows={fetchDeviceEventHistoriesLazyParams.rows}
                 totalRecords={deviceEventHistoriesTotalRecords} onPage={onPage} onSort={onSort}
                 sortField={fetchDeviceEventHistoriesLazyParams.sortField}
                 sortOrder={fetchDeviceEventHistoriesLazyParams.sortOrder} onFilter={onFilter}
                 filters={fetchDeviceEventHistoriesLazyParams.filters} filterDelay={800}
                 expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}
                 rowExpansionTemplate={rowExpansionTemplate} loading={isFetchingDeviceEventHistories}>
        <Column expander style={{width: '5em'}}/>
        <Column selectionMode="multiple" style={{width: '3em'}}/>
        <Column field="raw_data" header="Raw Data" body={rawDataColumnBody} sortable filter
                filterPlaceholder="Search by raw data"/>
        <Column field="type" header="Type" body={eventTypeColumnBody} sortable filter excludeGlobalFilter={true}
                filterElement={eventTypeFilterElement}/>
        <Column field="created_at" header="Timestamp" body={timestampColumnBody} sortable filter
                excludeGlobalFilter={true} filterElement={timestampFilterElement}/>
      </DataTable>
    </div>
  );
};

const mapStateToProps = state => ({
  deviceEventOptions: state.deviceEvent.deviceEventOptions ? state.deviceEvent.deviceEventOptions.map(option => ({
    ...option,
    label: option.label.toUpperCase()
  })) : state.deviceEvent.deviceEventOptions,
  isFetchingDeviceEventOptions: state.deviceEvent.isFetchingDeviceEventOptions,
  fetchDeviceEventOptionsErrorMessage: state.deviceEvent.fetchDeviceEventOptionsErrorMessage,
  deviceEventHistories: state.deviceEventHistory.deviceEventHistories,
  deviceEventHistoriesTotalRecords: state.deviceEventHistory.deviceEventHistoriesTotalRecords,
  isFetchingDeviceEventHistories: state.deviceEventHistory.isFetchingDeviceEventHistories,
  fetchDeviceEventHistoriesErrorMessage: state.deviceEventHistory.fetchDeviceEventHistoriesErrorMessage,
  fetchDeviceEventHistoriesLazyParams: state.deviceEventHistory.fetchDeviceEventHistoriesLazyParams,
});

const mapDispatchToProps = dispatch => ({
  fetchDeviceEventOptionsStartAsync: (id) => dispatch(fetchDeviceEventOptionsStartAsync(id)),
  fetchDeviceEventHistoriesStartAsync: (id, lazyParams) => dispatch(fetchDeviceEventHistoriesStartAsync(id, lazyParams)),
  setFetchDeviceEventHistoriesLazyParams: (lazyParams) => dispatch(setFetchDeviceEventHistoriesLazyParams(lazyParams)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventHistoriesDataTable);