import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './MyWallet_Withdraw.scss';
import ArrowRight from '../../assets/images/icon_arrow_right.svg';
import AccountBreadcrumb from '../AccountBreadcrumb/AccountBreadcrumb';
import {
  getUserFormLocal,
  currencyFormatter,
} from '../../services/appService';
import DefaultUserAvatar from '../../assets/images/user_default_avatar.png';
import { withdrawMoneyAction } from '../../actions/profile';
import { routes } from '../../constants';

class MyWallet_Withdraw extends Component {
  state = {
    currentUser: {},
    bankName: '',
    bankAccount: '',
    fullName: '',
    amount: '',
  };

  checkCurrentUser() {
    if (getUserFormLocal()) {
      this.setState({
        currentUser: getUserFormLocal(),
      });
    }
  }

  toggleShowTab = () => {
    this.setState({
      isShowWithdraw: !this.state.isShowWithdraw,
    });
  };

  componentDidMount() {
    this.checkCurrentUser();
  }

  withdrawMoneyAction = () => {
    let payload = {
      bank_name: this.state.bankName,
      bank_branch: this.state.bankBranch,
      bank_account: this.state.bankAccount,
      full_name: this.state.fullName,
      amount: this.state.amount,
    };
    var form_data = new FormData();

    for (var key in payload) {
      form_data.append(key, payload[key]);
    }

    this.props.actions.withdrawMoneyAction(form_data);
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const {
      bankName,
      bankBranch,
      bankAccount,
      fullName,
      amount,
    } = this.state;

    return (
      <div>
        <AccountBreadcrumb />
        <div className="MyWallet_Withdraw">
          <div className="Title">
            <div>My Wallet</div>
            <img alt="arrow right" src={ArrowRight}></img>
            <div>Withdraw</div>
          </div>

          <div className="ContentContainer">
            <div className="TransactionInfo">
              <div>
                Please fill in the following information to withdraw
              </div>
              <div className="Bank">
                <div>Bank name*</div>
                <input
                  placeholder="What is your bank name"
                  value={bankName}
                  onChange={this.handleChange('bankName')}
                />
              </div>
              <div className="Bank">
                <div>Bank branch</div>
                <input
                  placeholder="What is your bank branch"
                  value={bankBranch}
                  onChange={this.handleChange('bankBranch')}
                />
              </div>
              <div className="BankAccount">
                <div>Bank account*</div>
                <input
                  type="text"
                  placeholder="What is your bank account"
                  value={bankAccount}
                  onChange={this.handleChange('bankAccount')}
                />
              </div>
              <div className="BankAccount">
                <div>Full name*</div>
                <input
                  type="text"
                  placeholder="What is full name"
                  value={fullName}
                  onChange={this.handleChange('fullName')}
                />
              </div>
              <div className="WithdrawAmount">
                <div>Amount*</div>
                <input
                  type="number"
                  placeholder="How much do you want to withdraw"
                  value={amount}
                  onChange={this.handleChange('amount')}
                />
              </div>
              <div className="Note">
                Important: The money you want to withdraw must be
                lower than you balance.
              </div>
            </div>

            <div className="Card">
              <div className="User">
                <img
                  className="Photo"
                  alt="avatar"
                  src={
                    this.state.currentUser.avatar || DefaultUserAvatar
                  }
                ></img>
                <div>{this.state.currentUser.name || ''}</div>
              </div>
              <div className="Balance">
                <div className="Text">Balance</div>
                <div className="Number">
                  {currencyFormatter(
                    this.state.currentUser.total_price,
                  )}
                </div>
              </div>
            </div>
          </div>
          <div
            className="TransactionRequest"
            onClick={this.withdrawMoneyAction}
          >
            REQUEST
          </div>
          <Link to={routes.accountWallet}>
            <div className="TransactionRequest">CANCEL</div>
          </Link>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(
      {
        withdrawMoneyAction,
      },
      dispatch,
    ),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(MyWallet_Withdraw);
