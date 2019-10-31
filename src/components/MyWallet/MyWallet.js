import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MyWallet.scss';
import DefaultUserAvatar from '../../assets/images/user_default_avatar.png';
import AccountBreadcrumb from '../AccountBreadcrumb/AccountBreadcrumb';
import { getUserFormLocal } from '../../services/appService';

class MyWallet extends Component {
  state = {
    currentUser: {},
    isShowWithraw: true,
  };

  checkCurrentUser() {
    if (getUserFormLocal()) {
      this.state.currentUser = getUserFormLocal();
    }
  }

  toggleShowTab = () => {
    this.setState({
      isShowWithraw: !this.state.isShowWithraw,
    });
  };

  render() {
    this.checkCurrentUser();

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
              <div className="Number">$250,000</div>
            </div>
          </div>
          <div className="ButtonContainer">
          <Link to="/account/profile/withraw">
            <div className="WithdrawButton">WITHRAW</div>
            </Link>
            <div className="TopupButton">DEPOSIT</div>
          </div>
          <div className="Transactions">
            <div className="Text">TRANSACTIONS</div>
            <div className="Actions">
              <div
                className={
                  'Withdraw ' +
                  (this.state.isShowWithraw && 'ActiveTab')
                }
                onClick={this.toggleShowTab}
              >
                Withraw
              </div>
              <div
                className={
                  'Topup ' +
                  (!this.state.isShowWithraw && 'ActiveTab')
                }
                onClick={this.toggleShowTab}
              >
                Deposit
              </div>
            </div>
            {this.state.isShowWithraw && (
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
                  <tr>
                    <td>15/03/2019</td>
                    <td>EX 203456</td>
                    <td>$400,00</td>
                    <td>Success</td>
                  </tr>
                </tbody>
              </table>
            )}
            {!this.state.isShowWithraw && (
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
                  <tr>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default MyWallet;
