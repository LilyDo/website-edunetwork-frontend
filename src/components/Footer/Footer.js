import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import { routes } from '../../constants';
import IconFacebook from '../../assets/images/icon_facebook.svg';
import IconTwitter from '../../assets/images/icon_twitter.svg';
import IconYoutube from '../../assets/images/icon_youtube.svg';
import IconLinkedin from '../../assets/images/icon_linkedin.svg';
import IconPinterest from '../../assets/images/icon_pinterest.svg';
import {getTranslatedText} from "../../services/appService";

function Footer() {
  return (
    <div className="FooterBackground">
      <div className="Footer">
        <div className="FooterLogo"></div>

        <div className="FooterInfo">
          <div className="UpperFooterInfo">
            <div className="FooterNavigation">
              <div className="NavigationLink Home">
                <Link to={routes.home}>{getTranslatedText("HOME")}</Link>
              </div>
              <div className="NavigationLink Course">
                <Link to={routes.courses}>{getTranslatedText("COURSE")}</Link>
              </div>
              <div className="NavigationLink Contact">
                <Link to={routes.contact}>{getTranslatedText("CONTACT")}</Link>
              </div>
            </div>
            <div className="FooterContact">
              <div className="Title">{getTranslatedText("connect_with_us")}</div>
              <div className="ContactInfo">
                <div className="Email">Email: info@edunetwork.global</div>
                {/* <div className="Facebook">
                  Fanpage: fb.com/EduNetwork
                </div> */}
              </div>
            </div>

            <div className="FooterPlugin">
              {/* <div className="Title">FOLLOW US</div>
              <div className="PluginIcon">
                <img src={IconFacebook} alt="icon facebook" />
                <img src={IconTwitter} alt="icon twitter" />
                <img src={IconYoutube} alt="icon youtube" />
                <img src={IconLinkedin} alt="icon linkedin" />
                <img src={IconPinterest} alt="icon pinterest" />
              </div> */}
            </div>
          </div>
          <div className="LowerFooterInfo">
            &copy; 2019 by EDUNETWORK. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
