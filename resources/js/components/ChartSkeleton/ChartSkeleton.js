/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import React from 'react';

import { Skeleton } from 'primereact/skeleton';

const ChartSkeleton = () => {

  return (
    <>
      <Skeleton width="15rem" height="30px" className="mb-2"/>
      <Skeleton height="470px" className="mb-2"/>
    </>
  );
};

export default ChartSkeleton;