import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';

import { fetchDeviceCategoryOptionsStartAsync } from '../../redux/deviceCategory/deviceCategory.actions';
import { fetchDeviceStatusOptionsStartAsync } from '../../redux/deviceStatus/deviceStatus.actions';
import {
  deleteDevicesStartAsync,
  fetchDevicesStartAsync,
  resetFetchDevicesLazyParams,
  setFetchDevicesLazyParams
} from '../../redux/device/device.actions';

import DevicePropertyCard from '../../components/DevicePropertyCard/DevicePropertyCard';
import DeleteDeviceModal from '../../components/DeleteDeviceModal/DeleteDeviceModal';
import ConnectDeviceModal from '../../components/ConnectDeviceModal/ConnectDeviceModal';

import './devicesDataTable.css';
import DataTableHeader from '../../components/DataTableHeader/DataTableHeader';

const DevicesDataTable = ({
                            history,
                            hideActionsBar,
                            selectedDevices,
                            setSelectedDevices,
                            deviceGroupUniqueId,
                            deviceCategoryOptions,
                            isFetchingDeviceCategoryOptions,
                            fetchDeviceCategoryOptionsErrorMessage,
                            deviceStatusOptions,
                            isFetchingDeviceStatusOptions,
                            fetchDeviceStatusOptionsErrorMessage,
                            devices,
                            devicesTotalRecords,
                            isFetchingDevices,
                            fetchDevicesErrorMessage,
                            fetchDevicesLazyParams,
                            isDeletingDevices,
                            deleteDevicesErrorMessage,
                            fetchDeviceCategoryOptionsStartAsync,
                            fetchDeviceStatusOptionsStartAsync,
                            fetchDevicesStartAsync,
                            setFetchDevicesLazyParams,
                            resetFetchDevicesLazyParams,
                            deleteDevicesStartAsync
                          }) => {

  const [showConnectDeviceModal, setShowConnectDeviceModal] = useState(false);
  const [showDeleteDeviceModal, setShowDeleteDeviceModal] = useState(false);
  const [device, setDevice] = useState(null);
  const [selectedDeviceCategory, setSelectedDeviceCategory] = useState(null);
  const [selectedDeviceStatus, setSelectedDeviceStatus] = useState(null);
  const [expandedRows, setExpandedRows] = useState(null);
  const [globalFilter, setGlobalFilter] = useState(null);

  const dt = useRef(null);

  useEffect(() => {
    fetchDevicesStartAsync(fetchDevicesLazyParams, deviceGroupUniqueId);
    fetchDeviceCategoryOptionsStartAsync();
    fetchDeviceStatusOptionsStartAsync();
  }, [fetchDevicesLazyParams]);

  useEffect(() => resetFetchDevicesLazyParams, []);

  const onShowConnectDeviceModal = (device) => {
    setDevice(device);
    setShowConnectDeviceModal(!showConnectDeviceModal);
  };

  const confirmDeleteDevice = (device) => {
    setDevice(device);
    setShowDeleteDeviceModal(!showDeleteDeviceModal);
  };

  const deleteDevice = () => {
    deleteDevicesStartAsync([device.id]);
    setShowDeleteDeviceModal(!showDeleteDeviceModal);
    setDevice(null);
  };

  const onPage = (event) => {
    let _lazyParams = {...fetchDevicesLazyParams, ...event};
    _lazyParams['page'] += 1;
    setFetchDevicesLazyParams(_lazyParams);
  };

  const onSort = (event) => {
    let _lazyParams = {...fetchDevicesLazyParams, ...event};
    setFetchDevicesLazyParams(_lazyParams);
  };

  const onFilter = (event) => {
    let _lazyParams = {...fetchDevicesLazyParams, ...event};
    _lazyParams['first'] = 0;
    _lazyParams['page'] = 1;
    setFetchDevicesLazyParams(_lazyParams);
  };

  const header = (
    <DataTableHeader headerName="Devices" onSearchInputChange={(e) => setGlobalFilter(e.target.value)}/>);

  const renderDeviceCategoryFilter = () => {
    return (
      <Dropdown value={selectedDeviceCategory} options={deviceCategoryOptions}
                onChange={onDeviceCategoryFilterChange}
                itemTemplate={deviceCategoryItemTemplate} showClear placeholder="Select a device category"
                className="p-column-filter"/>
    );
  };

  const onDeviceCategoryFilterChange = (event) => {
    dt.current.filter(event.value, 'device_category_id', 'equals');
    setSelectedDeviceCategory(event.value);
  };

  const deviceCategoryItemTemplate = (option) => {
    return (
      <b>{option.label}</b>
    );
  };

  const renderDeviceStatusFilter = () => {
    return (
      <Dropdown value={selectedDeviceStatus} options={deviceStatusOptions} onChange={onDeviceStatusFilterChange}
                itemTemplate={deviceStatusItemTemplate} showClear placeholder="Select a device status"
                className="p-column-filter"/>
    );
  };

  const onDeviceStatusFilterChange = (event) => {
    dt.current.filter(event.value, 'device_status_id', 'equals');
    setSelectedDeviceStatus(event.value);
  };

  const deviceStatusItemTemplate = (option) => {
    return (
      <span
        className={classNames('device-badge', 'status-' + option.label.replace(/\s+/g, '-').toLowerCase())}>{option.label}</span>
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

  const actionColumnBody = (rowData) => {
    return (
      <>
        <Button icon="pi pi-info-circle" className="p-button-rounded p-button-info mr-2"
                onClick={() => onShowConnectDeviceModal(rowData)}/>
        <Button icon="pi pi-search" className="p-button-rounded p-button-success mr-2"
                onClick={() => history.push(`/devices/${rowData.unique_id}`)}/>
        <Button icon="pi pi-pencil" className="p-button-rounded p-button-warning mr-2"
                onClick={() => history.push(`/devices/${rowData.unique_id}/edit`)}/>
        <Button icon="pi pi-trash" className="p-button-rounded p-button-danger mr-2"
                onClick={() => confirmDeleteDevice(rowData)}/>
      </>
    );
  }

  const rowExpansionTemplate = (data) => {
    return (
      <DevicePropertyCard device={data}/>
    );
  };

  const deviceCategoryFilterElement = renderDeviceCategoryFilter();
  const deviceStatusFilterElement = renderDeviceStatusFilter();

  return (
    <>
      <div className="datatable-devices">
        <DataTable ref={dt} value={devices} resizableColumns columnResizeMode="fit" lazy
                   header={header} className="p-datatable-devices" dataKey="id" rowHover
                   globalFilter={globalFilter}
                   {...(selectedDevices !== undefined && {selection: selectedDevices})}
                   {...(setSelectedDevices !== undefined && {onSelectionChange: e => setSelectedDevices(e.value)})}
                   paginator emptyMessage="No device found"
                   currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
                   paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                   rowsPerPageOptions={[10, 50, 100, 200]} first={fetchDevicesLazyParams.first}
                   rows={fetchDevicesLazyParams.rows}
                   totalRecords={devicesTotalRecords} onPage={onPage} onSort={onSort}
                   sortField={fetchDevicesLazyParams.sortField}
                   sortOrder={fetchDevicesLazyParams.sortOrder} onFilter={onFilter}
                   filters={fetchDevicesLazyParams.filters} filterDelay={800}
                   expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}
                   rowExpansionTemplate={rowExpansionTemplate} loading={isFetchingDevices}>
          <Column expander style={{width: '5em'}}/>
          {(selectedDevices !== undefined && setSelectedDevices !== undefined) &&
          <Column selectionMode="multiple" style={{width: '4em'}}/>}
          <Column field="unique_id" header="Device ID" body={deviceUniqueIdColumnBody} sortable filter
                  filterPlaceholder="Search by device ID"/>
          <Column field="name" header="Device name" body={deviceNameColumnBody} sortable filter
                  filterPlaceholder="Search by device name"/>
          <Column field="bios_vendor" header="BIOS vendor" body={deviceBiosVendorColumnBody} sortable filter
                  filterPlaceholder="Search by BIOS vendor"/>
          <Column field="bios_version" header="BIOS version" body={deviceBiosVersionColumnBody} sortable filter
                  filterPlaceholder="Search by BIOS version"/>
          <Column field="device_category_id" header="Category" body={deviceCategoryColumnBody} sortable filter
                  excludeGlobalFilter={true} filterElement={deviceCategoryFilterElement}/>
          <Column field="device_status_id" header="Status" body={deviceStatusColumnBody} sortable filter
                  excludeGlobalFilter={true} filterElement={deviceStatusFilterElement}/>
          {!hideActionsBar && <Column body={actionColumnBody} headerStyle={{width: '20em', textAlign: 'center'}}
                                      bodyStyle={{textAlign: 'center', overflow: 'visible'}}/>}
        </DataTable>
      </div>
      {(showConnectDeviceModal && !hideActionsBar) &&
      <ConnectDeviceModal device={device} show={showConnectDeviceModal}
                          onClose={() => setShowConnectDeviceModal(!showConnectDeviceModal)}
      />}
      {(showDeleteDeviceModal && !hideActionsBar) &&
      <DeleteDeviceModal device={device} show={showDeleteDeviceModal}
                         onClose={() => setShowDeleteDeviceModal(!showDeleteDeviceModal)}
                         onConfirm={deleteDevice}
      />}
    </>
  );
};

const mapStateToProps = state => ({
  deviceCategoryOptions: state.deviceCategory.deviceCategoryOptions,
  isFetchingDeviceCategoryOptions: state.deviceCategory.isFetchingDeviceCategoryOptions,
  fetchDeviceCategoryOptionsErrorMessage: state.deviceCategory.fetchDeviceCategoryOptionsErrorMessage,
  deviceStatusOptions: state.deviceStatus.deviceStatusOptions,
  isFetchingDeviceStatusOptions: state.deviceStatus.isFetchingDeviceStatusOptions,
  fetchDeviceStatusOptionsErrorMessage: state.deviceStatus.fetchDeviceStatusOptionsErrorMessage,
  devices: state.device.devices,
  devicesTotalRecords: state.device.devicesTotalRecords,
  isFetchingDevices: state.device.isFetchingDevices,
  fetchDevicesErrorMessage: state.device.fetchDevicesErrorMessage,
  fetchDevicesLazyParams: state.device.fetchDevicesLazyParams,
  isDeletingDevices: state.device.isFetchingDevices,
  deleteDevicesErrorMessage: state.device.fetchDevicesErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  fetchDeviceCategoryOptionsStartAsync: (name) => dispatch(fetchDeviceCategoryOptionsStartAsync(name)),
  fetchDeviceStatusOptionsStartAsync: (name) => dispatch(fetchDeviceStatusOptionsStartAsync(name)),
  fetchDevicesStartAsync: (lazyParams, deviceGroupUniqueId) => dispatch(fetchDevicesStartAsync(lazyParams, deviceGroupUniqueId)),
  setFetchDevicesLazyParams: (lazyParams) => dispatch(setFetchDevicesLazyParams(lazyParams)),
  resetFetchDevicesLazyParams: () => dispatch(resetFetchDevicesLazyParams()),
  deleteDevicesStartAsync: (ids, history) => dispatch(deleteDevicesStartAsync(ids, history)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DevicesDataTable));