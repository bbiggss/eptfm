import React from 'react';
import styled from 'styled-components';

const StyledPortfolioTitleWrap = styled.div`
  @media (min-width: 1025px) {
    margin-top: ${(props) => props.$pcMarginTop};
  }
  @media (min-width: 768px) and (max-width: 1024px) {
  }
  @media (max-width: 767px) {
    margin-top: ${(props) => props.$mobileMarginTop};
  }
`;

const PortfolioTitleWrap = ({ style, children, pcMarginTop, mobileMarginTop }) => {
  return (
    <StyledPortfolioTitleWrap
      $pcMarginTop={pcMarginTop}
      $mobileMarginTop={mobileMarginTop}
      style={style}
    >
      <div>{children}</div>
    </StyledPortfolioTitleWrap>
  );
};

export default PortfolioTitleWrap;
