// import logo from './logo.svg';
import './App.css';
import {
  testImg1,
  testImg2,
  testImg3,
  logoImg,
  bottomLogoImg,
  aboutImg1,
  aboutImg2,
  aboutImg3,
  businessImg1,
  businessImg2,
  businessImg3,
} from './assets/images';

import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Page1 from './components/main/Page1';

function App() {
  // let imgAll = { testImg1, testImg2, testImg3 };
  let headerLogoImg = { logoImg };
  let footerLogoImg = { bottomLogoImg };
  let mainImgs = { aboutImg1, aboutImg2, aboutImg3, businessImg1, businessImg2, businessImg3 };

  return (
    <div className="App">
      <div id="mainVideo">
        <video
          src="/assets/videos/01_INTRO 001_2.mp4"
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
        <Route path="/page1" element={<Page1 />} />
      </Routes>
      <Footer img={footerLogoImg} />
    </div>
  );
}

export default App;
