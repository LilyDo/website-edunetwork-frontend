import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  toggleForgotPasswordPopup,
  sendForgotPasswordEmail,
} from '../../actions/auth';
import './ForgotPasswordPopup.scss';
import CancelButton from '../../assets/images/icon_cancel.svg';
import { getTranslatedText } from '../../services/appService';

class ForgotPasswordPopup extends React.Component {
  state = {
    email: '',
  };

  hideForgotPasswordPopup = () => {
    this.props.actions.toggleForgotPasswordPopup(false);
  };

  sendForgotPasswordEmail = () => {
    this.props.actions.sendForgotPasswordEmail(this.state.email);
  };

  setEmail = event => {
    this.setState({
      email: event.target.value,
    });
  };

  render() {
    return (
      <div className="ForgotPasswordOverlay">
        <div className="ForgotPasswordPopup">
          <div className="CancelButton">
            <img
              alt="cancel"
              src={CancelButton}
              onClick={this.hideForgotPasswordPopup}
            ></img>
          </div>
          <div className="Title">
            {getTranslatedText('forgot_password')}
          </div>
          <div className="Text">
            {getTranslatedText('input_email_reset_password')}
          </div>
          <input
            className="Email.GetPassword"
            type="email"
            placeholder={getTranslatedText('your_email')}
            value={this.state.email}
            onChange={this.setEmail}
          ></input>
          <div
            className="SendButton"
            onClick={this.sendForgotPasswordEmail}
          >
            <span>{getTranslatedText('send')}</span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { profile: state.profile };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(
      {
        toggleForgotPasswordPopup,
        sendForgotPasswordEmail,
      },
      dispatch,
    ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ForgotPasswordPopup);
