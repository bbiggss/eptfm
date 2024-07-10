import React from 'react';
import { MainVideo } from '../../assets/styles/mainVideo.styled';

const Video = () => {
  return (
    <>
      <MainVideo>
        <video
          src={`${process.env.PUBLIC_URL}/assets/videos/01_INTRO 001_2.mp4`}
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
