import { CBadge, CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react';
import { DataView } from 'primereact/dataview';
import React from 'react';
import { Button } from 'primereact/button';

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
              <CBadge color="secondary" className="mr-2">{device.status.name.toUpperCase()}</CBadge>
              <CBadge color="primary" className="">{device.category.name.toUpperCase()}</CBadge>
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