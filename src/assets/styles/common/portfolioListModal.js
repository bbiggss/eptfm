import styled from 'styled-components';

export const StyledPortfolioListModal = styled.div`
  .modalBackground {
    position: fixed;
    z-index: 2;
    width: 100%;
    height: 100vh;
    background-color: #071018;
    opacity: 90%;
  }

  @media (min-width: 1557px) {
    .modalContainer {
      position: fixed;
      z-index: 3;
      height: auto;

      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    .xBtn {
      position: absolute;
      z-index: 10;
      right: 0;
      cursor: pointer;
    }
    .title {
      color: #ffffff;
      text-align: left;
      font-family: 'Roboto-Medium', sans-serif;
      font-size: 70px;
      font-weight: 500;
      text-transform: uppercase;
      position: relative;
      display: inline-block;

      margin-bottom: 48px;
    }
    .gridWrapper {
      display: grid;
      grid-template-columns: repeat(3, 460px);
      padding: 0;
      gap: 88px;
    }
  }

  @media (min-width: 1025px) and (max-width: 1556px) {
    .xBtn {
      position: absolute;
      z-index: 10;
      right: 0;
      cursor: pointer;
    }
    .title {
      color: #ffffff;
      text-align: left;
      font-family: 'Roboto-Medium', sans-serif;
      font-size: 70px;

      position: relative;
      display: inline-block;

      margin-bottom: 40px;
    }
    .modalContainer {
      height: 80%;
      max-height: 751px;
      overflow-y: scroll;

      position: fixed;
      z-index: 3;

      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    .gridWrapper {
      display: grid;
      grid-template-columns: repeat(2, 460px);
      padding: 0;
      gap: 65px;
    }
  }
  @media (max-width: 1024px) {
    .modalContainer {
      height: 100vh;
      width: 100%;
      overflow-y: scroll;

      position: fixed;
      z-index: 3;

      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      /* background-color: yellow; */

      display: grid;
      justify-content: center;
    }
    .title {
      color: #ffffff;
      text-align: left;
      font-family: 'Roboto-Medium', sans-serif;
      font-size: clamp(36px, 9.6vw, 100px);

      position: relative;
      display: inline-block;

      /* margin-top: 80px; */
      margin-top: 130px;
      margin-bottom: 80px;
    }
    .xBtn {
      /* position: absolute; */
      position: fixed;
      z-index: 10;
      top: 0;
      right: 0;
      cursor: pointer;
      /* margin-top: 20px; */
      margin-top: 70px;
      /* margin-right: 30px; */
      margin-right: 8vw;
      min-width: 20px;
      width: 5.3vw;
    }
    .gridWrapper {
      display: grid;
      justify-content: center;
      padding: 0;
      gap: 8px 20px;
    }
  }
`;
