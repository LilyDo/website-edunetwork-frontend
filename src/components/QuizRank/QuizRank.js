import React, { useState, useEffect } from 'react';
import {
  Table,
  Layout,
  Progress,
  Typography
} from 'antd';
import 'antd/dist/antd.css';
import './QuizRank.scss';
import styled from 'styled-components';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getQuizRankAction } from '../../actions/quiz';

import { getTranslatedText } from '../../services/appService';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import { routes } from '../../constants';

const { Header, Content } = Layout;

const TableColumnTitle = styled.p`
  color: black;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
  font-size: 16;
`;

const RenderColor = props => {
  
  const { text } = props;

  return (
    <React.Fragment>
      {text <= 5 ? (
        <Typography.Text
          style={{
            color: 'red',
          }}
        >
          {text}
        </Typography.Text>
      ) : (
        <Typography.Text>{text}</Typography.Text>
      )}
    </React.Fragment>
  );
};

const columns = [
  {
    title: (
      <TableColumnTitle>
        {getTranslatedText('table_column_rank')}
      </TableColumnTitle>
    ),
    dataIndex: 'rank',
    key: 'rank',
    align: 'center',
    render: text => <RenderColor text={text} />,
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
        {getTranslatedText('column_sale')}
      </TableColumnTitle>
    ),
    dataIndex: 'sale',
    key: 'sale',
    align: 'center',
  },
  {
    title: (
      <TableColumnTitle>
        {getTranslatedText('table_column_sale_amount')}
      </TableColumnTitle>
    ),
    dataIndex: 'group_revenue',
    key: 'group_revenue',
    align: 'center',
  },
];

const QuizRank = (props) => {

  const {
    actions,
    rank,
  } = props

  const [tableData, setTableData] = useState([]);
  const [eventProgess, setEventProgess] = useState(0);
  const [dateUpdate, setDateUpdate] = useState('');

  useEffect(() => {
    actions.getQuizRankAction();
  }, []);

  return (
    <React.Fragment>
      <Breadcrumb
        data={[
          { link: routes.home, text: getTranslatedText('home') },
          { link: routes.quiz.main, text: getTranslatedText('quiz') },
          { link: routes.quiz.rank, text: getTranslatedText('rank') },
        ]}
      />
      <Typography.Text className="update_date_event">
        {getTranslatedText('date_update')} {dateUpdate}
      </Typography.Text>
      <Layout className="layout_rank_quiz_container">
        <Header className="rank_header_container">
          <Progress
            className="event_progress"
            strokeWidth={30}
            strokeColor="#D59E29"
            percent={eventProgess}
            t
          />
        </Header>
        <Content className="table_content_container">
          <Table
            className="table_container"
            rowKey="uid"
            scroll={true}
            bordered={true}
            pagination={{
              pageSize: 7,
            }}
            columns={columns}
            dataSource={rank}
          />
        </Content>
      </Layout>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    rank: state.quiz.rank || [],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      {
        getQuizRankAction,
      },
      dispatch,
    ),
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizRank);
