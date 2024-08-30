import styled from 'styled-components';

export const StyledCyberSocializingOne = styled.div`
  .heroArea img {
    width: 100%;
  }
  @media (min-width: 1025px) {
    overflow-x: hidden;
    .cloud,
    .circle1,
    .circle2,
    .circle3,
    .heart,
    .yellowWordBalloon {
      position: absolute;
      z-index: -1;
    }

    .PortfolioIntroductionBox {
      .title {
        line-height: 56px;
      }
    }
    /* - */
    .introductionWrapper {
      text-align: center;
    }
    .cloud {
      left: clamp(100px, 14vw, 280px);
    }
    .circle1 {
      left: -330px;
      top: 229px;
    }
    .circle2 {
      right: -236px;
      top: -100px;
    }
    .yellowWordBalloon {
      left: -295px;
      /* left: 0; */
      top: 178px;
    }
    .circle3 {
      right: -330px;
      /* right: 0; */
      top: 411px;
    }
    .heart {
      left: -330px;
      top: -310px;
    }
  }
  @media (max-width: 1024px) {
    overflow-x: hidden;
    .introductionWrapper {
      text-align: center;
    }
    .cloud,
    .circle1,
    .circle2,
    .circle3,
    .heart,
    .yellowWordBalloon {
      position: absolute;
      z-index: -1;
    }

    .cloud {
      width: 224px;
      left: -84px;
      top: -29px;
    }
    .circle1 {
      min-width: 200px;
      width: 53vw;
      /* left: -55px; */
      left: -14vw;
      top: 213px;
    }
    .circle2 {
      min-width: 211px;
      width: 56vw;
      /* right: -55px; */
      right: -14vw;
      top: 167px;
    }
    .yellowWordBalloon {
      min-width: 169px;
      width: 45vw;
      /* left: -41px; */
      left: -10vw;
      top: 97px;
    }
    .circle3 {
      min-width: 241px;
      width: 64vw;
      /* right: -75px; */
      right: -20vw;
      top: 176px;
    }
    .heart {
      min-width: 119px;
      width: 31vw;
      top: -87px;
    }
  }
`;
