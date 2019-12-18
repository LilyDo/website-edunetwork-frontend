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
import {
  withdrawMoneyAction,
  getProfileAction,
} from '../../actions/profile';
import { routes } from '../../constants';
import * as types from '../../actions/index';

class MyWallet_Withdraw extends Component {
  state = {
    currentUser: {},
    bankName: '',
    bankAccount: '',
    bankAddress: '',
    swiftCode: '',
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
    this.props.actions.getProfileAction({
      token: localStorage.getItem(types.TOKEN_KEY),
    });
    this.checkCurrentUser();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      currentUser: nextProps.currentUser,
    });
    this.checkCurrentUser();
  }

  withdrawMoneyAction = () => {
    let payload = {
      bank_name: this.state.bankName,
      // bank_branch: this.state.bankBranch,
      bank_account: this.state.bankAccount,
      full_name: this.state.fullName,
      amount: this.state.amount,
      bank_address: this.state.bankAddress,
      swift_code: this.state.swiftCode
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
      // bankBranch,
      bankAccount,
      bankAddress,
      swiftCode,
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
              <div className="BankName">
                <div>Name of Beneficiary Bank*</div>
                <input
                  placeholder="What is your name of beneficiary bank"
                  value={bankName}
                  onChange={this.handleChange('bankName')}
                />
              </div>
              {/* <div className="BankBranch">
                <div>Branch of Beneficiary Bank</div>
                <input
                  placeholder="What is your branch of beneficiary bank"
                  value={bankBranch}
                  onChange={this.handleChange('bankBranch')}
                />
              </div> */}
              <div className="BankAccount">
                <div>Bank Account number*</div>
                <input
                  type="text"
                  placeholder="What is your bank account number"
                  value={bankAccount}
                  onChange={this.handleChange('bankAccount')}
                />
              </div>
              <div className="BankAddress">
                <div>Address of Beneficiary Bank</div>
                <input
                  type="text"
                  placeholder="What is your address of beneficiary bank"
                  value={bankAddress}
                  onChange={this.handleChange('bankAddress')}
                />
              </div>
              <div className="SwiftCode">
                <div>Swift Code</div>
                <input
                  type="text"
                  placeholder="What is your swift code"
                  value={swiftCode}
                  onChange={this.handleChange('swiftCode')}
                />
              </div>
              <div className="FullName">
                <div>Full Name*</div>
                <input
                  type="text"
                  placeholder="What is your full name"
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
                  step="1"
                  min="0"
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
            <div className="CancelButton">CANCEL</div>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ profile }, ownProps) => {
  return {
    currentUser: profile.data,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(
      {
        withdrawMoneyAction,
        getProfileAction,
      },
      dispatch,
    ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyWallet_Withdraw);
