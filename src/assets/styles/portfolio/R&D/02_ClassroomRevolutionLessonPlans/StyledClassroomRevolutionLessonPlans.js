import styled from 'styled-components';

export const StyledClassroomRevolutionLessonPlans = styled.div`
  @media (min-width: 1025px) and (max-width: 1300px) {
    .introductionArea2 p {
      font-size: 15px;
      line-height: 2vw;
    }
  }

  @media (min-width: 1025px) {
    .twoImgWrapper {
      margin-bottom: 160px;
      p {
        text-align: center;
      }
      &:last-child {
        margin-bottom: 200px;
      }
    }
    .heroWrapper {
      position: relative;
      div {
        margin-left: clamp(100px, 17vw, 330px);
      }
    }
    .customTextWrapper {
      text-align: center;
    }
    .introductionArea {
      position: relative;
      margin-top: 357px;
      margin-bottom: 100px;
      text-align: center;
      span {
        color: #292929;
        font-size: clamp(30px, 4.6vw, 90px);
        letter-spacing: -0.02em;
        font-family: 'NanumSquareEB';
      }
      .rightSpan {
        margin-left: 133px;
      }
      .robotImg1 {
        position: absolute;
        z-index: -1;
        max-width: 281px;
        width: 14vw;
        bottom: -62px;
        margin-left: clamp(100px, 20.7vw, 322px);
      }
    }
    .introductionArea2 {
      margin-top: 160px;
      margin-bottom: 160px;
      display: flex;
      position: relative;

      /* background-color: yellow; */

      .ai {
        margin-right: 100px;
        max-width: 468px;
        width: 24vw;
      }

      .book {
        position: absolute;
        left: clamp(100px, 20vw, 396px);
        bottom: -37px;
        max-width: 229px;
        width: 11vw;
      }
      .robot2 {
        position: absolute;
        right: -39px;
        top: -50px;
      }
    }
  }
  @media (max-width: 1024px) {
    .heroWrapper {
      position: relative;
      div {
        margin-left: clamp(30px, 8vw, 100px);
      }
    }
    .introductionArea {
      position: relative;
      margin-top: 165px;
      margin-bottom: 32px;
      text-align: center;
      span {
        color: #292929;
        font-size: 22px;
        letter-spacing: -0.02em;
        font-family: 'NanumSquareEB';
      }
      .rightSpan {
        margin-left: 60px;
      }
      .robotImg1 {
        position: absolute;
        z-index: -1;
        width: 112px;
        bottom: -33px;
        margin-left: 68px;
      }
    }
    .customTextWrapper {
      text-align: center;
      margin-bottom: 100px;
    }

    .introductionArea2 {
      margin: 0 var(--mobile-margin);
      margin-top: 100px;
      margin-bottom: 80px;

      position: relative;

      /* background-color: yellow; */

      .aiBook {
        position: relative;
        display: inline-block;
      }
      .ai {
        min-width: 202px;
        width: 53vw;
      }

      .book {
        position: absolute;
        right: -69px;
        bottom: -11px;

        min-width: 98px;
        width: 26vw;
      }
      .robot2 {
        position: absolute;
        right: -16px;
        top: -50px;

        min-width: 92px;
        width: 24vw;
      }

      p {
        margin-top: 24px;
        text-align: center;
      }
    }

    .maxWidth1260Wrapper {
      div:first-child {
        position: relative;
        margin: 0;
      }
    }
    .leftImg {
      min-width: 345px;
      width: 92vw;
      transform: translateX(4vw);
    }
    .rightImg {
      min-width: 345px;
      width: 92vw;
      transform: translateX(-4vw);
    }

    .twoImgWrapper {
      margin-bottom: 80px;
      p {
        text-align: center;
      }
      &:last-child {
        margin-bottom: 142px;
      }
    }
  }
`;
