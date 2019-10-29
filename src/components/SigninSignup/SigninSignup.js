import React from 'react';
import './SigninSignup.scss';

function SigninSignup() {
  return (
    <div className="SigninSignupContainer">
      <div className="Head">
        <div className="Title">
          <div>
            <span>ĐĂNG NHẬP</span>
          </div>
          <div>Đã là thành viên của EDUNETWORK</div>
        </div>
        <div className="Title">
          <div>
            <span>ĐĂNG KÝ</span>
          </div>
          <div>Dành cho thành viên mới</div>
        </div>
      </div>

      <div className="Body">
        <div className="Signin">
          <div className="Email">
            <span>Email</span>
            <input type="text"></input>
          </div>
          <div className="Password">
            <span>Mật khẩu</span>
            <input type="text"></input>
          </div>
          <div className="ForgotPassword">Quên mật khẩu?</div>
        </div>

        <div className="Signup">
          <div className="Fullname">
            <span>Họ Tên</span>
            <input type="text"></input>
          </div>
          <div className="Username">
            <span>Username</span>
            <input type="text"></input>
          </div>
          <div className="Email">
            <span>Email</span>
            <input type="text"></input>
          </div>
          <div className="Sponsor">
            <span>Người bảo trợ cho bạn</span>
            <input type="text"></input>
          </div>
          <div className="PhoneNumber">
            <span>Số điện thoại</span>
            <input type="number"></input>
          </div>
          <div className="Password">
            <span>Mật khẩu</span>
            <input type="text"></input>
          </div>
          <div className="RePassword">
            <span>Nhập lại mật khẩu</span>
            <input type="text"></input>
          </div>
        </div>
      </div>
      <div className="Button">
        <div className="SigninButton">
          <span>ĐĂNG NHẬP</span>
        </div>
        <div className="SignupButton">
          <span>ĐĂNG KÝ</span>
        </div>
      </div>
    </div>
  );
}

export default SigninSignup;
