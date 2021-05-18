import React from 'react';
import classNames from 'classnames';

import { Tag } from 'primereact/tag';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import './jobDevicesDataTable.css';

const JobDevicesDataTable = ({devices}) => {

  const deviceUniqueIdColumnBody = (rowData) => {
    return (
      <>
        <span className="p-column-title">ID</span>
        {rowData.unique_id}
      </>
    );
  };

  const deviceNameColumnBody = (rowData) => {
    return (
      <>
        <span className="p-column-title">Device name</span>
        {rowData.name}
      </>
    );
  };

  const deviceCategoryColumnBody = (rowData) => {
    return (
      <>
        <span className="p-column-title">Category</span>
        <b>{rowData.device_category.name}</b>
      </>
    );
  };

  const deviceStatusColumnBody = (rowData) => {
    return (
      <>
        <span className="p-column-title">Status</span>
        <span
          className={classNames('device-badge', 'status-' + rowData.device_status.name.replace(/\s+/g, '-').toLowerCase())}>{rowData.device_status.name}</span>
      </>
    );
  };

  const jobStatusColumnBody = (rowData) => {
    return (
      <>
        <span className="p-column-title">Job status</span>
        {/*<span className="d-flex align-items-center"><i className="pi pi-spin pi-spinner mr-2"/>Processing</span>*/}
        <Tag className="p-mr-2" icon="pi pi-check" severity="success" value="Successful"></Tag>
      </>
    );
  };

  return (
    <>
      <div className="datatable-job-devices">
        <DataTable value={devices} className="p-datatable-job-devices" rowHover resizableColumns columnResizeMode="fit"
                   scrollable
                   scrollHeight="600px" emptyMessage="No device found">
          <Column field="unique_id" header="Device ID" body={deviceUniqueIdColumnBody} sortable/>
          <Column field="name" header="Device name" body={deviceNameColumnBody} sortable/>
          <Column field="category" header="Category" body={deviceCategoryColumnBody} sortable/>
          <Column field="status" header="Status" body={deviceStatusColumnBody} sortable/>
          <Column field="job_status" header="Job status" body={jobStatusColumnBody} sortable/>
        </DataTable>
      </div>
    </>
  );
};

export default JobDevicesDataTable;