// import logo from './logo.svg';
import './App.css';

// import {
//   // 헤더
//   logoImg,
//   dropDown,
//   // 메인
//   // about
//   aboutImg1,
//   aboutImg2,
//   aboutImg3,
//   // business
//   businessImg1,
//   businessImg2,
//   businessImg3,
//   businessHoverImg1,
//   businessHoverImg2,
//   businessHoverImg3,
//   // portfolio
//   portfolioImg1,
//   portfolioImg2,
//   portfolioImg3,
//   portfolioBg,
//   portfolioBg2,
//   // 푸터
//   bottomLogoImg,
// } from './assets/images';

import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/common/header/Header';
import Main from './components/main/Main';
import Footer from './components/common/footer/Footer';
import Video from './components/main/Video';
import PortfolioList from './components/portfolio/PortfolioList';
import ELearning from './components/portfolio/eLearning/ELearning';
import Rnd from './components/portfolio/rNd/Rnd';
import { HeaderPlaceholder } from './assets/styles/common/header.styled';
import Breadcrumb from './components/common/breadcrumb/Breadcrumb';
import Contact from './components/contactUs/Contact';
import { useState } from 'react';
import InquiryModal from './components/contactUs/InquiryModal';
import ScrollToTop from './components/common/ScrollTop';
import BlankPage from './components/common/blankPage/BlankPage';

import VrAr from './components/portfolio/vrAr/02/VrAr';
import EarthRotationChangingSeasons from './components/portfolio/vrAr/03/EarthRotationChangingSeasons';

function App() {
  // let headerLogoImg = { logoImg, dropDown };
  // let footerLogoImg = { bottomLogoImg };
  // let mainImgs = {
  //   aboutImg1,
  //   aboutImg2,
  //   aboutImg3,
  //   businessImg1,
  //   businessImg2,
  //   businessImg3,
  //   businessHoverImg1,
  //   businessHoverImg2,
  //   businessHoverImg3,
  //   portfolioImg1,
  //   portfolioImg2,
  //   portfolioImg3,
  //   portfolioBg,
  //   portfolioBg2,
  // };

  const location = useLocation();
  const isSmallScreen = window.matchMedia('(max-width: 1024px)').matches;
  const [modalStatus, setModalStatus] = useState(false);

  return (
    <div className="App">
      <ScrollToTop />
      {/* 모달 */}

      {modalStatus && <InquiryModal setModalStatus={setModalStatus} />}

      {/* 메인일때 */}
      <Header />

      {isSmallScreen ? <HeaderPlaceholder /> : ''}
      {location.pathname === '/' ? <Video /> : ''}
      {location.pathname === '/' ? (
        ''
      ) : (
        <>
          <HeaderPlaceholder />
          <Breadcrumb />
        </>
      )}

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/portfolio/VrAr" element={<PortfolioList />} />
        <Route path="/portfolio/e-Learning" element={<PortfolioList />} />
        <Route path="/portfolio/R&d" element={<PortfolioList />} />
        {/* <Route path="/portfolio/VrAr/:id" element={<VrAr />} /> */}
        <Route path="/portfolio/VrAr/AR | 미션! 생태계를 복원하라" element={<VrAr />} />
        <Route
          path="/portfolio/VrAr/AR | 지구의 공전과 계절의 변화"
          element={<EarthRotationChangingSeasons />}
        />
        <Route path="/portfolio/e-Learning/:id" element={<ELearning />} />
        <Route path="/portfolio/R&d/:id" element={<Rnd />} />
        <Route
          path="/contactUs"
          element={<Contact modalStatus={modalStatus} setModalStatus={setModalStatus} />}
        />

        <Route path="*" element={<BlankPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
