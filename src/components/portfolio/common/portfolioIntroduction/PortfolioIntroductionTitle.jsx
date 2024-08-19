import React from 'react';
import styled from 'styled-components';

const renderTextWithLineBreaks = (text) => {
  return text.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
};

const StyledPortfolioIntroductionTitle = styled.p`
  font-family: 'NanumSquareEB';
  color: #000000;
  letter-spacing: -0.02em;
  @media (min-width: 1025px) {
    /* font-size: 50px; */
    font-size: clamp(30px, 2.6vw, 50px);
    /* 1440px 기준 50px */
  }
  @media (max-width: 1024px) {
    /* font-size: 5.87vw; */
    font-size: clamp(22px, 5.87vw, 50px);
    /* 22px / 375px * 100 = 5.87vw */
  }
`;

const PortfolioIntroductionTitle = (data) => {
  return (
    <StyledPortfolioIntroductionTitle style={data && data.style}>
      {renderTextWithLineBreaks(data.title)}
    </StyledPortfolioIntroductionTitle>
  );
};

export default PortfolioIntroductionTitle;
