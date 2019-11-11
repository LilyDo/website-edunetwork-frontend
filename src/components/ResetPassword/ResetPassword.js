import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../SigninSignup/SigninSignup.scss';
import { resetPassword } from '../../actions/auth';
import { bindActionCreators } from 'redux';
import { getUrlParameter } from '../../services/appService';

class ResetPassword extends Component {
  state = {
    password: '',
  };

  setPassword = event => {
    this.setState({ password: event.target.value });
  };

  login = () => {
    const { password, confirmPassword } = this.state;
    const data = {
      code: getUrlParameter('code'),
      password,
      confirmPassword,
    };
    this.props.actions.resetPassword(data);
  };

  render() {
    const { password, confirmPassword } = this.state;

    return (
      <div className="SigninSignupContainer">
        <div className="Body BodySpacingTop">
          <div className="Signin">
            <div className="Password">
              <span>Password</span>
              <input
                type="password"
                value={password}
                onChange={this.setPassword}
              ></input>
            </div>
            <div className="Password">
              <span>Confirm Password</span>
              <input
                type="password"
                value={confirmPassword}
                onChange={this.setConfirmPassword}
              ></input>
            </div>
          </div>
        </div>
        <div className="Button">
          <div className="SigninButton" onClick={this.login}>
            <span>RESET PASSWORD</span>
          </div>
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
        resetPassword,
      },
      dispatch,
    ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResetPassword);
