import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

import {
  deleteDeviceGroupsStartAsync,
  fetchDeviceGroupsStartAsync,
  setFetchDeviceGroupsLazyParams,
  resetFetchDeviceGroupsLazyParams,
} from '../../redux/deviceGroup/deviceGroup.actions';

import DeleteDeviceGroupModal from '../../components/DeleteDeviceGroupModal/DeleteDeviceGroupModal';

import './deviceGroupsDataTable.css';

const DeviceGroupsDataTable = ({
                                 history,
                                 hideActionsBar,
                                 selectedDeviceGroups,
                                 setSelectedDeviceGroups,
                                 deviceGroups,
                                 deviceGroupsTotalRecords,
                                 isFetchingDeviceGroups,
                                 fetchDeviceGroupsErrorMessage,
                                 fetchDeviceGroupsLazyParams,
                                 isDeletingDeviceGroups,
                                 deleteDeviceGroupsErrorMessage,
                                 fetchDeviceGroupsStartAsync,
                                 setFetchDeviceGroupsLazyParams,
                                 resetFetchDeviceGroupsLazyParams,
                                 deleteDeviceGroupsStartAsync
                               }) => {

  const [showDeleteDeviceGroupModal, setShowDeleteDeviceGroupModal] = useState(false);
  const [deviceGroup, setDeviceGroup] = useState(null);
  const [globalFilter, setGlobalFilter] = useState(null);

  const dt = useRef(null);

  useEffect(() => {
    fetchDeviceGroupsStartAsync(fetchDeviceGroupsLazyParams);
  }, [fetchDeviceGroupsLazyParams]);

  useEffect(() => resetFetchDeviceGroupsLazyParams, []);

  const confirmDeleteDeviceGroup = (deviceGroup) => {
    setDeviceGroup(deviceGroup);
    setShowDeleteDeviceGroupModal(!showDeleteDeviceGroupModal);
  };

  const deleteDeviceGroup = () => {
    deleteDeviceGroupsStartAsync([deviceGroup.id]);
    setShowDeleteDeviceGroupModal(!showDeleteDeviceGroupModal);
    setDeviceGroup(null);
  };

  const onPage = (event) => {
    let _lazyParams = {...fetchDeviceGroupsLazyParams, ...event};
    _lazyParams['page'] += 1;
    setFetchDeviceGroupsLazyParams(_lazyParams);
  };

  const onSort = (event) => {
    let _lazyParams = {...fetchDeviceGroupsLazyParams, ...event};
    setFetchDeviceGroupsLazyParams(_lazyParams);
  };

  const onFilter = (event) => {
    let _lazyParams = {...fetchDeviceGroupsLazyParams, ...event};
    _lazyParams['first'] = 0;
    _lazyParams['page'] = 1;
    setFetchDeviceGroupsLazyParams(_lazyParams);
  };

  const renderHeader = () => {
    return (
      <div className="table-header">
        Device Groups
        <span className="p-input-icon-left">
          <i className="pi pi-search"/>
          <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search"/>
        </span>
      </div>
    );
  };

  const deviceGroupUniqueIdColumnBody = (rowData) => {
    return (
      <>
        <span className="p-column-title">ID</span>
        {rowData.unique_id}
      </>
    );
  };

  const deviceGroupNameColumnBody = (rowData) => {
    return (
      <>
        <span className="p-column-title">Name</span>
        {rowData.name}
      </>
    );
  };

  const actionColumnBody = (rowData) => {
    return (
      <>
        <Button icon="pi pi-search" className="p-button-rounded p-button-success mr-2"
                onClick={() => history.push(`/device/groups/${rowData.unique_id}`)}/>
        <Button icon="pi pi-pencil" className="p-button-rounded p-button-warning mr-2"
                onClick={() => history.push(`/device/groups/${rowData.unique_id}/edit`)}/>
        <Button icon="pi pi-trash" className="p-button-rounded p-button-danger mr-2"
                onClick={() => confirmDeleteDeviceGroup(rowData)}/>
      </>
    );
  }

  const header = renderHeader();

  return (
    <>
      <div className="datatable-device-groups">
        <DataTable ref={dt} value={deviceGroups} resizableColumns columnResizeMode="fit" lazy
                   header={header} className="p-datatable-device-groups" dataKey="id" rowHover
                   globalFilter={globalFilter}
                   {...(selectedDeviceGroups !== undefined && {selection: selectedDeviceGroups})}
                   {...(setSelectedDeviceGroups !== undefined && {onSelectionChange: e => setSelectedDeviceGroups(e.value)})}
                   paginator emptyMessage="No device found"
                   currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
                   paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                   rowsPerPageOptions={[10, 50, 100, 200]} first={fetchDeviceGroupsLazyParams.first}
                   rows={fetchDeviceGroupsLazyParams.rows}
                   totalRecords={deviceGroupsTotalRecords} onPage={onPage} onSort={onSort}
                   sortField={fetchDeviceGroupsLazyParams.sortField}
                   sortOrder={fetchDeviceGroupsLazyParams.sortOrder} onFilter={onFilter}
                   filters={fetchDeviceGroupsLazyParams.filters} filterDelay={800}
                   loading={isFetchingDeviceGroups}>
          {(selectedDeviceGroups !== undefined && setSelectedDeviceGroups !== undefined) &&
          <Column selectionMode="multiple" style={{width: '4em'}}/>}
          <Column field="unique_id" header="Device group ID" body={deviceGroupUniqueIdColumnBody} sortable filter
                  filterPlaceholder="Search by device group ID"/>
          <Column field="name" header="Device group name" body={deviceGroupNameColumnBody} sortable filter
                  filterPlaceholder="Search by device group name"/>
          {!hideActionsBar && <Column body={actionColumnBody} headerStyle={{width: '15em', textAlign: 'center'}}
                                      bodyStyle={{textAlign: 'center', overflow: 'visible'}}/>}
        </DataTable>
      </div>
      {(showDeleteDeviceGroupModal && !hideActionsBar) &&
      <DeleteDeviceGroupModal deviceGroup={deviceGroup}
                              show={showDeleteDeviceGroupModal}
                              onClose={() => setShowDeleteDeviceGroupModal(!showDeleteDeviceGroupModal)}
                              onConfirm={deleteDeviceGroup}/>}
    </>
  );
};

const mapStateToProps = state => ({
  deviceGroups: state.deviceGroup.deviceGroups,
  deviceGroupsTotalRecords: state.deviceGroup.deviceGroupsTotalRecords,
  isFetchingDeviceGroups: state.deviceGroup.isFetchingDeviceGroups,
  fetchDeviceGroupsErrorMessage: state.deviceGroup.fetchDeviceGroupsErrorMessage,
  fetchDeviceGroupsLazyParams: state.deviceGroup.fetchDeviceGroupsLazyParams,
  isDeletingDeviceGroups: state.deviceGroup.isDeletingDeviceGroups,
  deleteDeviceGroupsErrorMessage: state.deviceGroup.deleteDeviceGroupsErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  fetchDeviceGroupsStartAsync: (params) => dispatch(fetchDeviceGroupsStartAsync(params)),
  setFetchDeviceGroupsLazyParams: (lazyParams) => dispatch(setFetchDeviceGroupsLazyParams(lazyParams)),
  resetFetchDeviceGroupsLazyParams: () => dispatch(resetFetchDeviceGroupsLazyParams()),
  deleteDeviceGroupsStartAsync: (ids, history) => dispatch(deleteDeviceGroupsStartAsync(ids, history)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DeviceGroupsDataTable));