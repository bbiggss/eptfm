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
    /* margin-top: 60px; */
    margin-top: ${(props) => props.$pcMarginTop};

    /* font-size: 24px; */
    font-size: clamp(20px, 1.25vw, 24px);
    /* line-height: 38px; */
    line-height: clamp(30px, 2vw, 38px);
  }
  @media (max-width: 1024px) {
    /* margin-top: 20px;
    margin-bottom: 80px; */

    /* margin-top: 5.33vw; */
    margin-top: ${(props) => props.$mobileMarginTop};
    /* margin-bottom: 21.33vw; */

    font-size: clamp(16px, 4vw, 24px);
    line-height: clamp(24px, 6vw, 32px);

    /* 16px / 375px * 100 = 4.27vw */
    /* line-height: 24px; */
  }
`;

const PortfolioIntroductionDescription = (data) => {
  return (
    <StyledPortfolioIntroductionDescription
      style={data && data.style}
      $pcMarginTop={data.pcMarginTop}
      $mobileMarginTop={data.mobileMarginTop}
      $mobileMarginBottom={data.mobileMarginBottom}
    >
      {renderTextWithLineBreaks(data.description)}
    </StyledPortfolioIntroductionDescription>
  );
};

export default PortfolioIntroductionDescription;
