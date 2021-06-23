import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));

const ListDevices = React.lazy(() => import('./views/devices/ListDevices'));
const CreateDevice = React.lazy(() => import('./views/devices/CreateDevice'));
const ViewDevice = React.lazy(() => import('./views/devices/ViewDevice'));
const EditDevice = React.lazy(() => import('./views/devices/EditDevice'));

const ListDeviceGroups = React.lazy(() => import('./views/deviceGroups/ListDeviceGroups'));
const CreateDeviceGroup = React.lazy(() => import('./views/deviceGroups/CreateDeviceGroup'));
const ViewDeviceGroup = React.lazy(() => import('./views/deviceGroups/ViewDeviceGroup'));
const EditDeviceGroup = React.lazy(() => import('./views/deviceGroups/EditDeviceGroup'));

const ListDeviceCategories = React.lazy(() => import('./views/deviceCategories/ListDeviceCategories'));
const CreateDeviceCategory = React.lazy(() => import('./views/deviceCategories/CreateDeviceCategory'));
const ViewDeviceCategory = React.lazy(() => import('./views/deviceCategories/ViewDeviceCategory'));
const EditDeviceCategory = React.lazy(() => import('./views/deviceCategories/EditDeviceCategory'));

const ListDeviceJobs = React.lazy(() => import('./views/deviceJobs/ListDeviceJobs'));
const CreateDeviceJob = React.lazy(() => import('./views/deviceJobs/CreateDeviceJob'));
const ViewDeviceJob = React.lazy(() => import('./views/deviceJobs/ViewDeviceJob'));

const ListSavedCommands = React.lazy(() => import('./views/savedCommands/ListSavedCommands'));
const CreateSavedCommand = React.lazy(() => import('./views/savedCommands/CreateSavedCommand'));
const ViewSavedCommand = React.lazy(() => import('./views/savedCommands/ViewSavedCommand'));

const ListApiTokens = React.lazy(() => import('./views/apiTokens/ListApiTokens'));

const routes = [
  {path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard},

  {path: '/devices', exact: true, name: 'Devices', component: ListDevices},
  {path: '/devices/create', exact: true, name: 'Create Device', component: CreateDevice},
  {path: '/devices/:id/edit', exact: true, name: 'Edit Device', component: EditDevice},
  {path: '/devices/:id/:tab?', exact: true, name: 'Device Details', component: ViewDevice},

  {path: '/device/groups', exact: true, name: 'Device Groups', component: ListDeviceGroups},
  {path: '/device/groups/create', exact: true, name: 'Create Device Group', component: CreateDeviceGroup},
  {path: '/device/groups/:id', exact: true, name: 'Device Group Details', component: ViewDeviceGroup},
  {path: '/device/groups/:id/edit', exact: true, name: 'Edit Device Group', component: EditDeviceGroup},

  {path: '/device/categories', exact: true, name: 'Device Categories', component: ListDeviceCategories},
  {path: '/device/categories/create', exact: true, name: 'Create Device Category', component: CreateDeviceCategory},
  {path: '/device/categories/:id', exact: true, name: 'Device Category Details', component: ViewDeviceCategory},
  {path: '/device/categories/:id/edit', exact: true, name: 'Edit Device Category', component: EditDeviceCategory},

  {path: '/device/jobs', exact: true, name: 'Device Jobs', component: ListDeviceJobs},
  {path: '/device/jobs/create', exact: true, name: 'Create Device Job', component: CreateDeviceJob},
  {path: '/device/jobs/:id', exact: true, name: 'Device Job Details', component: ViewDeviceJob},

  {path: '/commands/saved', exact: true, name: 'Saved Commands', component: ListSavedCommands},
  {path: '/commands/saved/create', exact: true, name: 'Create Saved Commands', component: CreateSavedCommand},
  {path: '/commands/saved/:id', exact: true, name: 'Saved Command Details', component: ViewSavedCommand},

  {path: '/tokens', exact: true, name: 'API Tokens', component: ListApiTokens},
];

export default routes;
