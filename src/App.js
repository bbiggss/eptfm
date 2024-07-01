// import logo from './logo.svg';
import './App.css';
import { testImg1, testImg2, testImg3, logoImg, bottomLogoImg } from './assets/images';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Page1 from './components/main/Page1';
import Loading from './components/loading/Loading';
import { useState } from 'react';

function App() {
  let imgAll = { testImg1, testImg2, testImg3 };
  let headerImg = { logoImg };
  console.log(headerImg);
  return (
    <div className="App">
      <Header data={headerImg} />
      <Routes>
        <Route path="/" element={<Main data={imgAll} />} />
        <Route path="/page1" element={<Page1 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
