import styled from 'styled-components';

export const StyledEastAsia = styled.div`
  max-width: 1920px;
  margin: auto;
  p {
    color: #4f4f4f;
  }
  overflow-x: hidden;

  @media (min-width: 1025px) {
    .heroArea {
      position: relative;
      img {
        width: 100%;
      }
      position: relative;
    }

    .figure_01,
    .figure_02,
    .figure_03,
    .figure_04,
    .figure_05 {
      position: absolute;
      z-index: -1;
    }

    .introductionWrapper {
      text-align: center;
      margin: 200px 0;
    }
    .figure_01 {
      left: 0;
      /* top: -520px; */
    }
    .figure_02 {
      right: 0;
      top: 347px;
    }
    .figure_03 {
      left: 0;
      bottom: -70px;
    }
    .figure_04 {
      right: 0;
      bottom: -125px;
    }
    .figure_05 {
      bottom: 42px;
      left: -195px;
    }
    .imgTwoWrapper {
      margin-bottom: 160px;
    }
  }
  @media (max-width: 1024px) {
    .introductionWrapper {
      text-align: center;
      margin-top: 90px;
      margin-bottom: 80px;
    }
    .figure_01,
    .figure_02,
    .figure_03,
    .figure_04,
    .figure_05 {
      position: absolute;
      z-index: -1;
    }
    .figure_01 {
      min-width: 150px;
      width: 40vw;

      left: 0;
      top: -17px;
    }
    .figure_02 {
      min-width: 213px;
      width: 56vw;

      right: -59px;
      top: 128px;
    }
    .figure_03 {
      min-width: 197px;
      width: 52vw;
      bottom: -93px;
      left: -19px;
    }
    .figure_04 {
      min-width: 173px;
      width: 46vw;
      right: 0;
      bottom: -55px;
    }
    .figure_05 {
      min-width: 390px;
      width: 104vw;
      left: -111px;
      bottom: -145px;
    }

    .imgTwoWrapper {
      margin-bottom: 80px;
    }
  }
`;
