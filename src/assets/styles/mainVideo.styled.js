import styled from 'styled-components';

export const MainVideo = styled.div`
  @media (min-width: 1025px) {
    video {
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    video {
      width: 100%;
    }
  }

  @media (max-width: 767px) {
    video {
      width: 100%;
    }
  }
`;
