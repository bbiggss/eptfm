import React, { forwardRef } from 'react';
import styled from 'styled-components';
import useResponsiveMax1024 from '../hooks/useResponsiveMax1024';

const StyledAboutImg = styled.div`
  @media (min-width: 1025px) {
    position: relative;
    overflow: hidden;
    width: 50%;
    /* overflow: hidden; */
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
  const useMobileTablet = useResponsiveMax1024();
  return (
    <StyledAboutImg>
      {/* <img ref={ref} src={data && data.img} alt="" /> */}
      {useMobileTablet ? (
        <>
          <img className="slideUp" ref={ref} src={props.img} loading="lazy" alt="" />
        </>
      ) : (
        <>
          <div className="imgCover" ref={ref}></div>
          <img src={props.img} loading="lazy" alt="" />
        </>
      )}
    </StyledAboutImg>
  );
});

export default AboutImg;
