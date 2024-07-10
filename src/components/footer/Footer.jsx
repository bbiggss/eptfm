import React from 'react';
import { FooterBox } from '../../assets/styles/footer.styled';

const Footer = ({ img }) => {
  return (
    <FooterBox>
      <div id="container">
        <div id="infoInquiry">
          <div id="info">
            <img id="footerImg" src={img && img.bottomLogoImg} alt="" />
            <div>
              <span>Tel: 02. 6949. 5622</span>
              <span> | </span>
              <span>Fax : 02. 6949. 5623</span>
              <span> | </span>
              <span>Mail : goldkims@gmail.com</span>
            </div>
            <div>
              <span>Address : 서울시 영등포구 선유로130, 에이스 하이테크시티3차 409호</span>
            </div>
          </div>
          <div id="inquiry">
            <div>문의 : zeusee26@gmail.com</div>
            <span>&nbsp;|&nbsp;</span>
            <div>프로젝트 문의 : goldkims@gmail.com</div>
          </div>
        </div>

        <br />
        <div>ⓒ EPLATFORM ALL RIGHTS RESERVED.</div>
      </div>
    </FooterBox>
  );
};

export default Footer;
