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
  return (
    <MainBox>
      <div id="mainContainer">
        <About />
        <Business />
        <Portfolio />
      </div>
    </MainBox>
  );
};

export default Main;
