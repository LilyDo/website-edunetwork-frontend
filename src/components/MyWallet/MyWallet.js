import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MyWallet.scss';
import DefaultUserAvatar from '../../assets/images/user_default_avatar.png';
import AccountBreadcrumb from '../AccountBreadcrumb/AccountBreadcrumb';
import {
  getUserFormLocal,
  currencyFormatter,
} from '../../services/appService';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getChargeHistoryAction,
  getProfileAction,
} from '../../actions/profile';
import { routes } from '../../constants';
import * as types from '../../actions/index';

class MyWallet extends Component {
  state = {
    currentUser: {},
    isShowWithdraw: true,
    drawList: [],
    chargeList: [],
  };

  toggleShowTab = isShowWithdraw => {
    this.setState({
      isShowWithdraw: isShowWithdraw,
    });
  };

  getChargeHistory = () => {
    this.props.actions.getChargeHistoryAction();
  };

  checkCurrentUser() {
    if (getUserFormLocal()) {
      this.setState({
        currentUser: getUserFormLocal(),
      });
    }
  }

  componentDidMount() {
    this.props.actions.getProfileAction({
      token: localStorage.getItem(types.TOKEN_KEY),
    });
    this.getChargeHistory();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      currentUser: nextProps.currentUser,
    });
    this.checkCurrentUser();
  }

  render() {
    const { currentUser, isShowWithdraw } = this.state;

    return (
      <div>
        <AccountBreadcrumb />
        <div className="MyWallet">
          <div className="Title">My Wallet</div>
          <div className="Card">
            <div className="User">
              <img
                className="Photo"
                alt="avatar"
                src={currentUser.avatar || DefaultUserAvatar}
              ></img>
              <div>{currentUser.name || ''}</div>
            </div>
            <div className="Balance">
              <div className="Text">Balance</div>
              <div className="Number">
                {currencyFormatter(currentUser.total_price)}
              </div>
            </div>
          </div>
          <div className="ButtonContainer">
            <Link to={routes.accountWithdraw}>
              <div className="WithdrawButton">WITHDRAW</div>
            </Link>
            <Link to={routes.accountDeposit}>
              <div className="TopupButton">DEPOSIT</div>
            </Link>
          </div>
          <div className="Transactions">
            <div className="Text">TRANSACTIONS</div>
            <div className="Actions">
              <div
                className={
                  'Withdraw ' + (isShowWithdraw && 'ActiveTab')
                }
                onClick={this.toggleShowTab.bind(this, true)}
              >
                Withdraw
              </div>
              <div
                className={
                  'Topup ' + (!isShowWithdraw && 'ActiveTab')
                }
                onClick={this.toggleShowTab.bind(this, false)}
              >
                Deposit
              </div>
            </div>
            {isShowWithdraw && (
              <table>
                <thead className="TransactionTableHead">
                  <tr>
                    <th className="Date">Date</th>
                    <th className="Code">Transaction Code</th>
                    <th className="Amount">Amount</th>
                    <th className="Status">Status</th>
                  </tr>
                </thead>
                <tbody className="TransactionTableBody">
                  {this.props.state.drawList &&
                    this.props.state.drawList.map((item, index) => (
                      <tr key={index}>
                        <td>{item.created_at || ''}</td>
                        <td>{item.charge_code || 'not available'}</td>
                        <td>{currencyFormatter(item.price) || ''}</td>
                        <td className="capitalize">
                          {item.status || ''}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            )}
            {!isShowWithdraw && (
              <table>
                <thead className="TransactionTableHead">
                  <tr>
                    <th className="Date">Date</th>
                    <th className="Code">Transaction Code</th>
                    <th className="Amount">Amount</th>
                    <th className="Status">Status</th>
                  </tr>
                </thead>
                <tbody className="TransactionTableBody">
                  {this.props.state.chargeList &&
                    this.props.state.chargeList.map((item, index) => (
                      <tr key={index}>
                        <td>{item.created_at || ''}</td>
                        <td>{item.charge_code || 'not available'}</td>
                        <td>{currencyFormatter(item.price) || ''}</td>
                        <td className="capitalize">
                          {item.status || ''}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ profile }, ownProps) => {
  return {
    state: {
      drawList: profile.withdrawList,
      chargeList: profile.chargeList,
      currentUser: profile.data,
    },
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(
      {
        getChargeHistoryAction,
        getProfileAction,
      },
      dispatch,
    ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyWallet);
