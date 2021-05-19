import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';

import useInterval from '../../hooks/useInterval';
import { fetchDeviceEventOptionsStartAsync } from '../../redux/deviceEvent/deviceEvent.actions';
import {
  fetchDeviceEventHistoriesStartAsync,
  resetFetchDeviceEventHistoriesLazyParams,
  setFetchDeviceEventHistoriesLazyParams,
} from '../../redux/deviceEventHistory/deviceEventHistory.actions';

import { formatDateTimeISOStringToCommonString } from '../../utils/utils';
import DataTableDateRangeFilter from '../../components/DataTableDateRangeFilter/DataTableDateRangeFilter';
import PayloadViewer from '../../components/PayloadViewer/PayloadViewer';
import DataTableHeader from '../../components/DataTableHeader/DataTableHeader';

import './eventHistoriesDataTable.css';

const EventHistoriesDataTable = ({
                                   deviceUniqueId,
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
                                   setFetchDeviceEventHistoriesLazyParams,
                                   resetFetchDeviceEventHistoriesLazyParams
                                 }) => {

  const [selectedDeviceEventHistories, setSelectedDeviceEventHistories] = useState(null);
  const [selectedEventType, setSelectedEventType] = useState(null);
  const [timestampFilter, setTimestampFilter] = useState(null);
  const [expandedRows, setExpandedRows] = useState(null);
  const [globalFilter, setGlobalFilter] = useState(null);

  const dt = useRef(null);

  useEffect(() => {
    fetchDeviceEventOptionsStartAsync(deviceUniqueId);
    fetchDeviceEventHistoriesStartAsync(deviceUniqueId, fetchDeviceEventHistoriesLazyParams);
  }, [fetchDeviceEventHistoriesLazyParams]);

  useEffect(() => resetFetchDeviceEventHistoriesLazyParams, []);

  useInterval(() => fetchDeviceEventHistoriesStartAsync(deviceUniqueId, fetchDeviceEventHistoriesLazyParams, false), 5000);

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

  const header = (
    <DataTableHeader headerName="Event Histories" onSearchInputChange={(e) => setGlobalFilter(e.target.value)}/>);

  const renderEventTypeFilter = () => {
    return (
      <Dropdown value={selectedEventType} options={deviceEventOptions} onChange={onEventTypeFilterChange}
                itemTemplate={eventTypeItemTemplate} showClear placeholder="Select an event type"
                className="p-column-filter"/>
    );
  };

  const onEventTypeFilterChange = (event) => {
    dt.current.filter(event.value, 'event_id', 'equals');
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
          className={classNames('event-badge', 'type-' + rowData.event.name.replace(/\s+/g, '-').toLowerCase())}>{rowData.event.name}</span>
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
      <div>
        <h5>Raw Data</h5>
        <PayloadViewer payload={data.raw_data} isLabelHidden/>
      </div>
    );
  };

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
        <Column selectionMode="multiple" style={{width: '4em'}}/>
        <Column field="raw_data" header="Raw data" body={rawDataColumnBody} style={{width: '61%'}} sortable filter
                filterPlaceholder="Search by raw data"/>
        <Column field="event_id" header="Type" body={eventTypeColumnBody} sortable filter excludeGlobalFilter={true}
                filterElement={eventTypeFilterElement}/>
        <Column field="created_at" header="Timestamp" body={timestampColumnBody} sortable filter
                excludeGlobalFilter={true} filterElement={timestampFilterElement}/>
      </DataTable>
    </div>
  );
};

const mapStateToProps = state => ({
  deviceEventOptions: state.deviceEvent.deviceEventOptions,
  isFetchingDeviceEventOptions: state.deviceEvent.isFetchingDeviceEventOptions,
  fetchDeviceEventOptionsErrorMessage: state.deviceEvent.fetchDeviceEventOptionsErrorMessage,
  deviceEventHistories: state.deviceEventHistory.deviceEventHistories,
  deviceEventHistoriesTotalRecords: state.deviceEventHistory.deviceEventHistoriesTotalRecords,
  isFetchingDeviceEventHistories: state.deviceEventHistory.isFetchingDeviceEventHistories,
  fetchDeviceEventHistoriesErrorMessage: state.deviceEventHistory.fetchDeviceEventHistoriesErrorMessage,
  fetchDeviceEventHistoriesLazyParams: state.deviceEventHistory.fetchDeviceEventHistoriesLazyParams,
});

const mapDispatchToProps = dispatch => ({
  fetchDeviceEventOptionsStartAsync: (deviceUniqueId) => dispatch(fetchDeviceEventOptionsStartAsync(deviceUniqueId)),
  fetchDeviceEventHistoriesStartAsync: (deviceUniqueId, lazyParams, showIsFetchingIndicator) => dispatch(fetchDeviceEventHistoriesStartAsync(deviceUniqueId, lazyParams, showIsFetchingIndicator)),
  setFetchDeviceEventHistoriesLazyParams: (lazyParams) => dispatch(setFetchDeviceEventHistoriesLazyParams(lazyParams)),
  resetFetchDeviceEventHistoriesLazyParams: () => dispatch(resetFetchDeviceEventHistoriesLazyParams()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventHistoriesDataTable);