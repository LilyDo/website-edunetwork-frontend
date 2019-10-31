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
    showWalletForm: true,
    showWithdrawForm: false,
    showWithdrawNotification: false,
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

  onWithdrawClick = () => {
    this.setState({
      showWalletForm: false,
      showWithdrawForm: true,
    });
  };

  onCancelClick = () => {
    this.setState({
      showWalletForm: true,
      showWithdrawForm: false,
    });
  };

  onRequestClick = () => {
    this.setState({
      showWithdrawForm: false,
      showWithdrawNotification: true,
    });
  };

  onGoBackClick = () => {
    this.setState({
      showWalletForm: true,
      showWithdrawNotification: false,
    });
  };

  render() {
    const {
      showWalletForm,
      showProfileForm,
      showWithdrawForm,
      showWithdrawNotification,
    } = this.state;

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

        {showWalletForm && (
          <MyWallet onWithdrawClick={this.onWithdrawClick} />
        )}
        {showWithdrawForm && (
          <MyWallet_Withdraw
            onCancelClick={this.onCancelClick}
            onRequestClick={this.onRequestClick}
          />
        )}
        {showWithdrawNotification && (
          <WithdrawNotification onGoBackClick={this.onGoBackClick} />
        )}
      </div>
    );
  }
}

export default AccountProfilePage;
