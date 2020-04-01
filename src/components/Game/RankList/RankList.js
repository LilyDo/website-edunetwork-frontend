import React, { useState, useEffect } from 'react';
import {
    Table,
    Layout,
    Progress,
} from 'antd';
import 'antd/dist/antd.css';
import '../RankList/RankList.css';
import { getTranslatedText } from '../../../services/appService'
import {
    resultGame,
    getEventProgress,
} from '../../../services/appService';

const { Header, Content } = Layout;
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
    const [eventProgess, setEventProgess] = useState(0);

    useEffect(() => {
        resultGame()
        .then(response => {
            setTableData(response.data.data);
        })
        .catch(error => {
            console.log(error);
        });
        getEventProgress()
        .then(response => {
            setEventProgess(response);
        })
        .catch(error => {
            console.log(error);
        });
    },[]);

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
                        percent={eventProgess}
                        // showInfo
                        status='exception'
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