import styled from 'styled-components';

export const AboutBox = styled.div`
  @media (min-width: 1025px) {
    .aboutTitle {
      width: 100%;
      height: 400px;
      background-color: yellow;
      font-family: 'Roboto-Medium';

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
      height: 100px;
      background-color: yellow;
      font-family: 'Roboto-Medium';

      p {
        margin: 0;
        font-size: 20px;
        line-height: 24.2px;
        color: #191919;
        padding-top: 50px;
        padding-left: 32px;
      }
    }
  }
  @media (max-width: 767px) {
    .aboutTitle {
      width: 100%;
      height: 100px;
      /* background-color: yellow; */
      font-family: 'Roboto-Medium';

      p {
        margin: 0;
        font-size: 20px;
        line-height: 24.2px;
        color: #191919;
        padding-top: 50px;
        padding-left: 32px;
      }
    }
    .aboutContents {
      width: 100%;
      /* background-color: blueviolet; */
      display: flex;
      flex-direction: column;
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
    & #textsBoxContainer {
      margin-top: 260px;
      margin-left: 106px;
      /* background-color: aqua; */

      & .textsTitle {
        font-size: 180px;
        letter-spacing: 0px;
        color: #48c2c5;
        margin: 0px;
        font-family: 'Roboto-Medium';
      }
      & .textsSubTitle {
        font-family: 'NanumSquareEB';
        font-size: 70px;
        color: #48c2c5;
        letter-spacing: -4px;
        margin: 0;
      }
      & .textsContents {
        font-family: 'NanumSquareB';
        color: #767676;
        font-size: 36px;
        margin: 0;
        margin-top: 74px;
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
  }
  @media (max-width: 767px) {
    order: 2;
    width: 100%;
    /* background-color: red; */
    img {
      display: none;
    }
    #textsBoxContainer {
      padding-left: 32px;
      & .textsTitle {
        color: #48c2c5;
        font-size: 36px;
        line-height: 43.57px;
        letter-spacing: 5%;
        margin: 0;
      }
      & .textsSubTitle {
        color: #48c2c5;
        font-size: 16px;
        line-height: 19.36px;
        margin: 0;
      }
      & .textsContents {
        margin: 0;
        font-size: 12px;
        line-height: 14.52px;
      }
    }
  }
`;

export const AboutDescriptionBox2 = styled.div`
  @media (min-width: 1025px) {
    position: relative;
    width: 50%;
    max-width: 960px;
    /* background-color: yellow; */

    & img {
      width: 247px;
      height: 286px;
      position: absolute;
      right: 0;
      /* margin-right: 186px; */
      margin-right: 213px;
      margin-top: -35px;
    }
    & #textsBoxContainer {
      margin-top: 206px;
      margin-left: 182px;
      /* background-color: aqua; */

      & .textsTitle {
        font-size: 180px;
        letter-spacing: 0px;
        color: #48c2c5;
        margin: 0px;
        font-family: 'Roboto-Medium';
      }
      & .textsSubTitle {
        font-family: 'NanumSquareEB';
        font-size: 70px;
        color: #48c2c5;
        letter-spacing: -4px;
        margin: 0;
      }
      & .textsContents {
        font-family: 'NanumSquareB';
        color: #767676;
        font-size: 36px;
        margin: 0;
        margin-top: 74px;
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
  }
  @media (max-width: 767px) {
    order: 2;
    width: 100%;
    /* background-color: red; */
    img {
      display: none;
    }
    #textsBoxContainer {
      padding-left: 32px;
      & .textsTitle {
        color: #48c2c5;
        font-size: 36px;
        line-height: 43.57px;
        letter-spacing: 5%;
        margin: 0;
      }
      & .textsSubTitle {
        color: #48c2c5;
        font-size: 16px;
        line-height: 19.36px;
        margin: 0;
      }
      & .textsContents {
        margin: 0;
        font-size: 12px;
        line-height: 14.52px;
      }
    }
  }
`;
