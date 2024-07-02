import React from 'react';
import { AboutImgBox } from '../../assets/styles/main.styled';

const AboutImg = (data) => {
  return (
    <AboutImgBox>
      <img src={data && data.img} alt="" />
    </AboutImgBox>
  );
};

export default AboutImg;
