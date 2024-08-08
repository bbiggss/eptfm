import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const StyledHeroVideo = styled.video`
  height: 1080px;
  transition: opacity 1s ease-in-out;
  opacity: ${(props) => (props.$isLoaded ? 1 : 0)};
`;

const HeroVideo = (data) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoadedData = () => {
        data.setIsLoaded(true);
      };
      video.addEventListener('loadeddata', handleLoadedData);

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, [data]);
  return (
    <StyledHeroVideo
      style={data.style}
      $isLoaded={data.isLoaded}
      ref={videoRef}
      src={data.src}
      autoPlay
      muted
      loop
      playsInline
    />
  );
};

export default HeroVideo;
