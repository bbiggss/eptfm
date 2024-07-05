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
      {data.img && <img src={data && data.img} alt="" />}
      <div id="textsBoxContainer">
        <p className="textsTitle">{data && data.textsTitle}</p>
        <p className="textsSubTitle">{data && data.textsSubTitle}</p>
        <p className="textsContents">{renderTextWithLineBreaks(data && data.textsContents)}</p>
      </div>
    </AboutTextsBox>
  );
};

export default AboutTexts;
