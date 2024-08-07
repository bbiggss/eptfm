import React from 'react';
import styled from 'styled-components';

const StyledHeroImg = styled.img``;

const HeroImg = (data) => {
  return <img src={data.src} alt="" />;
};

export default HeroImg;
