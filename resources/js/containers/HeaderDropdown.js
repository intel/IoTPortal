import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import CIcon from '@coreui/icons-react';
import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CImg } from '@coreui/react';
import { Skeleton } from 'primereact/skeleton';

import { APP_URL } from '../data/config';
import { fetchProfileStartAsync } from '../redux/profile/profile.actions';


const HeaderDropdown = ({profile, isFetchingProfile, fetchProfileStartAsync}) => {

  const csrfToken = document.head.querySelector('meta[name="csrf-token"]').getAttribute('content');

  useEffect(() => {
    fetchProfileStartAsync();
  }, []);

  const submitLogout = (event) => {
    event.preventDefault();
    document.getElementById('logout-form').submit();
  };

  return (
    <>
      <CDropdown
        inNav
        className="c-header-nav-items mx-2"
        direction="down"
      >
        <CDropdownToggle className="c-header-nav-link" caret={false}>
          <div className="c-avatar">
            <CImg
              src={'/avatars/default.svg'}
              className="c-avatar-img"
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
            {isFetchingProfile ? (<Skeleton/>) : <strong>{profile.name}</strong>}
          </CDropdownItem>
          <CDropdownItem
            header
            tag="div"
            color="light"
            className="text-center"
          >
            {isFetchingProfile ? (<Skeleton/>) : <strong>{profile.email}</strong>}
          </CDropdownItem>
          <CDropdownItem href={`${APP_URL}/logout`} onClick={submitLogout}>
            <CIcon name="cil-account-logout" className="mfe-2"/>
            Logout
          </CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
      <form id="logout-form" action={`${APP_URL}/logout`} method="POST" className="d-none">
        <input type="hidden" name="_token" value={csrfToken}/>
      </form>
    </>
  );
};

const mapStateToProps = state => ({
  profile: state.profile.profile,
  isFetchingProfile: state.profile.isFetchingProfile,
});

const mapDispatchToProps = dispatch => ({
  fetchProfileStartAsync: () => dispatch(fetchProfileStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderDropdown);
