import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './SendContactSuccessful.scss';
import { verifyAccountAction } from '../../actions/auth';
import { bindActionCreators } from 'redux';
import { routes } from '../../constants';

class SendContactSuccessful extends Component {
  state = {
    actived: false,
  };

  render() {
    return (
      <div className="SendContactSuccess">
        <div>
          <span>
            Your contact email has been sent to Edunetwork. Thanks!
            <br />
            We will be back to you soon.
          </span>
          <div className="ButtonContainer">
            <Link to={`${routes.home}`}>
              <div className="GotoHome">GO TO HOME PAGE</div>
            </Link>
          </div>
        </div>
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
)(SendContactSuccessful);
