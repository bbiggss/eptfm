import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import useMobile from '../../../hooks/useMobile';

const StyledHeroImg = styled.img`
  width: 100%;
  /* opacity: ${(props) => (props.$isLoaded ? 1 : 0)};
  transition: opacity 1s ease-in-out; */

  @media (min-width: 768px) {
    aspect-ratio: ${(props) => props.$pcHeight};
    /* margin-bottom: 160px; */
  }
  @media (max-width: 767px) {
    aspect-ratio: ${(props) => props.$mobileHeight};
  }
`;

const HeroImg = (data) => {
  const imgRef = useRef(null);
  const isMobile = useMobile();

  // useEffect(() => {
  //   const img = imgRef.current;
  //   if (img) {
  //     const handleLoad = () => {
  //       data.setIsLoaded(true);
  //     };
  //     img.addEventListener('load', handleLoad);

  //     return () => {
  //       img.removeEventListener('load', handleLoad);
  //     };
  //   }
  // }, [data]);

  return (
    <StyledHeroImg
      style={data.style}
      $pcHeight={data.pcHeight}
      $tabletHeight={data.tabletHeight}
      $mobileHeight={data.mobileHeight}
      $isLoaded={data.isLoaded}
      ref={imgRef}
      src={isMobile ? data.mobileSrc : data.src}
      alt=""
    />
  );
};

export default HeroImg;
