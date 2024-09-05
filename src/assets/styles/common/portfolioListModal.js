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
      .section {
        width: 100%;
        max-width: 460px;
        a {
          text-decoration: none;
        }
        /* .item {
          position: relative;
          color: #ffffff;
          text-align: left;
          font-family: 'NanumSquareB';
          font-size: 18px;
          letter-spacing: -0.02em;
          height: 25px;
          list-style: none;

          margin-bottom: 10px;

          .move {
            display: none;
            position: absolute;
            right: 0;
            top: -6px;
          }
        }
        .item:hover {
          background: rgba(255, 255, 255, 0);
          border-style: solid;
          border-color: #48c2c5;
          color: #48c2c5;
          border-width: 0px 0px 1px 0px;
          box-sizing: border-box;
          .move {
            display: inline;
          }
        } */
      }
      .section:nth-child(2) {
        padding-top: 68px;
      }
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
      font-weight: 500;
      text-transform: uppercase;
      position: relative;
      display: inline-block;

      margin-bottom: 48px;
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
      gap: 8px 20px;
      .section {
        width: 100%;
        /* max-width: 300px; */
        a {
          text-decoration: none;
        }
      }
      .section:nth-child(2) {
        padding-top: 68px;
      }
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

      max-width: 315px;
      width: 100%;
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
      margin-right: 30px;
      min-width: 20px;
      width: 5.3vw;
    }
    .gridWrapper {
      display: grid;
      justify-content: center;
      /* grid-template-columns: repeat(1, 315px); */
      padding: 0;
      gap: 8px 20px;
      .section {
        width: 100%;
        /* max-width: 315px; */
        a {
          text-decoration: none;
        }
      }
      .section:nth-child(2) {
        padding-top: 0;
      }

      .section:last-child {
        margin-bottom: 160px;
      }
    }
  }
`;
