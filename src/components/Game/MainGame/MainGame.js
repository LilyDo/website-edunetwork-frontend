import React from 'react';
import {
    Layout,
    Typography,
    Col,
    Row,
    Tabs
} from 'antd';
import 'antd/dist/antd.css';
import '../MainGame/MainGame.css';
import styled from 'styled-components';
import RuleGame from '../RuleGame/RuleGame';
import RankList from '../RankList/RankList';
import Game from '../Game/Game';
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
                    <Typography.Text>
                        Navigation - Name
                    </Typography.Text>
                    <Typography.Text>
                        Ten user
                    </Typography.Text>
                </Header>
                <Content
                    className="content_container"
                >
                    <Tabs size='small' defaultActiveKey="3">
                        <TabPane 
                            className="tabPanel__container"
                            tab={<TabButton>
                                <Typography.Text
                                    style={{
                                        color: 'white',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    ĐIỀU KIỆN & QUY ĐỊNH
                                </Typography.Text>
                            </TabButton>} key="1">
                                <RuleGame />
                        </TabPane>
                        <TabPane
                            className="tabPanel__container"
                            tab={<TabButton>
                                <Typography.Text
                                    style={{
                                        color: 'white',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    VÒNG QUAY TRÚNG THƯỞNG
                                </Typography.Text>
                            </TabButton>} key="2">
                                <Game />
                        </TabPane>
                        <TabPane tab={<TabButton>
                                <Typography.Text
                                    style={{
                                        color: 'white',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    BẢNG XẾP HẠNG
                                </Typography.Text>
                            </TabButton>} key="3">
                                <RankList />
                        </TabPane>
                    </Tabs>
                </Content>
            </Layout>
        </React.Fragment>
    );
};

export default MainGame;