import React from 'react';
import styled from 'styled-components';

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  height: 0;
  overflow: hidden;
  max-width: 100%;
  background: #000;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const YouTubePlayer = ({ videoId }) => {
  return (
    <VideoWrapper>
      <iframe
        src={`https://www.youtube.com/watch?v=7jburTLhPns`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Embedded youtube"
      />
    </VideoWrapper>
  );
};

export default YouTubePlayer;
