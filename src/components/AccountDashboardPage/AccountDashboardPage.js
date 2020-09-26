import React, { Component } from 'react';
import { get } from 'lodash';
import AccountBreadcrumb from '../AccountBreadcrumb/AccountBreadcrumb';
import ManagerRank from '../../assets/images/manager_rank.svg';
import DirectorRank from '../../assets/images/director_rank.svg';
import './AccountDashboardPage.scss';
import DashboardChart from '../../components/DashboardChart/DashboardChart';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getUserDashboardAction,
  getProfileAction,
  getChildUserAction,
} from '../../actions/profile';
import {
  capitalizeFirstLetter,
  currencyFormatter,
  getTranslatedText,
  getUserFormLocal,
} from '../../services/appService';
import * as types from '../../actions/index';
import { routes } from '../../constants';

class AccountDashboardPage extends Component {
  state = {
    currentUser: {},
    isShowPaid: true,
  };

  componentDidMount() {

    this.props.actions.getUserDashboardAction();
    this.setState({
      currentUser: getUserFormLocal(),
    });
    this.props.actions.getChildUserAction({
      page: 1,
      active: 1,
      token: localStorage.getItem('token'),
    });
    this.props.actions.getChildUserAction({
      page: 1,
      active: 0,
      token: localStorage.getItem('token'),
    });
    this.props.actions.getProfileAction({
      token: localStorage.getItem(types.TOKEN_KEY),
    });
  }

  toggle = isShowPaid => {
    this.setState({
      isShowPaid: isShowPaid,
    });
  };

  showPage = (page, active) => {
    this.props.actions.getChildUserAction({
      page: page,
      active: active,
      token: localStorage.getItem('token'),
    });
  };

