import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MainBox } from '../../assets/styles/main.styled';
import About from './About';
import Business from './Business';

const Main = ({ data }) => {
  const aboutImgs = {
    aboutImg1: data.aboutImg1,
    aboutImg2: data.aboutImg2,
    aboutImg3: data.aboutImg3,
  };

  const businessImgs = {
    businessImg1: data.businessImg1,
    businessImg2: data.businessImg2,
    businessImg3: data.businessImg3,
  };
  return (
    <MainBox>
      <About data={aboutImgs} />
      <Business data={businessImgs} />

      {/* <img src={data && data.testImg3} alt="" /> */}
      {/* <Link to={'/page1'}>page1 이동</Link> */}
    </MainBox>
  );
};

export default Main;
