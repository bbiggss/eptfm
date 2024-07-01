import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const HeaderBox = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;

  & #header {
    width: 80%;
    height: 100px;
    position: fixed;
    display: flex;
    align-items: center;
  }

  & #header img {
    width: 200px;
  }

  & #header ul {
    display: flex;
    list-style: none;
  }
  & #header ul li {
    margin-right: 10px;
  }
  & #header span {
    position: absolute;
    right: 0;
  }

  & #header ul a {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    /* 태블릿과 모바일 */
    width: 100%;
    background-color: lightblue;
  }

  @media (max-width: 480px) {
    /* 모바일 */
    width: 100%;
    height: 70px;
    background-color: lightgreen;
  }

  & #title {
    color: green;
  }
`;

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'GowunDodum-Regular';
    src: url('../fonts/Roboto-Bold.ttf') format('truetype');
  }

  body {
    font-family: 'GowunDodum-Regular', sans-serif;
  }
`;
