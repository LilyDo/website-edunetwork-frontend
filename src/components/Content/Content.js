import React from 'react';
import './Content.scss';
import Carousel from '../Carousel/Carousel';

function Content() {
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

  return (
    <div>
      <div className="Video">
        <iframe
          width="560"
          height="315"
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

      <div className="Quote">
        <span>"</span>
        {`CHÚNG TÔI MUỐN XÂY DỰNG MỘT CỘNG ĐỒNG
        THAY ĐỔI VỀ TRI THỨC VÀ THAY ĐỔI VỀ THU NHẬP`}
        <span>"</span>
      </div>

      <div className="CourseCarousel">
        <Carousel title="CourseCarousel">
          {courseCarouselData.map((courseCarouselItem, index) => (
            <div className="InfoCardContainer" key={index}>
              <div className="Level">{courseCarouselItem.level}</div>
              <img
                src={require(`../../assets/images/${courseCarouselItem.backgroundImage}`)}
                alt="image"
              />
              <div className="Price">{courseCarouselItem.price}</div>
              <div className="Title">{courseCarouselItem.title}</div>
              <div className="PayNow">THANH TOÁN NGAY</div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Content;
