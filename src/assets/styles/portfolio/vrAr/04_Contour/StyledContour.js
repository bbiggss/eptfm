import styled from 'styled-components';

export const StyledContour = styled.div`
  margin: auto;
  .introductionArea {
    text-align: center;
  }
  @media (min-width: 1025px) {
    max-width: 1920px;
    .introductionArea {
      /* margin: 0 50px; */
      width: 80%;
      margin: auto;
      margin-top: 200px;
      margin-bottom: 160px;
      img {
        width: 100%;
        max-width: 1200px;
      }
    }
    .backImg {
      position: absolute;
      width: 100%;
      top: -383px;
      z-index: -1;
    }
  }
  @media (max-width: 1024px) {
    .introductionArea {
      margin: 0 var(--mobile-margin);
      margin-top: 80px;
      margin-bottom: 30px;
      /* overflow: hidden; */
      img {
        width: 100%;
      }
    }
    .backImg {
      position: absolute;
      top: -187px;
      width: 100%;
      z-index: -1;
    }
  }
`;
