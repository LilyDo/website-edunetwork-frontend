import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Row,
    Col,
    List,
    Button,
    Typography,
    Layout,
    Tag,
    Modal
} from 'antd';
import 'antd/dist/antd.css'
import '../Game/Game.css';
import { getTranslatedText } from '../../../services/appService';
import { routes } from '../../../constants';
import { rollingGame, addMoneyToWallet, getRollAmount} from '../../../services/appService';

class Wheel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedItem: null,
        };

    this.selectItem = this.selectItem.bind(this);
    }

    async selectItem() {
        var givenItem = null;
        await rollingGame()
        .then(response => {
            givenItem = response.data.result
        }).catch(error => {
                alert('Have some error, please try later, thanks')
            }
        );
        if (this.state.selectedItem === null) {
          const selectedItem = givenItem;
          console.log('given', selectedItem)
          if (this.props.onSelectItem) {
            this.props.onSelectItem(selectedItem);
          }
          this.setState({ selectedItem });
        } else {
          this.setState({ selectedItem: null });
          setTimeout(this.selectItem, 500);
        }
      }

      render() {
        const { selectedItem } = this.state;
        const { items, setResultGameModalVisible, setGivenResult } = this.props;
    
        const wheelVars = {
          '--nb-item': items.length,
          '--selected-item': selectedItem,
        };
        const spinning = selectedItem !== null ? 'spinning' : '';
        if (selectedItem !== null) {
            console.log('in 1',selectedItem)
            setTimeout(() => {
                setResultGameModalVisible(true);
                this.setState({selectedItem: null});
            }, 4000)
        }
        return (
          <div className="wheel-container">
            <div className={`wheel ${spinning}`} style={wheelVars} onClick={this.selectItem}>
              {items.map((item, index) => (
                <div className="wheel-item" key={index} style={{ '--item-nb': index }}>
                  ${item}
                </div>
              ))}
            </div>
          </div>
        );
      }
}

const ResultWheelModal = (props) => {

    const {
        givenResult,
        setResultGameModalVisible,
    } = props;

    const handleNextRoundButton = () => {
        setResultGameModalVisible(false);
    };

    return (
        <React.Fragment>
            <Layout>
                <Layout.Header
                    className="logo__container"
                >
                    <img 
                        src={require('../../../assets/images/logo.svg')} />
                </Layout.Header>
                <Layout.Content
                    className="content__container"
                >
                    <Row>
                        <Col span={24}>
                            <Typography.Text
                                className="content_heading"
                            >
                                {getTranslatedText('result_modal_heading')}
                            </Typography.Text>
                        </Col>
                        <Col span={16}>
                            <Typography.Text>
                                {getTranslatedText('result_modal_sub_heading')}
                            </Typography.Text>
                        </Col>
                        <Col span={8}>
                            <Tag
                                color="#FAC857"
                                className='tag__info'
                            >
                                {givenResult}$
                            </Tag>
                        </Col>
                    </Row>
                </Layout.Content>
                <Layout.Footer
                    className="footer__container"
                >
                    <Row>
                        <Col span={12}>
                            <Button
                                className="button"
                                onClick={handleNextRoundButton}
                            >
                                <Typography.Text
                                    className="button_label"
                                >
                                    {getTranslatedText('result_modal_next_round_button')}
                                </Typography.Text>
                            </Button>
                        </Col>
                        <Col span={12}>
                            <Button
                                className="button"
                            >
                                <Typography.Text
                                    className="button_label"
                                >
                                    {getTranslatedText('result_modal_watch_bonus')}
                                </Typography.Text>
                            </Button>
                        </Col>
                    </Row>
                </Layout.Footer>
            </Layout>
        </React.Fragment>
    );
};

const AddMoneyToWallet = (props) => {
    const {
        setAddMoneyToWaletModalVisible
    } = props;

    const handleCheckWalletButton = () => {
        setAddMoneyToWaletModalVisible(false);
    };

    return (
        <React.Fragment>
            <Layout>
                <Layout.Header
                    className="logo__container"
                >
                    <img 
                        src={require('../../../assets/images/logo.svg')} />
                </Layout.Header>
                <Layout.Content
                    className="content__container"
                >
                    <Row>
                        <Col span={24}>
                            <Typography.Text
                                className="content_heading"
                            >
                                {getTranslatedText('add_money_success')}
                            </Typography.Text>
                        </Col>
                        <Col span={16}>
                            <Typography.Text>
                                {getTranslatedText('add_money_content')}
                            </Typography.Text>
                        </Col>
                        <Col span={8}>
                            <Typography.Text>
                                {getTranslatedText('current_money_add')}
                            </Typography.Text>
                            <Tag
                                color="#FAC857"
                                className='tag__info'
                            >
                                15 $
                            </Tag>
                        </Col>
                    </Row>
                </Layout.Content>
                <Layout.Footer
                    className="footer__container"
                >
                    <Row>
                        <Col span={24}>
                            <Link
                                to={routes.accountWallet}
                            >
                                <Button
                                    className="button"
                                    // onClick={handleCheckWalletButton()}
                                >
                                    <Typography.Text
                                        className="button_label"
                                    >
                                        {getTranslatedText('button_check_wallet')}
                                    </Typography.Text>
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </Layout.Footer>
            </Layout>
        </React.Fragment>
    );
};

