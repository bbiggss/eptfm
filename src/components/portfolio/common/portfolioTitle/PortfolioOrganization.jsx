import React from 'react';
import styled from 'styled-components';

const StyledPortfolioOrganization = styled.p`
  letter-spacing: -0.02em;

  @media (min-width: 1025px) {
    /* font-size: 1.53vw; */
    font-size: var(--pc-font-size-22px);
    /* 22px / 1440px * 100 = 1.53vw */
    margin-bottom: 24px;
  }
  @media (max-width: 1024px) {
    font-size: clamp(12px, 3.2vw, 18px);

    /* margin-bottom: 10px; */
    margin-bottom: 2.66vw;
  }
`;

const PortfolioOrganization = (data) => {
  return <StyledPortfolioOrganization style={data && data.style}>{data.organization}</StyledPortfolioOrganization>;
};

export default PortfolioOrganization;
