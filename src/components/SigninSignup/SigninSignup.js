import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SigninSignup.scss';
import {
  loginAction,
  registerAction,
  toggleForgotPasswordPopup,
} from '../../actions/auth';
import { bindActionCreators } from 'redux';
import { getUrlParameter } from '../../services/appService';

class SigninSignup extends Component {
  state = {
    email: '',
    password: '',

    isShowLogin: true,

    refUser: '',
    fullName: '',
    userName: '',
    number: '',
    rePassword: '',
  };

  setEmail = event => {
    this.setState({ email: event.target.value });
  };

  setPassword = event => {
    this.setState({ password: event.target.value });
  };

  setFullName = event => {
    this.setState({ fullName: event.target.value });
  };

  setRefUser = event => {
    this.setState({ refUser: event.target.value });
  };

  setUserName = event => {
    this.setState({ userName: event.target.value });
  };

  setNumber = event => {
    this.setState({ number: event.target.value });
  };

  setRePassword = event => {
    this.setState({ rePassword: event.target.value });
  };

  login = () => {
    const { email, password } = this.state;
    const data = {
      email,
      password,
    };
    this.props.actions.loginAction(data);
  };

  register = () => {
    const data = {
      name: this.state.fullName,
      user_name: this.state.userName,
      email: this.state.email,
      password: this.state.password,
      cf_password: this.state.rePassword,
      user_code: this.state.refUser,
      phone: this.state.number,
    };
    this.props.actions.registerAction(data);
  };

  showLoginForm = isShowLogin => {
    this.setState({
      isShowLogin: isShowLogin,
    });
  };

  componentDidMount() {
    let tab = getUrlParameter('tab') || 'login';
    if (tab === 'login') {
      this.setState({ isShowLogin: true });
    }

    let refUser = getUrlParameter('refUser') || '';
    this.setState({
      refUser: refUser,
    });
    if (refUser) {
      this.setState({ isShowLogin: false });
    }
  }

  showForgotPasswordPopup = () => {
    this.props.actions.toggleForgotPasswordPopup(true);
  };

  render() {
    const {
      email,
      password,
      fullName,
      refUser,
      userName,
      number,
      rePassword,
      isShowLogin,
    } = this.state;

    return (
      <div className="SigninSignupContainer">
        <div className="Head">
          <div
            className={isShowLogin ? 'Title Active' : 'Title'}
            onClick={this.showLoginForm.bind(this, true)}
          >
            <div>
              <span>LOGIN</span>
            </div>
            <div>Already a member?</div>
          </div>
          <div
            className={!isShowLogin ? 'Title Active' : 'Title'}
            onClick={this.showLoginForm.bind(this, false)}
          >
            <div>
              <span>REGISTER</span>
            </div>
            <div>Become a new member!</div>
          </div>
        </div>

        <div className="Body">
          {isShowLogin && (
            <div className="Signin">
              <div className="Email">
                <span>Email</span>
                <input
                  type="text"
                  value={email}
                  onChange={this.setEmail}
                ></input>
              </div>
              <div className="Password">
                <span>Password</span>
                <input
                  type="password"
                  value={password}
                  onChange={this.setPassword}
                ></input>
              </div>
              <div
                className="ForgotPassword"
                onClick={this.showForgotPasswordPopup}
              >
                Forgot password?
              </div>
            </div>
          )}
          {!isShowLogin && (
            <div className="Signup">
              <div className="Fullname">
                <span>Full Name</span>
                <input
                  type="text"
                  value={fullName}
                  onChange={this.setFullName}
                ></input>
              </div>
              <div className="Username">
                <span>Username</span>
                <input
                  type="text"
                  value={userName}
                  onChange={this.setUserName}
                ></input>
              </div>
              <div className="Email">
                <span>Email</span>
                <input
                  type="text"
                  value={email}
                  onChange={this.setEmail}
                ></input>
              </div>
              <div className="Sponsor">
                <span>Referral Code</span>
                <input
                  type="text"
                  value={refUser}
                  onChange={this.setRefUser}
                  disabled
                ></input>
              </div>
              <div className="PhoneNumber">
                <span>Phone number</span>
                <input
                  type="number"
                  value={number}
                  onChange={this.setNumber}
                ></input>
              </div>
              <div className="Password">
                <span>Password</span>
                <input
                  type="password"
                  value={password}
                  onChange={this.setPassword}
                ></input>
              </div>
              <div className="RePassword">
                <span>Confirm password</span>
                <input
                  type="password"
                  value={rePassword}
                  onChange={this.setRePassword}
                ></input>
              </div>
            </div>
          )}
        </div>
        <div className="Button">
          {isShowLogin && (
            <div className="SigninButton" onClick={this.login}>
              <span>LOGIN</span>
            </div>
          )}
          {!isShowLogin && (
            <div className="SignupButton" onClick={this.register}>
              <span>REGISTER</span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { ...state };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(
      {
        loginAction,
        registerAction,
        toggleForgotPasswordPopup,
      },
      dispatch,
    ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SigninSignup);