  render() {
    const { isShowPaid, currentUser } = this.state;
    const { dashboard, activeUser, inactiveUser } = this.props;

    return (
      <div>
        <AccountBreadcrumb />
        <div className="AccountDashboardPage">
          <div className="Overview">
            <div className="Title">
              {getTranslatedText('summary')}
            </div>
            {(this.state.currentUser.is_lock)? (
              <div className="danger">
                {getTranslatedText("banned")}
              </div>
            ) : ((this.state.currentUser.is_verify_contract)? (
              <div className="success">
                {getTranslatedText("verified")}
              </div>
            ) : (
              <div className="warning">
                {getTranslatedText("need_verify")}<a href={routes.accountWithdraw}>{getTranslatedText("here")}</a>
              </div>
            ))}
            <div className="OverviewContainer">
              <div
                className={
                  'MyRank ' +
                  (currentUser.rank === null ? 'NoRank' : '')
                }
              >
                <div className="Text">
                  <div>{getTranslatedText('your_rank')}</div>
                  <div className="level">
                    {currentUser.rank || 'member'}
                  </div>
                </div>
                {currentUser.rank && (
                  <img
                    alt="rank"
                    className="RankImg"
                    src={
                      currentUser.rank === 'manager'
                        ? ManagerRank
                        : currentUser.rank === 'director'
                        ? DirectorRank
                        : ''
                    }
                  />
                )}
              </div>
              <div className="Statistics">
                <div className="MoneyContainer">
                  <div className="Money TotalCommission">
                    <div className="Number">
                      {(dashboard.total_commission &&
                        currencyFormatter(
                          dashboard.total_commission,
                        )) ||
                        '0'}
                    </div>
                    <div className="Text">
                      {getTranslatedText('total_commission')}
                    </div>
                  </div>
                  <div className="Money TotalRevenue">
                    <div className="Number">
                      {(dashboard.total_revenue &&
                        currencyFormatter(dashboard.total_revenue)) ||
                        '0'}
                    </div>
                    <div className="Text">
                      {getTranslatedText('total_group_revenue')}
                    </div>
                  </div>
                </div>
                <div className="PeopleContainer">
                  <div className="People TotalReferral">
                    <div className="Number">
                      {dashboard.total_user || '0'}
                    </div>
                    <div className="Text">
                      {getTranslatedText('total_ref')}
                    </div>
                  </div>
                  <div className="People TotalActive">
                    <div className="Number">
                      {dashboard.total_active_user || '0'}
                    </div>
                    <div className="Text">
                      {getTranslatedText('total_active_user')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="RevenueChart">
            <div className="Title">
              {getTranslatedText('revenue_chart')}
            </div>
            <div className="Chart">
              <DashboardChart
                data={{
                  revenueByMonth: dashboard.total_revenue_month || [],
                  commissionByMonth:
                    dashboard.total_commission_month || [],
                }}
              />
            </div>
          </div>
          <div className="RevenueTable">
            <div className="Title">
              {getTranslatedText('statistic')}
            </div>
            <table className="Table">
              <thead className="RevenueTableHead">
                <tr>
                  <th className="FirstCell">
                    {getTranslatedText('group_revenue')}
                  </th>
                  <th className="EqualCell">Jan</th>
                  <th className="EqualCell">Feb</th>
                  <th className="EqualCell">Mar</th>
                  <th className="EqualCell">Apr</th>
                  <th className="EqualCell">May</th>
                  <th className="EqualCell">Jun</th>
                  <th className="EqualCell">Jul</th>
                  <th className="EqualCell">Aug</th>
                  <th className="EqualCell">Sep</th>
                  <th className="EqualCell">Oct</th>
                  <th className="EqualCell">Nov</th>
                  <th className="EqualCell">Dec</th>
                </tr>
              </thead>
              <tbody className="RevenueTableBody">
                <tr>
                  <td className="FirstCell">
                    {getTranslatedText('commission')}
                  </td>
                  {dashboard &&
                    dashboard.total_commission_month &&
                    dashboard.total_commission_month.map(
                      (item, index) => (
                        <td key={index}>{currencyFormatter(item)}</td>
                      ),
                    )}
                </tr>
                <tr>
                  <td>{getTranslatedText('total_group_revenue')}</td>
                  {dashboard &&
                    dashboard.total_revenue_month &&
                    dashboard.total_revenue_month.map(
                      (item, index) => (
                        <td key={index}>{currencyFormatter(item)}</td>
                      ),
                    )}
                </tr>
              </tbody>
            </table>
          </div>
          <div className="Member">
            <div className="Title">
              {getTranslatedText('your_member')}
            </div>
            <div className="Status">
              <div
                className={isShowPaid ? 'Paid active' : 'Paid'}
                onClick={this.toggle.bind(this, true)}
              >
                {getTranslatedText('paid')}
              </div>
              <div
                className={isShowPaid ? 'Paid' : 'Paid active'}
                onClick={this.toggle.bind(this, false)}
              >
                {getTranslatedText('unpaid')}
              </div>
            </div>
            <table className="Table">
              <thead className="MemberTableHead">
                <tr>
                  <th>
                    {getTranslatedText('full_name').replace('*', '')}
                  </th>

                  <th>{getTranslatedText('username')}</th>
                  <th>Email</th>
                  <th>{getTranslatedText('your_phone')}</th>
                  <th>
                    {isShowPaid
                      ? getTranslatedText('active_date')
                      : getTranslatedText('register_date')}
                  </th>
                  <th>{getTranslatedText('course')}</th>
                  <th>
                    {capitalizeFirstLetter(
                      getTranslatedText('commission').toLowerCase(),
                    )}
                  </th>
                </tr>
              </thead>
              {isShowPaid && (
                <tbody className="MemberTableBody">
                  {activeUser.data.map((item, index) => (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.code}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>{item.register_date}</td>
                      <td>
                        {currencyFormatter(item.max_price || 0)}
                      </td>
                      <td>
                        {currencyFormatter(item.commission) || 0}
                      </td>
                    </tr>
                  ))}
                </tbody>
              )}
              {!isShowPaid && (
                <tbody className="MemberTableBody">
                  {inactiveUser.data.map((item, index) => (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.code}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>{item.register_date}</td>
                      <td>
                        {currencyFormatter(item.max_price || 0)}
                      </td>
                      <td>
                        {currencyFormatter(item.commission || 0)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
            {isShowPaid ? (
              <div className="pagination">
                {activeUser.current_page != 1 &&
                  activeUser.current_page != 2 && (
                    <>
                      <a
                        href={null}
                        onClick={() => this.showPage(1, 1)}
                      >
                        &laquo;
                      </a>
                      <a href={null}>...</a>
                    </>
                  )}
                {activeUser.current_page > 1 &&
                  activeUser.current_page != 1 && (
                    <a
                      href={null}
                      onClick={() =>
                        this.showPage(activeUser.current_page - 1, 1)
                      }
                    >
                      {activeUser.current_page - 1}
                    </a>
                  )}
                <a href={null} class="active">
                  {activeUser.current_page}
                </a>
                {activeUser.current_page < activeUser.last_page &&
                  activeUser.current_page != activeUser.last_page && (
                    <a
                      href={null}
                      onClick={() =>
                        this.showPage(activeUser.current_page + 1, 1)
                      }
                    >
                      {activeUser.current_page + 1}
                    </a>
                  )}
                {activeUser.current_page != activeUser.last_page &&
                  activeUser.current_page !=
                    activeUser.last_page - 1 && (
                    <>
                      <a href={null}>...</a>
                      <a
                        href={null}
                        onClick={() =>
                          this.showPage(activeUser.last_page, 1)
                        }
                      >
                        &raquo;
                      </a>
                    </>
                  )}
              </div>
            ) : (
              <div className="pagination">
                {inactiveUser.current_page != 1 &&
                  inactiveUser.current_page != 2 && (
                    <>
                      <a
                        href={null}
                        onClick={() => this.showPage(1, 0)}
                      >
                        &laquo;
                      </a>
                      <a href={null}>...</a>
                    </>
                  )}
                {inactiveUser.current_page >= 1 &&
                  inactiveUser.current_page != 1 && (
                    <a
                      href={null}
                      onClick={() =>
                        this.showPage(
                          inactiveUser.current_page - 1,
                          0,
                        )
                      }
                    >
                      {inactiveUser.current_page - 1}
                    </a>
                  )}
                <a href={null} className="active">
                  {inactiveUser.current_page}
                </a>
                {inactiveUser.current_page < inactiveUser.last_page &&
                  inactiveUser.current_page !=
                    inactiveUser.last_page && (
                    <a
                      href={null}
                      onClick={() =>
                        this.showPage(
                          inactiveUser.current_page + 1,
                          0,
                        )
                      }
                    >
                      {inactiveUser.current_page + 1}
                    </a>
                  )}
                {inactiveUser.current_page !=
                  inactiveUser.last_page &&
                  inactiveUser.current_page !=
                    inactiveUser.last_page - 1 && (
                    <>
                      <a href={null}>...</a>
                      <a
                        href={null}
                        onClick={() =>
                          this.showPage(inactiveUser.last_page, 0)
                        }
                      >
                        &raquo;
                      </a>
                    </>
                  )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ profile }, ownProps) => {
  return {
    dashboard: get(profile, 'dashboard', {}),
    activeUser: get(profile, 'activeUser', {}),
    inactiveUser: get(profile, 'inactiveUser', {}),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(
      {
        getUserDashboardAction,
        getProfileAction,
        getChildUserAction,
      },
      dispatch,
    ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccountDashboardPage);
