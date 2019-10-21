import React from 'react';
import './CourseInfo.scss';

function CourseInfo() {
  return (
    <div className="CourseInfoContainer">
      <div className="CourseInfo">
        <div className="CourseInfoTitleContainer">
          <div className="CourseInfoTitle">
            <span>Thông tin khóa học</span>
          </div>
        </div>
        <div className="CourseInfoContent">
          <div className="Head">Giới thiệu khóa học</div>
          <p>
            {`Bạn là một người cầu tiến và mong muốn thăng tiến trở thành lãnh đạo?

Bạn đam mê công việc và mong muốn được tăng lương gấp 3 lần?

Các chủ doanh nghiệp, nhà lãnh đạo, nhà quản lý đang đau đầu về nhân sự yếu kém, tổ chức 
lộn xộn?

Khóa học Chìa khóa lãnh đạo chính là cánh cửa mở ra con đường tiến thân và phát triển sự 
nghiệp bền vững cho những cá nhân và các chủ doanh nghiệp. 

Chưa biết phát triển sự nghiệp từ đâu sẽ biết cách thăng tiến lên vị trí cao nhất trong sự nghiệp. 
Chủ doanh nghiệp, nhà lãnh đạo, nhà quản lý sẽ vận hành doanh nghiệp nhàn hơn, chỉ với 1 giờ 
mỗi tuần. 
Khóa học sẽ bao gồm 5 khóa học học online sau: 
- Khóa 1: CHÂN DUNG NHÀ LÃNH ĐẠO
- Khóa 2: NHỮNG TỐ CHẤT CỦA NHÀ LÃNH ĐẠO TÀI BA
- Khóa 3:  NHÀ LÃNH ĐẠO QUYỀN LỰC
- Khóa 4: KHẢ NĂNG GIẢI QUYẾT MÂU THUẪN
- Khóa 5: TRỞ  THÀNH NHÀ LÃNH ĐẠO TÀI BA TRONG THỜI ĐẠI MỚI`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CourseInfo;
