import styled from 'styled-components';

export const AboutBox = styled.div`
  .textsTitle,
  .aboutTitle {
    font-family: 'Roboto-Medium';
  }
  .textsSubTitle {
    font-family: 'NanumSquareEB';
  }
  .textsContents {
    font-family: 'NanumSquareB';
  }

  @media (min-width: 1025px) {
    .aboutTitle {
      width: 100%;
      height: 400px;
      /* background-color: yellow; */

      p {
        margin: 0;
        font-size: 100px;
        letter-spacing: 0;
        color: #191919;
        padding-top: 200px;
        padding-left: 182px;
      }
    }
    .aboutContents {
      width: 100%;
      height: 1000px;
      display: flex;

      &:last-child {
        margin-top: 80px; // 마지막 요소에만 적용할 스타일
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    .aboutTitle {
      width: 100%;
      /* background-color: yellow; */

      p {
        margin: 0;
        color: #191919;
        padding-top: 64px;
        padding-left: 68px;
        padding-bottom: 24px;

        font-size: 32px;
        font-weight: 700;
        line-height: 38.73px;
        text-align: left;
      }
    }
    .aboutContents {
      width: 100%;
      /* background-color: blueviolet; */
      display: flex;
      flex-direction: column;
    }
    .textsTitle {
      font-size: 36px;
      font-weight: 700;
      line-height: 43.57px;
      letter-spacing: 0.05em;
      text-align: left;
      color: #48c2c5;
      margin: 0;
    }
  }
  @media (max-width: 767px) {
    .aboutTitle {
      width: 100%;
      /* background-color: yellow; */

      p {
        margin: 0;
        color: #191919;
        padding-top: 80px;
        padding-left: 30px;
        padding-bottom: 40px;

        font-weight: 700;
        font-size: 20px;
        line-height: 24.2px;
      }
    }
    .aboutContents {
      width: 100%;
      /* background-color: blueviolet; */
      display: flex;
      flex-direction: column;
      text-align: center;
      img {
        width: 315px;
      }
    }
  }
`;

export const AboutImgBox = styled.div`
  @media (min-width: 1025px) {
    width: 50%;
    & img {
      width: 100%;
      max-width: 960px;
      max-height: 1000px;
      /* width: 960px; */
      /* height: 1000px; */
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    order: 1;
    img {
      width: 100%;
    }
  }
  @media (max-width: 767px) {
    order: 1;
    img {
      width: 100%;
    }
  }
`;
export const AboutDescriptionBox1 = styled.div`
  @media (min-width: 1025px) {
    position: relative;
    width: 50%;
    max-width: 960px;
    /* background-color: skyblue; */

    & img {
      width: 247px;
      height: 286px;
      position: absolute;
      right: 0;
      /* margin-right: 186px; */
      margin-right: 213px;
      margin-top: -35px;
    }
    & .textsBoxContainer {
      margin-top: 260px;
      margin-left: 106px;
      /* background-color: aqua; */

      &.marginLeft182 {
        /* background-color: yellowgreen; */
        margin-left: 182px;
      }

      & .textsTitle {
        font-size: 180px;
        color: #48c2c5;
        margin: 0;
      }

      & .textsSubTitle {
        font-size: 70px;
        color: #48c2c5;
        letter-spacing: -4px;
        margin: 0;
      }
      & .textsContents {
        color: #767676;
        font-size: 36px;
        margin: 0;
        margin-top: 74px;
        line-height: 50px;
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    order: 2;
    width: 100%;
    /* background-color: red; */
    img {
      display: none;
    }
    .textsBoxContainer {
      padding-left: 68px;
      padding-top: 42px;
      padding-bottom: 42px;

      .textsTitle {
        color: #48c2c5;
        margin: 0;

        font-size: 48px;
        font-weight: 700;
        line-height: 58.09px;
        letter-spacing: 0.05em;
        text-align: left;
      }
      .textsSubTitle {
        color: #48c2c5;
        margin: 0;
        margin-bottom: 16px;

        font-size: 32px;
        font-weight: 700;
        line-height: 38.73px;
        text-align: left;
      }
      .textsContents {
        margin: 0;

        font-size: 24px;
        font-weight: 500;
        line-height: 29.05px;
        text-align: left;
      }
    }
  }
  @media (max-width: 767px) {
    order: 2;
    width: 100%;
    /* background-color: red; */
    img {
      display: none;
    }
    .textsBoxContainer {
      padding-left: 32px;
      padding-top: 24px;
      padding-bottom: 24px;

      .textsTitle {
        font-size: 36px;
        font-weight: 700;
        line-height: 43.57px;
        letter-spacing: 0.05em;
        text-align: left;
        color: #48c2c5;
        margin: 0;
      }
      .textsSubTitle {
        color: #48c2c5;
        margin: 0;

        font-size: 16px;
        font-weight: 700;
        line-height: 19.36px;
        text-align: left;

        margin-bottom: 8px;
      }
      .textsContents {
        margin: 0;
        font-size: 12px;
        font-weight: 500;
        line-height: 14.52px;
        text-align: left;
      }
    }
  }
`;
