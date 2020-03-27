import React from 'react';
import {
    Layout,
    Form,
    Input,
    Button,
    Modal,
    Typography,
    Divider,
    Avatar,
} from 'antd';
import 'antd/dist/antd.css';
import '../Login/LoginGame.css';

const { Header, Content } = Layout;

const LoginGame = () => {
    return (
        <React.Fragment>
            <Modal
                visible={true}
                className="modal__container"
                footer={null}
            >
                <Layout>
                    <Header
                        className="logo__container"
                    >
                        <img 
                            src={require('../../../assets/images/logo.svg')} />
                    </Header>
                    <Content
                        className="layout__container"
                    >
                        {/* <Layout
                            className="layout__container"
                        > */}
                            {/* <Content
                                className="content_form__container"
                            > */}
                                <Typography.Text
                                    className="heading__container"
                                >
                                    Để tham gia vòng quay may mắn trúng thưởng, bạn vui lòng đăng nhập vào tài khoản của mình.
                                </Typography.Text>
                                <Divider
                                    className="heading_divider__container"
                                />
                                <Form
                                    layout='vertical'
                                    className="form__container"
                                >
                                    <Form.Item
                                        label="Email"
                                    >
                                        <Input
                                            className="form_item_input"
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        label="Mat khau"
                                    >
                                        <Input
                                           className="form_item_input" 
                                        />
                                    </Form.Item>
                                    <Form.Item>
                                        <Button
                                            className="forget_password__button"
                                        >
                                            <Typography.Text
                                            >
                                                Quen mat khau?
                                            </Typography.Text>
                                        </Button>
                                    </Form.Item>
                                    <Form.Item>
                                        <Button
                                            className="login__button"
                                        >
                                            <Typography.Text
                                                className="login__button_label"
                                            >
                                                {'Dang nhap'.toUpperCase()}
                                            </Typography.Text>
                                        </Button>
                                    </Form.Item>
                                </Form>
                            {/* </Content> */}
                        {/* </Layout> */}
                    </Content>
                </Layout>
            </Modal>
        </React.Fragment>
    );
};

export default LoginGame;