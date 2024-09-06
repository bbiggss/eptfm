import styled from 'styled-components';

export const StyledReservoirDam = styled.div`
  @media (min-width: 1025px) and (max-width: 1550px) {
    .introductionWrapper {
      margin-top: clamp(10px, 2.8vw, 112px);
    }
  }
  @media (min-width: 1551px) {
    .introductionWrapper {
      margin-top: 112px;
    }
  }
  @media (min-width: 1025px) {
    max-width: 1920px;
    margin: auto;

    .gridWrapper {
      display: grid;
      .introductionWrapper {
        order: 1;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        /* margin-top: clamp(10px, 2.8vw, 112px); */
        text-align: center;
      }
      img {
        order: 2;
      }
    }
    .backgroundImg {
      position: absolute;
      margin-top: 160px;

      max-width: 1384px;
      width: 72vw;
    }
    .background90ebff {
      background-color: rgba(144, 235, 255, 0.3);

      img {
        max-width: 1021px;
      }

      p {
        color: #040404;
      }
    }
  }
  @media (max-width: 1024px) {
    .heroArea {
      display: grid;
      position: relative;
    }
    .introductionWrapper {
      /* order: 2; */
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      margin-top: 80px;
    }

    .backgroundImg {
      width: 100%;
      margin-top: 20px;
      margin-bottom: 11px;
    }

    .background90ebff {
      background-color: rgba(144, 235, 255, 0.3);
      p {
        color: #040404;
      }
    }
  }
`;
