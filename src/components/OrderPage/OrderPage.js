import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import OrderInfo from '../OrderInfo/OrderInfo';
import { routes } from '../../constants';

class OrderPage extends Component {
  render() {
    return (
      <div>
        <Breadcrumb
          data={[
            { link: routes.home, text: 'HOME' },
            { link: routes.courses, text: 'COURSES' },
            {
              link: routes.courseDetail.replace(
                ':id',
                this.props.match.id,
              ),
              text: 'COURSE DETAILS',
            },
            {
              link: routes.courseOrder.replace(
                ':id',
                this.props.match.id,
              ),
              text: 'ORDER DETAILS',
            },
          ]}
        />
        <OrderInfo />
      </div>
    );
  }
}

export default withRouter(OrderPage);
