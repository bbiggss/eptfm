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
  color: #292929;
  font-size: 40px;
  letter-spacing: -0.02em;
  /* NanumSquareEB */
`;
const StyledPortfolioIntroductionDescription = styled.p`
  margin-top: 34px;
  color: #767676;
  font-size: 26px;
  line-height: 40px;
  letter-spacing: -0.02em;
  white-space: nowrap;
`;
const PortfolioIntroductionTitle = (data) => {
  return (
    <StyledPortfolioIntroductionTitle style={data && data.style}>
      {renderTextWithLineBreaks(data.title)}
    </StyledPortfolioIntroductionTitle>
  );
};
const PortfolioIntroductionDescription = (data) => {
  return (
    <StyledPortfolioIntroductionDescription style={data && data.style}>
      {renderTextWithLineBreaks(data.description)}
    </StyledPortfolioIntroductionDescription>
  );
};

export { PortfolioIntroductionTitle, PortfolioIntroductionDescription };
