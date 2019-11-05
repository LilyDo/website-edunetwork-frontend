import React, { Component, Fragment } from 'react';
import { get } from 'lodash';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './PaymentSuccessful.scss';
import { routes } from '../../constants';

class PaymentSuccessful extends Component {
  render() {
    const { status = 'successful' } = get(this, 'props.match.params');
    return (
      <div className="PaymentSucessful">
        {status === 'successful' ? (
          <Fragment>
            <div className="Title">THANH TOÁN THÀNH CÔNG!</div>
            <div>
              Xin chúc mừng bạn đã sở hữu khóa học tuyệt vời này.
            </div>
            <Link to={routes.accountCourses}>
              <div className="JoinClassButton">VÀO HỌC NGAY</div>
            </Link>
          </Fragment>
        ) : (
          <Fragment>
            <div className="Title">
              YÊU CẦU THANH TOÁN THÀNH CÔNG!
            </div>
            <div>
              Yêu cầu của bạn sẽ được xử lý qua email, vui lòng kiểm
              tra email để biết thêm thông tin chi tiết.
            </div>
            <Link to={routes.courses}>
              <div className="JoinClassButton">XEM CÁC KHÓA HỌC</div>
            </Link>
          </Fragment>
        )}
      </div>
    );
  }
}

export default withRouter(PaymentSuccessful);
