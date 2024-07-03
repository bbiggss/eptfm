import styled from 'styled-components';
import { businessBg, portfolioBg, portfolioBg2 } from '../images';

export const MainBox = styled.div`
  width: 100%;
`;

export const AboutBox = styled.div`
  margin: 100px 0;
  & .aboutTitle {
    display: flex;
    justify-content: center;
    font-family: 'Roboto-Medium';
    /* margin-top: 100px; */
  }
  h1 {
    width: 80%;
    font-size: 50px;
  }
  & .aboutContents {
    display: flex;
    margin-bottom: 50px;

    &:last-child {
      margin-bottom: 0px; // 마지막 요소에만 적용할 스타일
    }
  }
`;

export const AboutImgBox = styled.div`
  width: 50%;
  /* height: 100px; */

  & img {
    width: 100%;
  }
  & div p {
    /* width: 500px; */
  }
`;
export const AboutTextsBox = styled.div`
  width: 50%;
  /* background-color: beige; */
  display: flex;
  align-items: center;
  justify-content: center;

  & h1 {
    font-size: 120px;
    color: #48c2c5;
    margin: 0px;
    font-family: 'Roboto-Medium';
  }

  & h2,
  p {
    font-family: 'NanumSquareB';
  }

  & h2 {
    font-size: 40px;
    color: #48c2c5;
    margin-top: 0px;
  }

  & img {
    width: 200px;
    position: absolute;
    margin-top: -599px;
    margin-left: 225px;
  }

  & div {
    /* width: 80%; */
    width: 478px;
  }
  & p {
    width: 420px;
    color: #767676;
    font-size: 20px;
    font-weight: bold;
  }
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

  & #contentsWrap #businessHoverImg {
    position: absolute;
    display: none;
  }

  & #contentsWrap ul li:hover {
    /* background-color: yellow; */
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
    }

    & p:last-child {
      color: white;
      font-size: 15px;
      text-align: center;
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
    background-size: 50%;
    background-repeat: no-repeat;
  }
  & .pfImgLeftBox {
    width: 50%;
    /* background-color: yellow; */
  }
  & .pfImgLeftBox img {
    width: 500px;
  }
  & .pfImgRightBox {
    width: 50%;
    overflow: hidden;
  }
  #abc {
    /* background-color: yellow; */
  }
`;
