/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import React from 'react';

import { Content, Footer, Header, Sidebar } from '../../../containers/index';
import ContentErrorBoundary from '../../../components/ContentErrorBoundary/ContentErrorBoundary';

const Layout = () => {
  return (
    <div className="c-app c-default-layout">
      <Sidebar/>
      <div className="c-wrapper">
        <Header/>
        <div className="c-body">
          <ContentErrorBoundary>
            <Content/>
          </ContentErrorBoundary>
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default Layout;
