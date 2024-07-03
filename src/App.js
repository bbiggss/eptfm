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
import VrAr from './components/main/vrAr/VrAr';

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
        <Route path="/vrAr" element={<VrAr />} />
      </Routes>
      <Footer img={footerLogoImg} />
    </div>
  );
}

export default App;
