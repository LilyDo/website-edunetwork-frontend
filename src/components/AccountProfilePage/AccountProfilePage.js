import React, { Component } from 'react';
import AccountBreadcrumb from '../AccountBreadcrumb/AccountBreadcrumb';
import MyProfile from '../MyProfile/MyProfile';
import ChangeProfile from '../ChangeProfile/ChangeProfile';
import MyWallet from '../MyWallet/MyWallet';
import MyWallet_Withdraw from '../MyWallet_Withdraw/MyWallet_Withdraw';
import WithdrawNotification from '../WithdrawNotification/WithdrawNotification';

class AccountProfilePage extends Component {
  state = {
    showProfileForm: false,
  };

  toggleEditProfileForm = () => {
    this.setState({
      showProfileForm: !this.state.showProfileForm,
    });
  };

  onEditFormCancel = () => {
    this.setState({
      showProfileForm: false,
    });
  };

  render() {
    const { showProfileForm } = this.state;

    return (
      <div>
        <AccountBreadcrumb />
        {!showProfileForm && (
          <MyProfile
            toggleEditProfileForm={this.toggleEditProfileForm}
          />
        )}
        {showProfileForm && (
          <ChangeProfile onCancel={this.onEditFormCancel} />
        )}
        <MyWallet />
        <MyWallet_Withdraw />
        <WithdrawNotification />
      </div>
    );
  }
}

export default AccountProfilePage;
