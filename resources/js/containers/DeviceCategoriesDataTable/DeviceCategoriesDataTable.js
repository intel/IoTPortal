/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

import {
  deleteDeviceCategoriesStartAsync,
  fetchDeviceCategoriesStartAsync,
  resetFetchDeviceCategoriesLazyParams,
  setFetchDeviceCategoriesLazyParams
} from '../../redux/deviceCategory/deviceCategory.actions';

import DeleteDeviceCategoryModal from '../../components/DeleteDeviceCategoryModal/DeleteDeviceCategoryModal';

import './deviceCategoriesDataTable.css';
import DataTableHeader from '../../components/DataTableHeader/DataTableHeader';

const DeviceCategoriesDataTable = ({
                                     history,
                                     hideActionsBar,
                                     selectedDeviceCategories,
                                     setSelectedDeviceCategories,
                                     deviceCategories,
                                     deviceCategoriesTotalRecords,
                                     isFetchingDeviceCategories,
                                     fetchDeviceCategoriesErrorMessage,
                                     fetchDeviceCategoriesLazyParams,
                                     isDeletingDeviceCategories,
                                     deleteDeviceCategoriesErrorMessage,
                                     fetchDeviceCategoriesStartAsync,
                                     setFetchDeviceCategoriesLazyParams,
                                     resetFetchDeviceCategoriesLazyParams,
                                     deleteDeviceCategoriesStartAsync
                                   }) => {

  const [showDeleteDeviceCategoryModal, setShowDeleteDeviceCategoryModal] = useState(false);
  const [deviceCategory, setDeviceCategory] = useState(null);
  const [globalFilter, setGlobalFilter] = useState(null);

  const dt = useRef(null);

  useEffect(() => {
    fetchDeviceCategoriesStartAsync(fetchDeviceCategoriesLazyParams);
  }, [fetchDeviceCategoriesLazyParams]);

  useEffect(() => resetFetchDeviceCategoriesLazyParams, []);

  const confirmDeleteDeviceCategory = (deviceCategory) => {
    setDeviceCategory(deviceCategory);
    setShowDeleteDeviceCategoryModal(!showDeleteDeviceCategoryModal);
  };

  const deleteDeviceCategory = () => {
    deleteDeviceCategoriesStartAsync([deviceCategory.id]);
    setShowDeleteDeviceCategoryModal(!showDeleteDeviceCategoryModal);
    setDeviceCategory(null);
  };

  const onPage = (event) => {
    let _lazyParams = {...fetchDeviceCategoriesLazyParams, ...event};
    _lazyParams['page'] += 1;
    setFetchDeviceCategoriesLazyParams(_lazyParams);
  };

  const onSort = (event) => {
    let _lazyParams = {...fetchDeviceCategoriesLazyParams, ...event};
    setFetchDeviceCategoriesLazyParams(_lazyParams);
  };

  const onFilter = (event) => {
    let _lazyParams = {...fetchDeviceCategoriesLazyParams, ...event};
    _lazyParams['first'] = 0;
    _lazyParams['page'] = 1;
    setFetchDeviceCategoriesLazyParams(_lazyParams);
  };

  const header = (
    <DataTableHeader headerName="Device Categories" onSearchInputChange={(e) => setGlobalFilter(e.target.value)}/>);

  const deviceCategoryUniqueIdColumnBody = (rowData) => {
    return (
      <>
        <span className="p-column-title">ID</span>
        {rowData.unique_id}
      </>
    );
  };

  const deviceCategoryNameColumnBody = (rowData) => {
    return (
      <>
        <span className="p-column-title">Name</span>
        <b>{rowData.name}</b>
      </>
    );
  };

  const actionColumnBody = (rowData) => {
    return (
      <>
        <Button icon="pi pi-search" className="p-button-rounded p-button-success mr-2"
                onClick={() => history.push(`/device/categories/${rowData.unique_id}`)}
                tooltip="View"/>
        <Button icon="pi pi-pencil" className="p-button-rounded p-button-warning mr-2"
                onClick={() => history.push(`/device/categories/${rowData.unique_id}/edit`)}
                tooltip="Edit"/>
        <Button icon="pi pi-trash" className="p-button-rounded p-button-danger mr-2"
                onClick={() => confirmDeleteDeviceCategory(rowData)}
                tooltip="Delete"/>
      </>
    );
  }

  return (
    <>
      <div className="datatable-device-categories">
        <DataTable ref={dt} value={deviceCategories} resizableColumns columnResizeMode="fit" lazy
                   header={header} className="p-datatable-device-categories" dataKey="id" rowHover
                   globalFilter={globalFilter}
                   {...(selectedDeviceCategories !== undefined && {selection: selectedDeviceCategories})}
                   {...(setSelectedDeviceCategories !== undefined && {onSelectionChange: e => setSelectedDeviceCategories(e.value)})}
                   paginator emptyMessage="No device category found"
                   currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
                   paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                   rowsPerPageOptions={[10, 50, 100, 200]} first={fetchDeviceCategoriesLazyParams.first}
                   rows={fetchDeviceCategoriesLazyParams.rows}
                   totalRecords={deviceCategoriesTotalRecords} onPage={onPage} onSort={onSort}
                   sortField={fetchDeviceCategoriesLazyParams.sortField}
                   sortOrder={fetchDeviceCategoriesLazyParams.sortOrder} onFilter={onFilter}
                   filters={fetchDeviceCategoriesLazyParams.filters} filterDelay={800}
                   loading={isFetchingDeviceCategories}>
          {(selectedDeviceCategories !== undefined && setSelectedDeviceCategories !== undefined) &&
          <Column selectionMode="multiple" style={{width: '4em'}}/>}
          <Column field="unique_id" header="Device category ID" body={deviceCategoryUniqueIdColumnBody} sortable filter
                  filterPlaceholder="Search by device category ID"/>
          <Column field="name" header="Device category name" body={deviceCategoryNameColumnBody} sortable filter
                  filterPlaceholder="Search by device category name"/>
          {!hideActionsBar && <Column body={actionColumnBody} headerStyle={{width: '15em', textAlign: 'center'}}
                                      bodyStyle={{textAlign: 'center', overflow: 'visible'}}/>}
        </DataTable>
      </div>
      {(showDeleteDeviceCategoryModal && !hideActionsBar) &&
      <DeleteDeviceCategoryModal deviceCategory={deviceCategory}
                                 show={showDeleteDeviceCategoryModal}
                                 onClose={() => setShowDeleteDeviceCategoryModal(!showDeleteDeviceCategoryModal)}
                                 onConfirm={deleteDeviceCategory}/>}
    </>
  );
};

