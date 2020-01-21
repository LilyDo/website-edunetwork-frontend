import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './MyWallet_Withdraw.scss';
import ArrowRight from '../../assets/images/icon_arrow_right.svg';
import AccountBreadcrumb from '../AccountBreadcrumb/AccountBreadcrumb';
import {
  getUserFormLocal,
  currencyFormatter, getTranslatedText,
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
            <div>{getTranslatedText("my_wallet")}</div>
            <img alt="arrow right" src={ArrowRight}></img>
            <div>{getTranslatedText("withdraw")}</div>
          </div>

          <div className="ContentContainer">
            <div className="TransactionInfo">
              <div>
                {getTranslatedText("fill_to_withdraw")}
              </div>
              <div className="BankName">
                <div>{getTranslatedText("bank_name")}</div>
                <input
                  placeholder={getTranslatedText("your_bank_name")}
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
                <div>{getTranslatedText("bank_number")}</div>
                <input
                  type="text"
                  placeholder={getTranslatedText("your_bank_number")}
                  value={bankAccount}
                  onChange={this.handleChange('bankAccount')}
                />
              </div>
              <div className="BankAddress">
                <div>{getTranslatedText("bank_address")}</div>
                <input
                  type="text"
                  placeholder={getTranslatedText("your_bank_address")}
                  value={bankAddress}
                  onChange={this.handleChange('bankAddress')}
                />
              </div>
              <div className="SwiftCode">
                <div>{getTranslatedText("swift_code")}</div>
                <input
                  type="text"
                  placeholder={getTranslatedText("your_swift_code")}
                  value={swiftCode}
                  onChange={this.handleChange('swiftCode')}
                />
              </div>
              <div className="FullName">
                <div>{getTranslatedText("full_name")}</div>
                <input
                  type="text"
                  placeholder={getTranslatedText("full_name")}
                  value={fullName}
                  onChange={this.handleChange('fullName')}
                />
              </div>
              <div className="WithdrawAmount">
                <div>{getTranslatedText("amount")}</div>
                <input
                  type="number"
                  placeholder={getTranslatedText("amount_withdraw")}
                  value={amount}
                  onChange={this.handleChange('amount')}
                  step="1"
                  min="0"
                />
              </div>
              <div className="Note">
                {getTranslatedText("important_withdraw")}
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
                <div className="Text">{getTranslatedText("Balance")}</div>
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
            {getTranslatedText("REQUEST")}
          </div>
          <Link to={routes.accountWallet}>
            <div className="CancelButton">{getTranslatedText("CANCEL")}</div>
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
