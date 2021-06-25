import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarMinimizer,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavDropdown,
  CSidebarNavItem,
  CSidebarNavTitle,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';

// sidebar nav config
import navigation from './_nav';
import { sidebarActionTypes } from '../redux/sidebar/sidebar.types';

import logoNegative from '../assets/icons/logo-negative.svg';
import logoShort from '../assets/icons/logo-short.svg';

const Sidebar = () => {
  const dispatch = useDispatch();
  const show = useSelector(state => state.sidebar.sidebarShow);

  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch({type: sidebarActionTypes.SET_SIDEBAR_SHOW, payload: val})}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        <CIcon
          className="c-sidebar-brand-full"
          title="IoT Portal"
          height={50}
          src={logoNegative}
        />
        <CIcon
          className="c-sidebar-brand-minimized"
          title="IoT Portal"
          height={50}
          src={logoShort}
        />
      </CSidebarBrand>
      <CSidebarNav>
        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  );
};

export default React.memo(Sidebar);
