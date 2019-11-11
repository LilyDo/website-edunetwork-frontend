import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { toggleForgotPasswordPopup } from '../../actions/auth';
import './ForgotPasswordPopup.scss';
import CancelButton from '../../assets/images/icon_cancel.svg';

class ForgotPasswordPopup extends React.Component {
  hideForgotPasswordPopup = () => {
    this.props.actions.toggleForgotPasswordPopup(false);
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
          <div className="Title">FORGOT PASSWORD</div>
          <div className="Text">
            Please input your email to reset your password.
          </div>
          <input
            className="Email.GetPassword"
            type="text"
            placeholder="Enter your email..."
          ></input>
          <div className="SendButton">
            <span>SEND</span>
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
      },
      dispatch,
    ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ForgotPasswordPopup);
