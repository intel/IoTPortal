/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import React from 'react';

import { CFooter } from '@coreui/react';

const Footer = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="#" rel="noopener noreferrer">IoT Portal</a>
      </div>
    </CFooter>
  );
};

export default React.memo(Footer);
