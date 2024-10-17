import React, { forwardRef } from 'react';
import useResponsiveMax1024 from '../hooks/useResponsiveMax1024';
import { StyledAboutImg } from '../../assets/styles/main/aboutImg.styled';

const AboutImg = forwardRef((props, ref) => {
  const useMobileTablet = useResponsiveMax1024();
  return (
    <StyledAboutImg $left={props.$left} $right={props.$right}>
      {/* <img ref={ref} src={data && data.img} alt="" /> */}
      {useMobileTablet ? (
        <>
          <img className="slideUp" ref={ref} src={props.img} loading="lazy" alt="" />
        </>
      ) : (
        <>
          {/* <div className="imgCover" ref={ref}></div> */}
          <img className="magnify" src={props.img} ref={ref} loading="lazy" alt="" />
        </>
      )}
    </StyledAboutImg>
  );
});

export default AboutImg;
