import React from 'react';

const Video = () => {
  return (
    <>
      <div id="videoBox">
        <video
          src={`${process.env.PUBLIC_URL}/assets/videos/01_INTRO 001_2.mp4`}
          autoPlay
          muted
          loop
          playsInline
          className="mainVideo"
        ></video>
      </div>
    </>
  );
};

export default Video;
