import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import OrderInfo from '../OrderInfo/OrderInfo';
import { routes } from '../../constants';
import {getTranslatedText} from "../../services/appService";

class OrderPage extends Component {
  render() {
    const { id } = this.props.match.params;
    return (
      <div>
        <Breadcrumb
          data={[
            { link: routes.home, text: getTranslatedText('HOME') },
            { link: routes.courses, text: getTranslatedText('COURSE') },
            {
              link: routes.courseDetail.replace(':id', id),
              text: getTranslatedText('DETAIL'),
            },
            {
              link: routes.courseOrder.replace(':id', id),
              text: getTranslatedText('ORDER'),
            },
          ]}
        />
        <OrderInfo />
      </div>
    );
  }
}

export default withRouter(OrderPage);
