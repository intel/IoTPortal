/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';
import 'core-js';
import './polyfill'
import './locales/i18n'
import './locales/yupLocale';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import * as serviceWorker from './serviceWorker';

import { persistor, store } from './redux/store'
import { icons } from './assets/icons';

import App from './App';
import AppErrorBoundary from './components/AppErrorBoundary/AppErrorBoundary';

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// require('./components/App');
// require('./App');

React.icons = icons

if (document.getElementById('app')) {
  ReactDOM.render(
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppErrorBoundary>
          <App/>
        </AppErrorBoundary>
      </PersistGate>
    </Provider>,
    document.getElementById('app')
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

