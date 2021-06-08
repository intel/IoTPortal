import React, { useEffect, useRef, useState } from 'react';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import DataTableHeader from '../../components/DataTableHeader/DataTableHeader';

import './deviceJobsDataTable.css';
import { formatDateTimeISOStringToCommonString } from '../../utils/utils';
import DataTableDateRangeFilter from '../DataTableDateRangeFilter/DataTableDateRangeFilter';
import { Tag } from 'primereact/tag';
import DeleteDeviceJobModal from '../DeleteDeviceJobModal/DeleteDeviceJobModal';

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
  const [deviceJobStatusFilter, setDeviceJobStatusFilter] = useState(null);
  const [startedAtFilter, setStartedAtFilter] = useState(null);
  const [completedAtFilter, setCompletedAtFilter] = useState(null);
  const [globalFilter, setGlobalFilter] = useState(null);

  const dt = useRef(null);

  useEffect(() => {
    fetchDeviceJobsStartAsync(fetchDeviceJobsLazyParams);
  }, [fetchDeviceJobsLazyParams]);

  useEffect(() => resetFetchDeviceJobsLazyParams, []);

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

  const renderDeviceJobStatusFilter = () => {
    return (
      <></>
      // <Dropdown value={deviceJobStatusFilter} options={deviceCommandOptions}
      //           onChange={onCommandTypeFilterChange}
      //           itemTemplate={commandTypeItemTemplate} showClear placeholder="Select a command type"
      //           className="p-column-filter"/>
    );
  };

  const onCommandTypeFilterChange = (event) => {
    dt.current.filter(event.value, 'command_id', 'equals');
    setDeviceJobStatusFilter(event.value);
  };

  const commandTypeItemTemplate = (option) => {
    return (
      <span
        className={classNames('command-badge', 'type-' + option.label.replace(/\s+|_/g, '-').toLowerCase())}>{option.label}</span>
    );
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

  const deviceJobUniqueIdColumnBody = (rowData) => {
    return (
      <>
        <span className="p-column-title">ID</span>
        {rowData.unique_id}
      </>
    );
  };

  const deviceJobNameColumnBody = (rowData) => {
    return (
      <>
        <span className="p-column-title">Name</span>
        {rowData.name}
      </>
    );
  };

  const deviceGroupColumnBody = (rowData) => {
    return (
      <>
        <span className="p-column-title">Device group</span>
        {rowData.device_group.name}
      </>
    );
  };

  const savedCommandColumnBody = (rowData) => {
    return (
      <>
        <span className="p-column-title">Saved command</span>
        {rowData.saved_command.name}
      </>
    );
  };

  const deviceJobStatusColumnBody = (rowData) => {

    const renderStatus = () => {
      if (!rowData.error && !rowData.started_at && !rowData.completed_at) {
        // Pending
        return <Tag icon="pi pi-info-circle" severity="info" value="Pending"/>;
      } else if (!rowData.error && rowData.started_at && !rowData.completed_at) {
        // Processing
        return <span className="d-flex align-items-center"><i className="pi pi-spin pi-spinner mr-2"/>Processing</span>;
      } else if (!rowData.error && rowData.started_at && rowData.completed_at) {
        // Successful
        return <Tag icon="pi pi-check" severity="success" value="Successful"/>;
      } else if (rowData.error) {
        // Failed
        return <Tag icon="pi pi-times" severity="danger" value="Failed"/>;
      }
    };

    return (
      <>
        <span className="p-column-title">Status</span>
        {renderStatus()}
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
                onClick={() => history.push(`/device/jobs/${rowData.unique_id}`)}/>
        <Button icon="pi pi-trash" className="p-button-rounded p-button-danger mr-2"
                onClick={() => confirmDeleteDeviceJob(rowData)}/>
      </>
    );
  }

  const deviceJobStatusFilterElement = renderDeviceJobStatusFilter();
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
          <Column field="unique_id" header="Device job ID" body={deviceJobUniqueIdColumnBody} sortable filter
                  filterPlaceholder="Search by device job ID"/>
          <Column field="name" header="Device job name" body={deviceJobNameColumnBody} sortable filter
                  filterPlaceholder="Search by device job name"/>
          <Column field="device_group" header="Device group" body={deviceGroupColumnBody} sortable filter
                  filterPlaceholder="Search by device group"/>
          <Column field="saved_command" header="Saved command" body={savedCommandColumnBody} sortable filter
                  filterPlaceholder="Search by saved command"/>
          <Column field="status" header="Status" body={deviceJobStatusColumnBody} sortable filter
                  excludeGlobalFilter={true} filterElement={deviceJobStatusFilterElement}/>
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