import React, {useState, useEffect } from 'react';
import {
    Layout,
    Typography,
    Tabs,
    Col,
    Row,
    Breadcrumb
} from 'antd';
import 'antd/dist/antd.css';
import {  getTranslatedText } from '../../../services/appService';
import '../MainGame/MainGame.scss';
import styled from 'styled-components';
import RuleGame from '../RuleGame/RuleGame';
import RankList from '../RankList/RankList';
import Game from '../Game/Game';
import LoginGame from '../Login/LoginGame';
import { Link } from 'react-router-dom';
import { routes } from '../../../constants';
const { Header, Content} = Layout;
const { TabPane } = Tabs;

const TabButton = styled.button`
    width: 23.6vw;
    height: 6.4vh;

    background-color: ${props => props.disabled ? '#F0F0F0' : '#D59E29' };
    transform: skew(-30deg);
    margin-left: 1.38vw;
`


const MainGame = () => {

    const [userName, setUserName] = useState('');
    const [codeName, setCodeName] = useState('');
    const [loginVisible, setLoginVisible] = useState(false);
    const [buttonMainGameDisable, setButtonMainGameDisable] = useState(false);

    useEffect(() => {
        const current_user = JSON.parse(window.localStorage.getItem('current_user'));
        console.log(current_user)
        // 2. Vào trang game, check token người dùng, nếu không có thì hiện trang login. Login xong thì vào trang thể lệ game.
        if (current_user === null) {
            setLoginVisible(true);
            setButtonMainGameDisable(true);
        } else {
            if (current_user.roll_amount === 0) {
                setButtonMainGameDisable(true);
                alert('You have no sale to play this game');
            };
            setUserName(current_user.name);
            setCodeName(current_user.code);
        };
    }, [])

    return (
        <React.Fragment>
            <Layout
                className="main_game__container"
            >
                <Header
                    className="header_container"
                >
                    <Breadcrumb
                        className='header_container__breadcrumb'
                    >
                        <Link to={routes.home}>
                        <Breadcrumb.Item
                            className='header_container__breadcrumb_item'
                        >
                            HOME
                        </Breadcrumb.Item>
                        </Link>
                        <Breadcrumb.Item
                            className='header_container__breadcrumb_item'
                        >
                            MINIGAME
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Row gutter={16}>
                        <Col span={4}>
                            {getTranslatedText('hello')}
                        </Col>
                        <Col span={10}
                            className='header_container__userName'
                        >
                            {userName}
                        </Col>
                        <Col span={4}>
                            ({codeName})
                        </Col>
                    </Row>
                    {/* <Typography.Text
                        className='header_container__userName'
                    >
                          ({codeName})
                    </Typography.Text> */}
                </Header>
                <Content
                    className="content_container"
                >
                    <Tabs
                        className="tab_container"
                        size='small'
                        defaultActiveKey="2"
                    >
                        <TabPane 
                            className="tabPanel__container"
                            tab={<TabButton>
                                <Typography.Text
                                    className="tabPanel__button_label"
                                >
                                    {getTranslatedText('rule_game')}
                                </Typography.Text>
                            </TabButton>} key="1">
                                <RuleGame />
                        </TabPane>
                        <TabPane
                            disabled={buttonMainGameDisable}
                            className="tabPanel__container"
                            tab={<TabButton
                                    disabled={buttonMainGameDisable}
                                >
                                <Typography.Text
                                    className="tabPanel__button_label"
                                >
                                    {getTranslatedText('play_game')}
                                </Typography.Text>
                            </TabButton>} key="2">
                                <Game />
                        </TabPane>
                        <TabPane tab={<TabButton>
                                <Typography.Text
                                    className="tabPanel__button_label"
                                >
                                    {getTranslatedText('rank_game')}
                                </Typography.Text>
                            </TabButton>} key="3">
                                <RankList />
                        </TabPane>
                    </Tabs>
                </Content>
                <LoginGame
                    loginVisible={loginVisible}
                    setLoginVisible={setLoginVisible}
                />
            </Layout>
        </React.Fragment>
    );
};

export default MainGame;