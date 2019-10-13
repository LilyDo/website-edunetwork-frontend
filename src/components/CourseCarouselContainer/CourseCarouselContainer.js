import React from 'react';
import './CourseCarouselContainer.scss';
import CourseCarousel from '../Carousel/CourseCarousel';
import CourseBackground from '../../assets/images/course_background.png';

const courseCarouselData = [
  {
    level: 'Beginner',
    backgroundImage: 'beginner_background.png',
    price: 50,
    title: 'Làm chủ tư duy thịnh vượng',
  },
  {
    level: 'Intermediate',
    backgroundImage: 'intermediate_background.png',
    price: 200,
    title: 'Nghệ thuật bán hàng đỉnh cao',
  },
  {
    level: 'Advanced',
    backgroundImage: 'advanced_background.png',
    price: 500,
    title: 'Phù thủy Marketing',
  },
  {
    level: 'Expert',
    backgroundImage: 'expert_background.png',
    price: 1000,
    title: 'Bậc thầy về nghệ thuật lãnh đạo',
  },
  {
    level: 'Master',
    backgroundImage: 'master_background.png',
    price: 2000,
    title: 'Khai thác sức mạnh tiềm ẩn bên trong bạn',
  },
];

function CourseCarouselContainer() {
  return (
    <div>
      <div className="CourseTitleContainer">
        <div className="CourseTitle">
          <div className="Title">CÁC KHÓA HỌC CỦA CHÚNG TÔI</div>
          <div className="Note">
            Lưu ý: Giá của khóa học đã bao gồm thuế phí, thành viên
            không phải mất thêm bất kì khoản chi phí nào.
          </div>
        </div>
      </div>

      <div className="CourseCarousel">
        <img
          className="CourseBackground"
          alt="course background"
          src={CourseBackground}
        ></img>
        <CourseCarousel title="CourseCarousel">
          {courseCarouselData.map((courseCarouselItem, index) => (
            <div className="InfoCardContainer" key={index}>
              <div className="Level">{courseCarouselItem.level}</div>
              <img
                src={require(`../../assets/images/${courseCarouselItem.backgroundImage}`)}
                alt="carousel background"
              />
              <div className="Title">{courseCarouselItem.title}</div>
              <div className="PayContainer">
                <div className="PayNow">THANH TOÁN NGAY</div>
              </div>
            </div>
          ))}
        </CourseCarousel>
      </div>
    </div>
  );
}

export default CourseCarouselContainer;
