import React from 'react';

import { Tag } from 'primereact/tag';

const DeviceJobStatusIndicator = ({status}) => {
  if (status === 'pending')
    return (<Tag icon="pi pi-info-circle" value="Pending"/>);
  else if (status === 'preparing')
    return (
      <span className="d-inline-flex align-items-center">
        <i className="pi pi-spin pi-spinner mr-2"/>Preparing commands
      </span>
    );
  else if (status === 'processing')
    return (
      <span className="d-inline-flex align-items-center">
        <i className="pi pi-spin pi-spinner mr-2"/>Processing
      </span>
    );
  else if (status === 'successful')
    return (<Tag icon="pi pi-check" severity="success" value="Successful"/>);
  else if (status === 'failed')
    return (<Tag icon="pi pi-times" severity="danger" value="Failed"/>);
};

export default DeviceJobStatusIndicator;