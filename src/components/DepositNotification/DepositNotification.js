import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DepositNotification.scss';
import ArrowRight from '../../assets/images/icon_arrow_right.svg';
import ArrowBack from '../../assets/images/icon_arrow_back.svg';
import { routes } from '../../constants';
import {
  currencyFormatter,
  getTranslatedText,
} from '../../services/appService';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getOrderDetailByCode } from '../../actions/profile';
import { updateOrderAction } from '../../actions/courses';

class DepositNotification extends Component {
  state = {
    isBuyCourse: 'buy',
    code: '',
    amount: 0,
  };

  componentDidMount() {
    let code = this.props.match.params.code || '';

    this.setState({
      isBuyCourse: this.props.match.params.isBuyCourse,
      code: code,
      amount: this.props.match.params.amount,
    });

    this.props.actions.getOrderDetailByCode(code);
    this.props.actions.updateOrderAction({
      status: 'waiting',
      order_code: code,
      method: 'traditional',
    });
  }

  render() {
    const { isBuyCourse, code, amount } = this.state;

    return (
      <div className="WithdrawNotification">
        <div className="Title">
          <div>{getTranslatedText('my_wallet')}</div>
          <img alt="arrow right" src={ArrowRight}></img>
          <div>{getTranslatedText('deposit')}</div>
        </div>
        <div className="Message">
          <div>
            {getTranslatedText('purchase_success_1')}.
            <br />
            <br />
          </div>
          <div>
            {getTranslatedText('purchase_success_2')}.
            <br />
            <br />
          </div>
          {getTranslatedText('purchase_success_3')}:{' '}
          <b>
            {currencyFormatter(
              isBuyCourse === 'buy'
                ? this.props.orderObj.amount_need
                : amount,
            )}
          </b>{' '}
          (1 USD = 24.000 VND) (1 USD = 1.45 SGD)
          <br />
          {isBuyCourse === 'buy' && (
            <div>
              <br />- {getTranslatedText('date')}:{' '}
              <b>{this.props.orderObj.date || ''}</b>
              <br />- {getTranslatedText('verification_code')}:{' '}
              <b>{this.props.orderObj.payment_code || code}</b>
              <br />- {getTranslatedText('member')} ID:{' '}
              <b>{this.props.orderObj.user_code || ''}</b>
              <br />- {getTranslatedText('balance')}:{' '}
              <b>
                {currencyFormatter(this.props.orderObj.amount) || ''}
              </b>
              <br />- {getTranslatedText('amount_top_up')}:{' '}
              <b>
                {currencyFormatter(this.props.orderObj.amount_need) ||
                  ''}
              </b>
              <br />- {getTranslatedText('course')}{' '}
              {getTranslatedText('level')}:{' '}
              <b>{this.props.orderObj.level || ''}</b>
              <br />- {getTranslatedText('status')}:{' '}
              <b>{this.props.orderObj.status || ''}</b>
            </div>
          )}
          {isBuyCourse === 'deposit' && (
            <div>
              <br />- {getTranslatedText('verification_code')}:{' '}
              <b>{code}</b>
            </div>
          )}
          <br />
          <br />
          {getTranslatedText('purchase_success_4')}
          <br />
          <br />
          <div>
            <br />
            <br />
          </div>
        </div>
        <div>
          - <b>Vietnam {getTranslatedText('bank_account')}</b>
          <br />+ {getTranslatedText('full_name')}:{' '}
          <b>Ngo Thi Minh Hoa</b>
          <br />+ {getTranslatedText('bank_account')}:{' '}
          <b>196981241</b>
          <br />+ {getTranslatedText('bank_name')}: <b>VP Bank</b>
          <br />
          <br />
        </div>
        <div>
          - <b>Singapore {getTranslatedText('bank_account')}</b>
          <br />+ {getTranslatedText('company_name')}:{' '}
          <b>Edunetwork Global Pte Ltd</b>
          <br />+ {getTranslatedText('bank_number')}:{' '}
          <b>687752311001</b>
          <br />+ {getTranslatedText('bank_name')}:
          <b>Oversea-Chinese Banking Corporation Limited</b> <br />+
          {getTranslatedText('bank_address')}:{' '}
          <b>OCBC CENTRE 65 CHULIA STREET #01-00 SINGAPORE 049513</b>{' '}
          <br />+ {getTranslatedText('swift_code')}: <b>OCBCSGSG</b>
          <br />
          <br />
        </div>
        <div>
          -{' '}
          <b>
            {getTranslatedText('bitcoin_address')}:
            1Ay16q45QTmzWCZbpLRZvHNoGmPo85kmSQ
          </b>
          <br />
          <br />
          <br />
          <br />
        </div>
        <div>
          {getTranslatedText('purchase_success_5')}
          <br />
          <br />
        </div>
        <div>
          {getTranslatedText('purchase_success_6')}
          <br />
          <br />
        </div>
        <div>
          {getTranslatedText('respectfully')},
          <br />
          EduNetwork Team
        </div>
        <Link to={routes.accountWallet}>
          <div
            className="BackToWallet"
            onClick={this.props.onGoBackClick}
          >
            <img alt="arrow back" src={ArrowBack}></img>
            <div>{getTranslatedText('back_wallet')}</div>
          </div>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    orderObj: state.courses.orderObj,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(
      {
        getOrderDetailByCode,
        updateOrderAction,
      },
      dispatch,
    ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DepositNotification);
