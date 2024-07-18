import styled from 'styled-components';

export const EarthRotationChangingSeasonsBox = styled.div`
  max-width: 1920px;
  width: 100%;
  /* background-color: beige; */
  margin: auto;
  overflow: hidden; // 추후 삭제 예정

  .topImgTitle {
    max-width: 1920px;
    width: 100%;
    height: auto;
    /* background-color: yellow; */
    display: flex;
    justify-content: center;

    img {
      width: 100%;
    }

    .portfolioTitle {
      /* background-color: aqua; */
      text-align: center;
      margin-top: 380px;
      position: absolute;

      p:first-child {
        margin-bottom: 24px;

        color: #ffffff;
        font-size: 22px;
      }
      p:last-child {
        font-size: 64px;
        color: #ffffff;
      }
    }
  }

  .container {
    width: 1260px;
    /* background-color: yellow; */
    margin: auto;

    .mainImg {
      position: relative;
      width: 100%;
      img {
        position: absolute;
        left: 50%;
        top: -300px;
        transform: translateX(-50%);
        z-index: -1;
      }
    }

    .mainDescription {
      display: flex;
      /* background-color: beige; */
      margin-top: 171px;
      margin-bottom: 128px;

      .mainDescriptionTextBox {
        margin-left: 79px;
        /* background-color: aqua; */

        .title {
          color: #292929;
          font-size: 40px;
          line-height: auto;
          letter-spacing: -2%;
        }
        .subTexts {
          margin-top: 34px;
          color: #767676;
          font-size: 25px;
          line-height: 40px;
          letter-spacing: -2%;
        }
      }
    }

    .animationBox {
      display: flex;
      /* background-color: aqua; */
      margin-bottom: 66px;
      position: relative;

      img:first-child {
        position: absolute;
        left: -123px;
        top: -80px;
      }
      div {
        text-align: left;
        p:first-child {
          color: #292929;
          font-size: 40px;
          margin-top: 320px;
          margin-bottom: 59px;
        }
        p:last-child {
          color: #767676;
          font-size: 26px;
        }
      }
      img:last-child {
        margin-top: 152px;
      }
    }
  }
`;
