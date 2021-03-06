/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import React from 'react';

import ReactJson from 'react-json-view';
import { CLabel } from '@coreui/react';
import { Skeleton } from 'primereact/skeleton';

import { isValidJSONObject, isValidJsonString } from '../../utils/utils';


const PayloadViewer = ({label, payload, isLabelHidden, isLoading}) => {

  const textView = (text) => (
    <div>
      <b>{text}</b>
    </div>
  );

  const renderJSONView = () => {
    if (isLoading) {
      return (<Skeleton/>);
    } else if (isValidJSONObject(payload)) {
      return (<ReactJson src={payload} name={null}/>);
    } else if (isValidJsonString(payload)) {
      return (<ReactJson src={JSON.parse(payload)} name={null}/>);
    } else if (_.isString(payload)) {
      return (textView(payload));
    }
    return (textView('Empty payload'));
  };

  return (
    <>
      {!isLabelHidden && <CLabel>{label || 'Command payload'}</CLabel>}
      {renderJSONView()}
    </>
  );
};

export default PayloadViewer;