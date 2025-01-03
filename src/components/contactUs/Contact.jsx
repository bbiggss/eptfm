import React from 'react';
import { ContactUsBox } from '../../assets/styles/contactUs/contactUs.styled';
import ContactTextsLinkBox from './ContactTextsLinkBox';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import useResponsiveMax1024 from '../hooks/useResponsiveMax1024';
import useMobile from '../hooks/useMobile';
import TransportationWrapper from './TransportationWrapper';

const Contact = ({ modalStatus, setModalStatus }) => {
  const isMobile = useMobile();
  const isMobileTablet = useResponsiveMax1024();

  return (
    <ContactUsBox>
      <div className="ellipseArea">
        <img className="ellipse1" src={`${process.env.PUBLIC_URL}/assets/images/contact/ellipse1.png`} alt="" />
        <img className="ellipse2" src={`${process.env.PUBLIC_URL}/assets/images/contact/ellipse2.png`} alt="" />
      </div>
      <Breadcrumb />
      <div className="Wrapper">
        <p className="title robotoMedium">CONTACT US</p>
        <p className="subTitle NanumSquareB">
          {isMobileTablet ? (
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
          subText={isMobile ? '문의사항이나 의견이 있으시면 언제든지 연락\n주세요.' : '문의사항이나 의견이 있으시면 언제든지 연락주세요.'}
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
          subText={'경기도 고양시 덕양구 청초로 10 B동 1111호, 1112호'}
          popupText={'지도 보기'}
          clickOption={'map'}
        />

        <div className="mapWrap">
          <a href="https://map.naver.com/p/entry/place/1597658006?c=15.15,0,0,0,dh" target="_blank" rel="noreferrer">
            <img src={`${process.env.PUBLIC_URL}/assets/images/contact/${isMobileTablet ? 'map_m' : 'map'}.png`} alt="" />
          </a>
        </div>
        <div className="transportation NanumSquareB">
          <TransportationWrapper pcMarginRight>
            <div className="imgWrapper">
              <img className="subway" src={`${process.env.PUBLIC_URL}/assets/images/contact/subway.png`} alt="" />
            </div>
            <p>
              {/* <span>지하철</span> : 2호선 영등포구청역 / 5호선 영등포구청역, 양평역 */}
              <span>지하철</span> : 6호선 디지털미디어시티역, 경의중앙선 수색역
            </p>
          </TransportationWrapper>
          <TransportationWrapper>
            <div className="imgWrapper">
              <img className="bus" src={`${process.env.PUBLIC_URL}/assets/images/contact/bus.png`} alt="" />
            </div>
            <p>
              {/* <span>버스</span> : 영등포 02, 영등포 05, 7612번 */}
              <span>버스</span> : 지선 7726, 마을 022B, 마을 054
            </p>
          </TransportationWrapper>
        </div>
      </div>
    </ContactUsBox>
  );
};

export default Contact;
