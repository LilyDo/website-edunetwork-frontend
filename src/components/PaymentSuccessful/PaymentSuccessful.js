import React from 'react';
import { Link } from 'react-router-dom';
import './PaymentSuccessful.scss';
import { routes } from '../../constants';

function PaymentSuccessful() {
  return (
    <div className="PaymentSucessful">
      <div className="Title">THANH TOÁN THÀNH CÔNG!</div>
      <div>Xin chúc mừng bạn đã sở hữu khóa học tuyệt vời này.</div>
      <Link to={routes.accountCourses}>
        <div className="JoinClassButton">VÀO HỌC NGAY</div>
      </Link>
    </div>
  );
}

export default PaymentSuccessful;
