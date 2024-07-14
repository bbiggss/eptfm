import React from 'react';
import { FooterBox } from '../../assets/styles/footer.styled';

const Footer = () => {
  return (
    <FooterBox>
      <div id="container">
        <div id="infoInquiry">
          <div id="info">
            <img
              id="footerImg"
              src={`${process.env.PUBLIC_URL}/assets/images/bottom_logo.png`}
              alt=""
            />
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
            <div>대표메일 : eplatform@naver.com</div>
            <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
            <div>협업 문의 : goldkims@gmail.com</div>
          </div>
        </div>

        {/* <br /> */}
        <div id="copyright">ⓒ EPLATFORM ALL RIGHTS RESERVED.</div>
      </div>
    </FooterBox>
  );
};

export default Footer;
