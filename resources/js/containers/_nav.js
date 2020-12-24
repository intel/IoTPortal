import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
    {
        _tag: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/dashboard',
        icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    },
    {
        _tag: 'CSidebarNavTitle',
        _children: ['Device']
    },
    {
        _tag: 'CSidebarNavItem',
        name: 'Devices',
        to: '/devices',
        icon: 'cil-devices',
    },
    {
        _tag: 'CSidebarNavTitle',
        _children: ['OTA Update Files']
    },
    {
        _tag: 'CSidebarNavItem',
        name: 'Configuration Files',
        to: '/files/configuration',
        icon: 'cil-file',
    },
    {
        _tag: 'CSidebarNavTitle',
        _children: ['Administration']
    },
    {
        _tag: 'CSidebarNavItem',
        name: 'API Keys',
        to: '/administration/api',
        icon: 'cil-applications-settings',
    },
]

export default _nav
