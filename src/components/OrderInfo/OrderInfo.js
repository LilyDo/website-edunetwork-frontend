import React, { Component } from 'react';
import {
  Popover,
  Row,
  Col,
  Radio,
  Form,
  Input,
  InputNumber,
  Button,
  DatePicker,
} from 'antd';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators, compose } from 'redux';
import { get } from 'lodash';

import './OrderInfo.scss';
import TimeIcon from '../../assets/images/icon_time.svg';
import BookIcon from '../../assets/images/icon_book.svg';
import OwnerIcon from '../../assets/images/icon_owner.svg';
import {
  formatDurationText,
  getTranslatedText,
} from '../../services/appService';
import {
  buyCourseAction,
  depositAction,
  getCourseDetailAction,
} from '../../actions/courses';
import * as types from '../../actions/index';
import { getProfileAction } from '../../actions/profile';

import VisaPaymentComponent from '../VisaPaymentComponent/VisaPaymentComponent';
import { routes } from '../../constants';
import { toast } from 'react-toastify';
import { PayPalButton } from 'react-paypal-button-v2';

class OrderInfo extends Component {
  state = {
    radioValue: 'master_card',
    inputDisable: false,
    paypalPay: false,
  };

  componentDidMount() {
    this.props.actions.getProfileAction({
      token: localStorage.getItem(types.TOKEN_KEY),
    });

    let courseId = parseInt(get(this.props, 'match.params.id'), 0);
    this.props.actions.getCourseDetailAction(courseId);
  }

  deposit = depositAmount => {
    this.props.actions.depositAction(depositAmount);
  };

  pay = (shouldDeposit, shouldDepositAmount) => {
    window.confirm('Are you sure you want to buy this course?') &&
      this.props.actions.buyCourseAction(
        this.props.courseDetail.id,
        'vn-banking',
      );
  };

  handOnFinish(values) {
    const expiryDate = values.expiryDate.format('YYYY:MM');
    console.log(expiryDate);
    console.log({
      ...values,
      expiryDate: values.expiryDate.format('YYYY:MM'),
    });
  }

  // onChangeRadio = e => {
  //   console.log('radio checked', e.target.value);
  //   this.setState({
  //     radioValue: e.target.value,
  //   });
  //   if (this.state.radioValue === 'paypal') {
  //     this.setState({
  //       inputDisable: true
  //     });
  //   } else {
  //     this.setState({
  //       inputDisable: false
  //     });
  //   }
  // }

  // This function render form for visa infomation
  // renderFormVisa = (
  //   <>
  //   <Radio.Group onChange={this.onChangeRadio} value={this.state.radioValue}>
  //     <Row gutter={16}>
  //       <Form
  //         onFinish={(values) => this.handOnFinish(values)}
  //       >
  //       <Col span={24}>
  //         <Radio value='master_card'><img src={require('../../assets/images/master_card_icon.png')} /></Radio>
  //           <Form.Item
  //             label={getTranslatedText('card_number')}
  //             name='cardNumber'
  //           >
  //             <Input disabled={this.state.inputDisable} />
  //           </Form.Item>
  //           <Form.Item
  //             label={getTranslatedText('exprie_date')}
  //             name='expiryDate'
  //           >
  //             <DatePicker disabled={this.state.inputDisable} picker='month' />
  //           </Form.Item>
  //           <Form.Item
  //             label={getTranslatedText('security_code')}
  //             name='securityCode'
  //           >
  //             <InputNumber disabled={this.state.inputDisable} />
  //           </Form.Item>
  //           <Form.Item
  //             label={getTranslatedText('name_account_holder')}
  //             name='nameAccountHolder'
  //           >
  //             <Input disabled={this.state.inputDisable} />
  //           </Form.Item>
  //       </Col>
  //       <Col span={24}>
  //         <Radio value='paypal'><img src={require('../../assets/images/paypal_icon.png')} /></Radio>
  //       </Col>
  //       <Col span={24}>
  //         <Form.Item>
  //           <Button style={{ backgroundColor: 'green', borderRadius: '5px', marginTop: '8px'}} htmlType='submit'>Pay</Button>
  //         </Form.Item>
  //       </Col>
  //       </Form>
  //     </Row>
  //   </Radio.Group>
  //   </>
  // );

  // Popup button purchase
  renderButtons(courseDetail, depositAmount) {
    return (
      <div>
        <Row gutter={16} justify={'center'}>
          <button
            className="pay_button"
            onClick={() => this.onTransferClick("vn-banking")}
          >
            {getTranslatedText('transfer_money_vn')}
          </button>
        </Row>
        <Row gutter={16} justify={'center'}>
          <button
            className="pay_button"
            onClick={() => this.onTransferClick("sin-banking")}
          >
            {getTranslatedText('transfer_money_singapore')}
          </button>
        </Row>
        <Row gutter={16} justify={'center'}>
          <PayPalButton
            amount={depositAmount}
            currency={'USD'}
            onSuccess={(details, data) => {
              let paypal_transaction_id =
                details.purchase_units[0].payments.captures[0].id;
              this.props.actions.buyCourseAction(
                this.props.courseDetail.id,
                'paypal',
                paypal_transaction_id,
              );
            }}
            options={{
              clientId:
                'AZ9qz2qPukEpvGcDhK8Br7A_XuPLzPaa-vv0-9-ruQ3k_48UpZpQnkyUNJ8mjUpJfOBJ4LSBP7MAIfsV', //live
              //"AZik4FOJQcDjyMk48gPIakTLkg_N-ifZnX7jPGPFBU9qGEl88D32GH3ZZooYlniWTi4Fzp61TEIQyL21", //client
              //"AWmXubxlWhM8bfL6zwEHYQRVKG3O4kZPyPuhE2xaH-TtdDM2mAm-n9ZCMQ7V0jTUIqPhgdf8XHb-U4nt", //dev
              locale: 'en_VN',
            }}
          />
        </Row>
      </div>
    );
  }

