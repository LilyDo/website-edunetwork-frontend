import React, { Component, Fragment } from 'react';
import { get } from 'lodash';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './PaymentSuccessful.scss';
import { routes } from '../../constants';
import { getTranslatedText } from '../../services/appService';
import { bindActionCreators } from 'redux';
import {updateOrderAction} from "../../actions/courses";
import {connect} from "react-redux";

class PaymentSuccessful extends Component {
  state = {
    status: "",
    code: ""
  };

  componentDidMount() {
    this.setState({
      status: this.props.status,
      code: this.props.code
    });
    this.props.actions.updateOrderAction({
      status: "accept",
      order_code: this.state.code
    });
  }

  render() {

    return (
      <div className="PaymentSucessful">
        {"aasdasd" === 'successful' ? (
          <Fragment>
            <div className="Title">
              {getTranslatedText('purchase_success')}
            </div>
            <div>{getTranslatedText('own_course')}</div>
            <Link to={routes.accountCourses}>
              <div className="JoinClassButton">
                {getTranslatedText('learn_now')}
              </div>
            </Link>
          </Fragment>
        ) : (
          <Fragment>
            <div className="Title">
              {getTranslatedText('request_payment_success')}
            </div>
            <div>{getTranslatedText('request_process_soon')}</div>
            <Link to={routes.courses}>
              <div className="JoinClassButton">
                {getTranslatedText('go_to_course_page')}
              </div>
            </Link>
          </Fragment>
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
        updateOrderAction
      },
      dispatch,
    ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PaymentSuccessful);