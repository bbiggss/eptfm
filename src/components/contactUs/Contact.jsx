import React from 'react';
import { ContactUsBox } from '../../assets/styles/contactUs/contactUs.styled';
import ContactTextsLinkBox from './ContactTextsLinkBox';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import Transportation from './Transportation';
import useResponsiveMax1024 from '../hooks/useResponsiveMax1024';

const Contact = ({ modalStatus, setModalStatus }) => {
  const isMobile = useResponsiveMax1024();
  return (
    <ContactUsBox>
      <div className="fullScreen ellipseArea">
        <img className="ellipse1" src={`${process.env.PUBLIC_URL}/assets/images/contact/ellipse1.png`} alt="" />
        <img className="ellipse2" src={`${process.env.PUBLIC_URL}/assets/images/contact/ellipse2.png`} alt="" />
      </div>
      <Breadcrumb />
      <div className="smallScreen textCenter">
        <p className="title robotoMedium">CONTACT US</p>
        <p className="subTitle NanumSquareB">
          {isMobile ? (
            <>
              EPLATFORM의 혁신적인 교육 콘텐츠와 함께
              <br />
              교육의 새로운 지평을 열어보세요!
            </>
          ) : (
            'EPLATFORM의 혁신적인 교육 콘텐츠와 함께 교육의 새로운 지평을 열어보세요!'
          )}
        </p>
        <hr />

        <ContactTextsLinkBox
          mainText={'문의하기'}
          subText={'문의사항이나 의견이 있으시면 언제든지 연락주세요.'}
          mobile_subText={'문의사항이나 의견이 있으시면 언제든지 연락주세요.'}
          popupText={'메일 보내기'}
          clickOption={'mail'}
          modalStatus={modalStatus}
          setModalStatus={setModalStatus}
        />

        <ul className="inquiryImg">
          <li>
            <img src={`${process.env.PUBLIC_URL}/assets/images/contact/image 12.png`} alt="" />
            <p className="NanumSquareB">e-Learning 솔루션 개발</p>
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
          mobile_subText={'서울시 영등포구 선유로 130,\n 에이스 하이테크시티3차 409호'}
          popupText={'지도 보기'}
          clickOption={'map'}
        />

        <div className="mapWrap">
          <a href="https://map.naver.com/p/entry/place/1597658006?c=15.15,0,0,0,dh" target="_blank" rel="noreferrer">
            <img src={`${process.env.PUBLIC_URL}/assets/images/contact/map.png`} alt="" />
          </a>
        </div>
        <div className="transportation NanumSquareB">
          <Transportation
            $mobileMargin
            src={`${process.env.PUBLIC_URL}/assets/images/contact/subway.png`}
            mot={'지하철'}
            location={' : 2호선 영등포구청역 / 5호선 영등포구청역, 양평역'}
          />
          <Transportation src={`${process.env.PUBLIC_URL}/assets/images/contact/bus.png`} mot={'버스'} location={' : 영등포 02, 영등포 05, 7612번'} />
          {/* mot: means of transportation 교통수단 */}
        </div>
      </div>
    </ContactUsBox>
  );
};

export default Contact;
