import React from 'react';
import { connect } from 'react-redux';

import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CImg } from '@coreui/react';
import CIcon from '@coreui/icons-react';

import { logoutStartAsync } from '../redux/login/login.actions';

const HeaderDropdown = ({logoutStartAsync}) => {
  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={'/avatars/default2.png'}
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Alex John</strong>
        </CDropdownItem>
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>alex@gmail.com</strong>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-user" className="mfe-2"/>Profile
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-settings" className="mfe-2"/>
          Settings
        </CDropdownItem>
        <CDropdownItem divider/>
        <CDropdownItem onClick={logoutStartAsync}>
          <CIcon name="cil-account-logout" className="mfe-2"/>
          Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  logoutStartAsync: () => dispatch(logoutStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderDropdown);
