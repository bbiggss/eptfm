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
          src={`https://www.dropbox.com/scl/fi/higgz0izzkd3ah8swuyh1/Showreel_20240726.mp4?rlkey=iak6a90olmyeu1qfyzi8xpbbc&st=0r2blexu&raw=1`}
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
