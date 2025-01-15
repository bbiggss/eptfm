import React from 'react';
import styled from 'styled-components';

const StyledHeroOrganization = styled.div`
  @media (min-width: 1025px) {
    background: rgba(0, 41, 79, 0.9);
    border-radius: 100px;
    width: clamp(0px, 11.98vw, 230px);
    height: clamp(0px, 2.19vw, 42px);

    display: flex;
    justify-content: center;
    align-items: center;

    .heroOrganization {
      color: #ffffff;
      font-size: clamp(0px, 1.15vw, 22px);
    }
  }
`;

const HeroOrganization = () => {
  return (
    <StyledHeroOrganization>
      <div className="heroOrganization NanumSquareB">한국교육학술정보원</div>
    </StyledHeroOrganization>
  );
};

export default HeroOrganization;