const Game = () => {

    const [ resultGameModalVisible, setResultGameModalVisible ] = useState(false);
    const [ addMoneyToWalletModalVisible, setAddMoneyToWaletModalVisible ] = useState(false);
    const [dataList, setDataList] = useState([])
    const [givenResult, setGivenResult] = useState(null);

    useEffect(() => {
        const rollAmountArray = []
        getRollAmount()
        .then(response => {
            const rollAmount = response.data.data.roll_amount;
            for (let index = 1; index <= rollAmount; index++) {
                rollAmountArray.push(index.toString())
            };
            setDataList(rollAmountArray);
        })
    }, [])

    const handleAddMoneyToWallet = () => {
        addMoneyToWallet()
        .then(response => {
            setAddMoneyToWaletModalVisible(true);
        });
    };

    // render status number of turn
    const TurnStatusTag = () => {

    };

    return (
        <Row>
            <Col
                span={4}
                className="game_turn_container"
            >
                <Typography.Text
                    className="label_turn"
                >
                    {getTranslatedText('turn_list_label')}
                </Typography.Text>
                <List
                    className="list_number_of_turn__container"
                    dataSource={dataList}
                    renderItem={item => (
                        <List.Item>
                            <Tag
                                className="tag_turn"
                                color="#FAC857"
                            >
                                {getTranslatedText('game_turn')} {item}
                            </Tag>
                        </List.Item>
                    )}
                />

            </Col>
            <Col
                span={12}
                offset={1}
            >
                <Wheel
                    items={['5', '2', '3', '10', '1', '4']}
                    setResultGameModalVisible={setResultGameModalVisible}
                    setGivenResult={setGivenResult}
                />
            </Col>
            <Col span={6}>
                <Layout
                    className="event_info__container"
                >
                    <Layout.Header
                        className="time_event_header_container"
                    >
                        <p>Thời gian event:<br /> 25/03/2020 - 25/04/2020 </p>
                    </Layout.Header>
                    <Layout.Content
                        style={{
                            backgroundColor: 'white',
                            paddingTop: 12,
                            paddingLeft: 16,
                        }}
                    >
                        <Row
                            justify='space-between'
                        >
                            <Col span={24}
                                className="col__container"
                            >
                                <Typography.Text
                                    strong
                                >
                                    {getTranslatedText('current_result_text')}
                                </Typography.Text>
                                {givenResult ? (
                                    <Tag
                                        className="tag__info"
                                        color="#FAC857"
                                    > 
                                        {givenResult}$
                                    </Tag>
                                ) : (
                                    <Tag
                                        className="tag__info"
                                        color="#FAC857"
                                    > 
                                     0 $
                                    </Tag>
                                )}
                            </Col>
                            <Col span={24}
                                className="col__container"
                            >
                                <Typography.Text
                                    strong
                                >
                                    {getTranslatedText('current_total_money_text')}
                                </Typography.Text>
                                <Tag
                                    className="tag__info"
                                    color="#FAC857"
                                >
                                    5 $
                                </Tag>
                            </Col>
                        </Row>
                    </Layout.Content>
                    <Layout.Footer
                        style={{
                            backgroundColor: 'white'
                        }}
                    >
                        <Button
                            className="button"
                            onClick={() => handleAddMoneyToWallet()}
                        >
                            {getTranslatedText('button_add_money_to_wallet')}
                        </Button>
                    </Layout.Footer>
                </Layout>
            </Col>
            <Modal
                className="modal_card_container"
                visible={resultGameModalVisible}
                footer={null}
            >
                <ResultWheelModal
                    givenResult={givenResult}
                    setResultGameModalVisible={setResultGameModalVisible}
                />
            </Modal>
            <Modal
                className="modal_card_container"
                visible={addMoneyToWalletModalVisible}
                footer={null}
            >
                <AddMoneyToWallet
                    setAddMoneyToWaletModalVisible={setAddMoneyToWaletModalVisible}
                />
            </Modal>
        </Row>
    );
};

export default Game;