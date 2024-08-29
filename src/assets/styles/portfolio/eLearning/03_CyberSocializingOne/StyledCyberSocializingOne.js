import styled from 'styled-components';

export const StyledCyberSocializingOne = styled.div`
  .heroArea img {
    width: 100%;
  }
  @media (min-width: 1025px) {
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
      top: 411px;
    }
    .heart {
      left: -330px;
      top: -310px;
    }
  }
  @media (max-width: 1024px) {
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
      width: 200px;
      left: -55px;
      top: 213px;
    }
    .circle2 {
      width: 211px;
      right: 0;
      /* transform: translateX(100px); */
      top: 167px;
    }
    .yellowWordBalloon {
      width: 169px;
      left: -41px;
      top: 97px;
    }
    .circle3 {
      width: 241px;
      right: 0;
      top: 176px;
    }
    .heart {
      width: 119px;
      top: -87px;
    }
  }
`;
