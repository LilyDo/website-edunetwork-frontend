import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import PaymentSuccessful from '../PaymentSuccessful/PaymentSuccessful';
import { routes } from '../../constants';

class PaymentSuccessfulPage extends Component {
  render() {
    const { id } = this.props.match.params;
    return (
      <div>
        <Breadcrumb
          data={[
            { link: routes.home, text: 'HOME' },
            { link: routes.courses, text: 'COURSES' },
            {
              link: routes.courseDetail.replace(':id', id),
              text: 'COURSE DETAILS',
            },
            {
              link: routes.courseOrder.replace(':id', id),
              text: 'ORDER DETAILS',
            },
          ]}
        />
        <PaymentSuccessful />
      </div>
    );
  }
}

export default withRouter(PaymentSuccessfulPage);
