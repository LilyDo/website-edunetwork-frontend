import React from 'react';
import './Footer.scss';
import IconFacebook from '../../assets/images/icon_facebook.svg';
import IconTwitter from '../../assets/images/icon_twitter.svg';
import IconYoutube from '../../assets/images/icon_youtube.svg';
import IconLinkedin from '../../assets/images/icon_linkedin.svg';
import IconPinterest from '../../assets/images/icon_pinterest.svg';

function Footer() {
  return (
    <div className="Footer">
      <div className="FooterLogo"></div>

      <div className="FooterInfo">
        <div className="UpperFooterInfo">
          <div className="FooterNavigation">
            <div className="NavigationLink Home">HOME</div>
            <div className="NavigationLink Course">COURSE</div>
            <div className="NavigationLink Contact">CONTACT</div>
          </div>
          <div className="FooterContact">
            <div className="Title">CONNECT WITH US</div>
            <div className="ContactInfo">
              <div className="Email">Email: abc@edunetwork.com</div>
              <div className="Hotline">Hotline: 0909 456 789</div>
              <div className="Facebook">
                Fanpage: fb.com/EduNetwork
              </div>
            </div>
          </div>

          <div className="FooterPlugin">
            <div className="Title">FOLLOW US</div>
            <div className="PluginIcon">
              <img src={IconFacebook} alt="icon facebook" />
              <img src={IconTwitter} alt="icon twitter" />
              <img src={IconYoutube} alt="icon youtube" />
              <img src={IconLinkedin} alt="icon linkedin" />
              <img src={IconPinterest} alt="icon pinterest" />
            </div>
          </div>
        </div>
        <div className="LowerFooterInfo">
          &copy; 2019 by EDUNETWORK. Allright reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
