import React, { Component, Fragment } from 'react';
import { get } from 'lodash';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './PaymentSuccessful.scss';
import { routes } from '../../constants';
import {getTranslatedText} from "../../services/appService";

class PaymentSuccessful extends Component {
  render() {
    const { status = 'successful' } = get(this, 'props.match.params');
    return (
      <div className="PaymentSucessful">
        {status === 'successful' ? (
          <Fragment>
            <div className="Title">{getTranslatedText("purchase_success")}</div>
            <div>{getTranslatedText("own_course")}</div>
            <Link to={routes.accountCourses}>
              <div className="JoinClassButton">{getTranslatedText("learn_now")}</div>
            </Link>
          </Fragment>
        ) : (
          <Fragment>
            <div className="Title">{getTranslatedText("request_payment_success")}</div>
            <div>
              {getTranslatedText("request_process_soon")}
            </div>
            <Link to={routes.courses}>
              <div className="JoinClassButton">{getTranslatedText("go_to_course_page")}</div>
            </Link>
          </Fragment>
        )}
      </div>
    );
  }
}

export default withRouter(PaymentSuccessful);
