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
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Video from './components/main/Video';
import PortfolioList from './components/main/PortfolioList';

import VrAr from './components/main/vrAr/VrAr';
import ELearning from './components/main/eLearning/ELearning';
import Rnd from './components/main/rNd/Rnd';
import { HeaderPlaceholder } from './assets/styles/header.styled';

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
  console.log(111, location.pathname);

  const isSmallScreen = window.matchMedia('(max-width: 1024px)').matches;
  return (
    <div className="App">
      {/* 메인일때 */}
      <Header />

      {isSmallScreen ? <HeaderPlaceholder /> : '' }
      {location.pathname === '/' ? '' : <HeaderPlaceholder />}
      {location.pathname === '/' ? <Video /> : ''}

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/portfolioList/VrAr" element={<PortfolioList />} />
        <Route path="/portfolioList/eLearning" element={<PortfolioList />} />
        {/* <Route path="/portfolioList/rNd" element={<PortfolioList />} />
        <Route path="/VrAr/:id" element={<VrAr />} />
        <Route path="/eLearning/:id" element={<ELearning />} />
        <Route path="/rNd/:id" element={<Rnd />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
