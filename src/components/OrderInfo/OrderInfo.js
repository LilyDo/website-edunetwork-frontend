import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { get } from 'lodash';

import './OrderInfo.scss';
import TimeIcon from '../../assets/images/icon_time.svg';
import BookIcon from '../../assets/images/icon_book.svg';
import OwnerIcon from '../../assets/images/icon_owner.svg';
import { formatDurationText } from '../../services/appService';
import {
  buyCourseAction,
  depositAction,
} from '../../actions/courses';

class OrderInfo extends Component {
  deposit = depositAmount => {
    this.props.actions.depositAction(depositAmount);
  };

  pay = () => {
    window.confirm('Are you sure you want to buy this course?') &&
      this.props.actions.buyCourseAction(this.props.courseDetail.id);
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
        <div className="Title">THÔNG TIN ĐƠN HÀNG CỦA BẠN</div>
        <div className="OrderInfo">
          <div className="CourseInfo">
            <div>Tên khóa học</div>
            <div className="CourseHeader">
              <div className="HeaderText">{courseDetail.title}</div>
              <div className="LevelPrice">
                <div className="LevelContainer">
                  <div className="Text">Level</div>
                  <div className="Level">{courseDetail.level}</div>
                </div>
                <div className="PriceContainer">
                  <div className="Text">Price</div>
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
                  Thời lượng:{' '}
                  <span>
                    {formatDurationText(courseDetail.duration)}
                  </span>
                </div>
              </div>
              <div className="Container">
                <img alt="book" src={BookIcon}></img>
                <div className="Text">
                  Giáo trình:{' '}
                  <span>{courseDetail.total_lesson} bài giảng</span>
                </div>
              </div>
              <div className="Container">
                <img alt="own" src={OwnerIcon}></img>
                <div className="Text">Sở hữu khóa học trọn đời</div>
              </div>
            </div>
          </div>
          <div className="WalletInfoContainer">
            <div className="WalletTitle">VÍ CỦA BẠN</div>
            <div className="WalletInfo">
              <div className="WalletInfoItems">
                <div className="Container Remaining">
                  <div className="Text">Số dư hiện tại trong ví:</div>
                  <div className="Number">{profile.total_price}</div>
                  <div className="Currency">usd</div>
                </div>
                <div className="Container PendingOrder">
                  <div className="Text">Đơn hàng cần thanh toán:</div>
                  <div className="Number">{courseDetail.price}</div>
                  <div className="Currency">usd</div>
                </div>
                <div className="Container Missing">
                  <div className="Text">
                    Để thanh toán cho đơn hàng, bạn cần nạp thêm:
                  </div>
                  <div className="Number">
                    {shouldDeposit ? shouldDepositAmount : 0}
                  </div>
                  <div className="Currency">usd</div>
                </div>
              </div>
              <div className="CTAButton" onClick={this.pay}>
                THANH TOÁN NGAY
              </div>
            </div>
          </div>
        </div>
        <div className="TextNotice">{`Lưu ý:

Sau khi tiến hành thanh toán, khóa học của bạn sẽ được kích hoạt ngay để bạn có thể bắt đầu vào học.

Ngoài ra, chúng tôi cũng đã gửi thông tin khóa học qua email cho bạn. Hãy kiểm tra email nhé!`}</div>
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
      },
      dispatch,
    ),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderInfo);
