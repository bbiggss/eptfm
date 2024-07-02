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
  // portfolio
  portfolioImg1,
  portfolioImg2,
  portfolioImg3,
  portfolioBg,
  portfolioBg2,
  // 푸터
  bottomLogoImg,
} from './assets/images';

import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

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
    portfolioImg1,
    portfolioImg2,
    portfolioImg3,
    portfolioBg,
    portfolioBg2,
  };

  return (
    <div className="App">
      <div id="mainVideo">
        <video
          src={`${process.env.PUBLIC_URL}/assets/videos/01_INTRO 001_2.mp4`}
          autoPlay
          muted
          loop
          playsInline
          className="video"
        ></video>
      </div>

      <Header img={headerLogoImg} />
      <Routes>
        <Route path="/" element={<Main data={mainImgs} />} />
        {/* <Route path="/page1" element={<Page1 />} /> */}
      </Routes>
      <Footer img={footerLogoImg} />
    </div>
  );
}

export default App;
