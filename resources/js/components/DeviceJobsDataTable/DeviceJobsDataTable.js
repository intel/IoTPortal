import React, { useEffect, useRef, useState } from 'react';
import { withRouter } from 'react-router-dom';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';

import { formatDateTimeISOStringToCommonString } from '../../utils/utils';
import useDeviceJobStatusRenderer from '../../hooks/useDeviceJobStatusRenderer';

import DataTableHeader from '../../components/DataTableHeader/DataTableHeader';
import DataTableDateRangeFilter from '../DataTableDateRangeFilter/DataTableDateRangeFilter';
import DeleteDeviceJobModal from '../DeleteDeviceJobModal/DeleteDeviceJobModal';
import DeviceJobStatusIndicator from '../DeviceJobStatusIndicator/DeviceJobStatusIndicator';

import './deviceJobsDataTable.css';

const DeviceJobsDataTable = ({
                               history,
                               hideActionsBar,
                               selectedDeviceJobs,
                               setSelectedDeviceJobs,
                               deviceJobs,
                               deviceJobsTotalRecords,
                               isFetchingDeviceJobs,
                               fetchDeviceJobsErrorMessage,
                               fetchDeviceJobsLazyParams,
                               isDeletingDeviceJobs,
                               deleteDeviceJobsErrorMessage,
                               fetchDeviceJobsStartAsync,
                               setFetchDeviceJobsLazyParams,
                               resetFetchDeviceJobsLazyParams,
                               deleteDeviceJobsStartAsync
                             }) => {

  const [showDeleteDeviceJobModal, setShowDeleteDeviceJobModal] = useState(false);
  const [deviceJob, setDeviceJob] = useState(null);
  const [statusFilter, setStatusFilter] = useState(null);
  const [startedAtFilter, setStartedAtFilter] = useState(null);
  const [completedAtFilter, setCompletedAtFilter] = useState(null);
  const [globalFilter, setGlobalFilter] = useState(null);

  useEffect(() => {
    fetchDeviceJobsStartAsync(fetchDeviceJobsLazyParams);
  }, [fetchDeviceJobsLazyParams]);

  useEffect(() => resetFetchDeviceJobsLazyParams, []);

  const dt = useRef(null);

  const renderDeviceJobStatus = useDeviceJobStatusRenderer();

  const statusOptions = [
    {value: 'pending', label: 'Pending'},
    {value: 'processing', label: 'Processing'},
    {value: 'successful', label: 'Successful'},
    {value: 'failed', label: 'Failed'},
  ];

  const confirmDeleteDeviceJob = (deviceJob) => {
    setDeviceJob(deviceJob);
    setShowDeleteDeviceJobModal(!showDeleteDeviceJobModal);
  };

  const deleteDeviceJob = () => {
    deleteDeviceJobsStartAsync([deviceJob.id]);
    setShowDeleteDeviceJobModal(!showDeleteDeviceJobModal);
    setDeviceJob(null);
  };

  const onPage = (event) => {
    let _lazyParams = {...fetchDeviceJobsLazyParams, ...event};
    _lazyParams['page'] += 1;
    setFetchDeviceJobsLazyParams(_lazyParams);
  };

  const onSort = (event) => {
    let _lazyParams = {...fetchDeviceJobsLazyParams, ...event};
    setFetchDeviceJobsLazyParams(_lazyParams);
  };

  const onFilter = (event) => {
    let _lazyParams = {...fetchDeviceJobsLazyParams, ...event};
    _lazyParams['first'] = 0;
    _lazyParams['page'] = 1;
    setFetchDeviceJobsLazyParams(_lazyParams);
  };

  const header = (
    <DataTableHeader headerName="Device Jobs" onSearchInputChange={(e) => setGlobalFilter(e.target.value)}/>);

  const renderStatusFilter = () => {
    return (
      <Dropdown value={statusFilter} options={statusOptions}
                onChange={onStatusFilterChange}
                itemTemplate={statusItemTemplate} showClear placeholder="Select a status"
                className="p-column-filter"
      />
    );
  };

  const onStatusFilterChange = (event) => {
    dt.current.filter(event.value, 'status', 'equals');
    setStatusFilter(event.value);
  };

  const statusItemTemplate = (option) => {
    return <DeviceJobStatusIndicator status={option.value}/>
  };

  const renderStartedAtFilter = () => {
    return (
      <DataTableDateRangeFilter value={startedAtFilter} setValueCallback={setStartedAtFilter} dataTable={dt}
                                filterField="started_at" filterMatchMode="equals"/>
    );
  }

  const renderCompletedAtFilter = () => {
    return (
      <DataTableDateRangeFilter value={completedAtFilter} setValueCallback={setCompletedAtFilter} dataTable={dt}
                                filterField="completed_at" filterMatchMode="equals"/>
    );
  };

  const uniqueIdColumnBody = (rowData) => {
    return (
      <>
        <span className="p-column-title">ID</span>
        {rowData.unique_id}
      </>
    );
  };

  const nameColumnBody = (rowData) => {
    return (
      <>
        <span className="p-column-title">Name</span>
        {rowData.name}
      </>
    );
  };

  const deviceGroupNameColumnBody = (rowData) => {
    return (
      <>
        <span className="p-column-title">Device group</span>
        {rowData.device_group.name}
      </>
    );
  };

  const savedCommandNameColumnBody = (rowData) => {
    return (
      <>
        <span className="p-column-title">Saved command</span>
        {rowData.saved_command.name}
      </>
    );
  };

  const statusColumnBody = (rowData) => {
    return (
      <>
        <span className="p-column-title">Status</span>
        {renderDeviceJobStatus(rowData)}
      </>
    );
  };

  const startedAtColumnBody = (rowData) => {
    return (
      <>
        <span className="p-column-title">Started at</span>
        {formatDateTimeISOStringToCommonString(rowData.started_at)}
      </>
    );
  };

  const completedAtColumnBody = (rowData) => {
    return (
      <>
        <span className="p-column-title">Completed at</span>
        {formatDateTimeISOStringToCommonString(rowData.completed_at)}
      </>
    );
  };

  const actionColumnBody = (rowData) => {
    return (
      <>
        <Button icon="pi pi-search" className="p-button-rounded p-button-success mr-2"
                onClick={() => history.push(`/device/jobs/${rowData.unique_id}`)}
                tooltip="View"/>
        <Button icon="pi pi-trash" className="p-button-rounded p-button-danger mr-2"
                onClick={() => confirmDeleteDeviceJob(rowData)}
                tooltip="Delete"/>
      </>
    );
  }

  const statusFilterElement = renderStatusFilter();
  const startedAtFilterElement = renderStartedAtFilter();
  const completedFilterElement = renderCompletedAtFilter();

  return (
    <>
      <div className="datatable-devices-jobs">
        <DataTable ref={dt} value={deviceJobs} resizableColumns columnResizeMode="fit" lazy
                   header={header} className="p-datatable-devices-jobs" dataKey="id" rowHover
                   globalFilter={globalFilter}
                   {...(selectedDeviceJobs !== undefined && {selection: selectedDeviceJobs})}
                   {...(setSelectedDeviceJobs !== undefined && {onSelectionChange: e => setSelectedDeviceJobs(e.value)})}
                   paginator emptyMessage="No device job found"
                   currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
                   paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                   rowsPerPageOptions={[10, 50, 100, 200]} first={fetchDeviceJobsLazyParams.first}
                   rows={fetchDeviceJobsLazyParams.rows}
                   totalRecords={deviceJobsTotalRecords} onPage={onPage} onSort={onSort}
                   sortField={fetchDeviceJobsLazyParams.sortField}
                   sortOrder={fetchDeviceJobsLazyParams.sortOrder} onFilter={onFilter}
                   filters={fetchDeviceJobsLazyParams.filters} filterDelay={800} loading={isFetchingDeviceJobs}>
          {(selectedDeviceJobs !== undefined && setSelectedDeviceJobs !== undefined) &&
          <Column selectionMode="multiple" style={{width: '4em'}}/>}
          <Column field="unique_id" header="Device job ID" body={uniqueIdColumnBody} sortable filter
                  filterPlaceholder="Search by device job ID"/>
          <Column field="name" header="Device job name" body={nameColumnBody} sortable filter
                  filterPlaceholder="Search by device job name"/>
          <Column field="device_group_name" header="Device group" body={deviceGroupNameColumnBody} sortable filter
                  filterPlaceholder="Search by device group"/>
          <Column field="saved_command_name" header="Saved command" body={savedCommandNameColumnBody} sortable filter
                  filterPlaceholder="Search by saved command"/>
          <Column field="status" header="Status" body={statusColumnBody} sortable filter
                  excludeGlobalFilter={true} filterElement={statusFilterElement}/>
          <Column field="started_at" header="Started at" body={startedAtColumnBody} sortable filter
                  excludeGlobalFilter={true} filterElement={startedAtFilterElement}/>
          <Column field="completed_at" header="Completed at" body={completedAtColumnBody} sortable filter
                  excludeGlobalFilter={true} filterElement={completedFilterElement}/>
          {!hideActionsBar && <Column body={actionColumnBody} headerStyle={{width: '20em', textAlign: 'center'}}
                                      bodyStyle={{textAlign: 'center', overflow: 'visible'}}/>}
        </DataTable>
      </div>
      {(!hideActionsBar && showDeleteDeviceJobModal) &&
      <DeleteDeviceJobModal deviceJob={deviceJob} show={showDeleteDeviceJobModal}
                            onClose={() => setShowDeleteDeviceJobModal(!showDeleteDeviceJobModal)}
                            onConfirm={deleteDeviceJob}
      />}
    </>
  );
};


export default withRouter(DeviceJobsDataTable);