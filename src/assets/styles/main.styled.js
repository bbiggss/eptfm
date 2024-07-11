import styled from 'styled-components';

export const MainBox = styled.div`
  @media (min-width: 1025px) {
    width: 100%;
    display: flex;
    justify-content: center;
    & #mainContainer {
      width: 1920px;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
  }
  @media (max-width: 767px) {
  }
`;

// portfolio 컴포넌트
