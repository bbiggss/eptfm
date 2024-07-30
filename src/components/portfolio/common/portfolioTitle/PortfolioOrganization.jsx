import React from 'react';
import styled from 'styled-components';

const StyledPortfolioOrganization = styled.p`
  font-family: 'NanumSquareEB';

  margin-bottom: 24px;
  font-size: 22px;
  line-height: auto;
  letter-spacing: -2px;
`;

const PortfolioOrganization = (data) => {
  return (
    <StyledPortfolioOrganization style={data && data.style}>
      {data.organization}
    </StyledPortfolioOrganization>
  );
};

export default PortfolioOrganization;
