import React from 'react';
import './ForgotPasswordPopup.scss';
import CancelButton from '../../assets/images/icon_cancel.svg';

function ForgotPasswordPopup() {
  return (
    <div className="ForgotPasswordOverlay">
      <div className="ForgotPasswordPopup">
        <div className="CancelButton">
          <img alt="cancel" src={CancelButton}></img>
        </div>
        <div className="Title">QUÊN MẬT KHẨU</div>
        <div className="Text">
          Vui lòng cung cấp email đăng nhập để lấy lại mật khẩu.
        </div>
        <input
          className="Email.GetPassword"
          type="text"
          placeholder="Nhập email của bạn tại đây"
        ></input>
        <div className="SendButton">
          <span>GỬI</span>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPopup;
