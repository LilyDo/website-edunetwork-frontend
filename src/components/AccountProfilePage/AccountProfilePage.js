import React from 'react';
import AccountBreadcrumb from '../AccountBreadcrumb/AccountBreadcrumb';
import MyProfile from '../MyProfile/MyProfile';
import ChangeProfile from '../ChangeProfile/ChangeProfile';

function AccountProfilePage() {
  return (
    <div>
      <AccountBreadcrumb />
      <MyProfile />
      <ChangeProfile />
    </div>
  );
}

export default AccountProfilePage;
