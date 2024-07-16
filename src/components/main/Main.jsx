import React from 'react';
// import { Link } from 'react-router-dom';
import About from './About';
import Business from './Business';
import Portfolio from './Portfolio';
import styled from 'styled-components';

const MainBox = styled.div`
  @media (min-width: 1025px) {
    width: 100%;
    display: flex;
    justify-content: center;
    & #mainContainer {
      width: 1920px;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
  }
  @media (max-width: 767px) {
  }
`;

const Main = () => {
  // const aboutImgs = {
  //   aboutImg1: data.aboutImg1,
  //   aboutImg2: data.aboutImg2,
  //   aboutImg3: data.aboutImg3,
  // };

  // const businessImgs = {
  //   businessImg1: data.businessImg1,
  //   businessImg2: data.businessImg2,
  //   businessImg3: data.businessImg3,
  //   businessHoverImg1: data.businessHoverImg1,
  //   businessHoverImg2: data.businessHoverImg2,
  //   businessHoverImg3: data.businessHoverImg3,
  // };

  // const portfolioImgs = {
  //   portfolioImg1: data.portfolioImg1,
  //   portfolioImg2: data.portfolioImg2,
  //   portfolioImg3: data.portfolioImg3,
  //   portfolioBg2: data.portfolioBg2,
  // };

  return (
    <MainBox>
      <div id="mainContainer">
        {/* <About data={aboutImgs} />
        <Business data={businessImgs} />
        <Portfolio data={portfolioImgs} /> */}
        <About />
        <Business />
        <Portfolio />
      </div>
    </MainBox>
  );
};

export default Main;
