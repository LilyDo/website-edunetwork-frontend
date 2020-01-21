import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './SignupVerify.scss';
import { verifyAccountAction } from '../../actions/auth';
import { bindActionCreators } from 'redux';
import {
  getTranslatedText,
  getUrlParameter,
} from '../../services/appService';
import { routes } from '../../constants';

class SignupVerify extends Component {
  state = {
    actived: false,
  };

  componentDidMount() {
    let verifyCode = getUrlParameter('code');
    this.props.actions.verifyAccountAction(verifyCode);
  }

  render() {
    return (
      <div className="VerifyEmail">
        {this.props.auth.isVerify}
        {!this.props.auth.isVerify && (
          <span>{getTranslatedText('wait_moment')}</span>
        )}
        {this.props.auth.isVerify && (
          <div>
            <span>{getTranslatedText('account_activated')}</span>
            <div className="ButtonContainer">
              <Link to={`${routes.signin}?tab=login`}>
                <div className="gotoLogin">
                  {getTranslatedText('login_now')}
                </div>
              </Link>
            </div>
          </div>
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
        verifyAccountAction,
      },
      dispatch,
    ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignupVerify);
