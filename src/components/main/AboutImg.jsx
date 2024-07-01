import React from 'react';
import { AboutImgTag } from '../../assets/styles/main.styled';

const AboutImg = (data) => {
  return (
    <AboutImgTag>
      <img src={data && data.img} alt="" />
    </AboutImgTag>
  );
};

export default AboutImg;
