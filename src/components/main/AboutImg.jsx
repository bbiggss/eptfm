import React from 'react';
import styled from 'styled-components';

const StyledAboutImg = styled.div`
  @media (min-width: 1025px) {
    width: 50%;
    & img {
      width: 100%;
      max-width: 960px;
      max-height: 1000px;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    order: 1;
    img {
      width: 100%;
    }
  }
  @media (max-width: 767px) {
    order: 1;
    img {
      width: 100%;
    }
  }
`;

const AboutImg = (data) => {
  return (
    <StyledAboutImg>
      <img src={data && data.img} alt="" />
    </StyledAboutImg>
  );
};

export default AboutImg;
