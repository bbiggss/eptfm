import React from 'react';
import { AboutDescriptionBox2 } from '../../assets/styles/main/about.styled';

const AboutDescription2 = (data) => {
  const renderTextWithLineBreaks = (text) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };
  return (
    <AboutDescriptionBox2>
      {data.img && <img src={data && data.img} alt="" />}
      <div id="textsBoxContainer">
        <p className="textsTitle">{data && data.textsTitle}</p>
        <p className="textsSubTitle">{data && data.textsSubTitle}</p>
        <p className="textsContents">{renderTextWithLineBreaks(data && data.textsContents)}</p>
      </div>
    </AboutDescriptionBox2>
  );
};

export default AboutDescription2;
