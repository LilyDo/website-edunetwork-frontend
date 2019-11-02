import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './WithdrawNotification.scss';
import ArrowRight from '../../assets/images/icon_arrow_right.svg';
import ArrowBack from '../../assets/images/icon_arrow_back.svg';
import { routes } from '../../constants';

class WithdrawNotification extends Component {
  render() {
    return (
      <div className="WithdrawNotification">
        <div className="Title">
          <div>My Wallet</div>
          <img alt="arrow right" src={ArrowRight}></img>
          <div>Withdraw</div>
        </div>
        <div className="Message">
          <div>
            Your withdraw request has been sent to EDUNETWORK.
          </div>
          <div>
            We will inform you when your request is processed.
          </div>
        </div>
        <div
          className="BackToWallet"
          onClick={this.props.onGoBackClick}
        >
          <Link to={routes.accountWallet}>
            <img alt="arrow back" src={ArrowBack}></img>
            <div>Back to Wallet</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default WithdrawNotification;
