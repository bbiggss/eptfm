import styled from 'styled-components';
// import { headerBg } from '../images';

export const HeaderBox = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  /* background-size: cover; */

  font-family: 'Roboto-Medium';

  & #header {
    width: 80%;
    height: 100px;
    position: fixed;
    display: flex;
    align-items: center;
    z-index: 10;
  }

  & #header img {
    width: 120px;
  }

  & #header ul {
    display: flex;
    list-style: none;
  }
  & #header ul li {
    margin-right: 50px;
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
    /* background-color: lightblue; */

    & #header ul li {
      margin-right: 10px;
    }
  }

  @media (max-width: 480px) {
    /* 모바일 */
    width: 100%;
    height: 70px;
    /* background-color: lightgreen; */
  }

  & #title {
    color: green;
  }
`;

// export const HeaderBottomBox = styled.div`
//   height: calc(100vh - 100px);
// `;
