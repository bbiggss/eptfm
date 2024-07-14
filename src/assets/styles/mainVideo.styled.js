import styled from 'styled-components';

export const MainVideo = styled.div`
video{
  width: 100%;
}
  @media (min-width: 1025px) {
    video {
      height: 100vh;
      object-fit: cover;
    }
  }
`;
