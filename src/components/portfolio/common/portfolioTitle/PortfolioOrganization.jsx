import React from 'react';
import styled from 'styled-components';

const StyledPortfolioOrganization = styled.p`
  font-family: 'NanumSquareEB';
  letter-spacing: -0.02em;

  @media (min-width: 1025px) {
    font-size: 22px;
    margin-bottom: 24px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
  }
  @media (max-width: 767px) {
    font-size: 12px;
    margin-bottom: 11px;
  }
`;

const PortfolioOrganization = (data) => {
  return (
    <StyledPortfolioOrganization style={data && data.style}>
      {data.organization}
    </StyledPortfolioOrganization>
  );
};

export default PortfolioOrganization;
