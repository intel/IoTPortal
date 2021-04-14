import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';

import { fetchDeviceCategoriesStartAsync } from '../../redux/deviceCategory/deviceCategory.actions';
import { fetchDeviceStatusesStartAsync } from '../../redux/deviceStatus/deviceStatus.actions';
import { fetchDevicesStartAsync } from '../../redux/device/device.actions';

import DevicePropertyCard from '../DevicePropertyCard/DevicePropertyCard';
import './devicesDataTable.css';

const DevicesCard = ({
                       history,
                       match,
                       deviceCategories,
                       isFetchingDeviceCategories,
                       fetchDeviceCategoriesErrorMessage,
                       deviceStatuses,
                       isFetchingDeviceStatuses,
                       fetchDeviceStatusesErrorMessage,
                       devices,
                       totalRecords,
                       isFetchingDevices,
                       fetchDevicesErrorMessage,
                       fetchDeviceCategoriesStartAsync,
                       fetchDeviceStatusesStartAsync,
                       fetchDevicesStartAsync
                     }) => {

  const [expandedRows, setExpandedRows] = useState(null);
  const [globalFilter, setGlobalFilter] = useState(null);
  const [selectedDevices, setSelectedDevices] = useState(null);
  const [selectedDeviceCategory, setSelectedDeviceCategory] = useState(null);
  const [selectedDeviceStatus, setSelectedDeviceStatus] = useState(null);
  const [lazyParams, setLazyParams] = useState({
    first: 0,
    rows: 10,
    page: 1,
  });

  const dt = useRef(null);

  useEffect(() => {
    fetchDeviceCategoriesStartAsync();
    fetchDeviceStatusesStartAsync();
    fetchDevicesStartAsync(lazyParams);
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
        Devices
        <span className="p-input-icon-left">
          <i className="pi pi-search"/>
          <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search"/>
        </span>
      </div>
    );
  };

  const renderDeviceCategoryFilter = () => {
    return (
      <Dropdown optionLabel="name" optionValue="id" value={selectedDeviceCategory} options={deviceCategories}
                onChange={onDeviceCategoryFilterChange}
                itemTemplate={deviceCategoryItemTemplate} showClear placeholder="Select a device category"
                className="p-column-filter"/>
    );
  };

  const onDeviceCategoryFilterChange = (event) => {
    dt.current.filter(event.value, 'category', 'equals');
    setSelectedDeviceCategory(event.value);
  };

  const deviceCategoryItemTemplate = (option) => {
    return (
      <b>{option.name.toUpperCase()}</b>
    );
  };


  const renderDeviceStatusFilter = () => {
    return (
      <Dropdown optionLabel="name" optionValue="id" value={selectedDeviceStatus} options={deviceStatuses}
                onChange={onDeviceStatusFilterChange}
                itemTemplate={deviceStatusItemTemplate} showClear placeholder="Select a device status"
                className="p-column-filter"/>
    );
  };

  const onDeviceStatusFilterChange = (event) => {
    dt.current.filter(event.value, 'status', 'equals');
    setSelectedDeviceStatus(event.value);
  };

  const deviceStatusItemTemplate = (option) => {
    return (
      <span className={classNames('device-badge', 'status-' + option.name.replace(/\s+/g, '-').toLowerCase())}>{option.name.toUpperCase()}</span>
    );
  };

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

  const deviceBiosVendorColumnBody = (rowData) => {
    return (
      <>
        <span className="p-column-title">BIOS Vendor</span>
        {rowData.bios_vendor}
      </>
    );
  };

  const deviceBiosVersionColumnBody = (rowData) => {
    return (
      <>
        <span className="p-column-title">BIOS Version</span>
        {rowData.bios_version}
      </>
    );
  };

  const deviceCategoryColumnBody = (rowData) => {
    return (
      <>
        <span className="p-column-title">Category</span>
        <b>{rowData.category.name.toUpperCase()}</b>
      </>
    );
  };

  const deviceStatusColumnBody = (rowData) => {
    return (
      <>
        <span className="p-column-title">Status</span>
        <span
          className={classNames('device-badge', 'status-' + rowData.status.name.replace(/\s+/g, '-').toLowerCase())}>{rowData.status.name.toUpperCase()}</span>
      </>
    );
  };

  const actionColumnBody = (rowData) => {
    return (
      <Button icon="pi pi-search" className="p-button-rounded p-button-success"
              onClick={() => history.push(`${match.url}/${rowData.unique_id}`)}/>
    );
  }

  const rowExpansionTemplate = (data) => {
    return (
      <DevicePropertyCard device={data}/>
    );
  };

  const header = renderHeader();
  const deviceCategoryFilterElement = renderDeviceCategoryFilter();
  const deviceStatusFilterElement = renderDeviceStatusFilter();

  return (
    <div className="datatable-devices">
      <DataTable ref={dt} value={devices} resizableColumns columnResizeMode="fit" lazy
                 header={header} className="p-datatable-devices" dataKey="id" rowHover
                 globalFilter={globalFilter}
                 selection={selectedDevices} onSelectionChange={e => setSelectedDevices(e.value)}
                 paginator emptyMessage="No device found"
                 currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
                 paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                 rowsPerPageOptions={[10, 25, 50, 100, 200]} first={lazyParams.first} rows={lazyParams.rows}
                 totalRecords={totalRecords} onPage={onPage} onSort={onSort} sortField={lazyParams.sortField}
                 sortOrder={lazyParams.sortOrder} onFilter={onFilter} filters={lazyParams.filters} filterDelay={800}
                 expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}
                 rowExpansionTemplate={rowExpansionTemplate} loading={isFetchingDevices}>
        <Column expander style={{width: '5em'}}/>
        <Column selectionMode="multiple" style={{width: '3em'}}/>
        <Column field="unique_id" header="Device ID" body={deviceUniqueIdColumnBody} sortable filter
                filterPlaceholder="Search by device ID"/>
        <Column field="name" header="Device Name" body={deviceNameColumnBody} sortable filter
                filterPlaceholder="Search by device name"/>
        <Column field="bios_vendor" header="BIOS Vendor" body={deviceBiosVendorColumnBody} sortable filter
                filterPlaceholder="Search by BIOS vendor"/>
        <Column field="bios_version" header="BIOS Version" body={deviceBiosVersionColumnBody} sortable filter
                filterPlaceholder="Search by BIOS version"/>
        <Column field="category" header="Category" body={deviceCategoryColumnBody} sortable filter
                excludeGlobalFilter={true} filterElement={deviceCategoryFilterElement}/>
        <Column field="status" header="Status" body={deviceStatusColumnBody} sortable filter
                excludeGlobalFilter={true} filterElement={deviceStatusFilterElement}/>
        <Column body={actionColumnBody} headerStyle={{width: '8em', textAlign: 'center'}}
                bodyStyle={{textAlign: 'center', overflow: 'visible'}}/>
      </DataTable>
    </div>
  );
};

const mapStateToProps = state => ({
  deviceCategories: state.deviceCategory.deviceCategories,
  isFetchingDeviceCategories: state.deviceCategory.isFetchingDeviceCategories,
  fetchDeviceCategoriesErrorMessage: state.deviceCategory.fetchDeviceCategoriesErrorMessage,
  deviceStatuses: state.deviceStatus.deviceStatuses,
  isFetchingDeviceStatuses: state.deviceStatus.isFetchingDeviceStatuses,
  fetchDeviceStatusesErrorMessage: state.deviceStatus.fetchDeviceStatusesErrorMessage,
  devices: state.device.devices,
  totalRecords: state.device.totalRecords,
  isFetchingDevices: state.device.isFetchingDevices,
  fetchDevicesErrorMessage: state.device.fetchDevicesErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  fetchDeviceCategoriesStartAsync: () => dispatch(fetchDeviceCategoriesStartAsync()),
  fetchDeviceStatusesStartAsync: () => dispatch(fetchDeviceStatusesStartAsync()),
  fetchDevicesStartAsync: (params) => dispatch(fetchDevicesStartAsync(params)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DevicesCard));