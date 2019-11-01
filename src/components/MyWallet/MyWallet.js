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
import { getChargeHistoryAction } from '../../actions/profile';
import { routes } from '../../constants';

class MyWallet extends Component {
  state = {
    currentUser: {},
    isShowWithdraw: true,
    drawList: [],
    chargeList: [],
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

  getChargeHistory = () => {
    this.props.actions.getChargeHistoryAction();
  };

  componentDidMount() {
    this.checkCurrentUser();
    this.getChargeHistory();
  }

  render() {
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
          <div className="ButtonContainer">
            <Link to={routes.accountWithdraw}>
              <div className="WithdrawButton">WITHDRAW</div>
            </Link>
            <div className="TopupButton">DEPOSIT</div>
          </div>
          <div className="Transactions">
            <div className="Text">TRANSACTIONS</div>
            <div className="Actions">
              <div
                className={
                  'Withdraw ' +
                  (this.state.isShowWithdraw && 'ActiveTab')
                }
                onClick={this.toggleShowTab}
              >
                Withdraw
              </div>
              <div
                className={
                  'Topup ' +
                  (!this.state.isShowWithdraw && 'ActiveTab')
                }
                onClick={this.toggleShowTab}
              >
                Deposit
              </div>
            </div>
            {this.state.isShowWithdraw && (
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
            {!this.state.isShowWithdraw && (
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
    },
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(
      {
        getChargeHistoryAction,
      },
      dispatch,
    ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyWallet);
