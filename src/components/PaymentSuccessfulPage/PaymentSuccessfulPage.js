import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import PaymentSuccessful from '../PaymentSuccessful/PaymentSuccessful';
import { routes } from '../../constants';
import { getTranslatedText } from '../../services/appService';

class PaymentSuccessfulPage extends Component {
  render() {
    const { id } = this.props.match.params;
    return (
      <div>
        <Breadcrumb
          data={[
            { link: routes.home, text: getTranslatedText('HOME') },
            {
              link: routes.courses,
              text: getTranslatedText('COURSE'),
            },
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
        <PaymentSuccessful />
      </div>
    );
  }
}

export default withRouter(PaymentSuccessfulPage);
