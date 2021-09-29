/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import React from 'react';

import { DataView } from 'primereact/dataview';
import { Button } from 'primereact/button';
import { CBadge, CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react';

const SelectedDevicesDataView = ({devices, onRemove}) => {

  const itemTemplate = (device) => {
    if (!device) {
      return;
    }

    return (
      <CRow>
        <CCol className="my-auto" lg="11">
          <div className="m-3 overflow-hidden">
            <h5>{device.name}</h5>
            <small>ID: <b>{device.unique_id}</b></small><br/>
            <div className="mt-1">
              <CBadge color="secondary" className="mr-2">{device.device_status.name}</CBadge>
              <CBadge color="primary" className="">{device.device_category.name}</CBadge>
            </div>
          </div>
        </CCol>
        <CCol lg="1" className="my-auto" style={{textAlign: 'center'}}>
          <Button type="button" icon="pi pi-trash" className="p-button-rounded p-button-danger"
                  onClick={() => onRemove(device)}/>
        </CCol>
      </CRow>
    );
  };

  return (
    <CCard>
      <CCardHeader>
        {devices?.length || 0} devices selected
      </CCardHeader>
      <CCardBody>
        <DataView value={devices} layout="list" itemTemplate={itemTemplate} paginator rows={10}/>
      </CCardBody>
    </CCard>
  );
};

export default SelectedDevicesDataView;