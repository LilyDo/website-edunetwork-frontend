import React, { useState, useEffect } from 'react';
import {
    Table,
    Layout,
    Progress,
} from 'antd';
import 'antd/dist/antd.css';
import '../RankList/RankList.css';
import { getTranslatedText } from '../../../services/appService'
import { resultGame } from '../../../services/appService';

const { Header, Content, Footer } = Layout;
const columns = [
    {
        title: getTranslatedText('table_column_rank'),
        dataIndex: 'rank',
        key: 'rank',
        align: 'center'
    },
    {
        title: getTranslatedText('table_column_username'),
        dataIndex: 'code',
        key: 'code',
        align: 'center'
    },
    {
        title: getTranslatedText('table_column_name'),
        dataIndex: 'name',
        key: 'name',
        align: 'center'
    },
    {
        title: getTranslatedText('table_column_sale_amount'),
        dataIndex: 'roll_amount',
        key: 'roll_amount',
        align: 'center'
    }
];

const RankList = () => {

    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        resultGame()
        .then(response => {
            console.log(response);
            setTableData(response.data.data);
        });
    },[])

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
                        rowKey="uid"
                        scroll={true}
                        bordered
                        className='table_container'
                        columns={columns}
                        dataSource={tableData}
                    />
                </Content>
            </Layout>
        </React.Fragment>
    );
};

export default RankList;