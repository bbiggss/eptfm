import React from 'react';
import { AboutDescriptionBox1 } from '../../assets/styles/main.styled';

const AboutDescription1 = (data) => {
  const renderTextWithLineBreaks = (text) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };
  return (
    <AboutDescriptionBox1>
      {data.img && <img src={data && data.img} alt="" />}
      <div id="textsBoxContainer">
        <p className="textsTitle">{data && data.textsTitle}</p>
        <p className="textsSubTitle">{data && data.textsSubTitle}</p>
        <p className="textsContents">{renderTextWithLineBreaks(data && data.textsContents)}</p>
      </div>
    </AboutDescriptionBox1>
  );
};

export default AboutDescription1;