  // End

  onTransferClick = (method) => {
    // Xử lý cho onclick transfer ở đây
    this.props.actions.buyCourseAction(this.props.courseDetail.id, method);
  };

  cancelPaypal = () => {
    this.setState({
      paypalPay: false,
    });
  };

  render() {
    const { courseDetail, profile } = this.props;
    let shouldDepositAmount =
      profile.total_price - courseDetail.price;
    let shouldDeposit = false;
    if (shouldDepositAmount < 0) {
      shouldDeposit = true;
      shouldDepositAmount = shouldDepositAmount * -1;
    }

    return (
      <div className="OrderInfoContainer">
        <div className="Title">
          {getTranslatedText('your_order_info')}
        </div>
        <div className="OrderInfo">
          <div className="CourseInfo">
            <div>{getTranslatedText('course_name')}</div>
            <div className="CourseHeader">
              <div className="HeaderText">{courseDetail.title}</div>
              <div className="LevelPrice">
                <div className="LevelContainer">
                  <div className="Text">
                    {getTranslatedText('Level')}
                  </div>
                  <div className="Level">{courseDetail.level}</div>
                </div>
                <div className="PriceContainer">
                  <div className="Text">
                    {getTranslatedText('Price')}
                  </div>
                  <div className="NumberContainer">
                    <div className="PriceNumber">
                      <span>{courseDetail.price}</span>
                      <sup>USD</sup>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Info">
              <div className="Container">
                <img alt="time" src={TimeIcon}></img>
                <div className="Text">
                  {getTranslatedText('duration')}{' '}
                  <span>
                    {formatDurationText(courseDetail.duration)}
                  </span>
                </div>
              </div>
              <div className="Container">
                <img alt="book" src={BookIcon}></img>
                <div className="Text">
                  {getTranslatedText('content')}{' '}
                  <span>{courseDetail.total_lesson} videos</span>
                </div>
              </div>
              <div className="Container">
                <img alt="own" src={OwnerIcon}></img>
                <div className="Text">
                  {getTranslatedText('Lifetime')}
                </div>
              </div>
            </div>
          </div>
          {!this.state.paypalPay ? (
            <div className="WalletInfoContainer">
              <div className="WalletTitle">
                {getTranslatedText('your_wallet')}
              </div>
              <div className="WalletInfo">
                <div className="WalletInfoItems">
                  <div className="Container Remaining">
                    <div className="Text">
                      {getTranslatedText('Balance')}
                    </div>
                    <div className="Number">
                      {profile.total_price}
                    </div>
                    <div className="Currency">USD</div>
                  </div>
                  <div className="Container PendingOrder">
                    <div className="Text">
                      {getTranslatedText('need_purchase')}
                    </div>
                    <div className="Number">
                      {shouldDeposit ? shouldDepositAmount : 0}
                    </div>
                    <div className="Currency">USD</div>
                  </div>
                  <div className="Container Missing">
                    <div className="Text">
                      {getTranslatedText('amount_top_up')}
                    </div>
                    <div className="Number">
                      {shouldDeposit ? shouldDepositAmount : 0}
                    </div>
                    <div className="Currency">usd</div>
                  </div>
                </div>
                {shouldDeposit ? (
                  <Popover
                    placement="bottom"
                    // content={<RenderButtons courseDetail={this.props.courseDetail} />}
                    content={this.renderButtons(
                      this.props.courseDetail,
                      courseDetail.price +
                        2 * (courseDetail.price / 10),
                    )}
                    trigger="click"
                    overlayStyle={{ width: '255px' }}
                  >
                    <div className="CTAButton">
                      {getTranslatedText('deposit_now')}
                    </div>
                  </Popover>
                ) : (
                  <div
                    className="CTAButton"
                    onClick={() =>
                      this.pay(shouldDeposit, shouldDepositAmount)
                    }
                  >
                    {getTranslatedText('purchase_now')}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <VisaPaymentComponent price={courseDetail.price} />
              <button
                style={{
                  height: '30px',
                  width: '30px',
                  borderRadius: '15px',
                }}
                onClick={() => this.cancelPaypal()}
              >
                X
              </button>
            </div>
          )}
        </div>
        <div className="TextNotice">
          {getTranslatedText('note_after_payment')} <br />
          {getTranslatedText('note_buy_braintree')}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    courseDetail: get(state, 'courses.courseDetail', {}),
    profile: get(state, 'profile.data'),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(
      {
        buyCourseAction,
        depositAction,
        getProfileAction,
        getCourseDetailAction,
      },
      dispatch,
    ),
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(OrderInfo);
