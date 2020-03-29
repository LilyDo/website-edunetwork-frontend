import React, { useState, useEffect } from 'react';
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
import { rollingGame, addMoneyToWallet} from '../../../services/appService';

const data = [
    '1',
    '2',
    '3',
    '4',
    '5',
];

class Wheel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: null,
        };
    this.selectItem = this.selectItem.bind(this);
    }

    selectItem() {
        if (this.state.selectedItem === null) {
          const selectedItem = Math.floor(Math.random() * this.props.items.length);
          console.log(selectedItem)
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
        const { items } = this.props;
    
        const wheelVars = {
          '--nb-item': items.length,
          '--selected-item': selectedItem,
        };
        const spinning = selectedItem !== null ? 'spinning' : '';
    
        return (
          <div className="wheel-container">
            <div className={`wheel ${spinning}`} style={wheelVars} onClick={this.selectItem}>
              {items.map((item, index) => (
                <div className="wheel-item" key={index} style={{ '--item-nb': index }}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        );
      }
}

const ResultWheelModal = () => {
    return (
        <React.Fragment>
            <Layout>
                <Layout.Header>

                </Layout.Header>
                <Layout.Content>

                </Layout.Content>
                <Layout.Footer>

                </Layout.Footer>
            </Layout>
        </React.Fragment>
    );
};

const AddMoneyToWallet = () => {
    return (
        <React.Fragment>
            <Layout>
                <Layout.Header>
                    
                </Layout.Header>
                <Layout.Content>

                </Layout.Content>
                <Layout.Footer>

                </Layout.Footer>
            </Layout>
        </React.Fragment>
    );
};

const Game = () => {

    const [ selectedItem, setSelectedItem ] = useState(null);
    const [ resultGameModalVisible, setResultGameModalVisible ] = useState(false);
    const [ addMoneyToWalletModalVisible, setAddMoneyToWaletModalVisible ] = useState(false);

    useEffect(() => {
        rollingGame()
        .then(response => {
            console.log(response);
        })
    }, [])

    // render status number of turn

    const TurnStatusTag = () => {

    };

    return (
        <Row>
            <Col
                span={4}
            >
                <List
                    className="list_number_of_turn__container"
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <Tag
                                className="tag_turn"
                                color="#FAC857"
                            >
                                {item}
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
                    items={['$5', '$2', '$3', '$10', '$1', '$4']}
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
                                    Bạn vừa quay được:
                                </Typography.Text>
                                <Tag
                                    className="tag__info"
                                    color="#FAC857"
                                >
                                    4 $
                                </Tag>
                            </Col>
                            <Col span={24}
                                className="col__container"
                            >
                                <Typography.Text
                                    strong
                                >
                                    Tổng tiền thưởng
                                    của bạn:
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
                        >
                            <Typography.Text>
                                Nap tien vao tai khoan
                            </Typography.Text>
                        </Button>
                    </Layout.Footer>
                </Layout>
            </Col>
            <Modal

            >
                <ResultWheelModal />
            </Modal>
            <Modal>
                <AddMoneyToWallet />
            </Modal>
        </Row>
    );
};

export default Game;