import React from 'react';
import AccountBreadcrumb from '../AccountBreadcrumb/AccountBreadcrumb';
import MyProfile from '../MyProfile/MyProfile';
import ChangeProfile from '../ChangeProfile/ChangeProfile';
import MyWallet from '../MyWallet/MyWallet';
import MyWallet_Withdraw from '../MyWallet_Withdraw/MyWallet_Withdraw';
import WithdrawNotification from '../WithdrawNotification/WithdrawNotification';

function AccountProfilePage() {
  return (
    <div>
      <AccountBreadcrumb />
      <MyProfile />
      <ChangeProfile />
      <MyWallet />
      <MyWallet_Withdraw />
      <WithdrawNotification />
    </div>
  );
}

export default AccountProfilePage;
