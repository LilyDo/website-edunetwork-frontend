import React from 'react';
import './LoginPopup.scss';

function LoginPopup() {
  return (
    <div className="Overlay">
      <div className="LoginPopup">
        <div>Hãy đăng nhập để tiến hành thanh toán</div>

        <div className="Container">
          <div className="Signin">
            <div className="Title">
              <div>
                <span>ĐĂNG NHẬP</span>
              </div>
              <div>Đã là thành viên của EDUNETWORK</div>
            </div>
            <div className="Email">
              <span>Email</span>
              <input type="text"></input>
            </div>
            <div className="Password">
              <span>Mật khẩu</span>
              <input type="text"></input>
            </div>
            <div className="ForgotPassword">Quên mật khẩu?</div>
            <div className="SigninButton">ĐĂNG NHẬP</div>
          </div>

          <div className="Signup">
            <div className="Title">
              <div>
                <span>ĐĂNG KÝ</span>
              </div>
              <div>Dành cho thành viên mới</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPopup;
