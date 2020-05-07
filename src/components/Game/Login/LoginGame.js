import React from 'react';
import { connect } from 'react-redux';
import {
  Layout,
  Form,
  Input,
  Button,
  Modal,
  Typography,
  Divider,
} from 'antd';
import 'antd/dist/antd.css';
import { getTranslatedText } from '../../../services/appService';
import {
  loginAction,
  toggleForgotPasswordPopup,
} from '../../../actions/auth';
import { bindActionCreators } from 'redux';
import '../Login/LoginGame.scss';

const { Header, Content } = Layout;

const LoginGame = props => {
  const { loginVisible, setLoginVisible, actions } = props;

  const login = values => {
    const user_account = {
      email: values.email,
      password: values.password,
    };
    actions.loginAction(user_account);
  };

  const handleForgetPasswordButton = () => {
    actions.toggleForgotPasswordPopup(true);
    setLoginVisible(false);
  };

  return (
    <React.Fragment>
      <Modal
        visible={loginVisible}
        className="modal__container"
        footer={null}
        onCancel={() => setLoginVisible(false)}
      >
        <Layout>
          <Header className="logo__container">
            <img src={require('../../../assets/images/logo.svg')} />
          </Header>
          <Content className="layout__container">
            <Typography.Text className="heading__container">
              {getTranslatedText('login_game_sub_heading')}
            </Typography.Text>
            <Divider className="heading_divider__container" />
            <Form
              layout="vertical"
              className="form__container"
              onFinish={login}
            >
              <Form.Item
                label={getTranslatedText('input_your_email')}
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Please input your email!',
                  },
                ]}
              >
                <Input className="form_item_input" />
              </Form.Item>
              <Form.Item
                label={getTranslatedText('password')}
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input type="password" className="form_item_input" />
              </Form.Item>
              <Form.Item>
                <Button
                  className="forget_password__button"
                  onClick={() => handleForgetPasswordButton()}
                >
                  <Typography.Text>
                    {getTranslatedText('forgot_password')}
                  </Typography.Text>
                </Button>
              </Form.Item>
              <Form.Item>
                <Button
                  className="login__button"
                  type="submit"
                  htmlType="submit"
                >
                  <Typography.Text className="login__button_label">
                    {getTranslatedText('signin').toUpperCase()}
                  </Typography.Text>
                </Button>
              </Form.Item>
            </Form>
          </Content>
        </Layout>
      </Modal>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(
      {
        loginAction,
        toggleForgotPasswordPopup,
      },
      dispatch,
    ),
  };
};

export default connect(null, mapDispatchToProps)(LoginGame);
