import React from 'react'
import { Calendar } from 'primereact/calendar';
import { formatDateTimeRangeToCommonString } from '../../utils/utils';

const DataTableDateRangeFilter = ({value, setValueCallback, dataTable, filterField, filterMatchMode}) => {

  const onChange = (event) => {
    if (event.value !== null && event.value[0] !== null && event.value[1] !== null)
      dataTable.current.filter(formatDateTimeRangeToCommonString(event.value), filterField, filterMatchMode);
    else if (event.value === null)
      dataTable.current.filter(null, filterField, filterMatchMode);

    setValueCallback(event.value);
  };

  return (
    <Calendar selectionMode="range" value={value} onChange={onChange}
              placeholder="Filter by date range" dateFormat="yy-mm-dd" className="p-column-filter" baseZIndex={1000}
              showButtonBar touchUI monthNavigator yearNavigator yearRange="1900:2100"/>
  );
}

export default DataTableDateRangeFilter;