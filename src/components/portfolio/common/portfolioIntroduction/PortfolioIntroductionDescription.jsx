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
  white-space: nowrap;

  @media (min-width: 1025px) {
    /* margin-top: ${(props) => props.$pcMarginTop}; */

    margin-top: var(--pc-margin-34px);
    margin-bottom: ${(props) => props.$pcMarginBottom};

    font-size: var(--pc-font-size-26px);
    line-height: var(--pc-line-height-40px);
  }
  @media (max-width: 1024px) {
    /* margin-top: 20px;
    margin-bottom: 80px; */

    /* margin-top: ${(props) => props.$mobileMarginTop}; */
    margin-top: var(--mobile-margin-20px);

    margin-bottom: ${(props) => props.$mobileMarginBottom};
    /* margin-bottom: 21.33vw; */

    font-size: 16px;
    line-height: 24px;
    /* font-size: var(--mobile-font-size-16px);
    line-height: var(--mobile-line-height-24px); */

    /* 16px / 375px * 100 = 4.27vw */
    /* line-height: 24px; */
  }
`;

const PortfolioIntroductionDescription = (data) => {
  return (
    <StyledPortfolioIntroductionDescription
      style={data && data.style}
      $pcMarginTop={data.pcMarginTop}
      $pcMarginBottom={data.pcMarginBottom}
      $mobileMarginTop={data.mobileMarginTop}
      $mobileMarginBottom={data.mobileMarginBottom}
    >
      {renderTextWithLineBreaks(data.description)}
    </StyledPortfolioIntroductionDescription>
  );
};

export default PortfolioIntroductionDescription;
