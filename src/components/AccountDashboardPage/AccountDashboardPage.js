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
              <div className="Text">
                CẤP BẬC HIỆN TẠI <br /> CỦA BẠN
              </div>
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
        <div className="RevenueChart">
          <div className="Title">
            BIỂU ĐỒ DOANH THU, HOA HỒNG THEO THÁNG
          </div>
          <div className="Chart"></div>
        </div>
        <div className="RevenueTable">
          <div className="Title">THỐNG KÊ</div>
          <div className="Table">
            <thead className="RevenueTableHead">
              <tr>
                <th>Doanh thu</th>
                <th>Tháng 01</th>
                <th>Tháng 02</th>
                <th>Tháng 03</th>
                <th>Tháng 04</th>
                <th>Tháng 05</th>
                <th>Tháng 06</th>
                <th>Tháng 07</th>
                <th>Tháng 09</th>
                <th>Tháng 09</th>
                <th>Tháng 10</th>
                <th>Tháng 11</th>
                <th>Tháng 12</th>
              </tr>
            </thead>
            <tbody className="RevenueTableBody">
              <tr>
                <td>DOANH THU CÁ NHÂN</td>
                <td>$350</td>
                <td>$300</td>
                <td>$180</td>
                <td>$274</td>
                <td>$350</td>
                <td>$590</td>
                <td>$481</td>
                <td>$125</td>
                <td>$573 </td>
                <td>$639</td>
                <td>$393</td>
                <td>$847</td>
              </tr>
              <tr>
                <td>DOANH THU CÁ NHÂN</td>
                <td>$1,250</td>
                <td>$1,600</td>
                <td>$2,730</td>
                <td>$2,350</td>
                <td>$3,570</td>
                <td>$2,945</td>
                <td>$4,783</td>
                <td>$3,720</td>
                <td>$1,276</td>
                <td>$2,631</td>
                <td>$1,450</td>
                <td>$$4,827</td>
              </tr>
            </tbody>

            
          </div>
        </div>
        <div className="Members">
          <div className="Title">DANH SÁCH THÀNH VIÊN CỦA BẠN</div>
          <div className="Status">
            <div className="Paid">ĐÃ THANH TOÁN</div>
            <div className="NotPaid">CHƯA THANH TOÁN</div>
          </div>
          <div className="Table"></div>
        </div>
      </div>
    </div>
  );
}

export default AccountDashboardPage;
