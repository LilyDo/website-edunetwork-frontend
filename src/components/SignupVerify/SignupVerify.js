import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SignupVerify.scss';
import { verifyAccountAction } from '../../actions/auth';
import { bindActionCreators } from 'redux';
import { getUrlParameter } from '../../services/appService';

class SignupVerify extends Component {
  state = {
    actived: false
  }

  componentDidMount() {
    let verifyCode = getUrlParameter('code');
    this.props.actions.verifyAccountAction(verifyCode);
  }

  render() {
    return (
      <div className="VerifyEmail">
        {this.props.auth.isVerify}
        {!this.props.auth.isVerify && (
          <span>Please wait a moment. Your account is being activated.</span>
        )}
        {this.props.auth.isVerify && (
          <span>Your account has been actived. Now you can login with your account. Thanks.</span>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return state;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(
      {
        verifyAccountAction
      },
      dispatch,
    ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignupVerify);
