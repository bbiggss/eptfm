import styled from 'styled-components';

export const StyledMapExpert = styled.div`
  @media (min-width: 1025px) {
    .heroWrapper {
      position: relative;
      .heroTexts {
        position: absolute;
        margin-left: clamp(100px, 17vw, 330px);
        margin-top: 118px;

        font-size: clamp(20px, 2.08vw, 40px);
        line-height: clamp(32px, 2.92vw, 56px);
        letter-spacing: -0.02em;
        color: #292929;
        font-family: 'NanumSquareEB';
      }
    }

    .gridWrapper {
      text-align: center;
      .customTextsWrapper {
        padding-top: 160px;
        margin-bottom: 100px;
      }
      .introductionImg {
        /* margin-bottom: 160px; */
        max-width: 1098px;
        width: 90%;
        aspect-ratio: 315 / 172;
      }
    }
    .customMaxWidthWrapper img {
      max-width: 1150px;
    }
  }
  @media (max-width: 1024px) {
    .heroWrapper {
      display: flex;
      justify-content: center;
    }
    .heroTexts {
      position: absolute;
      text-align: center;
      /* margin-top: 48px; */
      margin-top: clamp(48px, 12.8vw, 96px);

      color: #292929;
      font-family: 'NanumSquareEB';
      /* font-size: clamp(20px, 5.8vw, 89px);
      line-height: clamp(28px, 5vw, 50px); */

      font-size: clamp(20px, 5.2vw, 54.6px);
      line-height: clamp(28px, 7.3vw, 76.5px);
    }
    .gridWrapper {
      display: grid;
      margin: 0 var(--mobile-margin);
      .customTextsWrapper {
        order: 2;
        text-align: center;
      }
      .introductionImg {
        order: 1;

        margin-top: 80px;
        margin-bottom: 30px;

        width: 100%;
        aspect-ratio: 315 / 172;
      }
    }
  }
`;
