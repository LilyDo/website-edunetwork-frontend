import React, { Component } from 'react';
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

class OrderInfo extends Component {
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
        shouldDeposit ? shouldDepositAmount : 0,
      );
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
                  <div className="Number">{profile.total_price}</div>
                  <div className="Currency">USD</div>
                </div>
                <div className="Container PendingOrder">
                  <div className="Text">
                    {getTranslatedText('need_purchase')}
                  </div>
                  <div className="Number">{courseDetail.price}</div>
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
              <div
                className="CTAButton"
                onClick={() =>
                  this.pay(shouldDeposit, shouldDepositAmount)
                }
              >
                {shouldDeposit
                  ? getTranslatedText('deposit_now')
                  : getTranslatedText('purchase_now')}
              </div>
            </div>
          </div>
        </div>
        <div className="TextNotice">
          {getTranslatedText('note_after_payment')}
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
