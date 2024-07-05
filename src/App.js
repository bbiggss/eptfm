// import logo from './logo.svg';
import './App.css';
import {
  // 헤더
  logoImg,
  // 메인
  // about
  aboutImg1,
  aboutImg2,
  aboutImg3,
  // business
  businessImg1,
  businessImg2,
  businessImg3,
  businessHoverImg1,
  businessHoverImg2,
  businessHoverImg3,
  // portfolio
  portfolioImg1,
  portfolioImg2,
  portfolioImg3,
  portfolioBg,
  portfolioBg2,
  // 푸터
  bottomLogoImg,
} from './assets/images';

import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Video from './components/main/Video';
import PortfolioList from './components/main/PortfolioList';

import VrAr from './components/main/vrAr/VrAr';
import ELearning from './components/main/eLearning/ELearning';
import Rnd from './components/main/rNd/Rnd';

function App() {
  let headerLogoImg = { logoImg };
  let footerLogoImg = { bottomLogoImg };
  let mainImgs = {
    aboutImg1,
    aboutImg2,
    aboutImg3,
    businessImg1,
    businessImg2,
    businessImg3,
    businessHoverImg1,
    businessHoverImg2,
    businessHoverImg3,
    portfolioImg1,
    portfolioImg2,
    portfolioImg3,
    portfolioBg,
    portfolioBg2,
  };

  const location = useLocation();
  console.log(111, location.pathname);
  return (
    <div className="App">
      {/* 메인일때 */}

      {location.pathname === '/' ? <Video /> : ''}

      <Header img={headerLogoImg} />

      {location.pathname === '/' ? <div id="HeaderBottomBox"></div> : ''}

      <Routes>
        <Route path="/" element={<Main data={mainImgs} />} />
        <Route path="/portfolioList/VrAr" element={<PortfolioList />} />
        <Route path="/portfolioList/eLearning" element={<PortfolioList />} />
        <Route path="/portfolioList/rNd" element={<PortfolioList />} />
        <Route path="/VrAr/:id" element={<VrAr />} />
        <Route path="/eLearning/:id" element={<ELearning />} />
        <Route path="/rNd/:id" element={<Rnd />} />
      </Routes>
      <Footer img={footerLogoImg} />
    </div>
  );
}

export default App;
