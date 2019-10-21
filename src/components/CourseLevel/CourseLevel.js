import React from 'react';
import './CourseLevel.scss';
import TimeIcon from '../../assets/images/icon_time.svg';
import BookIcon from '../../assets/images/icon_book.svg';
import OwnerIcon from '../../assets/images/icon_owner.svg';
import StudentIcon from '../../assets/images/icon_student.svg';
import ThumNail from '../../assets/images/video_thumnail.png';
import LevelExpert from '../../assets/images/level_expert.svg';
import PriceExpert from '../../assets/images/price_expert.svg';

function CourseLevel() {
  return (
    <div>
      <div className="CourseName">
        BẬC THẦY VỀ NGHỆ THUẬT LÃNH ĐẠO
      </div>
      <div className="CourseLevelContainer">
        <div className="CourseVideo">
          <img alt="thumnail" src={ThumNail}></img>
        </div>
        <div className="CourseLevel">
          <div className="Level_PriceContainer">
            <div className="LevelContainer">
              <div className="Text">Level</div>
              <div className="Level">
                <img alt="expert" src={LevelExpert}></img>
              </div>
            </div>
            <div className="PriceContainer">
              <div className="Text">Price</div>
              <div className="Price">
                <img alt="1000 usd" src={PriceExpert}></img>
              </div>
            </div>
          </div>
          <div className="PayNow">
            <div className="PayButton">THANH TOÁN NGAY</div>
            <div className="Include">
              Khóa học này bao gồm:
              <div className="Quantity">Combo 5 khóa học online </div>
            </div>
          </div>
          <div className="Info">
            <div className="Container">
              <img alt="time" src={TimeIcon}></img>
              <div className="Text">
                Thời lượng: <span>03 giờ 30 phút</span>
              </div>
            </div>
            <div className="Container">
              <img alt="book" src={BookIcon}></img>
              <div className="Text">
                Giáo trình: <span>42 bài giảng</span>
              </div>
            </div>
            <div className="Container">
              <img alt="own" src={OwnerIcon}></img>
              <div className="Text">Sở hữu khóa học trọn đời</div>
            </div>
            <div className="Container">
              <img alt="student" src={StudentIcon}></img>
              <div className="Text">
                <span>125</span> học viên
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseLevel;
