import React from 'react';
import './HomePage.scss';
import Carousel from '../Carousel/Carousel';
import QuoteContainer from '../QuoteContainer/QuoteContainer';
import CourseCardContainer from '../CourseCardContainer/CourseCardContainer';
import LoginGame from '../Game/Login/LoginGame';
import { getTranslatedText } from '../../services/appService';

function HomePage() {
  const infoCarouselData = [
    {
      icon: 'icon_plane.svg',
      title: getTranslatedText('VISION'),
      subtitle: '',
      description: getTranslatedText('vision_detail'),
      image_url: 'info_carousel_1.png',
    },
    {
      icon: 'icon_link.svg',
      title: getTranslatedText('MISSION'),
      subtitle: '',
      description: getTranslatedText('mission_detail'),
      image_url: 'info_carousel_1.png',
    },
    {
      icon: 'icon_link.svg',
      title: getTranslatedText('core_values'),
      subtitle: '',
      description: getTranslatedText('core_value_detail'),
      image_url: 'info_carousel_1.png',
    },
  ];

  return (
    <div>
      <div>
      <a href="/game">Visit Game!</a>
      </div>
      <div className="Video">
        <iframe
          title="home-video"
          src="https://player.vimeo.com/video/362199467"
          width="640"
          height="360"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
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
      {/* <LoginGame /> */}

      <CourseCardContainer />
    </div>
  );
}

export default HomePage;
