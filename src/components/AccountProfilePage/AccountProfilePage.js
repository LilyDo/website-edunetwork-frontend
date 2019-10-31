import React, { Component } from 'react';
import { connect } from 'react-redux';
import AccountBreadcrumb from '../AccountBreadcrumb/AccountBreadcrumb';
import MyProfile from '../MyProfile/MyProfile';
import ChangeProfile from '../ChangeProfile/ChangeProfile';
import MyWallet from '../MyWallet/MyWallet';
import MyWallet_Withdraw from '../MyWallet_Withdraw/MyWallet_Withdraw';
import WithdrawNotification from '../WithdrawNotification/WithdrawNotification';
import { showUpdateFormAction } from '../../actions/profile';
import { bindActionCreators } from 'redux';

class AccountProfilePage extends Component {
  state = {
    showProfileForm: false,
    showWalletForm: true,
    showWithdrawForm: false,
    showWithdrawNotification: false,
  };

  toggleEditProfileForm = () => {
    this.props.actions.showUpdateFormAction();
  };

  onEditFormCancel = () => {
    this.props.actions.showUpdateFormAction();
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
    const { showProfileForm } = this.state;
    return (
      <div>
        <AccountBreadcrumb />
        {!this.props.state.isEditing && (
          <MyProfile
            toggleEditProfileForm={this.toggleEditProfileForm}
          />
        )}
        {this.props.state.isEditing && (
          <ChangeProfile onCancel={this.onEditFormCancel} />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ profile }, ownProps) => {
  return {
    state: {
      isEditing: profile.isEditing,
    },
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(
      {
        showUpdateFormAction,
      },
      dispatch,
    ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccountProfilePage);
