import React, { Component } from 'react';
import './WithdrawNotification.scss';
import ArrowRight from '../../assets/images/icon_arrow_right.svg';
import ArrowBack from '../../assets/images/icon_arrow_back.svg';

class WithdrawNotification extends Component {
  render() {
    return (
      <div className="WithdrawNotification">
        <div className="Title">
          <div>Thông tin ví của tôi</div>
          <img alt="arrow right" src={ArrowRight}></img>
          <div>Rút tiền</div>
        </div>
        <div className="Message">
          <div>
            Yêu cầu giao dịch rút tiền của bạn đã được gửi đến
            EDUNETWORK.
          </div>
          <div>
            Chúng tôi sẽ thông báo đến bạn khi yêu cầu của bạn đã được
            xử lý thành công.
          </div>
        </div>
        <div
          className="BackToWallet"
          onClick={this.props.onGoBackClick}
        >
          <img alt="arrow back" src={ArrowBack}></img>
          <div>Trở lại Ví của tôi</div>
        </div>
      </div>
    );
  }
}

export default WithdrawNotification;
