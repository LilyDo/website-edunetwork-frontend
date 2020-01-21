import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './SendContactSuccessful.scss';
import { verifyAccountAction } from '../../actions/auth';
import { bindActionCreators } from 'redux';
import { routes } from '../../constants';
import {getTranslatedText} from "../../services/appService";

class SendContactSuccessful extends Component {
  state = {
    actived: false,
  };

  render() {
    return (
      <div className="SendContactSuccess">
        <div>
          <span>
            {getTranslatedText("contact_sent")}
            <br />
            {getTranslatedText("we_will_back")}
          </span>
          <div className="ButtonContainer">
            <Link to={`${routes.home}`}>
              <div className="GotoHome">{getTranslatedText("go_to_home_page")}</div>
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
