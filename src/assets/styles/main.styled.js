import styled from 'styled-components';
import { businessBg } from '../images';

export const MainBox = styled.div`
  width: 100%;
`;

export const AboutComponent = styled.div`
  & .aboutTitle {
    display: flex;
    justify-content: center;
  }
  h1 {
    width: 80%;
    font-size: 50px;
  }
  & .aboutContents {
    display: flex;
    margin-bottom: 50px;
  }
`;

export const AboutImgTag = styled.div`
  width: 50%;
  /* height: 100px; */

  & img {
    width: 100%;
  }
  & div p {
    /* width: 500px; */
  }
`;
export const AboutTextsTag = styled.div`
  width: 50%;
  /* background-color: beige; */
  display: flex;
  align-items: center;
  justify-content: center;

  & h1 {
    font-size: 120px;
    color: #48c2c5;
    margin: 0px;
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
export const BusinessTag = styled.div`
  background-image: url(${businessBg});
  background-size: cover;

  & #container {
    padding: 100px;
  }

  & h1 {
    text-align: center;
    color: white;
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

  & li img {
    height: 399px;
  }

  & li p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 30px;
    margin: 0;
    padding: 0;
  }
`;
