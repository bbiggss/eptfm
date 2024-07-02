import React from 'react';
import { BusinessBox } from '../../assets/styles/main.styled';
import BusinessItems from './BusinessItems';

const Business = ({ data }) => {
  const businessImg1 = data.businessImg1;
  const businessImg2 = data.businessImg2;
  const businessImg3 = data.businessImg3;
  return (
    <BusinessBox>
      <div id="container">
        <h1>BUSINESS</h1>
        <div id="contentsWrap">
          <ul>
            <BusinessItems img={businessImg1} text={'VR/AR'} />
            <BusinessItems img={businessImg2} text={'E-learning'} />
            <BusinessItems img={businessImg3} text={'R&D'} />
          </ul>
        </div>
      </div>
    </BusinessBox>
  );
};

export default Business;
