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

const StyledPortfolioIntroductionDescription = styled.p`
  font-family: 'NanumSquareB';
  color: #333333;
  letter-spacing: -0.02em;

  @media (min-width: 1025px) {
    margin-top: 60px;

    font-size: 24px;
    line-height: 38px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    margin-top: 20px;
    margin-bottom: 80px;

    font-size: 16px;
    line-height: 24px;
  }
  @media (max-width: 767px) {
    margin-top: 20px;
    margin-bottom: 80px;

    font-size: 16px;
    line-height: 24px;
  }
`;

const PortfolioIntroductionDescription = (data) => {
  return (
    <StyledPortfolioIntroductionDescription style={data && data.style}>
      {renderTextWithLineBreaks(data.description)}
    </StyledPortfolioIntroductionDescription>
  );
};

export default PortfolioIntroductionDescription;
