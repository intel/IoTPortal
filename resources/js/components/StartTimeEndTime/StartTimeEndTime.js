/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import React from 'react';
import moment from 'moment';
import classNames from 'classnames';


const StartTimeEndTime = ({style, className, startTime, endTime}) => {

  const defaultStyles = {
    dividerStyle: {
      borderRight: '1px solid #333',
    },
  };

  const timeFormat = 'DD/MM/YYYY, h:mm:ss A'

  return (
    <div className={classNames('d-flex flex-row', className)} style={{...style}}>
      <div className="pr-3" style={{...defaultStyles.dividerStyle}}>
        Start: <b>{startTime ? moment(startTime).format(timeFormat) : '-'}</b>
      </div>
      <div className="pl-3">
        End: <b>{endTime ? moment(endTime).format(timeFormat) : '-'}</b>
      </div>
    </div>
  );
};

export default StartTimeEndTime;