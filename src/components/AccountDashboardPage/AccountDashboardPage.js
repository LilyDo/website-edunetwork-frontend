import React, { Component } from 'react';
import { get } from 'lodash';
import AccountBreadcrumb from '../AccountBreadcrumb/AccountBreadcrumb';
import ManagerRank from '../../assets/images/manager_rank.svg';
import DirectorRank from '../../assets/images/director_rank.svg';
import './AccountDashboardPage.scss';
import DashboardChart from '../../components/DashboardChart/DashboardChart';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserDashboardAction } from '../../actions/profile';
import {
  currencyFormatter,
  getUserFormLocal,
} from '../../services/appService';

class AccountDashboardPage extends Component {
  state = {
    currentUser: {},
    isShowPaid: true,
  };

  componentDidMount() {
    this.setState({
      currentUser: getUserFormLocal(),
    });
    this.props.actions.getUserDashboardAction();
  }

  toggle = (isShowPaid) => {
    this.setState({
      isShowPaid: isShowPaid
    })
  }

  render() {
    const {
      isShowPaid,
      currentUser
    } = this.state;

    const {
      dashboard
    } = this.props;

    return (
      <div>
        <AccountBreadcrumb />
        <div className="AccountDashboardPage">
          <div className="Overview">
            <div className="Title">SUMMARY</div>
            <div className="OverviewContainer">
              <div className={"MyRank " + (currentUser.rank === null ? "NoRank" : "")}>
                <div className="Text">
                  <div>YOUR RANK</div>
                  <div className="level">{currentUser.rank || 'member'}</div>
                </div>
                {currentUser.rank && (
                  <img alt="rank" className="RankImg" src={currentUser.rank === 'manager' ? ManagerRank : currentUser.rank === 'director' ? DirectorRank : ''}></img>
                )}
              </div>
              <div className="Statistics">
                <div className="MoneyContainer">
                  <div className="Money TotalCommission">
                    <div className="Number">{(dashboard.total_commission && currencyFormatter(dashboard.total_commission)) || "0"}</div>
                    <div className="Text">TOTAL COMMISSION</div>
                  </div>
                  <div className="Money TotalRevenue">
                    <div className="Number">{(dashboard.total_revenue && currencyFormatter(dashboard.total_revenue)) || "0"}</div>
                    <div className="Text">TOTAL GROUP REVENUE</div>
                  </div>
                </div>
                <div className="PeopleContainer">
                  <div className="People TotalReferral">
                    <div className="Number">{dashboard.total_user || "0"}</div>
                    <div className="Text">TOTAL REFERRAL</div>
                  </div>
                  <div className="People TotalActive">
                    <div className="Number">{(dashboard.total_active_user && dashboard.total_active_user.length) || "0"}</div>
                    <div className="Text">TOTAL ACTIVE USER</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="RevenueChart">
            <div className="Title">REVENUE CHART</div>
            <div className="Chart">
              <DashboardChart data={
                {
                  revenueByMonth: dashboard.total_revenue_month,
                  commissionByMonth: dashboard.total_commission_month
                }
              } />
            </div>
          </div>
          <div className="RevenueTable">
            <div className="Title">STATISTICS</div>
            <table className="Table">
              <thead className="RevenueTableHead">
                <tr>
                  <th className="FirstCell">GROUP REVENUE</th>
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
                  <td className="FirstCell">COMMISSION</td>
                  {dashboard && dashboard.total_commission_month && dashboard.total_commission_month.map((item, index) => (
                    <td key={index}>{currencyFormatter(item)}</td>
                  ))}
                </tr>
                <tr>
                  <td>TOTAL GROUP REVENUE</td>
                  {dashboard && dashboard.total_revenue_month && dashboard.total_revenue_month.map((item, index) => (
                    <td key={index}>{currencyFormatter(item)}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <div className="Member">
            <div className="Title">YOUR MEMBER</div>
            <div className="Status">
              <div className={'Paid ' + (isShowPaid && 'active')} onClick={this.toggle.bind(this, true)}>PAID</div>
              <div className={'Unpaid ' + (!isShowPaid && 'active')} onClick={this.toggle.bind(this, false)}>UNPAID</div>
            </div>
            <table className="Table">
              <thead className="MemberTableHead">
                <tr>
                  <th>Full Name</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Active Date</th>
                  <th>Courses</th>
                  <th>Commission</th>
                </tr>
              </thead>
              {isShowPaid && (
                <tbody className="MemberTableBody">
                  {dashboard && dashboard.total_active_user && dashboard.total_active_user.map((item, index) => (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.code}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>{item.register_date}</td>
                      <td>{currencyFormatter(item.max_price || 0)}</td>
                      <td>{currencyFormatter(item.total_price) || 0}</td>
                    </tr>
                  ))}
                </tbody>
              )}
              {!isShowPaid && (
                <tbody className="MemberTableBody">
                  {dashboard && dashboard.total_inactive_user && dashboard.total_inactive_user.map((item, index) => (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.code}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>{item.register_date}</td>
                      <td>{currencyFormatter(item.max_price || 0)}</td>
                      <td>{currencyFormatter(item.total_price || 0)}</td>
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ profile }, ownProps) => {
  return {
    dashboard: get(profile, 'dashboard', {}),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(
      {
        getUserDashboardAction,
      },
      dispatch,
    ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccountDashboardPage);
