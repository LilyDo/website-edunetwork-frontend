import React from 'react';
import AccountBreadcrumb from '../AccountBreadcrumb/AccountBreadcrumb';
import MyRank from '../../assets/images/img_rank.svg';
import './AccountDashboardPage.scss';

function AccountDashboardPage() {
  return (
    <div>
      <AccountBreadcrumb />
      <div className="AccountDashboardPage">
        <div className="Overview">
          <div className="Title">TỔNG QUAN</div>
          <div className="OverviewContainer">
            <div className="MyRank">
              <div className="Text">CẤP BẬC HIỆN TẠI <br/> CỦA BẠN</div>
              <img alt="rank" className="RankImg" src={MyRank}></img>
            </div>
            <div className="Statistics">
              <div className="MoneyContainer">
                <div className="Money TotalCommission">
                  <div className="Number">$15,000</div>
                  <div className="Text">TỔNG HOA HỒNG KIẾM ĐƯỢC</div>
                </div>
                <div className="Money TotalRevenue">
                  <div className="Number">$425,850</div>
                  <div className="Text">TỔNG DOANH THU TOÀN NHÓM</div>
                </div>
              </div>
              <div className="PeopleContainer">
                <div className="People TotalReferral">
                  <div className="Number">75</div>
                  <div className="Text">
                    TỔNG SỐ NGƯỜI ĐÃ GIỚI THIỆU
                  </div>
                </div>
                <div className="People TotalActive">
                  <div className="Number">70</div>
                  <div className="Text">
                  TỔNG THÀNH VIÊN HOẠT ĐỘNG
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="RevenueChart"></div>
        <div className="RevenueTable"></div>
        <div className="Members"></div>
      </div>
    </div>
  );
}

export default AccountDashboardPage;
