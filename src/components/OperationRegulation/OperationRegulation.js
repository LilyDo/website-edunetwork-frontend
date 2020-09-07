import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './OperationRegulation.scss';
import { CURRENT_LANG_KEY } from '../../actions';

class OperationRegulation extends Component {
  render() {
    let currentLang = localStorage.getItem(CURRENT_LANG_KEY) || 'en';
    return (
      <div>
        <div className="ContactPage">
          <p>
            {(currentLang === "en")? (
              <React.Fragment>
                <h3 style={{textAlign: "center"}}>CONDITIONS OF PARTICIPATION AND HOW EDUNETWORK GLOBAL WORKS</h3>
                <h5>I.	COMPANY INTRODUCTION</h5>
                Edunetwork Global is a Company operating in education,
                offering courses in various topics such as thinking,
                marketing skills, sales, management, personal development ... etc.
                <br/>With the business slogan: "Desiring to create the best environment for all member communities
                to improve their knowledge, to learn to access knowledge from famous teachers in the world".
                <br/>The courses are quality controlled and selected by the Company
                from famous speakers around the world in many languages.
                Students will learn for a lifetime of new knowledge at a very low cost.
                <br/>Form of study: The has 5 courses that teach 5 different subjects.
                Students can choose according to their desired needs. When a student purchases a course,
                the student will be able to take the other course and lower cost courses than the one they bought.
                <br/>After purchasing the course, the Company will provide students with pre-packaged videos
                on the Company's internal website: https://edunetwork.global,
                and accessible to the course anytime, anywhere, with unlimited number of study times.
                <br/>Update new courses: The Company will continuously update new knowledge videos,
                new content for each course to suit the development trend of society. When the course is updated,
                students do not have to pay any additional costs, the course will be automatically updated to the student's account.
                <br/>- Other activities:
                <br/>The Company regularly organizes training sessions for students to share and exchange online with famous speakers
                around the world through the Zoom or Livestream application.
                <h5>II.	CONDITIONS OF PARTICIPATION AND AFFILIATE BONUSING FOR STUDENTS COOPERATING WITH EDUNETWORK</h5>
                <h6>1. Conditions of participation:</h6>
                All those who wish to study Edunetwork courses can purchaseunder affiliate marketing link
                to become official Edunetwork students.
                Once you have purchased and learned a course, if you find the course brings useful value,
                an interesting and effective learning environment, and a foundation to help society,
                you can do business with the Company, share prices.
                This value goes to the community according to the affiliate marketing model.
                <h6>2. Affiliate bonus payout scheme:</h6>
                The students participating in business cooperation will be provided
                with an Affiliate link to the Edunetwork course by the Company.
                <br/>Each student will have a different link,
                then students can use their marketing ability to share this link on social networking sites or run ads.
                <br/>When customers purchase the course under the student's link, the Company will pay 80% commission for that course.
                <br/>In addition, the Company will have an additional bonus on the monthly basis for excellent students
                who meet the Company's sales requirements for that month.
                <h6>3. Commissions payout</h6>
                The Company shall pay commissions to students within 1-5 working days depending on the country.
                <h6>4. Other regulations:</h6>
                All students doing business with the Company need to fully comply with the rules and regulations
                of Edunetwork Company issued in the document.
              </React.Fragment>
            ) : (
              <React.Fragment>
                <h3>ĐIỀU KIỆN THAM GIA VÀ CÁCH THỨC HOẠT ĐỘNG CỦA EDUNETWORK GLOBAL</h3>
                <h5>I.	GIỚI THIỆU CÔNG TY</h5>
                Edunetwork Global là công ty hoạt động trong lĩnh vực giáo dục kinh doanh các khoá học trực tuyến
                dạy về nhiều chủ đề khác nhau như tư duy, kỹ năng marketing, bán hàng, quản lý, phát triển bản thân…v.v.
                <br/> Với phương châm kinh doanh: “Mong muốn tạo một môi trường tốt nhất
                giúp cho tất cả cộng đồng thành viên có thể nâng cao được tri thức,
                được học tập tiếp cận với nguồn kiến thức đến từ các thầy nổi tiếng trên thế giới”.
                <br/> Các khoá học được công ty kiểm tra chất lượng và chọn lọc
                đến từ các diễn giả nổi tiếng trên thế giới, có hỗ trợ nhiều ngôn ngữ.
                Học viên sẽ được học tập trọn đời những kiến thức mới với mức chi phí rất rẻ.
                <br/> Hình thức học: Công ty có 5 khóa học dạy về 5 chủ đề học khác nhau.
                Học viên có thể tùy ý lựa chọn theo nhu cầu mong muốn của mình.
                Khi học viên mua khóa học nào thì sẽ được học khóa học bằng
                và các khóa học thấp tiền hơn khóa mà học viên mua.
                <br/> Sau khi mua khóa học thì học viên sẽ được công ty cung cấp các video
                do các diễn giả đã đóng gói sẵn ở trên trang web nội bộ của công ty là: https://edunetwork.global
                và có thể truy cập vào học mọi lúc mọi nơi, không bị giới hạn thời gian học và không giới hạn số lần học.
                <br/> Cập nhập khóa học mới: Công ty sẽ liên tục cập nhập những video kiến thức mới,
                nội dung mới cho từng khóa học để phù hợp với xu thế phát triển của xã hội.
                Khi khóa học được cập nhật mới, học viên không phải trả thêm bất kỳ chi phí gì,
                khóa học sẽ được cập nhật tự động vào tài khoản của học viên.
                <br/> Các hoạt động khác:
                <br/> - Công ty tổ chức cho học viên các buổi đào tạo chia sẻ giao lưu trực tuyến
                với các diễn giả nổi tiếng trên thế giới thông qua ứng dụng Zoom hoặc Livestream.
                <h5>II.	ĐIỀU KIỆN THAM GIA VÀ CHẾ ĐỘ TRẢ THƯỞNG TIẾP THỊ LIÊN KẾT (AFFILIATE)
                  DÀNH CHO HỌC VIÊN HỢP TÁC KINH DOANH VỚI EDUNETWORK</h5>
                <h6>1. Điều kiện tham gia:</h6>
                Tất cả những ai có nhu cầu học tập các khoá học của Edunetwork,
                đều có thể mua dưới đường link tiếp thị liên kết để trở thành học viên chính thức của Edunetwork.
                <br/>Khi đã mua và học tập khóa học, nếu thấy khóa học đem lại giá trị bổ ích,
                môi trường học tập thú vị hiệu quả, nền tảng giúp ích cho xã hội thì có thể hợp tác kinh doanh với công ty,
                chia sẻ giá trị này tới cộng đồng theo mô hình affiliate (tiếp thị liên kết).
                <h6>2. Chế độ trả thưởng Affiliate:</h6>
                Các học viên hợp tác kinh doanh sẽ được công ty cấp cho 1 đường link Affiliate (liên kết)
                đến với khóa học của Edunetwork.
                <br/>Mỗi học viên sẽ có link khác nhau, sau đó học viên có thể sử dụng khả năng tiếp thị của mình
                để chia sẻ link này lên các trang mạng xã hội hoặc chạy quảng cáo.
                <br/>Khi khách hàng có nhu cầu học tập, họ mua khóa học dưới đường link của học viên
                thì công ty sẽ chi trả hoa hồng 80% khóa học đó cho học viên.
                <br/>Ngoài ra mỗi tháng công ty sẽ có khoản thưởng thêm dành cho các cá nhân xuất sắc
                đạt đủ điều kiện doanh số của công ty đề ra trong tháng đó.
                <h6>3. Nhận hoa hồng:</h6>
                Hoa hồng mà học viên nhận được sẽ được công ty chi trả trong vòng 1-5 ngày làm việc tuỳ theo từng quốc gia.
                <h6>4. Quy định khác:</h6>
                Tất cả học viên hợp tác kinh doanh với công ty cần tuân thủ đầy đủ bộ quy tắc
                và quy định của cty Edunetwork đã ban hành ở văn bản.
              </React.Fragment>
            )}
          </p>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators({}, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(OperationRegulation);
