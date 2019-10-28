import React from 'react';
import './CourseInfo.scss';

function CourseInfo() {
  return (
    <div className="CourseInfoContainer">
      <div className="Title">
        <div className="IntroductionTitle">
          <span>Thông tin khóa học</span>
        </div>
        <div className="CurriculumTitle">
          <span>Giáo trình</span>
        </div>
      </div>
      <div className="CourseIntroduction">
        <div className="IntroductionContent">
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
- Khóa 3: NHÀ LÃNH ĐẠO QUYỀN LỰC
- Khóa 4: KHẢ NĂNG GIẢI QUYẾT MÂU THUẪN
- Khóa 5: TRỞ THÀNH NHÀ LÃNH ĐẠO TÀI BA TRONG THỜI ĐẠI MỚI`}
          </p>
        </div>
      </div>
      <div className="CourseCurriculum">
        <div className="CurriculumContent">
          <div className="Head">Giáo trình</div>
          <div className="Course">
            <div className="Name">KHÓA 1: CHÂN DUNG NHÀ LÃNH ĐẠO</div>
            <div className="Part">
              <div>Phần 1: Tổng quan về lãnh đạo</div>
              <div className="Lesson">
                <div>Bài 1: Thế nào là một lãnh đạo</div>
                <div>Bài 2: Các cấp độ lãnh đạo</div>
                <div>Bài 3: Vai trò và trách nhiệm của lãnh đạo</div>
                <div>Bài 4: Bài 4: Hiệu quả lãnh đạo</div>
              </div>
              <div>
                Phần 2: Điều kiện cần của một người lãnh đạo tài ba
              </div>
            </div>
          </div>

          <div className="Course">
            <div className="Name">
              KHÓA 2: NHỮNG TỐ CHẤT CỦA NHÀ LÃNH ĐẠO TÀI BA
            </div>
          </div>
          <div className="Course">
            <div className="Name">KHÓA 3: NHÀ LÃNH ĐẠO QUYỀN LỰC</div>
          </div>
          <div className="Course">
            <div className="Name">
              KHÓA 4: KHẢ NĂNG GIẢI QUYẾT MÂU THUẪN
            </div>
          </div>
          <div className="Course">
            <div className="Name">
              KHÓA 5: TRỞ THÀNH NHÀ LÃNH ĐẠO TÀI BA TRONG THỜI ĐẠI MỚI
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseInfo;
