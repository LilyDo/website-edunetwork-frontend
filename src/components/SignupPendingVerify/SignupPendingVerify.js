import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SignupPendingVerify.scss';

class SignupPendingVerify extends Component {

  render() {
    return (
      <div className="VerifyEmail">
        <span>Please check your email to active the account. Thanks!</span>
      </div>
    );
  }
}

export default connect()(SignupPendingVerify);
