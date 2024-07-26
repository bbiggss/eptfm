import React from 'react';
import styled from 'styled-components';

const MainVideo = styled.div`
  video {
    width: 100%;
  }
  @media (min-width: 1025px) {
    video {
      height: 100vh;
      object-fit: cover;
    }
  }
`;

const Video = () => {
  return (
    <>
      <MainVideo>
        <video
          src={`${process.env.PUBLIC_URL}/assets/videos/IntroClip.mp4`}
          autoPlay
          muted
          loop
          playsInline
          className="mainVideo"
        ></video>
      </MainVideo>
    </>
  );
};

export default Video;
