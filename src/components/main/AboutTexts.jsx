import React from 'react';
import { AboutTextsBox } from '../../assets/styles/main.styled';

const AboutTexts = (data) => {
  const renderTextWithLineBreaks = (text) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };
  return (
    <AboutTextsBox>
      <img src={data && data.img} alt="" />
      <div>
        <h1>{data && data.textsTitle}</h1>
        <h2>{data && data.textsSubTitle}</h2>
        <p>{renderTextWithLineBreaks(data && data.textsContents)}</p>
      </div>
    </AboutTextsBox>
  );
};

export default AboutTexts;
