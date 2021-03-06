import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './RequestDeposit.scss';
import AccountBreadcrumb from '../AccountBreadcrumb/AccountBreadcrumb';
import {
  getUserFormLocal,
  currencyFormatter,
} from '../../services/appService';
import DefaultUserAvatar from '../../assets/images/user_default_avatar.png';
import {
  requestDepositAction,
  getProfileAction,
} from '../../actions/profile';
import { routes } from '../../constants';
import ArrowRight from '../../assets/images/icon_arrow_right.svg';
import * as types from '../../actions/index';

class RequestDeposit extends Component {
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

  requestDeposit = () => {
    let payload = {
      price: this.state.amount,
    };

    this.props.actions.requestDepositAction(payload);
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { amount } = this.state;

    return (
      <div>
        <AccountBreadcrumb />
        <div className="MyWallet_Withdraw">
          <div className="Title">
            <div>My Wallet</div>
            <img alt="arrow right" src={ArrowRight}></img>
            <div>Deposit</div>
          </div>

          <div className="ContentContainer">
            <div className="TransactionInfo">
              <div>
                Please please enter the amount of money you want to
                deposit
              </div>
              <div className="WithdrawAmount">
                <div>Amount* (USD)</div>
                <input
                  type="number"
                  placeholder="How much do you want to deposit"
                  value={amount}
                  onChange={this.handleChange('amount')}
                />
              </div>
              <div className="Note">
                Important: You cannot change information after sending
                request.
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
            onClick={this.requestDeposit}
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
        requestDepositAction,
        getProfileAction,
      },
      dispatch,
    ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RequestDeposit);
