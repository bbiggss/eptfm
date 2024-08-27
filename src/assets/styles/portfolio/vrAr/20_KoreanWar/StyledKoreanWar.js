import styled from 'styled-components';

export const StyledKoreanWar = styled.div`
  @media (min-width: 1501px) {
    .introductionArea {
      margin-bottom: 540px;
    }
    .introudctionImg2 {
      top: 580px;
    }
  }
  @media (min-width: 1025px) and (max-width: 1500px) {
    .introductionArea {
      margin-bottom: 340px;
    }
    .introudctionImg2 {
      top: 480px;
    }
  }
  @media (min-width: 1025px) {
    .introudctionImg1,
    .introudctionImg2,
    .introudctionImg3 {
      position: absolute;
    }
    .introudctionImg1 {
      left: clamp(10px, 5vw, 100px);
      top: 160px;

      max-width: 440px;
      width: 22vw;
    }
    .introudctionImg2 {
      /* left: 320px; */
      left: clamp(100px, 16vw, 320px);

      max-width: 440px;
      width: 22vw;
    }
    .introudctionImg3 {
      /* right: 100px; */
      right: clamp(10px, 5vw, 100px);
      top: 220px;

      max-width: 452px;
      width: 23vw;
    }

    /* -- */
    .customTextWrapper p {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      margin-top: 460px;

      font-size: 28px;
      line-height: 42px;
      letter-spacing: -0.02em;
      white-space: nowrap;
    }
    .introductionArea {
      position: relative;
      padding-top: 200px;

      p {
        text-align: center;
      }
    }
  }
  @media (max-width: 1024px) {
    .gridWrapper {
      display: grid;
    }
    .customTextWrapper {
      order: 2;

      margin: 80px 0;
    }
    .customTextWrapper p {
      font-size: clamp(16px, 4vw, 24px);
      line-height: clamp(24px, 6vw, 32px);
      letter-spacing: -0.02em;
    }
    .introductionArea {
      display: flex;
      flex-direction: column;
      align-items: center;
      .introudctionImg1 {
        min-width: 167px;
        width: 44vw;
      }
      .introudctionImg2 {
        min-width: 145px;
        width: 38vw;
      }
      .introudctionImg3 {
        min-width: 175px;
        width: 46vw;
        margin-bottom: 30px;
      }

      p {
        text-align: center;
      }
    }
  }
`;
