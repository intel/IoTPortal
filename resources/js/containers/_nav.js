/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import React from 'react';
import CIcon from '@coreui/icons-react';

const _nav = [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Management']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Devices',
    to: '/devices',
    icon: 'cil-devices',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Devices',
        to: '/devices',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Create new device',
        to: '/devices/create',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Device Groups',
    to: '/device/groups',
    icon: 'cil-basket',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Device Groups',
        to: '/device/groups',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Create new device group',
        to: '/device/groups/create',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Device Categories',
    to: '/device/categories',
    icon: 'cil-library-add',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Device Categories',
        to: '/device/categories',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Create new device category',
        to: '/device/categories/create',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Device Jobs',
    to: '/device/jobs',
    icon: 'cil-calendar-check',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Device Jobs',
        to: '/device/jobs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Create new device job',
        to: '/device/jobs/create',
      },
    ],
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Commands']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Saved Commands',
    to: '/commands/saved',
    icon: 'cil-command',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Saved Commands',
        to: '/commands/saved',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Create new saved command',
        to: '/commands/saved/create',
      },
    ],
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Administrations']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'API Tokens',
    to: '/tokens',
    icon: 'cil-applications-settings',
  },
];

export default _nav;
