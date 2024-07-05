import styled from 'styled-components';
import { businessBg, portfolioBg, portfolioBg2 } from '../images';

export const MainBox = styled.div`
  width: 100%;
`;

export const AboutBox = styled.div`
  & .aboutTitle {
    width: 100%;
    height: 400px;
    font-family: 'Roboto-Medium';

    & p {
      margin: 0;
      font-size: 100px;
      letter-spacing: 0;
      color: #191919;
      padding-top: 200px;
      padding-left: 182px;
    }
  }
  & .aboutContents {
    width: 100%;
    height: 1000px;
    display: flex;
    margin-bottom: 50px;

    &:last-child {
      margin-bottom: 0px; // 마지막 요소에만 적용할 스타일
    }
  }
`;

export const AboutImgBox = styled.div`
  width: 50%;
  & img {
    width: 100%;
    /* width: 960px; */
    /* height: 1000px; */
  }
`;
export const AboutTextsBox = styled.div`
  width: 50%;
  /* background-color: beige; */

  & img {
    width: 247px;
    height: 286px;
    position: absolute;
    right: 0;
    margin-right: 186px;
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

  /* & p {
    width: 420px;
    color: #767676;
    font-size: 20px;
    font-weight: bold;
  } */
`;

// Business 컴포넌트
export const BusinessBox = styled.div`
  background-image: url(${businessBg});
  background-size: cover;
  font-family: 'Roboto-Medium';

  & #container {
    padding: 100px 0;
  }

  & h1 {
    text-align: center;
    color: white;
    font-size: 70px;
    margin: 0;
    margin-bottom: 50px;
  }

  & #contentsWrap {
    display: flex;
    justify-content: center;
  }
  & #contentsWrap ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  & li {
    position: relative;
    margin: 0;
    padding: 0;
  }
  & li:nth-child(2) {
    margin: 0 20px;
  }

  & li img {
    height: 399px;
  }

  & li .noHoverBox p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 30px;
    margin: 0;
    padding: 0;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  & .noHoverBox {
    display: block;
  }

  & li:hover .noHoverBox {
    display: none;
  }

  & li:hover .hoverBox {
    display: block;
  }

  & .hoverBox {
    display: none;

    & div {
      position: absolute;
      width: 300px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    & p:first-child {
      color: white;
      font-size: 30px;
      text-align: center;
      font-family: 'Roboto-Medium';
    }

    & p:last-child {
      color: white;
      font-size: 15px;
      text-align: center;
      font-family: 'NanumSquareB';
    }
  }
`;

// portfolio 컴포넌트
export const PortfolioBox = styled.div`
  display: flex;
  justify-content: center;
  background-image: url(${portfolioBg});
  background-size: 100% 100%;

  /* 영어폰트 */
  & #portfolioTexts h1,
  .pfFieldTag,
  .englishFont {
    font-family: 'Roboto-Medium';
  }
  /* 한글폰트 */
  & h2,
  #portfolioText2,
  #portfolioText1 {
    font-family: 'NanumSquareB';
  }

  & #container {
    padding: 100px 0;
    display: flex;
    width: 100%;
  }
  & #portfolioTexts {
    width: 40%;
    padding-left: 10%;
  }
  & #portfolioTexts h1 {
    font-size: 100px;
    margin-bottom: 0;
  }
  & #portfolioText1 {
    font-size: 30px;
  }
  & #portfolioText2 {
    color: #858585;
    font-size: 20px;
    margin-bottom: 50px;
  }

  & .pfFieldTag {
    margin-bottom: 10px;
    display: block;
    width: 200px;
    border: 1px solid #858585;
    border-radius: 25px;
    text-align: center;
    padding: 15px 0;
    color: #858585;
  }
  & a {
    display: block;
    width: 200px;
    text-decoration: none;
  }

  & #portfolioImgs {
    width: 60%;
    display: flex;
    background-image: url(${portfolioBg2});
    background-size: 56%;
    background-repeat: no-repeat;
  }
  & .pfImgLeftBox {
    width: 50%;
  }
  & .pfImgLeftBox img {
    position: relative;
    top: 5%;
    left: 9%;
    width: 500px;
  }
  & .pfImgRightBox {
    width: 50%;
    overflow: hidden;
    & img:first-child {
      height: 462px;
    }
    & img:last-child {
      width: 450px;
    }
  }
  #abc {
    /* background-color: yellow; */
  }
`;
