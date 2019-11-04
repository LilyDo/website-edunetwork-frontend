import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DepositNotification.scss';
import ArrowRight from '../../assets/images/icon_arrow_right.svg';
import ArrowBack from '../../assets/images/icon_arrow_back.svg';
import { routes } from '../../constants';
import {
  getUrlParameter,
  currencyFormatter,
} from '../../services/appService';

class DepositNotification extends Component {
  state = {
    code: '',
    amount: 0,
  };

  componentDidMount() {
    this.setState({
      code: this.props.match.params.code,
      amount: this.props.match.params.amount,
    });
  }

  render() {
    const { code, amount } = this.state;
    return (
      <div className="WithdrawNotification">
        <div className="Title">
          <div>My Wallet</div>
          <img alt="arrow right" src={ArrowRight}></img>
          <div>Deposit</div>
        </div>
        <div className="Message">
          <div>
            Your withdraw request has been sent to EDUNETWORK.
            <br />
            <br />
          </div>
          <div>
            We will inform you when your request is processed.
            <br />
            <br />
          </div>
          You would need to make payment with the amount of:{' '}
          <b>{currencyFormatter(amount)}</b> (1 USD = 24.000 VND)
          <br />
          <br />- Verification code: <b>{code}</b>
          <br />
          <br />
          Transfer information: Please indicate FAST Transfer
          <br />
          <br />
          <div>
            <br />
            <br />
          </div>
        </div>
        <div>
          - <b>Vietnam bank account</b>
          <br />+ Full Name: <b>Ngô Thị Minh Hoa</b>
          <br />+ Bank account: <b>908062415500001</b>
          <br />+ Bank name: <b>Nam Á Bank</b>
          <br />
          <br />
        </div>
        <div>
          - <b>Singapore bank account</b>
          <br />+ Company Name: <b>Edunetwork Global Pte Ltd</b>
          <br />+ Bank Account: <b>687752311001</b> <br />+ Bank name:
          <b>Oversea-Chinese Banking Corporation Limited</b> <br />+
          Bank address:{' '}
          <b>OCBC CENTRE 65 CHULIA STREET #01-00 SINGAPORE 049513</b>{' '}
          <br />+ Swift Code: <b>OCBCSGSG</b>
          <br />
          <br />
        </div>
        <div>
          -{' '}
          <b>
            Bitcoin wallet address: 1Ay16q45QTmzWCZbpLRZvHNoGmPo85kmSQ
          </b>
          <br />
          <br />
          <br />
          <br />
        </div>
        <div>
          Upon receipt of your request, we will process it within the
          next 24 hours
          <br />
          <br />
        </div>
        <div>
          Should you have any further queries, please do not hesitate
          to contact our support team via: support@edunetwork.global
          <br />
          <br />
        </div>
        <div>
          Respectfully,
          <br />
          EduNetwork Team
        </div>
        <Link to={routes.accountWallet}>
          <div
            className="BackToWallet"
            onClick={this.props.onGoBackClick}
          >
            <img alt="arrow back" src={ArrowBack}></img>
            <div>Back to Wallet</div>
          </div>
        </Link>
      </div>
    );
  }
}

export default DepositNotification;
