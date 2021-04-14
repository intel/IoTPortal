import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import ReactJson from 'react-json-view';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Calendar } from 'primereact/calendar';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';

import { fetchDeviceEventsStartAsync } from '../../redux/deviceEvent/deviceEvent.actions';
import { fetchDeviceEventHistoriesStartAsync } from '../../redux/deviceEventHistory/deviceEventHistory.actions';

import './eventHistoriesCard.css';

const EventHistoriesCard = ({
                              deviceId,
                              deviceEvents,
                              isFetchingDeviceEvents,
                              fetchDeviceEventsErrorMessage,
                              deviceEventHistories,
                              totalRecords,
                              isFetchingDeviceEventHistories,
                              fetchDeviceEventHistoriesErrorMessage,
                              fetchDeviceEventsStartAsync,
                              fetchDeviceEventHistoriesStartAsync
                            }) => {

  const [expandedRows, setExpandedRows] = useState(null);
  const [globalFilter, setGlobalFilter] = useState(null);
  const [selectedDeviceEventHistories, setSelectedDeviceEventHistories] = useState(null);
  const [selectedEventType, setSelectedEventType] = useState(null);
  const [timestampFilter, setTimestampFilter] = useState(null);
  const [lazyParams, setLazyParams] = useState({
    first: 0,
    rows: 10,
    page: 1,
  });

  const dt = useRef(null);

  useEffect(() => {
    fetchDeviceEventsStartAsync(deviceId);
    fetchDeviceEventHistoriesStartAsync(deviceId, lazyParams);
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
      <Dropdown optionLabel="name" optionValue="id" value={selectedEventType} options={deviceEvents}
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
      <span className={classNames('event-badge', 'type-' + option.name.replace(/\s+/g, '-').toLowerCase())}>{option.name}</span>
    );
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
                 selection={selectedDeviceEventHistories} onSelectionChange={e => setSelectedDeviceEventHistories(e.value)}
                 paginator emptyMessage="No event history found"
                 currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
                 paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                 rowsPerPageOptions={[10, 25, 50, 100, 200]} first={lazyParams.first} rows={lazyParams.rows}
                 totalRecords={totalRecords} onPage={onPage} onSort={onSort} sortField={lazyParams.sortField}
                 sortOrder={lazyParams.sortOrder} onFilter={onFilter} filters={lazyParams.filters} filterDelay={800}
                 expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}
                 rowExpansionTemplate={rowExpansionTemplate} loading={isFetchingDeviceEventHistories}>
        <Column expander style={{width: '5em'}}/>
        <Column selectionMode="multiple" style={{width: '3em'}}/>
        <Column field="raw_data" header="Raw Data" body={rawDataColumnBody} sortable filter
                filterPlaceholder="Search by raw data"/>
        <Column field="type" header="Type" body={eventTypeColumnBody} sortable filter excludeGlobalFilter={true}
                filterElement={eventTypeFilterElement}/>
        <Column field="created_at" header="Timestamp" body={timestampColumnBody} sortable filter
                excludeGlobalFilter={true} filterMatchMode="custom" filterFunction={filterDateTimeRange}
                filterElement={timestampFilterElement}/>
      </DataTable>
    </div>
  );
};

const mapStateToProps = state => ({
  deviceEvents: state.deviceEvent.deviceEvents,
  isFetchingDeviceEvents: state.deviceEvent.isFetchingDeviceEvents,
  fetchDeviceEventsErrorMessage: state.deviceEvent.fetchDeviceEventsErrorMessage,
  deviceEventHistories: state.deviceEventHistory.deviceEventHistories,
  totalRecords: state.deviceEventHistory.totalRecords,
  isFetchingDeviceEventHistories: state.deviceEventHistory.isFetchingDeviceEventHistories,
  fetchDeviceEventHistoriesErrorMessage: state.deviceEventHistory.fetchDeviceEventHistoriesErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  fetchDeviceEventsStartAsync: (id) => dispatch(fetchDeviceEventsStartAsync(id)),
  fetchDeviceEventHistoriesStartAsync: (id, params) => dispatch(fetchDeviceEventHistoriesStartAsync(id, params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventHistoriesCard);