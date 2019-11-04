import React from 'react';
import './HomePage.scss';
import Carousel from '../Carousel/Carousel';
import QuoteContainer from '../QuoteContainer/QuoteContainer';
import CourseCardContainer from '../CourseCardContainer/CourseCardContainer';

function HomePage() {
  const infoCarouselData = [
    {
      icon: 'icon_plane.svg',
      title: 'VISION',
      subtitle: 'SOAR TO GREATER HEIGHTS',
      description:
        'To bring education and networking easily available for everyone making our portal the most comprehensive and resourceful platform in the world at anytime and anywhere.',
      image_url: 'info_carousel_1.png',
    },
    {
      icon: 'icon_link.svg',
      title: 'MISSION',
      subtitle: '',
      description: `Helping all members regardless of age, industry, religion and gender to enhance their knowledge, increase income and succeed.  We are committed to constantly improving all activities, updating more courses and programs to help our members become more and more successful.`,
      image_url: 'info_carousel_1.png',
    },
    {
      icon: 'icon_link.svg',
      title: 'CORE VALUES',
      subtitle: '',
      description: `- We put customer satisfaction as the core value.
 - We are committed to creating a friendly, professional working and learning environment where every member has the opportunity to grow.
 - We operate on transparency, ethics and efficiency.
 - We make continuous efforts to improve, perfect and develop.
 - We contribute positively to the community.`,
      image_url: 'info_carousel_1.png',
    },
  ];

  return (
    <div>
      <div className="Video">
        <iframe title='home-video'
          src="https://player.vimeo.com/video/362199467"
          width="640"
          height="360"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe>
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
                  alt="info carousel"
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <QuoteContainer />

      <CourseCardContainer />
    </div>
  );
}

export default HomePage;
