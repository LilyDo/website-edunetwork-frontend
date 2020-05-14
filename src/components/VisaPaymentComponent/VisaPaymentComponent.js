import React, {useState, useEffect} from 'react';
import {
  Radio,
  Row,
  Col,
  Form,
  Input,
  Button,
  InputNumber,
  DatePicker,
} from 'antd';
import 'antd/dist/antd.css';
import DropIn from "braintree-web-drop-in-react";

import { getTranslatedText } from '../../services/appService';

class VisaPaymentComponent extends React.Component {

  instance;

  state = {
    radioValue: 'master_card',
    clientToken: null,
  };

  async componentDidMount() {
    // Get a client token for authorization from your server
    const response = await fetch("server.test/client_token");
    const clientToken = await response.json(); // If returned as JSON string
 
    this.setState({
      clientToken,
    });
  }

  async buy() {
    // Send the nonce to your server
    const { nonce } = await this.instance.requestPaymentMethod();
    await fetch(`server.test/purchase/${nonce}`);
  }
  onChangeRadio = e => {
    this.setState({
      radioValue: e.target.value,
    });
  }

  render() {
    return (
    <>
      <Radio.Group onChange={this.onChangeRadio} value={this.state.radioValue}>
      <Row gutter={16}>
        <Col span={24}>
          <Radio value='master_card'><img src={require('../../assets/images/master_card_icon.png')} /></Radio>
        </Col>
        <Col span={24}>
          <DropIn
            options={{ authorization: this.state.clientToken }}
            onInstance={(instance) => (this.instance = instance)}
          />
          <button onClick={this.buy.bind(this)}>Buy</button>
        </Col>
        <Col span={24}>
          <Radio value='paypal'><img src={require('../../assets/images/paypal_icon.png')} /></Radio>
        </Col>
      </Row>
    </Radio.Group>
    </>
  )
    };
};

export default VisaPaymentComponent;