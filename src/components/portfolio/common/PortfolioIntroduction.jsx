import React from 'react';
import styled from 'styled-components';

const PortfolioIntroductionBox = styled.div`
  .title {
    color: #292929;
    font-size: 40px;
    letter-spacing: -0.02em;
  }
  .subTexts {
    margin-top: 34px;
    color: #767676;
    font-size: 26px;
    line-height: 40px;
    letter-spacing: -0.02em;
    white-space: nowrap;
  }
`;

const renderTextWithLineBreaks = (text) => {
  return text.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
};

const PortfolioIntroduction = (data) => {
  return (
    <PortfolioIntroductionBox style={data && data.style} className="PortfolioIntroductionBox">
      <p className="title NanumSquareEB">{renderTextWithLineBreaks(data.title)}</p>
      <div className="subTexts NanumSquareB">
        <p>{renderTextWithLineBreaks(data.description)}</p>
      </div>
    </PortfolioIntroductionBox>
  );
};

export default PortfolioIntroduction;
