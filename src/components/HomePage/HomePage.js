import React from 'react';
import './HomePage.scss';
import Carousel from '../Carousel/Carousel';
import QuoteContainer from '../QuoteContainer/QuoteContainer';
import CourseCarouselContainer from '../CourseCarouselContainer/CourseCarouselContainer';

function HomePage() {
  const infoCarouselData = [
    {
      icon: 'icon_plane.svg',
      title: 'TẦM NHÌN',
      subtitle: 'CHINH PHỤC NHỮNG TẦM CAO MỚI',
      description:
        'Trở thành nền tảng dẫn đầu trong lĩnh vực giáo dục và đạo tạo trực tuyến trên thế giới với cam kết mang đến những trải nghiệm học tập quý giá, nhắm giúp học viên khám phá bản thân, thay đổi tầm nhìn và đạt được những thành công trong cuộc sống.',
      image_url: 'info_carousel_1.png',
    },
    {
      icon: 'icon_link.svg',
      title: 'SỨ MỆNH',
      subtitle: '',
      description: `Giúp cho tất cả thành viên không kể độ tuổi, ngành nghề, tôn giáo, giới tính đều có thể nâng cao tri thức, nâng cao thu nhập và thành công.

        Chúng tôi cam kết không ngừng cải tiến mọi hoạt động, cập nhật thêm các khóa học, các chương trình để giúp thành viên ngày càng thành công hơn nữa.`,
      image_url: 'info_carousel_1.png',
    },
  ];

  return (
    <div>
      <div className="Video">
        <iframe
          src="https://www.youtube.com/embed/KRiSMXFpWIg"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="InfoCarousel">
        <Carousel title="Carousel">
          {infoCarouselData.map((infoCarouselItem, index) => (
            <div className="InfoCardContainer" key={index}>
              <div className="InfoText">
                <div className="Icon">
                  <img
                    src={require(`../../assets/images/${infoCarouselItem.icon}`)}
                    alt="icon"
                  ></img>
                </div>
                <div className="Title">{infoCarouselItem.title}</div>
                <div className="Subtitle">
                  {infoCarouselItem.subtitle}
                </div>
                <div className="Description">
                  {infoCarouselItem.description}
                </div>
              </div>
              <div className="Image">
                <img
                  src={require(`../../assets/images/${infoCarouselItem.image_url}`)}
                  alt="image"
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <QuoteContainer />

      <CourseCarouselContainer />
    </div>
  );
}

export default HomePage;
