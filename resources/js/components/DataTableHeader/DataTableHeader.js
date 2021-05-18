import { useCallback } from 'react';

import { InputText } from 'primereact/inputtext';

const DataTableHeader = ({headerName, onSearchInputChange}) => {

  const debouncedInputSearch = useCallback(_.debounce((e) => onSearchInputChange(e), 500), []);

  const handleOnChange = (e) => {
    debouncedInputSearch(e);
  };

  return (
    <div className="table-header">
      {headerName}
      <span className="p-input-icon-left">
          <i className="pi pi-search"/>
          <InputText type="search" onChange={(e) => handleOnChange(e)} placeholder="Search"/>
        </span>
    </div>
  );
};

export default DataTableHeader;