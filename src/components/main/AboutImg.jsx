import React, { forwardRef } from 'react';
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
  @media (max-width: 1024px) {
    order: 1;
    img {
      width: 100%;
      aspect-ratio: 315 / 315;
    }
  }
`;

const AboutImg = forwardRef((props, ref) => {
  return (
    <StyledAboutImg>
      {/* <img ref={ref} src={data && data.img} alt="" /> */}
      <img className="slideUp" ref={ref} src={props.img} alt="" />
    </StyledAboutImg>
  );
});

export default AboutImg;
