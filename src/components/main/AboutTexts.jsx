import React from 'react';
import { AboutTextsTag } from '../../assets/styles/main.styled';

const AboutTexts = (data) => {
  return (
    <AboutTextsTag>
      <img src={data && data.img} alt="" />
      <div>
        <h1>{data && data.textsTitle}</h1>
        <h2>{data && data.textsSubTitle}</h2>
        <p>{data && data.textsContents}</p>
      </div>
    </AboutTextsTag>
  );
};

export default AboutTexts;
