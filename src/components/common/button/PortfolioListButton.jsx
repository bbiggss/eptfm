import React from 'react';
import styled from 'styled-components';

const StyledPortfolioListButton = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  img {
    cursor: pointer;
    border-radius: 100%;
  }

  @media (min-width: 1025px) {
    margin-right: 80px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    display: none;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

const PortfolioListButton = ({ portfolioListModalStatus, setPortfolioListModalStatus }) => {
  const listBtn = () => {
    setPortfolioListModalStatus(true);
  };
  return (
    <StyledPortfolioListButton>
      <img
        onClick={listBtn}
        src={`${process.env.PUBLIC_URL}/assets/images/common/portfolioListButton.png`}
        alt=""
      />
    </StyledPortfolioListButton>
  );
};

export default PortfolioListButton;
