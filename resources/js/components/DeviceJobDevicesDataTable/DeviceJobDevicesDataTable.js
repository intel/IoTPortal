/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import React from 'react';
import classNames from 'classnames';

import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';

import DeviceJobStatusIndicator from '../DeviceJobStatusIndicator/DeviceJobStatusIndicator';

import './deviceJobDevicesDataTable.css';

const DeviceJobDevicesDataTable = ({deviceJobDevices}) => {

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
        {/*Pending*/}
        {(_.has(rowData, 'error') && _.has(rowData, 'started_at') && _.has(rowData, 'responded_at')
          && rowData.error === undefined && rowData.started_at === undefined && rowData.responded_at === undefined)
        && <DeviceJobStatusIndicator status="pending"/>}

        {/*Preparing commands*/}
        {(_.has(rowData, 'error') && _.has(rowData, 'started_at') && _.has(rowData, 'responded_at')
          && rowData.error === null && rowData.started_at === null && rowData.responded_at === null)
        && <DeviceJobStatusIndicator status="preparing"/>}

        {/*Processing*/}
        {(!rowData.error && rowData.started_at && !rowData.responded_at)
        && <DeviceJobStatusIndicator status="processing"/>}

        {/*Successful*/}
        {(!rowData.error && rowData.started_at && rowData.responded_at)
        && <DeviceJobStatusIndicator status="successful"/>}

        {/*Failed*/}
        {rowData.error && <DeviceJobStatusIndicator status="failed"/>}
      </>
    );
  };

  return (
    <>
      <div className="datatable-device-job-devices">
        <DataTable value={deviceJobDevices} className="p-datatable-device-job-devices" rowHover
                   resizableColumns columnResizeMode="fit" scrollable scrollHeight="600px"
                   emptyMessage="No device found">
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

export default DeviceJobDevicesDataTable;