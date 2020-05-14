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
import {BASE_URL} from "../../actions";

class VisaPaymentComponent extends React.Component {
  instance;

  state = {
    // radioValue: 'master_card',
    clientToken: null,
  };

  async componentDidMount() {
    console.log(this.props);
    // Get a client token for authorization from your server
    const response = await fetch(BASE_URL + "/users/get-braintree-token?token=" + localStorage.getItem("token"));
    // console.log(await response.json());
    const clientToken = await response.json(); // If returned as JSON string
    // console.log(clientToken);
 
    await this.setState({
      clientToken: clientToken.data.token
    });
  }

  async buy() {
    // Send the nonce to your server
    const { nonce } = await this.instance.requestPaymentMethod();
    console.log(this.props);
    console.log(nonce); return;
    await fetch(`server.test/purchase/${nonce}`);
  }

  render() {
    return (
    <>
      <Radio.Group onChange={this.onChangeRadio} value={this.state.radioValue}>
      <Row gutter={16}>
        <Col span={24}>
          {this.state.clientToken && (
            <DropIn
              options={{ authorization: this.state.clientToken }}
              onInstance={(instance) => (this.instance = instance)}
            />
          )}
          <button onClick={this.buy.bind(this)}>Buy</button>
        </Col>
      </Row>
    </Radio.Group>
    </>
  )
    };
};

export default VisaPaymentComponent;