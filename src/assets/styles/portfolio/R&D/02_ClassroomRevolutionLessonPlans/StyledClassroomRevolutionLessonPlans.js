import styled from 'styled-components';

export const StyledClassroomRevolutionLessonPlans = styled.div`
  @media (min-width: 1025px) {
    .twoImgWrapper {
      margin-bottom: 160px;
    }
    .introductionArea2 {
      margin-top: 160px;
      margin-bottom: 160px;
      display: flex;
      position: relative;

      .ai {
        margin-right: 100px;
      }

      .book {
        position: absolute;
        left: 396px;
        top: 228px;
      }
      .robot2 {
        position: absolute;
        right: -39px;
        top: -50px;
      }
    }

    .twoImgWrapper img {
      border: 1px solid #ededed;
      border-radius: 30px;
    }
    /* -- */
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
      span {
        color: #292929;
        font-size: 90px;
        letter-spacing: -0.02em;
        font-family: 'NanumSquareEB';
        position: absolute;
        margin-top: 197px;
      }
      .leftSpan {
        margin-left: 378px;
        /* background-color: yellow; */
      }
      .rightSpan {
        right: 0;
        margin-right: 370px;
      }
      .robotImg1 {
        position: absolute;
        margin-left: 700px;
      }
    }

    .introductionArea {
      position: relative;
      margin-top: 160px;
      margin-bottom: 35px;
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
  }
`;
