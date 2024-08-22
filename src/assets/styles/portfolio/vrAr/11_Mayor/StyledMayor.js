import styled from 'styled-components';

export const StyledMayor = styled.div`
  @media (min-width: 1025px) {
    .AC9EFF {
      background-color: rgba(172, 158, 255, 0.2);
      margin-bottom: 160px;
    }
    /* .mainContainer {
      margin-top: 80px;
      margin-bottom: 160px;

      display: flex;
      justify-content: space-between;
      height: 560px;

      .mainTexts {
        display: flex;
        align-items: center;
      }
    } */

    .introduction {
      position: relative;
      width: 100%;
      height: 350px;
      background-color: #2c427a;
      margin-bottom: 160px;
      img {
        position: absolute;
        bottom: 0;
        left: 294px;
      }

      .subTexts p {
        padding-top: 99px;
        padding-left: 892px;
        color: #ffffff;
        font-size: 24px;
        line-height: 38px;
        letter-spacing: -2%;
      }
    }

    .subTexts {
      color: #292929;
    }

    .fourElement {
      display: grid;
      justify-content: center;
      grid-template-columns: repeat(4, auto);
      gap: 122px;
      padding: 0;
      margin-bottom: 160px;

      li {
        list-style: none;
        text-align: center;
        img {
          margin-bottom: 24px;
        }
      }
      p {
        font-family: 'NanumSquareB';
        color: #767676;
        letter-spacing: -0.02em;
        line-height: 38px;
        font-size: 24px;
      }
    }
    .ellipse1 {
      position: absolute;
      right: 0;
    }

    /* ------------- */

    .heroAreaWrapper {
      display: flex;
      justify-content: center;
      .introductionWrapper {
        /* background-color: yellow; */
        margin-right: 91px;
      }
      .heroImg {
        img {
          max-width: 442px;
          width: 442px;
        }
      }
    }
  }
  @media (max-width: 1024px) {
    .heroAreaWrapper {
      display: grid;
      .introductionWrapper {
        order: 2;
        text-align: center;
      }
      .heroImg {
        order: 1;
        text-align: center;
        img {
          min-width: 204px;
          width: 50vw;
        }
      }
    }
  }
`;
