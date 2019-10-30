import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SigninSignup.scss';
import { loginAction } from '../../actions/auth';
import { bindActionCreators } from "redux";

class SigninSignup extends Component {
  state = {
    email: "",
    password: "",
    isShowLogin: true
  }

  setEmail = event => {
    this.setState({ email: event.target.value })
  }

  setPassword = event => {
    this.setState({ password: event.target.value })
  }

  login = () => {
    const { email, password } = this.state
    const data = {
      email,
      password,
    }
    this.props.actions.loginAction(data)
  }

  changeTab = () => {
    console.log("cos va");
    this.setState({
      isShowLogin: !this.state.isShowLogin
    })
  }

  render() {
    const { email, password } = this.state

    return (
      <div className="SigninSignupContainer">
        <div className="Head">
          <div className="Title" onClick={this.changeTab.bind(this)}>
            <div>
              <span>ĐĂNG NHẬP</span>
            </div>
            <div>Đã là thành viên của EDUNETWORK</div>
          </div>
          <div className="Title" onClick={this.changeTab.bind(this)}>
            <div>
              <span>ĐĂNG KÝ</span>
            </div>
            <div>Dành cho thành viên mới</div>
          </div>
        </div>

        <div className="Body">
          { this.state.isShowLogin &&
          <div className="Signin">
            <div className="Email">
              <span>Email</span>
              <input type="text" value={email} onChange={this.setEmail}></input>
            </div>
            <div className="Password">
              <span>Mật khẩu</span>
              <input type="password" value={password} onChange={this.setPassword}></input>
            </div>
            <div className="ForgotPassword">Quên mật khẩu?</div>
          </div>
          }
          { !this.state.isShowLogin &&
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
          }
        </div>
        <div className="Button">
        { this.state.isShowLogin &&
          <div className="SigninButton" onClick={this.login}>
            <span>ĐĂNG NHẬP</span>
          </div>
        }
        { !this.state.isShowLogin &&
          <div className="SignupButton">
            <span>ĐĂNG KÝ</span>
          </div>
        }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return state
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(
      {
        loginAction,
      },
      dispatch,
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SigninSignup);
