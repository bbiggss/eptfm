import React from 'react';
import { FooterBox } from '../../../assets/styles/common/footer.styled';
import SocialMediaLink from './SocialMediaLink';

const Footer = () => {
  return (
    <FooterBox>
      <div className="footerContainer">
        <img
          id="footerImg"
          src={`${process.env.PUBLIC_URL}/assets/images/common/bottom_logo.png`}
          alt=""
        />
        <div id="info">
          <div className="telFaxMail">
            <span className="number">Tel : 02. 6949. 5622</span>
            <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
            <span className="number">Fax : 02. 6949. 5623</span>
            <span className="customSpan">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
            <span className="mail">Mail : eplatform@naver.com</span>
          </div>
          <div className="address">
            <span>Address : 서울시 영등포구 선유로130, 에이스 하이테크시티3차 409호</span>
          </div>
        </div>
        <div className="copyright">ⓒ EPLATFORM ALL RIGHTS RESERVED.</div>

        <div className="socialMediaLinkWrapper">
          <SocialMediaLink
            href={'https://www.youtube.com/@eplatform'}
            src={`${process.env.PUBLIC_URL}/assets/images/common/youtube.png`}
          />
          <SocialMediaLink
            href={'https://www.instagram.com/e_platform0225/'}
            src={`${process.env.PUBLIC_URL}/assets/images/common/insta.png`}
          />
        </div>
      </div>
    </FooterBox>
  );
};

export default Footer;
