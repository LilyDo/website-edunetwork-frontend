import React from 'react';
import { Radio, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import DropIn from 'braintree-web-drop-in-react';

import { getTranslatedText } from '../../services/appService';
import { BASE_URL } from '../../actions';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import { routes } from '../../constants';
import OrderInfo from '../OrderInfo/OrderInfo';

class VisaPaymentComponent extends React.Component {
  instance;

  state = {
    // radioValue: 'master_card',
    clientToken: null,
    price: 0,
    id: 0,
  };

  async componentDidMount() {
    // let id = get(this.props, 'match.params.id');
    let { price } = this.props;
    this.setState({ price: price });
    // Get a client token for authorization from your server
    const response = await fetch(
      BASE_URL +
        '/users/get-braintree-token?token=' +
        localStorage.getItem('token'),
    );
    const clientToken = await response.json(); // If returned as JSON string
    // this.setState({isLoading: false});
    // console.log(clientToken);

    await this.setState({
      clientToken: clientToken.data.token,
    });
  }

  async buy() {
    // Send the nonce to your server
    const { nonce } = await this.instance.requestPaymentMethod();
    let price = this.state.price;
    const response = await fetch(
      BASE_URL + '/users/buy-course-by-braintree',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          methodNonce: nonce,
          price: price,
          token: localStorage.getItem('token'),
        }),
      },
    );

    const result = response.json();
    await result.then(data => {
      if (data.statusCode === 200) {
        toast.success('Giao dịch đã được tạo thành công!');
        let link = routes.coursePaymentSuccessful
          .replace(':status', 'pending')
          .replace('code', data.charge_code);
        window.location.href = link;
        // redirect to any page
      } else {
        toast.error(data.errors.join(', '));
        // do something
      }
    });
  }

  render() {
    return (
      // <div>
      //   <Breadcrumb
      //     data={[
      //       { link: routes.home, text: getTranslatedText('HOME') },
      //       {
      //         link: routes.courses,
      //         text: getTranslatedText('COURSE'),
      //       },
      //       {
      //         link: routes.courseDetail.replace(':id', this.state.id),
      //         text: getTranslatedText('DETAIL'),
      //       },
      //       {
      //         link: routes.courseOrder.replace(':id', this.state.id),
      //         text: getTranslatedText('ORDER'),
      //       },
      //     ]}
      //   />
      <Radio.Group
        onChange={this.onChangeRadio}
        value={this.state.radioValue}
      >
        <Row gutter={16}>
          <Col span={24}>
            {this.state.clientToken && (
              <DropIn
                options={{ authorization: this.state.clientToken }}
                onInstance={instance => (this.instance = instance)}
              />
            )}
            <button
              className="CTAButton"
              onClick={this.buy.bind(this)}
            >
              Buy
            </button>
          </Col>
        </Row>
      </Radio.Group>
    );
  }
}

export default VisaPaymentComponent;
