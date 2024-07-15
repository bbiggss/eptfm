import React from 'react';
import { ContactUsBox } from '../../assets/styles/contactUs/contactUs.styled';
import ContactTextsLinkBox from './ContactTextsLinkBox';

const Contact = ({ modalStatus, setModalStatus }) => {
  return (
    <ContactUsBox>
      <div id="contactUsBoxContainer">
        <p className="title robotoMedium">CONTACT US</p>
        <p className="subTitle NanumSquareB">
          EPLATFORM의 혁신적인 교육 콘텐츠와 함께 교육의 새로운 지평을 열어보세요!
        </p>
        <hr />

        <ContactTextsLinkBox
          mainText={'문의하기'}
          subText={'문의사항이나 의견이 있으시면 언제든지 연락주세요.'}
          popupText={'메일 보내기'}
          clickOption={'mail'}
          modalStatus={modalStatus}
          setModalStatus={setModalStatus}
        />

        <ul>
          <li>
            <img src={`${process.env.PUBLIC_URL}/assets/images/contact/image 12.png`} alt="" />
            <p className="NanumSquareB">E-Learning 솔루션 개발</p>
          </li>
          <li>
            <img src={`${process.env.PUBLIC_URL}/assets/images/contact/image 15.png`} alt="" />
            <p className="NanumSquareB">VR/AR 콘텐츠 개발</p>
          </li>
          <li>
            <img src={`${process.env.PUBLIC_URL}/assets/images/contact/image 14.png`} alt="" />
            <p className="NanumSquareB">R&D 연구개발</p>
          </li>
        </ul>
        <hr />

        <ContactTextsLinkBox
          mainText={'오시는 길'}
          subText={'서울시 영등포구 선유로 130, 에이스 하이테크시티3차 409호'}
          popupText={'지도 보기'}
          clickOption={'map'}
        />
      </div>
    </ContactUsBox>
  );
};

export default Contact;
