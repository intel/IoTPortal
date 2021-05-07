import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import './jobDevicesDataTable.css';
import classNames from 'classnames';


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
        <span className="p-column-title">Name</span>
        {rowData.name}
      </>
    );
  };

  const deviceCategoryColumnBody = (rowData) => {
    return (
      <>
        <span className="p-column-title">Category</span>
        <b>{rowData.category.name}</b>
      </>
    );
  };

  const deviceStatusColumnBody = (rowData) => {
    return (
      <>
        <span className="p-column-title">Status</span>
        <span
          className={classNames('device-badge', 'status-' + rowData.status.name.replace(/\s+/g, '-').toLowerCase())}>{rowData.status.name}</span>
      </>
    );
  };

  return (
    <>
      <div className="datatable-job-devices">
        <DataTable value={devices} className="p-datatable-job-devices" rowHover resizableColumns columnResizeMode="fit" scrollable
                   scrollHeight="600px" emptyMessage="No device found" >
          <Column field="unique_id" header="Device ID" body={deviceUniqueIdColumnBody} sortable/>
          <Column field="name" header="Device name" body={deviceNameColumnBody} sortable/>
          <Column field="category" header="Category" body={deviceCategoryColumnBody} sortable/>
          <Column field="status" header="Status" body={deviceStatusColumnBody} sortable/>
        </DataTable>
      </div>
    </>
  );
};

export default JobDevicesDataTable;