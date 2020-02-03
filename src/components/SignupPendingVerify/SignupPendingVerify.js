import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SignupPendingVerify.scss';
import { getTranslatedText } from '../../services/appService';

class SignupPendingVerify extends Component {
  render() {
    return (
      <div className="VerifyEmail">
        <span>{getTranslatedText('check_email_active_account')}</span>
      </div>
    );
  }
}

export default connect()(SignupPendingVerify);