const mapStateToProps = state => ({
  deviceCategories: state.deviceCategory.deviceCategories,
  deviceCategoriesTotalRecords: state.deviceCategory.deviceCategoriesTotalRecords,
  isFetchingDeviceCategories: state.deviceCategory.isFetchingDeviceCategories,
  fetchDeviceCategoriesErrorMessage: state.deviceCategory.fetchDeviceCategoriesErrorMessage,
  fetchDeviceCategoriesLazyParams: state.deviceCategory.fetchDeviceCategoriesLazyParams,
  isDeletingDeviceCategories: state.deviceCategory.isDeletingDeviceCategories,
  deleteDeviceCategoriesErrorMessage: state.deviceCategory.deleteDeviceCategoriesErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  fetchDeviceCategoriesStartAsync: (lazyParams) => dispatch(fetchDeviceCategoriesStartAsync(lazyParams)),
  setFetchDeviceCategoriesLazyParams: (lazyParams) => dispatch(setFetchDeviceCategoriesLazyParams(lazyParams)),
  resetFetchDeviceCategoriesLazyParams: () => dispatch(resetFetchDeviceCategoriesLazyParams()),
  deleteDeviceCategoriesStartAsync: (ids, history) => dispatch(deleteDeviceCategoriesStartAsync(ids, history)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DeviceCategoriesDataTable));