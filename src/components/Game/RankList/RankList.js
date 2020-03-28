import React from 'react';
import {
    Table,
    Layout,
    Progress,
} from 'antd';
import 'antd/dist/antd.css';
import '../RankList/RankList.css';

const { Header, Content, Footer } = Layout;
const columns = [
    {
      title: 'Hang',
      dataIndex: 'rank',
      key: 'rank',
    },
    {
      title: 'User name',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Ho ten',
      dataIndex: 'fullname',
      key: 'fullname',
    },
    {
        title: 'So sale, so vong quay',
        dataIndex: 'saleNumber',
        key: 'saleNumber',
    }
];

const data = [
    {
        key: '1',
        rank: '1',
        username: 'holoi',
        fullname: 'ho duc loi',
        saleNumber: '12',
    },
    {
        key: '2',
        rank: '1',
        username: 'holoi',
        fullname: 'ho duc loi',
        saleNumber: '12',
    },
    {
        key: '3',
        rank: '1',
        username: 'holoi',
        fullname: 'ho duc loi',
        saleNumber: '12',
    },
    {
        key: '4',
        rank: '1',
        username: 'holoi',
        fullname: 'ho duc loi',
        saleNumber: '12',
    },
    {
        key: '5',
        rank: '1',
        username: 'holoi',
        fullname: 'ho duc loi',
        saleNumber: '12',
    },
    {
        key: '6',
        rank: '1',
        username: 'holoi',
        fullname: 'ho duc loi',
        saleNumber: '12',
    },
    {
        key: '7',
        rank: '1',
        username: 'holoi',
        fullname: 'ho duc loi',
        saleNumber: '12',
    },
    {
        key: '8',
        rank: '1',
        username: 'holoi',
        fullname: 'ho duc loi',
        saleNumber: '12',
    },
    {
        key: '9',
        rank: '1',
        username: 'holoi',
        fullname: 'ho duc loi',
        saleNumber: '12',
    },
    {
        key: '10',
        rank: '1',
        username: 'holoi',
        fullname: 'ho duc loi',
        saleNumber: '12',
    }
]

const RankList = () => {
    return (
        <React.Fragment>
            <Layout
                className='layout_rank_container'
            >
                <Header
                    className='rank_header_container'
                >
                    <Progress
                        strokeWidth={30}
                        strokeColor='#D59E29'
                        percent={70}
                        showInfo
                    />
                </Header>
                <Content
                    className='content_container'
                >
                    <Table
                        scroll={true}
                        bordered
                        className='table_container'
                        columns={columns}
                        dataSource={data}
                    />
                </Content>
            </Layout>
        </React.Fragment>
    );
};

export default RankList;