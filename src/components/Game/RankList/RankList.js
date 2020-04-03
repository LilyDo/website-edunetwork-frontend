import React, { useState, useEffect } from 'react';
import {
    Table,
    Layout,
    Progress,
    Typography
} from 'antd';
import 'antd/dist/antd.css';
import '../RankList/RankList.scss';
import { getTranslatedText } from '../../../services/appService'
import {
    resultGame,
    getEventProgress,
} from '../../../services/appService';
import styled from 'styled-components';

const { Header, Content } = Layout;

const TableColumnTitle = styled.p`
    color: black;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    font-size: 16;
`

const RenderColor = (props) => {
    const {
        text
    } = props;

    return (
        <React.Fragment>
            {console.log(text)}
            {text <= 5 ? (
                <Typography.Text
                    style={{
                        color: 'red',
                    }}
                >
                    {text}
                </Typography.Text>
            ) : (
                <Typography.Text>
                    {text}
                </Typography.Text>
            )}
        </React.Fragment>
    );
}

const columns = [
    {
        title: (<TableColumnTitle>
            {getTranslatedText('table_column_rank')}
        </TableColumnTitle>),
        dataIndex: 'rank',
        key: 'rank',
        align: 'center',
        render: text => (
            <RenderColor
                text={text}
            />
        )
    },
    {
        title: (
            <TableColumnTitle>
                {getTranslatedText('table_column_username')}
            </TableColumnTitle>
        ),
        dataIndex: 'code',
        key: 'code',
        align: 'center',
    },
    {
        title: (
            <TableColumnTitle>
                {getTranslatedText('table_column_name')}
            </TableColumnTitle>
        ),
        dataIndex: 'name',
        key: 'name',
        align: 'center',
    },
    {
        title: (
            <TableColumnTitle>
                {getTranslatedText('table_column_sale_amount')}
            </TableColumnTitle>
        ),
        dataIndex: 'roll_amount',
        key: 'roll_amount',
        align: 'center',
    }
];

const RankList = () => {

    const [tableData, setTableData] = useState([]);
    const [eventProgess, setEventProgess] = useState(0);
    const [dateUpdate, setDateUpdate] = useState('');

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
            setEventProgess(response.processEvent);
            setDateUpdate(response.dateUpdate);
        })
        .catch(error => {
            console.log(error);
        });
    },[]);

    return (
        <React.Fragment>
            <Typography.Text
                className="update_date_event"
            >
                {getTranslatedText('date_update')} {dateUpdate}
            </Typography.Text>
            <Layout
                className='layout_rank_container'
            >
                <Header
                    className='rank_header_container'
                >
                    <Progress
                        className='event_progress'
                        strokeWidth={30}
                        strokeColor='#D59E29'
                        percent={eventProgess}
                        t
                    />
                </Header>
                <Content
                    className='table_content_container'
                >
                    <Table
                        className='table_container'
                        rowKey="uid"
                        scroll={true}
                        bordered={true}
                        pagination={{
                            pageSize: 7,
                        }}
                        columns={columns}
                        dataSource={tableData}
                    />
                </Content>
            </Layout>
        </React.Fragment>
    );
};

export default RankList;