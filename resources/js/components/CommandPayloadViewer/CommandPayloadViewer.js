import React from 'react';

import ReactJson from 'react-json-view';
import { CLabel } from '@coreui/react';

import { isValidJSONObject, isValidJsonString } from '../../utils/utils';

const CommandPayloadViewer = ({label, payload, isLabelHidden}) => {

  const textView = (text) => (
    <div>
      <b>{text}</b>
    </div>
  );

  const renderJSONView = () => {
    if (isValidJSONObject(payload)) {
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

export default CommandPayloadViewer;