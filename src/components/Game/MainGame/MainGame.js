import React from 'react';
import {
    Layout,
    Typography,
    Divider,
    Col,
    Row,
    Tabs
} from 'antd';
import 'antd/dist/antd.css';
import '../MainGame/MainGame.css';
import styled from 'styled-components';
import RuleGame from '../RuleGame/RuleGame';
import RankList from '../RankList/RankList';
const { Header, Content} = Layout;
const { TabPane } = Tabs;

const TabButton = styled.button`
    width: 311px;
    height: 58px;
    background-color: #D59E29;
    transform: skew(-30deg);
    margin-left: 20px;
`


const MainGame = () => {
    return (
        <React.Fragment>
            <Layout
                className="ruleGame__container"
            >
                <Header
                    className="header_container"
                >
                    <Row>
                        <Col span={24}>
                            <Divider
                                className="header__divider"
                            />
                        </Col>
                        <Col span={24}>
                            <Typography.Text>
                                Navigation - Name
                            </Typography.Text>
                            <Typography.Text>
                                Ten user
                            </Typography.Text>
                        </Col>
                        <Col span={24}>
                            <Divider/>
                        </Col>
                    </Row>
                </Header>
                <Content
                    className="content_container"
                >
                    <Tabs size='small' defaultActiveKey="3">
                        <TabPane 
                            className="tabPanel__container"
                            tab={<TabButton>
                                <Typography.Text>
                                    Dieu kien quy dinh
                                </Typography.Text>
                            </TabButton>} key="1">
                                <RuleGame />
                        </TabPane>
                        <TabPane tab={<TabButton />} key="2">
                        Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab={<TabButton />} key="3">
                                <RankList />
                        </TabPane>
                    </Tabs>
                </Content>
            </Layout>
        </React.Fragment>
    );
};

export default MainGame;