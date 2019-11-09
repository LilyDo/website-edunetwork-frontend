import React, { Component, Fragment } from 'react';
import { get } from 'lodash';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './PaymentSuccessful.scss';
import { routes } from '../../constants';

class PaymentSuccessful extends Component {
  render() {
    const { status = 'successful' } = get(this, 'props.match.params');
    return (
      <div className="PaymentSucessful">
        {status === 'successful' ? (
          <Fragment>
            <div className="Title">PURCHASE SUCCESSFUL!</div>
            <div>Congratulation! You owned this course.</div>
            <Link to={routes.accountCourses}>
              <div className="JoinClassButton">LEARN NOW</div>
            </Link>
          </Fragment>
        ) : (
          <Fragment>
            <div className="Title">REQUEST A PAYMENT SUCCESSFUL!</div>
            <div>
              Your request will be process soon. Please check your
              mail box for more information.
            </div>
            <Link to={routes.courses}>
              <div className="JoinClassButton">XEM CÁC KHÓA HỌC</div>
            </Link>
          </Fragment>
        )}
      </div>
    );
  }
}

export default withRouter(PaymentSuccessful);
