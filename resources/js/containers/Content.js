/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { CContainer, CFade } from '@coreui/react'

// routes config
import routes from '../routes'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const Content = () => {
  return (
    <main className="c-main">
      <CContainer fluid>
        <Suspense fallback={loading}>
          <Switch>
            {/* Removes trailing slashes */}
            <Route
              path="/:url*(/+)"
              exact
              strict
              render={({location}) => (
                <Redirect to={location.pathname.replace(/\/+$/, "")}/>
              )}
            />
            {/* Removes duplicate slashes in the middle of the URL */}
            <Route
              path="/:url(.*//+.*)"
              exact
              strict
              render={({match}) => (
                <Redirect to={`/${match.params.url.replace(/\/\/+/, "/")}`}/>
              )}
            />
            {routes.map((route, idx) => {
              return route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                    <CFade>
                      <route.component {...props} />
                    </CFade>
                  )}/>
              )
            })}
            <Redirect from="/" to="/dashboard" />
          </Switch>
        </Suspense>
      </CContainer>
    </main>
  )
}

export default React.memo(Content);
